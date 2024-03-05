const apiCoinrankingKey = import.meta.env.VITE_COINRANKING_KEY

console.log(apiCoinrankingKey);

import React from 'react'
import { useState, useEffect } from 'react'

import '../CoinPageGlobal.css'
import './SideBar.css'

function SideBar({ coinId }) {

    const [currentPrice, setCurrentPrice] = useState(0)

    const [high24h, setHigh24h] = useState(0)
    const [low24h, setLow24h] = useState(0)

    const [high7d, setHigh7d] = useState(0)
    const [low7d, setLow7d] = useState(0)

    const [high1mo, setHigh1mo] = useState(0)
    const [low1mo, setLow1mo] = useState(0)

    const [highestPrice, setHighestPrice] = useState(0)
    const [lowestPrice, setLowestPrice] = useState(0)

    const [ATH, setATH] = useState(0)

    const [img, setImg] = useState('')
    const [symbol, setSymbol] = useState('')

    const options = {
        headers: {
            'x-access-token': apiCoinrankingKey,
        }
    }

    useEffect(() => {
        fetch(`https://api.coinranking.com/v2/coin/${coinId}/ohlc?interval=day&limit=1`, options)
            .then((res) => res.json())
            .then((data) => {
                setHigh24h(data.data.ohlc[0].high)
                setLow24h(data.data.ohlc[0].low)
            })
    }, [coinId])

    useEffect(() => {
        fetch(`https://api.coinranking.com/v2/coin/${coinId}/ohlc?interval=week&limit=1`, options)
            .then((res) => res.json())
            .then((data) => {
                setHigh7d(data.data.ohlc[0].high)
                setLow7d(data.data.ohlc[0].low)
            })
    }, [coinId])

    useEffect(() => {
        fetch(`https://api.coinranking.com/v2/coin/${coinId}/ohlc?interval=month&limit=1`, options)
            .then((res) => res.json())
            .then((data) => {
                setHigh1mo(data.data.ohlc[0].high)
                setLow1mo(data.data.ohlc[0].low)
            })
    }, [coinId])

    useEffect(() => {
        fetch(`https://api.coinranking.com/v2/coin/${coinId}/ohlc?interval=month&limit=3`, options)
            .then((res) => res.json())
            .then((data) => {
                const month1high = data.data.ohlc[0].high
                const month1low = data.data.ohlc[0].low

                const month2high = data.data.ohlc[1].high
                const month2low = data.data.ohlc[1].low

                const month3high = data.data.ohlc[2].high
                const month3low = data.data.ohlc[2].low

                function calculateHigh() {
                    const highestPrice = Math.max(month1high, month2high, month3high)
                    return setHighestPrice(highestPrice)
                }

                function calculateLow() {
                    const lowestPrice = Math.min(month1low, month2low, month3low)
                    return setLowestPrice(lowestPrice)
                }

                calculateHigh()
                calculateLow()
            })
    }, [coinId])

    useEffect(() => {
        fetch(`https://api.coinranking.com/v2/coin/${coinId}`, options)
            .then((res) => res.json())
            .then((data) => {
                setATH(data.data.coin.allTimeHigh.price)
                setCurrentPrice(data.data.coin.price)

                setImg(data.data.coin.iconUrl)
                setSymbol(data.data.coin.symbol)
            })
    }, [coinId])

    return (
        <>
            <div className="right-column">
                <div className="coin-converter">
                    <div className="coin-converter-header">
                        <h2>coin convert</h2>
                    </div>

                    <p className='amount'>amount</p>

                    <div className="coin-to-be-converted">
                        <img src={img} />
                        <p>{symbol}</p>
                        <input type="text" name="" id="" />
                    </div>

                    <div className="middle-breaker">
                        insert svg of conversion
                    </div>

                    <div className="converted-coin">
                        <img src="src/assets/usd-circle.png" alt="" />
                        <p>USD</p>
                        <input type="text" name="" id="" />
                    </div>

                    <h3 className="coin-converted-price">1{symbol} = {currentPrice} USD</h3>

                    <button className='coin-buy'>BUY NOW!</button>
                </div>

                <div className="coin-stats">
                    <div className="coin-stats-header">
                        {symbol} PRICE STATS
                    </div>

                    <div className="coin-stats-current-price">
                        <p>{symbol} PRICE</p> <p>{currentPrice}</p>
                    </div>

                    <div className="twentyfourh-hi-lo">
                        <p>24h hi/24h lo</p> <p>{high24h} / {low24h}</p>
                    </div>

                    <div className="sevend-hi-lo">
                        <p>7d hi/7d lo</p> <p>{high7d} / {low7d}</p>
                    </div>

                    <div className="thirtyd-hi-lo">
                        <p>30d hi/30d lo</p> <p>{high1mo} / {low1mo}</p>
                    </div>

                    <div className="ninetyd-hi-lo">
                        <p>90d hi/90d lo</p> <p>{highestPrice} / {lowestPrice}</p>
                    </div>

                    <div className="ath-atl">
                        <p>All-time high</p> <p>{ATH}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar