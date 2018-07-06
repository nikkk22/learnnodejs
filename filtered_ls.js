 var path = require('path');


 var fs = require('fs');
 var file = process.argv[2];
 var extn = process.argv[3];
 extn = "."+extn;

 fs.readdir(file, function (err, contents) {
   if (err) {
     return console.log(err);
   }
	for ( var i = 0; i < contents.length; i++)
	{
		var ext = path.extname(contents[i]);
		if(ext == extn)
		{
			console.log(contents[i]);
		}
	}
 });