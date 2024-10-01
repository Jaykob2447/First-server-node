const http = require("node:http");

const server = http.createServer(() => {});

server.listen(5000, "127.0.0.1", () => {
  console.log("lisen");
});
