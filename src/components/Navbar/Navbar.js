import React from "react";
import Logo from './../../assets/coach.png';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <img src={Logo} className="flash-logo" alt="logo" />
                <p className="navbar-text-left">COACHBIT</p>
            </div>
            <div className="navbar-right">
                <a href="#" className="navbar-text-one">Reviews</a>
                <a href="#" className="navbar-text-two">Pricing</a>
                <button className="btn start-btn">Get Started</button>
            </div>
        </div>
    )
}

export default Navbar;