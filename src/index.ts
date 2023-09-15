import { createServer, } from 'node:http';
import QS from "node:querystring";

function buildOutputHtml(input: QS.ParsedUrlQuery): string {
	return typeof input.input === 'string' ? input.input : '';		
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
