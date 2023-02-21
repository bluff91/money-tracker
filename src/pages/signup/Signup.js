import "./Signup.css"
import React, { useRef } from 'react';


function Signup() {

    const emailRef = useRef()
    const displayNameRef = useRef()
    const passwordRef = useRef()

    const handleClick = (e) => {
        e.preventDefault()
        console.log(emailRef.current.value, displayNameRef.current.value, passwordRef.current.value)
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
            <button 
                className="btn"
                onClick={handleClick}
                >Sign Up
            </button>
        </div>
    );
}

export default Signup;