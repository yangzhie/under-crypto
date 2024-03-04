import React from 'react'
import './VideoContainer.css'

function VideoContainer() {
    return (
        <div className="video-container">
            <div className="sub-nav">
                <div className="right-side">
                    <img className="logo" src="https://t3.ftcdn.net/jpg/01/82/26/30/360_F_182263003_qetLxvmZtCA4SJ3mBragsnPLWeh1sC8Z.jpg"></img>
                </div>

                <div className="left-side">
                    <img className="logo-language" src="https://as1.ftcdn.net/v2/jpg/02/23/36/38/1000_F_223363899_hWSPCWldRTQGDYmSdzDPXLr0Gy2cwHNT.jpg"></img>
                    <span>| <a href="">Login</a></span>
                </div>
            </div>

            <div className="spotlight-container">
                <div className="spotlight-text">
                    <h1>Generic opening text</h1>
                </div>

                <div className="spotlight-sign-up">
                    <a href="">Sign Up</a>
                </div>
            </div>

            <video autoplay muted loop src="./mixkit-close-up-of-an-ethereum-coin-46993-medium.mp4"></video>
        </div>
    )
}

export default VideoContainer