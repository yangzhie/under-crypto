import React from 'react'
import './Spotlight.css'

// <div className="video-control">
//                     <span>Logo</span> <span>Login</span>
//                 </div>
export default function Spotlight() {
    return (
        <>

            <video autoPlay muted loop playsInline>
                <source src="/assets/mixkit-close-up-of-an-ethereum-coin-46993-medium.mp4" type="video/mp4" />
            </video>

        </>
    )
}