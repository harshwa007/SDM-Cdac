var http = require('http');
var onReceive = function(req,res){
//create a server object:
var app=http.createServer(onReceive);
res.write('<h1>This is Harshvardhan web page</h1>'); //write a response to the client
res.end(); //end the response
}
var app = http.createServer(onReceive);
app.listen(9000);
 //the server object listens on port 808
console.log("Web page is running on server 9000 ");

