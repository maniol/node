var http = require('http');
var fs = require('fs');

var HtmlFile = readFile(); 
var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	readFile();
	if (request.method === 'GET' && request.url ==='/') {
			response.write(HtmlFile);
			response.end();
	} else {
					response.statusCode = 404;
					response.write('<img src=\'404.jpg\' alt=\'404\'>');
					response.end();
	}
});
server.listen(8080);

function readFile(){
	fs.readFile('index.html', function(err, data){
		return data.toString();
	});
}