import React from "react";
import './Buttom.css'
import { GiTronArrow } from 'react-icons/gi';


const Buttom = () => {
    return (
        <div className="buttom-container">
            <GiTronArrow className="icon" />
            <button className="btn start-btn">Proceed to payment</button>
        </div>
    )
}



export default Buttom;