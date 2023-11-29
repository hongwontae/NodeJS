const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers)
});

server.listen(3000);


// 서버를 생성할 떄 사용하는 메서드이다