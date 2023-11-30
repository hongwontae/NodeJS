const http = require("http");
const routes = require('./routes');

console.log(routes.someText)
const server = http.createServer(routes.handler)

server.listen(3000);

// 서버를 생성할 떄 사용하는 메서드이다
