const apiCoinrankingKey = import.meta.env.VITE_COINRANKING_KEY

import React from 'react'
import { useState, useEffect } from 'react'

import { SiConvertio } from "react-icons/si"
import { BsCurrencyExchange } from "react-icons/bs"

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
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.coinranking.com/v2/coin/${coinId}/ohlc?interval=day&limit=1`, options)
                const data = await res.json()

                setHigh24h(data.data.ohlc[0].high)
                setLow24h(data.data.ohlc[0].low)
            } catch (error) {
                `Error fetching data for ${coinId}: ${error}`
            }
        }
        fetchData()
    }, [coinId])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.coinranking.com/v2/coin/${coinId}/ohlc?interval=week&limit=1`, options)
                const data = await res.json()

                setHigh7d(data.data.ohlc[0].high)
                setLow7d(data.data.ohlc[0].low)
            } catch (error) {
                `Error fetching data for ${coinId}: ${error}`
            }
        }
        fetchData()
    }, [coinId])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.coinranking.com/v2/coin/${coinId}/ohlc?interval=month&limit=1`, options)
                const data = await res.json()

                setHigh1mo(data.data.ohlc[0].high)
                setLow1mo(data.data.ohlc[0].low)
            } catch (error) {
                `Error fetching data for ${coinId}: ${error}`
            }
        }
        fetchData()
    }, [coinId])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.coinranking.com/v2/coin/${coinId}/ohlc?interval=month&limit=3`, options)
                const data = await res.json()

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
            } catch (error) {
                `Error fetching data for ${coinId}: ${error}`
            }
        }
        fetchData()
    }, [coinId])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.coinranking.com/v2/coin/${coinId}`, options)
                const data = await res.json()

                setATH(data.data.coin.allTimeHigh.price)
                setCurrentPrice(data.data.coin.price)

                setImg(data.data.coin.iconUrl)
                setSymbol(data.data.coin.symbol)
            } catch (error) {
                `Error fetching data for ${coinId}: ${error}`
            }
        }
        fetchData()
    }, [coinId])

    function formatter(value) {
        return Intl.NumberFormat('en', {
            notation: 'compact',
            maximumSignificantDigits: 4
        }).format(value)
    }

    return (
        <>
            <div className="coin-converter">
                <div className="coin-converter-header">
                    <h2>Convert Coins</h2>
                </div>

                <div className="coin-to-be-converted">
                    <img src={img} />
                    <p style={{ fontWeight: 'bolder' }}>{symbol}</p>
                    <input type="text" name="" id="" />
                </div>

                <div className="middle-breaker">
                    <SiConvertio size={40} color='goldenrod' />
                </div>

                <div className="converted-coin">
                    <BsCurrencyExchange size={30} />
                    <p style={{ marginLeft: '9px', fontWeight: 'bolder' }}>USD</p>
                    <input type="text" name="" id="" />
                </div>

                <h3 className="coin-converted-price">1 {symbol} = ${formatter(currentPrice)} USD</h3>

                <button className='coin-buy'>BUY</button>
            </div>

            <div className="coin-stats">
                <div className="coin-stats-header">
                    {symbol} Price Statistics
                </div>

                <div className="coin-stats-current-price">
                    <p>Current Price</p> <p>${formatter(currentPrice)}</p>
                </div>

                <div className="twentyfourh-hi-lo">
                    <p>24H high / 24H low</p> <p>${formatter(high24h)} / ${formatter(low24h)}</p>
                </div>

                <div className="sevend-hi-lo">
                    <p>7d high / 7d low</p> <p>${formatter(high7d)} / ${formatter(low7d)}</p>
                </div>

                <div className="thirtyd-hi-lo">
                    <p>30d high / 30d low</p> <p>${formatter(high1mo)} / ${formatter(low1mo)}</p>
                </div>

                <div className="ninetyd-hi-lo">
                    <p>90d high / 90d low</p> <p>${formatter(highestPrice)} / ${formatter(lowestPrice)}</p>
                </div>

                <div className="ath-atl">
                    <p>All-time high</p> <p>${formatter(ATH)}</p>
                </div>
            </div>
        </>
    )
}

export default SideBar