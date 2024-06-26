import React from 'react'

import { TypeAnimation } from 'react-type-animation'
import { MdLanguage } from "react-icons/md"

import './VideoContainer.css'

import video from '/src/assets/bitcoin_-_63667 (Original).mp4'

function VideoContainer() {
    return (
        <>
            <div className="video-container">
                <div className="sub-nav">
                    <div className="right-side">
                        <img className="logo" src="/under-high-resolution-logo-transparent.png"></img>
                    </div>

                    <div className="left-side">
                        <MdLanguage style={{ width: "30px", height: "30px", color: "white", marginTop: "5px" }} /> <span style={{ color: "white", marginLeft: "25px" }}>|</span> <a href="">Login</a>
                    </div>
                </div>

                <div className="spotlight-container">
                    <div className="spotlight-text">
                        <TypeAnimation className='text'
                            style={{
                                fontSize: '30px',
                                backgroundImage: 'linear-gradient(90deg, rgba(218,165,32,1) 0%, rgba(255,238,164,1) 100%)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontWeight: 'bolder'
                            }}
                            sequence={[
                                'Choose cryptocurrency',
                                600,
                                'Choose decentralization',
                                600,
                                'Choose your future',
                                600
                            ]}
                            repeat={Infinity}
                        />
                    </div>

                    <div className="spotlight-sign-up">
                        <a href="">Sign Up</a>
                    </div>
                </div>



                <video autoPlay muted loop>
                    <source src={video} />
                </video>

            </div>
        </>
    )
}

export default VideoContainer