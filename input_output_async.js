var fs = require('fs');
fs.readFile(process.argv[2], getData);

function getData(err, data)
{
	if (err) {
	  console.log("Error occured\n");
	}
	else {
	  var str = data.toString();
	  var ret = str.split("\n");
	  console.log(ret.length - 1);
    	}
}