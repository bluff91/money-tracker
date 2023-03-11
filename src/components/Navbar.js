import "./Navbar.css"
import React from 'react';
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

function Navbar() {

    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <div className="navbar">
            <div className="navbar-content">
                <Link className="navbar-left-side" to="/home">
                    Money-Tracker
                </Link>
                <div className="navbar-right-side">
                    {!user && (
                        <> 
                            <Link className="login" to="/login">
                                Login
                            </Link>
                            <Link className="signup" to="/signup">
                                Signup
                            </Link>
                        </>
                    )}
                    {user && (
                        <>
                            <div>Hello, {user.user}</div>
                            <div className="logout-btn" onClick={logout}>
                                Logout
                            </div>
                        </>
                    )}
                        
                </div>
            </div>
        </div>
    );
}

export default Navbar