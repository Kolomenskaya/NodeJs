const fs = require('fs');
const settings = require('./config.json');

process.on('message', (obj) => {
	let logData = 'Date ${(new Date()).toString()}' + 'Request method ${obj.method}' + 'Request params ${obj.params}\n';
	fs.writeFile(settings.logFile, logData, {
		encoding:'utf8',
		flag:'a'
	}, (err)=>{
		if(err){
			console.log('Child: Can`t save log');
		} else {
			console.log('Child: Log save');
		}
	});
});