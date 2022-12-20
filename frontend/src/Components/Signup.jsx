import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../Features/usersSlice'
import logo from '../Resources/Logo.png'

function Signup() {
    const surnRef = useRef(null)
    const firstRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const confRef = useRef(null)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignup = (e) => {
        e.preventDefault()
        if (surnRef.current.value.trim() && firstRef.current.value.trim() && emailRef.current.value.trim() && passRef.current.value.trim() && confRef.current.value.trim()) {
            if ((passRef.current.value.trim()) === (confRef.current.value.trim())) {
                const user_details = {
                    username: surnRef.current.value + firstRef.current.value,
                    email: emailRef.current.value,
                    password: passRef.current.value
                }
                dispatch(addUser(user_details))

                surnRef.current.value = ''
                firstRef.current.value = ''
                emailRef.current.value = ''
                passRef.current.value = ''
                confRef.current.value = ''

                navigate("/")
            } else {
                console.log("Passwords do not match!");
            }
        } else{
            console.log("Fill in the details");
        }
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
                        <input ref={surnRef} type="text" name='surname' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="firstname">Firstname:</label>
                        <input ref={firstRef} type="text" name='firstname' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="email">Email:</label>
                        <input ref={emailRef} type="email" name='email' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="pass">Password:</label>
                        <input ref={passRef} name='pass' type="password" />
                    </div>
                    <div className="form-element">
                        <label htmlFor="confpass">Confirm Password:</label>
                        <input ref={confRef} name='confpass' type="password" />
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