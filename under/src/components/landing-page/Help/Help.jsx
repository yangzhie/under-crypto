import React, { useEffect } from 'react'
import { motion, useTransform, useViewportScroll, useAnimation } from "framer-motion"

import './Help.css'

import { FaInfoCircle } from "react-icons/fa"
import { IoChatboxEllipses } from "react-icons/io5"
import { SiGoogledocs } from "react-icons/si"
import { FaMicrophoneLines } from "react-icons/fa6"
import { useScroll } from 'framer-motion'

function Help() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const controls = useAnimation()

    const { scrollYProgress } = useScroll()

    useEffect(() => {
        scrollYProgress.on("change", (y) => {
            if (y >= 0.5) {
                controls.start('visible')
            }
        })
    }, [scrollYProgress, controls])

    return (
        <>
            <div className="help-section">
                <div className="help-section-text">
                    <h2>Need Help?</h2>
                </div>

                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate={controls}
                    className="help-section-items"
                >
                    <motion.li
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className="help-section-item"
                    >
                        <FaInfoCircle size={30} color='goldenrod' />

                        <h3>Support centre</h3>

                        <p>View detailed “how to” guides and instructions on navigating the UnderCrypto platform and using specific features.</p>

                        <p>
                            <a href="" style={{ color: 'goldenrod', textDecoration: 'none' }}>Learn More</a>
                        </p>
                    </motion.li>

                    <motion.li
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className="help-section-item"
                    >
                        <IoChatboxEllipses size={30} color='goldenrod' />

                        <h3>Live chat support</h3>

                        <p>Send your question via live chat and we’ll reply with a helpful answer - under 10 minutes.</p>

                        <p>
                            <a href="" style={{ color: 'goldenrod', textDecoration: 'none' }}>Live Chat</a>
                        </p>
                    </motion.li>

                    <motion.li
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className="help-section-item"
                    >
                        <SiGoogledocs size={30} color='goldenrod' />

                        <h3>Learn about Under</h3>

                        <p>Access quality educational resources and expert market analysis to sharpen your crypto and blockchain knowledge.</p>

                        <p>
                            <a href="" style={{ color: 'goldenrod', textDecoration: 'none' }}>Learn More</a>
                        </p>
                    </motion.li>

                    <motion.li
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className="help-section-item"
                    >
                        <FaMicrophoneLines size={30} color='goldenrod' />

                        <h3>Tapping Into Crypto</h3>

                        <p>Listen to the Tapping into Crypto podcast for the latest trends and opportunities in cryptocurrency.</p>

                        <p>
                            <a href="" style={{ color: 'goldenrod', textDecoration: 'none' }}>Listen Now</a>
                        </p>
                    </motion.li>
                </motion.ul>
            </div>
        </>
    )
}

export default Help