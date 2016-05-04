var fs = require('fs');
var path = require('path');

module.exports = {
  getFiles: function(dirName, fileExt, callback){
    fs.readdir(dirName, (err, list) => {
      if(err) return callback(err);

      list = list.filter(function (file) {
           return path.extname(file) === '.' + fileExt;
      });

      callback(null, list)

    });
  }
};
