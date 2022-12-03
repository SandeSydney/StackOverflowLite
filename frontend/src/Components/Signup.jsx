import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Resources/Logo.png'

function Signup() {

    const navigate = useNavigate()

    const handleSignup = ()=>{
        navigate("/")
    }

    return (
        <div className='logContainer'>
            <div className="logNav">
                <img src={logo} alt="Logo" />
            </div>
            <div className="log-content">
                <form>
                    <h2>Sign Up</h2>
                    <div className="form-element">
                        <label htmlFor="surname">Surname:</label>
                        <input type="text" name='surname' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="firstname">Firstname:</label>
                        <input type="text" name='firstname' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="pass">Password:</label>
                        <input name='pass' type="password" />
                    </div>
                    <div className="form-element">
                        <label htmlFor="confpass">Confirm Password:</label>
                        <input name='confpass' type="password" />
                    </div>
                    <button type="submit" className='btnSubmit loginSubmit' onClick={handleSignup}>Sign Up</button>

                </form>
                <p className='logRequest-1'>
                    Join millions of<br />
                    members
                    <br />
                    <span className='shouter'>TODAY!</span>
                </p>
            </div>
        </div>
    )
}

export default Signup