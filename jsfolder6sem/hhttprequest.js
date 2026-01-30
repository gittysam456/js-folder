//⦁	Create a nodejs server that listen on the port 3000 and responds with “Hello” for any incoming http request 
const http = require("http");

http.createServer((req, res) => {
  res.end("Hello");
}).listen(3000);
