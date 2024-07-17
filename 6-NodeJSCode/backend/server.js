// 서버 측 (Node.js)
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors : {
        origin : '*'
    }
});

io.on('connection', (socket) => {
    console.log('A client connected');
    

    // 클라이언트로부터의 메시지 수신
    socket.on('sendMessage', (message) => {
        console.log('Message received:', message);

        // 클라이언트에게 응답 보내기
        socket.emit('newMessage', );
    });

    socket.on('rrr', ()=>{
        io.emit('rrr', 'email')
    })

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

const port = 4000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
