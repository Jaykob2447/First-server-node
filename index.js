const http = require("node:http");
const app = require("./app");

const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, "127.0.0.1", () => {
  console.log(`lisen on 127.0.0.1:${PORT}`);
});
