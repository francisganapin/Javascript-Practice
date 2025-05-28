var http = require('http');
const dt = require('./MyModule');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('the date and time are currently'+ dt.myDateTime());
    res.end();
}).listen(8081)