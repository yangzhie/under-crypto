import React from 'react'
import './Blockchain.css'
import { FaUserLock } from "react-icons/fa"
import { BsFillPeopleFill } from "react-icons/bs"
import { PiCurrencyBtcFill } from "react-icons/pi"

function Blockchain() {
    return (
        <div className="container">
            <img src="src/assets/blockchain-aus-cert.png" alt="" />

            <div className="heading">The trusted Australian platform</div>

            <div className="main-text">Since 2013, we at CoinSpot have worked hard to maintain our trustworthy character. Certified with Blockchain Australia and Sustainable Certification, we want our users to feel as safe and secure as possible when taking the leap into crypto.</div>

            <div className="column-container">
                <div className="column">
                    <FaUserLock />
                    <div className="block-heading">Two-factor authentication</div>
                    <div className="block-text">Enable 2FA for an extra layer of security to your CoinSpot account.</div>
                </div>

                <div className="column">
                    <BsFillPeopleFill />
                    <div className="block-heading">Home for 2.5 million people</div>
                    <div className="block-text">We have an active community of 2.5 million valued customers.</div>
                </div>

                <div className="column">
                    <PiCurrencyBtcFill />
                    <div className="block-heading">Blockchain Australia Certified</div>
                    <div className="block-text">As a certified member of Blockchain Australia, you can can be confident CoinSpot meets best practice standards.</div>
                </div>
            </div>
        </div>
    )
}

export default Blockchain