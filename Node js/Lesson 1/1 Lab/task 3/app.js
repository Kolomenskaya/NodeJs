const http = require('http'); 
const fs = require('fs'); 

http.createServer(response).listen(8080);

function response(req, res){
	fs.readFile('header.html', (err, data1) => {
		if (err) {
			console.log('Error');
			res.statusCode = 404;
			res.end();
		} else {
			fs.readFile('body.html', (err, data2) => {
				if (err) {
					console.log('Error');
					res.statusCode = 404;
					res.end();
				} else {
					fs.readFile('footer.html', (err, data3) => {
						if (err) {
							console.log('Error');
							res.statusCode = 404;
							res.end();
						} else {
							res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
							res.write(data1 + data2 + data3);
							res.end();
						}
					});
				}
			});
		}
	});
}