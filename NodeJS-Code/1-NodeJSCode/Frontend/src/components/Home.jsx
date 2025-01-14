/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { logoutHttp } from "../http/login-association-HTTP";
import { useState } from "react";

function Home() {

  const [re, setRe] = useState(1);

  const bol = document.cookie ? true : false;

  async function logoutHandler(){
    const data = await logoutHttp();
    console.log(data);
    setRe(prev => {
      return prev+1
    })
  }

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="flex w-5/6 justify-center items-center">
          <h1>Test Home Page</h1>
        </div>
        <div className="">
          {bol ? (
            <button onClick={logoutHandler} className="border-[1px] p-1 bg-indigo-500">Logout</button>
          ) : (
            <Link to={"/login"} className="border-[1px] p-1 bg-indigo-500 rounded-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
