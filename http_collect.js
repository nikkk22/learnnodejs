 var http = require('http');
let body = [];
 var url = process.argv[2];
var req = http.get(url, function(res) {
  //res.setEncoding('utf8');
  res.on('data', function (chunk) {
	 body.push(chunk);
  }).on('end', () => {
  body = Buffer.concat(body).toString();
  console.log(body.length);
  console.log(body);
  });
});