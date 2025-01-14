import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { infoDataSliceAction } from "../redux-store/infoSlice";
import { useRef, useState } from "react";
import { loginHttp, signUpHttp } from "../http/login-association-HTTP";

function Login() {
  const [text, setText] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navi = useNavigate();

  const dispatch = useDispatch();

  async function goSign() {
    const data = await signUpHttp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    dispatch(
      infoDataSliceAction.dataInput({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
    if (data.success === "not") {
      console.log(data);
      return;
    }
    navi("/signup");
  }

  async function login() {
    const resData = await loginHttp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    const bool = resData.success === "not" ? false : true;
    console.log(resData);
    console.log(bool);
    if (bool) {
      navi("/");
    } else {
      return setText(true);
    }
  }

  return (
    <>
      <h1 className="mb-10">Login Page</h1>
      <div className="w-4/5 m-auto">
        <form className="flex flex-col items-center text-red-600">
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            id="email"
            name="email"
            className="pl-10 pr-10 bg-white text-center"
            ref={emailRef}
            autoComplete="email"
            
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            autoComplete="current-password"
          ></input>
          <div className="mt-6 flex gap-4 items-center justify-center">
            <button
              className="border-[1px] p-1 rounded-lg"
              type="button"
              onClick={goSign}
            >
              Sign-Up
            </button>
            <button onClick={login} type="button">
              Login
            </button>
            <Link to={"/reset"} className="border-[1px] p-1 rounded-lg">
              Reset-Password
            </Link>
          </div>
        </form>
        {text ? <p>일치하지 않습니다. 다시 시도해 주세요</p> : undefined}
      </div>
    </>
  );
}
export default Login;
