import React from "react";
import './Navbar.css';
import { useState,useEffect } from "react";
import LogoIcon from "../Icons/LogoIcon.jsx";

const Navbar = () => {
    const [time,setTime] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="navbar">
            <div className="generalinfo">
                <i><LogoIcon /></i>
                <h2>School system</h2>
                <p>{time.toLocaleDateString()}</p>
                <p>{time.toLocaleTimeString()}</p>
            </div>
            <div className="auth">
                <h2>Admin</h2>
            </div>
            
        </div>
        
    )
}
export default Navbar;