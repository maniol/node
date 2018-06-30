var fs = require('fs');

fs.readdir('.', function(err, files) {
	var s = files.join('\n');
	fs.writeFile('./dirList.txt', s, function(err) {
		if (err) throw err; // dlaczego nie ma {}
		console.log('Zapisano!');
	});
});