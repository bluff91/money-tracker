import "./Login.css"
import React, { useState, useRef } from 'react';
import { useSignup } from '../../hooks/useSignup'


function Login() {

    const emailRef = useRef()
    const [password, setPassword] = useState("")
    const login = "http://localhost:5000/auth/login"

    const {error, isPending, postData} = useSignup(login, "POST")

    const handleClick = (e) => {
        e.preventDefault()
        postData({email: emailRef.current.value, password:password })
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
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
        </div>
    );
}

export default Login;