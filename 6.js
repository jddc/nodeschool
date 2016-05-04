var dirReader = require('./dirReader');

var dirName = process.argv[2];
var fileExt = process.argv[3];


dirReader.getFiles(dirName, fileExt, function(err, list) {
  if (err)
    return console.error('There was an error:', err);

  list.forEach(function(file) {
    console.log(file);
  });

});
