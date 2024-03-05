import React from 'react'

import './Help.css'

import { FaInfoCircle } from "react-icons/fa"
import { IoChatboxEllipses } from "react-icons/io5"
import { SiGoogledocs } from "react-icons/si"
import { FaMicrophoneLines } from "react-icons/fa6"

function Help() {
    return (
        <div className="help-section">
            <div className="help-section-text">
                <h2>Need Help?</h2>
            </div>

            <div className="help-section-items">
                <div className="help-section-item">
                    <FaInfoCircle />

                    <h3>Support centre</h3>

                    <p>View detailed “how to” guides and instructions on navigating the Swyftx platform and using specific features.</p>

                    <p>
                        <a href="">Learn More</a>
                    </p>
                </div>

                <div className="help-section-item">
                    <IoChatboxEllipses />

                    <h3>Live chat support</h3>

                    <p>Send your question via live chat and we’ll reply with a helpful answer - under 10 minutes.</p>

                    <p>
                        <a href="">Live Chat</a>
                    </p>
                </div>

                <div className="help-section-item">
                    <SiGoogledocs />

                    <h3>Learn about Under</h3>

                    <p>Access quality educational resources and expert market analysis to sharpen your crypto and blockchain knowledge.</p>

                    <p>
                        <a href="">Learn More</a>
                    </p>
                </div>

                <div className="help-section-item">
                    <FaMicrophoneLines />

                    <h3>Tapping Into Crypto</h3>

                    <p>Listen to the Tapping into Crypto podcast for the latest trends and opportunities in cryptocurrency.</p>

                    <p>
                        <a href="">Listen Now</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Help