const apiXKey = import.meta.env.VITE_X_API_KEY

console.log(apiXKey);

import React, { useState, useEffect } from 'react'

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

    return (
        <div className="item">
            <a href="">
                <img src={coinData.icon} alt="" />
                <span className="symbol">{coinData.symbol}</span>
                <span className="name">{coinData.name}</span>

                <p className="current-price">{coinData.currentPrice}</p>

                <p className="gain-to-date">{coinData.gainToDate}</p>

                <p className="market-cap">{coinData.marketCap}</p>

                <div className="trade-btn">
                    <a href="">Trade</a>
                </div>
            </a>
        </div>
    )
}

export default Coin