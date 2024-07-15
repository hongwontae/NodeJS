// src/Chat.js
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

// 서버와의 소켓 연결 설정
const socket = io('http://localhost:4000');

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // 서버로부터 메시지를 받을 때의 이벤트 핸들러
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // 서버로 메시지 전송
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
