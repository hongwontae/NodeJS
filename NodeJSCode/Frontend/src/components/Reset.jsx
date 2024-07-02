import { useReducer, useState } from "react";
import { resetHttp } from "../http/login-association-HTTP";

function reducerFuction(state, action) {
    if(action.type === 're'){
        return {
            show : true
        }
    }

    if(action.type === 'not'){
        return {
            show : false
        }
    }
}

function Reset() {
  const [state, dispatch] = useReducer(reducerFuction, { show: false });

    const [user, setUser] = useState({
        email : '',
        password : ''
    })
    console.log(user)


  async function resetButtonHandler(){
    const data = await resetHttp({email : user.email, password : user.password});
    console.log(data);
    dispatch({type : 're'})
  }

  return (
    <>
      <h1>Reset Page</h1>

      <form>
        <div className="flex flex-col items-center justify-center mb-6">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            className="text-center pl-10 pr-10"
            onChange={(e)=>{
                setUser((prev)=>{
                    return {
                        ...prev,
                        email : e.target.value
                    }
                })
            }}
            value={user.email}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="text-center pl-10 pr-10"
            value={user.password}
            onChange={(e)=>{
                setUser(prev => {
                    return {
                        ...prev,
                        password : e.target.value
                    }
                })
            }}
          ></input>
        </div>

        <button type="button" onClick={resetButtonHandler}>Reset</button>
      </form>
      {state.show ? (
        <>
          <h2 className="mt-10">Reset Token</h2>
          <form className="flex gap-4 justify-center items-center">
            <label htmlFor="resetToken"></label>
            <input
              id="resetToken"
              type="password"
              className="text-center pl-10 pr-10"
            ></input>
            <button>Re-Password</button>
          </form>
        </>
      ) : undefined}
    </>
  );
}

export default Reset;
