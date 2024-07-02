/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const ref = useRef(null);

  const [count, setCount] = useState(0);

  async function buttonTrigger(email, password, confirm) {
    const data = await fetch("http://localhost:3000/auth/val", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPassword: confirm,
      }),
    });

    const resData = await data.json();
    console.log(resData.message)
    if (resData?.message) {
      if(resData.message === '범용 에러 처리 미들웨어입니다.'){
        return
      }
      ref.current = resData.message.map((ele) => {
        if (ele.email === "not") {
          const conditionCss = "text-red-400";
          return conditionCss;
        }
        if (ele.password === "not") {
          const css = "text-red-400";
          return css;
        }
      });
      console.log(resData.message);
      setCount((prev) => prev + 1);
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = ''
    } else {
      console.log(resData);
    }
  }

  console.log(ref.current);

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
            className={`${ref.current?.[0]} rounded-lg `}
          ></input>
          <label id="password">Password</label>
          <input
            type="password"
            ref={passwordRef}
            id="password"
            className={`${ref.current?.[0]} rounded-lg `}
          ></input>
          <label id="confirm">Confirm</label>
          <input
            type="password"
            ref={confirmPasswordRef}
            id="confirm"
            className={`${ref.current?.[0]} rounded-lg `}
          ></input>
          <button
            type="button"
            className="border-[1px] rounded-lg mt-4 bg-black "
            onClick={() => {
              buttonTrigger(
                emailRef.current.value,
                passwordRef.current.value,
                confirmPasswordRef.current.value
              );
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
