import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../Resources/Logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { getUserError, getUserLoggedIn, getUsersStatus, loginUser } from '../Features/usersSlice';

function Login() {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const error = useSelector(getUserError)
    const isLoggedIn = useSelector(getUserLoggedIn)

    const emailRef = useRef(null)
    const passRef = useRef(null)

    const [emailErr, setEmailErr] = useState(false)
    const [passErr, setPassErr] = useState(false)

    const handleLogin = (event) => {
        event.preventDefault();
        if (emailRef.current.value.trim() && passRef.current.value.trim()) {
            const user_details = {
                email: emailRef.current.value,
                password: passRef.current.value
            }
            try {
                dispatch(loginUser(user_details))
            } catch (error) {
                console.log(error.message);
            }

            emailRef.current.value = ''
            passRef.current.value = ''
        } else{
            console.log("Enter email & pass");
        }
    }

    if(isLoggedIn){
        navigate("/home")
    }

    const handleSignup = (event) => {
        event.preventDefault();
        navigate("/signup")
    }


    return (
        <div className='logContainer'>
            <div className="logNav">
                <img src={logo} alt="Logo" />
            </div>
            <div className="log-content">
                <div className="logRequest-1">
                    <p>
                        Ask, Search, Share & Like <br />
                        Questions and Answers <br />
                        From Across the Globe!
                    </p>

                    <p className='no-acc'>
                        No Account? No Problem. <br />
                        Sign Up <span className='shouter-2' onClick={handleSignup}>Here!</span>
                    </p>
                </div>
                <form>
                    <h2>Login</h2>
                    <div className="form-element">
                        <label htmlFor="email">Email:</label>
                        <input ref={emailRef} type="email" name='email' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="pass">Password:</label>
                        <input ref={passRef} type="password" />
                    </div>
                    <button type="submit" className='btnSubmit loginSubmit' onClick={handleLogin}>
                        Login
                    </button>

                </form>
                <p className="logRequest-2">
                    No Account Yet? Sign Up <span className='toSign' onClick={handleSignup}>Here!</span>
                </p>
            </div>
        </div>
    )
}

export default Login