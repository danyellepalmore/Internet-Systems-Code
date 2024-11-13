//create an HTTP web server
//const http = require('http')
/*
//Status line contains: protocol and version, 3-digit status code followed by text version of the status

http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/html'}); res.end('Hello World!'); //200: OK

}).listen(3000);
*/

/*http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/html'}); 
//This is useful for demonstrating how URL paths can be handled by a server (shows url path)
res.write(req.url); res.end();
}).listen(3000);*/

//how to handle and extract query parameters from URLs
//handle http request
var http = require('http');
//parse urls
var url = require('url');
http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/html'}); 
var q = url.parse(req.url, true).query;
var txt = q.firstname + " " + q.lastname;
//sends the response back to the client 
res.end(txt);
}).listen(3000);