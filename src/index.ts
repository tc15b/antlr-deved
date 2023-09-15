import { createServer, } from 'node:http';
import QS from "node:querystring";
import { CommonTokenStream, CharStream, } from 'antlr4';
import ChatBotLexer from '../ChatBot/ts/ChatBotLexer';
import ChatBotParser, { FileContext } from '../ChatBot/ts/ChatBotParser';
import ChatVisitor from '../Chatbot/chatbot-visitor';

const chatVisitor = new ChatVisitor();

const parsedCommands: { input: string, output: string, }[] = [];

function parseInput(input: string): FileContext | null {
	const chars = new CharStream(input, true);
	const lexer = new ChatBotLexer(chars);
	const tokens = new CommonTokenStream(lexer);
	const parser = new ChatBotParser(tokens);

	const errors: string[] = [];

	parser.addErrorListener({
		syntaxError(_, _symbol, line, col, msg, _e) {
			errors.push(`line ${line}:${col} ${msg}`);
		}
	});

	parser.buildParseTrees = true;
	const tree = parser.file();

	return errors.length ? null : tree;
}

function renderOutputHtml(input: QS.ParsedUrlQuery): string {
	const res : string[] = [];
	let chatInput = ''
	if (typeof input.chat === 'string') {
		chatInput = input.chat;
		const tree = parseInput(input.chat);
		if (tree) {
			const responseContent = chatVisitor.visitFile(tree);
			if (!responseContent) {
				parsedCommands.push({
					input: input.chat,
					output: "Processing the content returned no data, but should have done at this point",
				});
			} else {
				parsedCommands.push({
					input: input.chat,
					output: responseContent
				});
			}
		} else {
			parsedCommands.push({
				input: input.chat,
				output: input.chat,
			});
		}
	}

	res.push('<!DOCTYPE html><html><head><meta charset="UTF-8"/></head><body>');
	res.push("<form method='post' action='/chat'>");
	res.push(`<input type='text' name='chat' value='${chatInput}' />`);
	res.push("<input type='submit' value='Speak' />");
	res.push("</form>");
	res.push("<ol>");
	parsedCommands.forEach((element) => {
		res.push(`<li>${element.input}: ${element.output}`);
	});
	res.push("</ol>");
	res.push('</body></html>');

	return res.join("");
}

createServer((req, res) => {
	let data = '';
	switch (req.url) {
		case "/chat":
			req.setEncoding("utf-8");
			req.on("data", (d) => {
				data += d;
				if (data.length > 1e6) {
					req.socket.destroy();
				}
			}).on("end", () => {
				res.writeHead(200, {
					'Content-Type': 'text/html',
				});
				const input = QS.parse(data);
				res.end(renderOutputHtml(input));
				return;
			});
			break;
		case "/":
			res.writeHead(200, {
				'Content-Type': 'text/html',
			});

			res.end(renderOutputHtml({}));
			return;
		default:
			res.writeHead(404);
			res.end("Not found");
	}
}).listen(1337, () => {
	console.log(`Listening to port 1337`);
});
