import "./Navbar.css"
import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <Link className="navbar-left-side" to="/home">
                    Money-Tracker
                </Link>
                <div className="navbar-right-side">
                    <Link className="login" to="/login">
                        Login
                    </Link>
                    <Link className="signup" to="/signup">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar