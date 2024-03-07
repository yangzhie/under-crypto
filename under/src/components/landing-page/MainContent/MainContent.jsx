import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Lottie from 'lottie-react'
import animationData from '../../../assets/Animation - 1709449613538.json'
import staking from '../../../assets/staking.json'
import blockchain from '../../../assets/blockchain.json'
import latest from '../../../assets/latest.json'

import './MainContent.css'
import { useRef } from 'react'

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, doloremque sit veniam, consequuntur aspernatur, est nisi eos architecto modi assumenda magni incidunt nesciunt enim alias a et non quia pariatur.
                        Minus facere iure sed doloribus blanditiis sequi commodi cupiditate alias dolor, dignissimos fuga voluptatem modi laudantium ex quo autem obcaecati quas perspiciatis, temporibus suscipit est accusantium velit! Ducimus, ratione corrupti.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, doloremque sit veniam, consequuntur aspernatur, est nisi eos architecto modi assumenda magni incidunt nesciunt enim alias a et non quia pariatur.
                        Minus facere iure sed doloribus blanditiis sequi commodi cupiditate alias dolor, dignissimos fuga voluptatem modi laudantium ex quo autem obcaecati quas perspiciatis, temporibus suscipit est accusantium velit! Ducimus, ratione corrupti.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, doloremque sit veniam, consequuntur aspernatur, est nisi eos architecto modi assumenda magni incidunt nesciunt enim alias a et non quia pariatur.
                        Minus facere iure sed doloribus blanditiis sequi commodi cupiditate alias dolor, dignissimos fuga voluptatem modi laudantium ex quo autem obcaecati quas perspiciatis, temporibus suscipit est accusantium velit! Ducimus, ratione corrupti.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, doloremque sit veniam, consequuntur aspernatur, est nisi eos architecto modi assumenda magni incidunt nesciunt enim alias a et non quia pariatur.
                        Minus facere iure sed doloribus blanditiis sequi commodi cupiditate alias dolor, dignissimos fuga voluptatem modi laudantium ex quo autem obcaecati quas perspiciatis, temporibus suscipit est accusantium velit! Ducimus, ratione corrupti.
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default MainContent