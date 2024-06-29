import { useRef } from "react";
import { signUpPostHttp, loginPostHttp, resetPasswordHttp } from "../http/FormHttp";

function Auth() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function signUpHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObj = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    await signUpPostHttp(dataObj);
    console.log("통신이 성공했습니다.");

    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  async function loginHandler() {
    console.log("loginHandler");
    const dataObj = {
      email: emailRef.current.value,
    };
    await loginPostHttp(dataObj);
    console.log("통신이 성공했습니다.");

    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  async function resetHandler(){
    const dataObj = {
      email : emailRef.current.value,
      password : passwordRef.current.value
    }
    const data = await resetPasswordHttp(dataObj);

    console.log(data);

    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <>
      <form
        onSubmit={signUpHandler}
        className="flex flex-col justify-center items-center"
      >
        <h1>Log-IN Components</h1>
        <label htmlFor="email">EMAIL</label>
        <input id="email" name="email" type="email" ref={emailRef}></input>
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        ></input>
        <div className="flex gap-4 mt-8">
          <button type="submit">Sign-Up</button>
          <button type="button" onClick={loginHandler}>
            Log-In
          </button>
          <button type="button" onClick={resetHandler}>Password-Reset</button>
        </div>
      </form>
    </>
  );
}

export default Auth;
