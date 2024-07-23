import { useRef } from "react";
import { login } from "../http/user-http";

function Login(){

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    async function loginHandler(){
        const loginData = await login(emailRef.current.value, passwordRef.current.value);

        console.log(loginData)
    }


    return(
        <>
            <h1>Login</h1>
            
            <div>
                <input type="text" ref={emailRef}></input>
                <input type="password" ref={passwordRef}></input>
            </div>
            <button onClick={loginHandler}>Login</button>
        </>
    )
}

export default Login;