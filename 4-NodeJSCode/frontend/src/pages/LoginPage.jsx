/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginHTTP } from "../http/AuthHttp";

function LoginPage(){

    const [authData, setAuthData] = useState({
        email: "",
        password: "",
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
    
      async function formSubmitHandler(e){
        e.preventDefault();
        const loginData = await loginHTTP(authData);
        localStorage.setItem('token', loginData.token);
        console.log(loginData);
        
      }

    return(
        <>
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
        </>
    )
}

export default LoginPage;