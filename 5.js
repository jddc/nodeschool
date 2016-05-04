//## FILTERED
//node 5.js "/home/joshua/Development/node/nodeschool" js
var fs = require('fs');
var path = require('path');
var p = process.argv[2];
var fileType = '.' + process.argv[3];

fs.readdir(p, (err, list) => {
  for (var i = 0; i < list.length; i++) {
    if(path.extname(list[i]) === fileType){
      console.log(list[i]);
    }
  }
});
