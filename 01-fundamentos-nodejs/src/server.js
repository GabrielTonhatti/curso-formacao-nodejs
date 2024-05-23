import http from "node:http";

const server = http.createServer((req, res) => {
  return res.end("Hello World from Node.js!");
});

server.listen(3333);
