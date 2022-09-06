import React from "react";
import { BsArrowBarRight } from 'react-icons/bs'
import './First.css'


const First = () => {
    return (
        <div className="First-container">
            <a className="First-content">
                <p>Learn more about our upcoming webinar</p>
                <BsArrowBarRight />

            </a>
        </div>
    )
}

export default First;