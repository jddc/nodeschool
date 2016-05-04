// ## JUGGLING ASYNC
var http = require('http');
var bl = require('bl'); //third-party library to concat-streams
var async = require('async');
var output = "";
var urls = [];
urls[0] = process.argv[2];
urls[1] = process.argv[3];
urls[2] = process.argv[4];



async.each(urls, function(url, callback){
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.pipe(bl(function(err, data){
      if(!err){
        output = data.toString();
        console.log(output);
        callback();
      }else{
        callback(err);
      }

    }));

    response.on('error', (err) => {
      callback(err);
    });
  }).on('error', console.error);

}, function(err){
  // if(!err){
  //   console.log(output);
  // }
});
