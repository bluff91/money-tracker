import "./Login.css"
import React from 'react';

function Login() {
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
                />

                <label htmlFor="password">password:</label>
                <input className="login-password"
                    type="password"
                    id="password"
                    minLength={6}
                    maxLength={40}
                    required
                />
            </div>
            <button className="login-button">Login</button>
        </div>
    );
}

export default Login;