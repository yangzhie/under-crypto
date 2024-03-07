import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './CryptoList.css'

import Coin from './Coin.jsx'

function CryptoList() {

    const [visibleCoins, setVisibleCoins] = useState(3)

    const handleLoadMore = () => {
        setVisibleCoins((prevVisibleCoins) => prevVisibleCoins + 3)
    }

    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
    }

    useEffect(() => {
        setVisibleCoins(3);
    }, [])

    return (
        <div className="crypto-list">
            <h2>Trending Crypto Assets</h2>
            <div className="row">
                <div className="row-flex">
                    <div className="guideline">
                        <h2>Current Price</h2>
                        <h2>Gain to Date</h2>
                        <h2>Market Cap</h2>
                    </div>

                    {['bitcoin', 'ethereum', 'solana', 'cardano', 'ripple', 'dogecoin', 'litecoin']
                        .slice(0, visibleCoins)
                        .map((coinName) => (
                            <Coin key={coinName} coinName={coinName} />
                        ))}

                    {visibleCoins < 7 && (
                        <motion.div className="load" whileHover={{ scale: 1.1 }}>
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                onClick={handleLoadMore}
                                className="load-btn"
                            >
                                Load More
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CryptoList