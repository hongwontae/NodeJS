import { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import { clickEvent } from "./Http/PostHTTP";

function App() {
  const [data, setData] = useState([]);

  async function getHTTP() {
    const data = await clickEvent();
    setData(data);
  }
  console.log(data)

  return (
    <>
      <button onClick={getHTTP}>Button</button>
      <div className="flex flex-col">
      {data.map(ele => {
        return <div key={ele}>
          {ele.title}
        </div>
      })}
      </div>

      <Post></Post>
    </>
  );
}

export default App;
