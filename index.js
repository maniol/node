var os = require('os');
var OSinfo = require('./modules/OSinfo');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if(input != null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case 'node version':
				process.stdout.write(process.versions.node + '\n');
				break;
			case 'system language':
				process.stdout.write(process.env.LC_CTYPE + '\n');
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});