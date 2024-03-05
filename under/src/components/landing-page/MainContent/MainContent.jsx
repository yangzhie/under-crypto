import React from 'react'

import Lottie from 'lottie-react'
import animationData from '../../../assets/Animation - 1709449613538.json'
import staking from '../../../assets/staking.json'
import blockchain from '../../../assets/blockchain.json'
import latest from '../../../assets/latest.json'

import './MainContent.css'

function MainContent() {
    return (
        <div className="main-content">
            <div className="informational">
                <div className="learn">
                    <div className="image">
                        <img src="https://placehold.co/400x400" alt="" />
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, doloremque sit veniam, consequuntur aspernatur, est nisi eos architecto modi assumenda magni incidunt nesciunt enim alias a et non quia pariatur.
                        Minus facere iure sed doloribus blanditiis sequi commodi cupiditate alias dolor, dignissimos fuga voluptatem modi laudantium ex quo autem obcaecati quas perspiciatis, temporibus suscipit est accusantium velit! Ducimus, ratione corrupti.
                    </div>
                </div>

                <div className="halving">
                    <div className="image">
                        <img src="https://placehold.co/400x400" alt="" />
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, doloremque sit veniam, consequuntur aspernatur, est nisi eos architecto modi assumenda magni incidunt nesciunt enim alias a et non quia pariatur.
                        Minus facere iure sed doloribus blanditiis sequi commodi cupiditate alias dolor, dignissimos fuga voluptatem modi laudantium ex quo autem obcaecati quas perspiciatis, temporibus suscipit est accusantium velit! Ducimus, ratione corrupti.
                    </div>
                </div>

                <div className="staking">
                    <div className="image">
                        <img src="https://placehold.co/400x400" alt="" />
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, doloremque sit veniam, consequuntur aspernatur, est nisi eos architecto modi assumenda magni incidunt nesciunt enim alias a et non quia pariatur.
                        Minus facere iure sed doloribus blanditiis sequi commodi cupiditate alias dolor, dignissimos fuga voluptatem modi laudantium ex quo autem obcaecati quas perspiciatis, temporibus suscipit est accusantium velit! Ducimus, ratione corrupti.
                    </div>
                </div>

                <div className="blockchain">
                    <div className="image">
                        <img src="https://placehold.co/400x400" alt="" />
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, doloremque sit veniam, consequuntur aspernatur, est nisi eos architecto modi assumenda magni incidunt nesciunt enim alias a et non quia pariatur.
                        Minus facere iure sed doloribus blanditiis sequi commodi cupiditate alias dolor, dignissimos fuga voluptatem modi laudantium ex quo autem obcaecati quas perspiciatis, temporibus suscipit est accusantium velit! Ducimus, ratione corrupti.
                    </div>
                </div>
            </div>

            <div className="svg-animations">
                <div className="animation">
                    <Lottie className='lottie' animationData={animationData} />
                </div>
                <div className="animation">
                    <Lottie className='lottie' animationData={latest} />
                </div>
                <div className="animation">
                    <Lottie className='lottie' animationData={staking} />
                </div>
                <div className="animation">
                    <Lottie className='lottie' animationData={blockchain} />
                </div>
            </div>
        </div>
    )
}

export default MainContent