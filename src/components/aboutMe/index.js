import React from 'react'
import './index.css'
import blueSwirl from '../../images/blueSwirl.jpg'
import Navbar from '../navBar'

const AboutMe = ()=> {
    return(
        <div className="billboard">
            <div className="introContainer">
                <div className="intro">
                    <h1>Hi, I'm Trenton</h1>
                    <p>I'm a full stack web developer</p>
                </div>
                <Navbar/>
            </div>
            <img className="bigImg" src={blueSwirl} alt="Mountains"/>
        </div>
    );
}

export default AboutMe