import { useRef } from "react";
import { signupPost } from "../http/user-http";

function Signup() {

    const titleRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    async function signHandler(){
        const data = await signupPost(titleRef.current.value, passwordRef.current.value, nameRef.current.value);
        console.log(data)
    }

  return (
    <>
    <h1>SignUp</h1>
      <label htmlFor="email">E-Mail</label>
      <input id="email" type="text" ref={titleRef}></input>

      <label htmlFor="password">Password</label>
      <input id="password" type="password" ref={passwordRef}></input>

      <label htmlFor="nickname">Name</label>
      <input id="nickname" type="text" ref={nameRef}></input>

      <button onClick={signHandler}>Signup</button>
    </>
  );
}

export default Signup;
