//MY FIRST ASYNC I/O!
var fs = require('fs');
fs.readFile(process.argv[1], 'utf8' , (err, data) => {
      if(!err){
        console.log(data.split('\n').length);
      }

});
