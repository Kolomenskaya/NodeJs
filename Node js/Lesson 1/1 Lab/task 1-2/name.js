const http = require('http'); 

http.createServer((request, response) => { 
	console.log("HTTP works!");
	response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
	response.write('<h1>Страница не найдена</h1>');
	response.end();
}).listen(8080);

