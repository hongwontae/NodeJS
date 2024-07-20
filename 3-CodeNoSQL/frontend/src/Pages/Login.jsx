import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();

  function logintest() {
    navigation("/");
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl mt-6 mb-4">Log-In</h1>
        <form className="flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" className="text-center"></input>
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="text-center"></input>
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
