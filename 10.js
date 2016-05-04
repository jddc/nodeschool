// ## TIME SERVER
var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer((socket) =>{
  socket.write(strftime('%F %H:%M')+"\n");
  socket.end();
}).on('error', (err)=>{
  console.log(err);
});

server.listen(port, () => {
  address = server.address();
  console.log('opened server on %j', address);
});
