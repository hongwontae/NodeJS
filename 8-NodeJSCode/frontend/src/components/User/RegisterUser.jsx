import { useRef } from 'react';
import classes from './RegisterUser.module.css'
import { createUser } from '../../HTTP/User-HTTP';
import {useNavigate} from 'react-router-dom'

function RegisterUser(){

    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nickNameRef = useRef(null);

    async function createUserHandler(){
        const data = await createUser(emailRef.current.value, passwordRef.current.value, nickNameRef.current.value);
        console.log(data);
        navigate('/')
    }   

    return(
        <>
            <h1>Create User Page</h1>

            <div className={classes.container}>
                <input type="text" ref={emailRef}></input>
                <input type="text" ref={passwordRef}></input>
                <input type="text" ref={nickNameRef}></input>
                <button onClick={createUserHandler}>Create!</button>
            </div>
        </>
    )
}

export default RegisterUser;