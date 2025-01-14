import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postuser } from "../http/user-http";

function Signup() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  function emailHandler(e) {
    setUserData((prev) => {
      return {
        ...prev,
        email: e.target.value,
      };
    });
  }

  function passwordHandler(e) {
    setUserData((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
  }

  function nameHandler(e) {
    setUserData((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  }

  async function userLoginHandler() {
    const signupData = await postuser(userData);
    navigate("/", { state: signupData });
  }
  return (
    <>
      <div className="flex flex-col items-center h-full">
        <h1 className="font-bold text-4xl mb-4 mt-4">Sign-Up</h1>
        <form className="border-[1px] p-2 flex flex-col justify-center items-center w-2/5 gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="text-center"
            onChange={emailHandler}
            value={userData.email}
          ></input>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="text-center"
            onChange={passwordHandler}
            value={userData.password}
          ></input>

          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="text-center"
            onChange={nameHandler}
            value={userData.name}
          ></input>

          <button
            type="button"
            className="border-[1px] p-1 mt-2"
            onClick={userLoginHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
