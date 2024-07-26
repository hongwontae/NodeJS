import { useState } from 'react';
import classes from './Login.module.css';
import { loginUser } from '../../HTTP/User-HTTP';
import {useNavigate} from 'react-router-dom'

function Login(){

    const navigate = useNavigate();


    const [userData, setUserData] = useState({
        email : '',
        password : ''
    })

    function emailHandler(e){
        setUserData(prev => {
            return {
                ...prev,
                email : e.target.value
            }
        })
    }

    function passwordHandler(e){
        setUserData(prev => {
            return {
                ...prev,
                password : e.target.value
            }
        })
    }

    async function loginHandler(){
        const data = await loginUser(userData.email, userData.password);
        console.log(data);
        navigate('/')
    }

    return(
        <>
            <h1>Login Page</h1>
            <div className={classes.container}>
                <input type="text" value={userData.email} onChange={emailHandler}></input>
                <input type="text" value={userData.password} onChange={passwordHandler}></input>
                <button onClick={loginHandler}>Login</button>
            </div>
        </>
    )
}

export default Login;