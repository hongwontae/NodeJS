import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../http/user-http";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigate();

  async function logintest() {
    const userData = await loginUser(user);
    localStorage.setItem("user", userData.result[0]._id);
    navigation("/");
  }

  function emailGet(e) {
    setUser((prev) => {
      return {
        ...prev,
        email: e.target.value,
      };
    });
  }

  function passwordGet(e) {
    setUser((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl mt-6 mb-4">Log-In</h1>
        <form className="flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className="text-center"
              value={user.email}
              onChange={emailGet}
            ></input>
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              className="text-center"
              value={user.password}
              onChange={passwordGet}
            ></input>
          </div>

          <button
            type="button"
            onClick={logintest}
            className="border-[1px] p-1 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
