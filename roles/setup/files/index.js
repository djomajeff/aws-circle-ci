const http = require("http");
const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("Hello world! from Jeffrey Ansible");
});
server.listen(3000);
