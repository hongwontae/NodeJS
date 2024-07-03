/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import "./App.css";
import { dataHttp } from "./http/FormHttp";

function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [file, setFile] = useState(null);

  async function buttonTrigger() {
    const formdata = new FormData();
    formdata.append('email', emailRef.current.value);
    formdata.append('password', passwordRef.current.value)
    formdata.append('image', file)
    await dataHttp(formdata)
  }

  function fileHandler(e){
    setFile(e.target.files[0])
  }
  console.log(file)


  return (
    <>
      <div className="bg-stone-700 min-h-screen text-black">
        <h1 className="text-2xl text-center mb-10">유효성 검사</h1>
        <form className="flex flex-col justify-center items-center">
          <label id="email">Email</label>
          <input
            type="text"
            ref={emailRef}
            id="email"
          ></input>
          <label id="password">Password</label>
          <input
            type="password"
            ref={passwordRef}
            id="password"
          ></input>

          <label htmlFor="filepick">Image</label>
          <input id="filepick" type="file" onChange={fileHandler}></input>
          <button
            type="button"
            className="border-[1px] rounded-lg mt-4 bg-black "
            onClick={() => {
              buttonTrigger();
            }}
          >
            유효성 검사
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
