import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import './VideoContainer.css'

function VideoContainer() {
    return (
        <>
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
                        <TypeAnimation className='text'
                            style={{
                                fontSize: '2em',
                                backgroundImage: 'linear-gradient(90deg, rgba(255,176,0,1) 3%, rgba(244,175,79,1) 83%, rgba(0,0,0,1) 100%)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontWeight: 'bolder'
                            }}
                            sequence={[
                                'Choose cryptocurrency.',
                                600,
                                'Choose decentralization.',
                                600,
                                'Choose your future.',
                                600
                            ]}
                            repeat={Infinity}
                        />
                    </div>

                    <div className="spotlight-sign-up">
                        <a href="">Sign Up</a>
                    </div>
                </div>



                <video controls autoPlay>
                    <source src="src/assets/mixkit-close-up-of-an-ethereum-coin-46993-medium.mp4" type="video/mp4" />
                </video>

            </div>
        </>
    )
}

export default VideoContainer