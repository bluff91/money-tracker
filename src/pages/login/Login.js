import "./Login.css"
import React, { useState, useRef } from 'react';

function Login() {

    const emailRef = useRef()
    const [password, setPassword] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        console.log(emailRef.current.value, password)
    }

    return (
        <div className="login-container">
            <h2 className="title">
                login
            </h2>
            <div className="login-elements">
                <label htmlFor="email">email:</label>
                <input className="login-email"
                    type="email"
                    id="email"
                    minLength={6}
                    maxLength={30}
                    required
                    ref={emailRef}
                />

                <label htmlFor="password">password:</label>
                <input className="login-password"
                    type="password"
                    id="password"
                    minLength={6}
                    maxLength={40}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn"
                onClick={handleClick}
                >Login
            </button>
        </div>
    );
}

export default Login;