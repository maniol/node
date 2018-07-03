var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	if (request.method === 'GET' && request.url ==='/') {
		fs.readFile('index.html', function(err, html) {
			response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
			response.write(html);
			response.end();
		});
	} else {
			fs.readFile('404.jpg', 'binary', function(error, file) {
				response.writeHead(404, {'Content-Type': 'image/jpg'});
				response.write(file, 'binary');
				response.end();
			});
	}
});
server.listen(8080);