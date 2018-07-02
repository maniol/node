var fs = require('fs');

fs.readdir('.', function(err, files) {
	var filesListString = files.join('\n');
	fs.writeFile('./dirList.txt', filesListString, function(err) {
		if (err) throw err; // dlaczego nie ma {}
		console.log('Zapisano!');
	});
});