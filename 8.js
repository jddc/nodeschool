//HTTP COLLECT
var http = require('http');
var bl = require('bl'); //third-party library to concat-streams
var url = process.argv[2];

http.get(url, (response) => {
  var output = "";
  response.setEncoding('utf8');

  response.pipe(bl(function(err, data){
    if(!err){
      output = data.toString();
    }

  }));

  response.on('end', () => {
    console.log(output.length);
    console.log(output);
  });

  response.on('error', (err) => {
    console.log(err);
  });
}).on('error', console.error);
