import React from 'react'

import MyImg from '../img/myPic.png'

import './style.css'

function About() {
    return (
        <div className="about">
            <div className="about__header">ABOUT <span>ME</span></div>
            <div className="about__body">
                <img src={MyImg} style={{maxHeight:"250px"}}/>
                <div className="about__content" >I am a </div>
            </div>

        </div>
    )
}

export default About
