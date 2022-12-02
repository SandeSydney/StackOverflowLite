import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../Resources/Logo.png'

function Login() {
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        navigate("/home")
    }

    const handleSignup = (event)=>{
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
                        <input type="email" name='email' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="pass">Password:</label>
                        <input type="password" />
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