import { CharStream, CommonTokenStream, } from 'antlr4';
import { createServer, } from 'node:http';
import QS from "node:querystring";
import SrtListener, { SrtListenResult, } from '../Srt/srt-listener';
import SrtLexer from '../Srt/ts/SrtLexer';
import SrtParser, { FileContext, TimestampContext, } from '../Srt/ts/SrtParser';
import { numberToTimepoint, timepointToNumber, } from './timepoint';

const listener = new SrtListener();

function parseInput(input: string): FileContext {
	const chars = new CharStream(input, true);
	const lexer = new SrtLexer(chars);
	const tokens = new CommonTokenStream(lexer);
	const parser = new SrtParser(tokens);

	const errors: string[] = [];

	parser.addErrorListener({
		syntaxError(_, _symbol, line, col, msg, _e) {
			errors.push(`line ${line}:${col} ${msg}`);
		}
	});
	(parser as any).addParseListener(listener);
	parser.buildParseTrees = true;
	const tree = parser.file();

	if (errors.length) {
		throw errors.join("\n");
	}

	return tree;
}

function processLines(lines: SrtListenResult[]) {
	return lines.flatMap((line, index) => {
		return [
			(index + 1).toString(),
			`${numberToTimepoint(line.from)} --> ${numberToTimepoint(line.to)}`,
			...line.contents,
			'', //empty line
		];
	});
}

function parseTimestamp(input: string): TimestampContext {
	const chars = new CharStream(input, true);
	const lexer = new SrtLexer(chars);
	const tokens = new CommonTokenStream(lexer);
	const parser = new SrtParser(tokens);
	parser.buildParseTrees = true;
	const tree = parser.timestamp();

	return tree;
}

function buildOutputHtml(input: QS.ParsedUrlQuery): string {
	try {

		if (typeof input.input !== 'string') {
			return 'Invalid input';
		}

		const srcInput = input.input;
		const src = parseInput(srcInput);
		if (src.exception) {
			return src.exception.message;
		}

		if (typeof input.endTime !== 'string') {
			return 'Invalid end time';
		}

		const endtimeInput = input.endTime;
		const endtime = parseTimestamp(endtimeInput);
		if (endtime.exception) {
			return endtime.exception.message;
		}

		const lines = listener.foundLines;
		if (!lines.length) {
			return '';
		}

		const actualLastTimestamp = timepointToNumber([endtime._hour.getText(), endtime._minute.text, endtime._seconds.text, endtime._miliseconds?.getText()]);
		const firstStatement = lines[0];
		const lastStatement = lines[lines.length - 1];
		const scale = (actualLastTimestamp - firstStatement.from) / (lastStatement.from - firstStatement.from);

		const scaledLines = lines.map((line) => {
			const from = ((line.from - firstStatement.from) * scale) + firstStatement.from;
			const to = from + (line.to - line.from);
			return {
				id: line.id,
				from,
				to,
				contents: line.contents,
			};
		});

		const processedLines = processLines(scaledLines);
		return processedLines.join("\r\n");
	} catch (error) {
		if (typeof error === 'string') {
			return error;
		}
		if (error instanceof Error) {
			return error.message;
		}

		return `${error}`;
	}
}

createServer((req, res) => {
	let data = '';
	req.setEncoding("utf-8");
	req.on("data", (d) => {
		data += d;
		if (data.length > 1e6) {
			req.socket.destroy();
		}
	}).on("end", () => {
		const input = QS.parse(data);
		const ouput = buildOutputHtml(input);
		res.writeHead(200, {
			'Content-Type': 'text/html',
		});

		res.write('<html><head><meta charset="UTF-8"/>');
		res.write("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' />");
		res.write('</head><body style="height: 100vh;">');
		res.write(`
	<form method='post' class='m-0 p-2 h-100'>
		<div class='row h-100'>
			<div class='col-5'>
				<textarea name='input' class="w-100 h-100">${input.input ?? ''}</textarea>
			</div>
			<div class='col-2'>
				<div class="position-sticky top-50">
					<div class="input-group">
						<input type="text" class="form-control" value="${input.endTime ?? ''}" name="endTime" placeholder='##:##:##,###' />
						<button class='btn btn-outline-primary'>Update</button>
					</div>
				</div>
			</div>
			<div class='col-5'><pre class="h-100 m-0">${ouput}</pre></div>
		</div>
	</form>`);
		res.end('</body>');
		return;
	});

}).listen(1337, () => {
	console.log(`Listening to port 1337`);
});
