var fs = require('fs');

fs.readdir('.', function(err, files) {
	var FilesListString = files.join('\n');
	fs.writeFile('./dirList.txt', FilesListString, function(err) {
		if (err) throw err; // dlaczego nie ma {}
		console.log('Zapisano!');
	});
});