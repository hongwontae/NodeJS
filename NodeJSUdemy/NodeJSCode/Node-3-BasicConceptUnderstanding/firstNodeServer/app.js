const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My First page</title></head>')
    res.write('<body><h1>Hello Node.js World</h1></body>')
    res.write('</html>')
});

server.listen(3000);


// 서버를 생성할 떄 사용하는 메서드이다