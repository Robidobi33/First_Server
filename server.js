var http = require("http");

var PORT = 3333;
var PORT_02 = 3334;

function handleRequest(request, response){
    response.end("It works! Path hit: " + request.url);
}

var server_01 = http.createServer(handleRequest);

server_01.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
});

var server_02 = http.createServer(handleRequest);

server_02.listen(PORT_02, function(){
    console.log("Server listening on http://localhost:"+ PORT_02);
});