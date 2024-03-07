import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lottie from 'lottie-react'

import animationData from '../../../assets/Animation - 1709449613538.json'
import staking from '../../../assets/staking.json'
import blockchain from '../../../assets/blockchain.json'
import latest from '../../../assets/latest.json'

import './MainContent.css'

function MainContent() {

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)

    const { scrollYProgress: progress1 } = useScroll({
        target: ref1,
        // Bottom of the view port crosses the top of the target
        // Ends when the bottom of the VP has gone 33% of the end of the target 
        offset: ["0 1", "1.33 1"]
    })
    const { scrollYProgress: progress2 } = useScroll({
        target: ref2,
        offset: ["0 1", "1.33 1"]
    })
    const { scrollYProgress: progress3 } = useScroll({
        target: ref3,
        offset: ["0 1", "1.33 1"]
    })
    const { scrollYProgress: progress4 } = useScroll({
        target: ref4,
        offset: ["0 1", "1.33 1"]
    })

    const scaleProgress1 = useTransform(progress1, [0, 1], [0.8, 1])
    const opacityProgress1 = useTransform(progress1, [0, 1], [0.6, 1])

    const scaleProgress2 = useTransform(progress2, [0, 1], [0.8, 1])
    const opacityProgress2 = useTransform(progress2, [0, 1], [0.6, 1])

    const scaleProgress3 = useTransform(progress3, [0, 1], [0.8, 1])
    const opacityProgress3 = useTransform(progress3, [0, 1], [0.6, 1])

    const scaleProgress4 = useTransform(progress4, [0, 1], [0.8, 1])
    const opacityProgress4 = useTransform(progress4, [0, 1], [0.6, 1])

    return (
        <div className="main-content">
            <div className="informational">
                <motion.div className="informational-card"
                    ref={ref1}
                    style={{
                        scale: scaleProgress1,
                        opacity: opacityProgress1
                    }}
                >
                    <div className="image">
                        <Lottie className='lottie' animationData={animationData} />
                    </div>
                    <div className="content">
                        <div dangerouslySetInnerHTML={{ __html: '<b style="font-weight: bold; color: goldenrod; font-size: 20px">Cryptocurrency</b> is a digital or virtual form of currency that uses cryptography for security, enabling secure and decentralized transactions on a blockchain. It operates independently of a central authority, such as a government or financial institution, offering a decentralized and often pseudonymous alternative to traditional currencies.' }} />
                    </div>
                </motion.div>

                <motion.div className="informational-card"
                    ref={ref2}
                    style={{
                        scale: scaleProgress2,
                        opacity: opacityProgress2
                    }}
                >
                    <div className="image">
                        <Lottie className='lottie' animationData={latest} />
                    </div>
                    <div className="content">
                        <div dangerouslySetInnerHTML={{ __html: 'Bitcoin <b style="font-weight: bold; color: goldenrod; font-size: 20px">halving</b> is an event that occurs approximately every four years, reducing the reward miners receive for validating and adding new blocks to the blockchain by 50%. This scarcity mechanism is designed to limit the total supply of Bitcoin, aiming to control inflation and influence its value over time.' }} />
                    </div>
                </motion.div>

                <motion.div className="informational-card"
                    ref={ref3}
                    style={{
                        scale: scaleProgress3,
                        opacity: opacityProgress3
                    }}
                >
                    <div className="image">
                        <Lottie className='lottie' animationData={staking} />
                    </div>
                    <div className="content">
                        <div dangerouslySetInnerHTML={{ __html: 'Cryptocurrency <b style="font-weight: bold; color: goldenrod; font-size: 20px">staking</b> involves holding and locking a certain amount of a digital currency in a specialized wallet to support the operations of a blockchain network, contributing to transaction validation and security, and, in return, earning additional tokens or rewards over time. Stakers are incentivized for their participation in maintaining the network\'s integrity and functionality.' }} />
                    </div>
                </motion.div>

                <motion.div className="informational-card"
                    ref={ref4}
                    style={{
                        scale: scaleProgress4,
                        opacity: opacityProgress4
                    }}
                >
                    <div className="image">
                        <Lottie className='lottie' animationData={blockchain} />
                    </div>
                    <div className="content">
                        <div dangerouslySetInnerHTML={{ __html: 'A <b style="font-weight: bold; color: goldenrod; font-size: 20px">blockchain</b> is a decentralized and distributed digital ledger that records transactions across a network of computers, ensuring transparency, security, and immutability of data. It relies on consensus mechanisms and cryptographic techniques to validate and add new blocks, forming a continuously growing chain of chronological and tamper-resistant records.' }} />
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default MainContent