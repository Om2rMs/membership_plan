import React from "react";
import { BsTelephone } from 'react-icons/bs';
import './Footer.css'



const Footer = () => {
    return (
        <div className="footer-container">
            <p>Need a payment plan fo an annual package?</p>
            <div className="footer-link">
                <a href="#" >Schedule a call</a>
                <BsTelephone className="phone-icon" />
            </div>

        </div>

    )

}

export default Footer;