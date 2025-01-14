/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { signupHTTP } from "../http/AuthHttp";
import {useNavigate} from 'react-router-dom'

function SignupPage() {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const navigate = useNavigate();

  function emailHandler(e) {
    setAuthData((prev) => {
      return {
        ...prev,
        email: e.target.value,
      };
    });
  }

  function passwordHandler(e) {
    setAuthData((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
  }

  function nicknameHandler(e) {
    setAuthData((prev) => {
      return {
        ...prev,
        nickname: e.target.value,
      };
    });
  }

  async function formSubmitHandler(e){
    e.preventDefault();
    await signupHTTP(authData);
    navigate('/')
  }


  return (
    <>
      <div className="bg-slate-600 h-screen">
        <form onSubmit={formSubmitHandler} className="flex flex-col justify-center items-center h-full">
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="text"
            className="text-center"
            value={authData.email}
            onChange={emailHandler}
          ></input>

          <label htmlFor="nickname">Nickname</label>
          <input
            id="nickname"
            type="text"
            className="text-center"
            value={authData.nickname}
            onChange={nicknameHandler}
          ></input>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="text-center"
            value={authData.password}
            onChange={passwordHandler}
          ></input>
          <button className="mt-4 border-[1px] p-1 text-white">Sign-Up</button>
        </form>
      </div>
    </>
  );
}

export default SignupPage;
