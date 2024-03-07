const apiXKey = import.meta.env.VITE_X_API_KEY

console.log(apiXKey);

import React, { useState, useEffect } from 'react'
import { motion, useTransform, useViewportScroll, useAnimation } from "framer-motion"


import './Coin.css'

const Coin = ({ coinName }) => {
    const [coinData, setCoinData] = useState({})

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': apiXKey
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://openapiv1.coinstats.app/coins/${coinName}`, options)
                const data = await res.json()

                const coinInfo = {
                    icon: data.icon,
                    symbol: data.symbol,
                    name: data.name,
                    currentPrice: data.price,
                    gainToDate: data.priceChange1d,
                    marketCap: data.marketCap
                }

                setCoinData(coinInfo)
            } catch (error) {
                console.error(`Error fetching data for ${coinName}: ${error}`)
            }
        };

        fetchData();
    }, [coinName, options])

    function formatter(value) {
        return Intl.NumberFormat('en', {
            notation: 'compact',
            maximumSignificantDigits: 4
        }).format(value)
    }

    function checkColor(value) {
        if (value < 0) {
            return 'negative'
        } else if (value > 0) {
            return 'positive'
        } else {
            return 'neutral'
        }
    }

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <motion.div
            className="item"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <a href="">
                <span className="symbol-name">
                    <span><img src={coinData.icon} alt="" /></span>
                    <span className='symbol-name-inside'>
                        <span className='symbol-crypto-list'>{coinData.symbol}</span>
                        <span className='symbol-name-list'>{coinData.name}</span>
                    </span>
                </span>

                <p className="current-price-coin">${formatter(coinData.currentPrice)}</p>

                <p className={`gain-to-date ${checkColor(coinData.gainToDate)}`}>{formatter(coinData.gainToDate)}%</p>

                <p className="market-cap-coin">${formatter(coinData.marketCap)}</p>

                <div className="trade-btn">
                    <a href="">Trade</a>
                </div>
            </a>
        </motion.div>
    )
}

export default Coin