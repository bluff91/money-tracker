import "./Signup.css"
import React, { useRef } from 'react';
import { useSignup } from '../../hooks/useSignup'


function Signup() {

    const emailRef = useRef()
    const displayNameRef = useRef()
    const passwordRef = useRef()

    const taks = "http://localhost:5000/tasks"
    const login = "http://localhost:5000/auth/register"
    const test = "http://localhost:5000/testingplm"

    const {error, isPending, data, postData} = useSignup(login, 'POST')

    const handleClick = (e) => {
        e.preventDefault()
        postData({email:emailRef.current.value, password:passwordRef.current.value, name:displayNameRef.current.value})
        console.log(emailRef.current.value, passwordRef.current.value, displayNameRef.current.value)
        console.log({data})
        // console.log(emailRef.current.value, displayNameRef.current.value, passwordRef.current.value)
    }

    return (
        <div className="login-container">
            <h2 className="title">Sign Up</h2>
            <div className="login-elements">
                <label htmlFor="email">email:</label>
                <input
                    className="login-email" 
                    type="email"
                    required
                    minLength={6}
                    maxLength={50}
                    id="email"
                    ref={emailRef}
                />

                <label htmlFor="displayName">display name:</label>
                <input
                    className="login-displayName" 
                    type="text"
                    required
                    minLength={3}
                    maxLength={40}
                    id="displayName"
                    ref={displayNameRef}
                />

                <label  htmlFor="password">password:</label>
                <input
                    className="login-password" 
                    type="password"
                    required
                    minLength={6}
                    maxLength={50}
                    id="pasword"
                    ref={passwordRef}
                />          
            </div>
            
            {!isPending && <button 
                className="btn"
                onClick={handleClick}
                >Sign Up
            </button>}
            {isPending && <button className="btn">Loading</button>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default Signup;