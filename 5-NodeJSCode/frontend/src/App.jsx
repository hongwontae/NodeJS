// 클라이언트 측 (React)
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); // 서버의 주소와 포트번호

const App = () => {

  const [email, setEmail] = useState([])

  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("newMessage", (message) => {
      console.log("New message received from server:", message);
    });

    // 컴포넌트가 언마운트될 때 실행 (클리어 업을 위해)
    return () => {
      socket.off("rrr");
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("rrr", "Hello server!");
  };

  socket.on("rrr", (message) => {
    setEmail(message)
  });

  return (
    <div>
      <h1>Socket.io React Example</h1>
      <button onClick={sendMessage}>Send Message to Server</button>
      {email}
    </div>
  );
};

export default App;
