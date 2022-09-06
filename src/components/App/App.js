import React from "react";
import './App.css'
import First from './../First/First'
import Navbar from './../Navbar/Navbar'
import Header from './../Header/Header'
import Content from './../Content/Content'
import Buttom from './../Buttom/Buttom'
import Footer from './../Footer/Footer'
import contactVector from './../../assets/about_vector.png'






const App = () => {
    return (
        <div>
            <First />
            <Navbar />
            <Header />
            <Content />
            <Buttom />
            <Footer />
            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    )
}

export default App;