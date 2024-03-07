import React from 'react'
import { useState, useEffect } from 'react'
import { checkColor, formatter, checkIfInfinite } from '../../../utils'

import ChartVisual from './ChartVisual'

import { CiStar } from "react-icons/ci"
import { MdIosShare } from "react-icons/md"
import { IoDownloadOutline } from "react-icons/io5"

import './ChartDisplay.css'
import '../CoinPageGlobal.css'

function ChartDisplay({ coinId, onAdd }) {

    const [coinData, setCoinData] = useState({})

    const [img, setImg] = useState('')
    const [fullName, setFullName] = useState('')
    const [symbol, setSymbol] = useState('')
    const [currentPrice, setCurrentPrice] = useState(0)
    const [gainToDate, setGainToDate] = useState(0)
    const [marketCap, setMarketCap] = useState(0)
    const [vol24h, setVol24h] = useState(0)
    const [circSupply, setCircSupply] = useState(0)
    const [maxSupply, setMaxSupply] = useState(0)
    const [totalSupply, setTotalSupply] = useState(0)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.coinranking.com/v2/coin/${coinId}`)
                const data = await res.json()

                setImg(data.data.coin.iconUrl)
                setFullName(data.data.coin.name)
                setSymbol(data.data.coin.symbol)
                setCurrentPrice(data.data.coin.price)
                setGainToDate(data.data.coin.change)
                setMarketCap(data.data.coin.marketCap)
                setVol24h(data.data.coin["24hVolume"])
                setCircSupply(data.data.coin.supply.circulating)
                setMaxSupply(data.data.coin.supply.max)
                setTotalSupply(data.data.coin.supply.total)
            } catch (error) {
                `Error fetching data for ${coinId}: ${error}`
            }
        }
        fetchData()
    }, [coinId])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.coinranking.com/v2/coin/${coinId}`)
                const data = await res.json()

                const coinInfo = {
                    iconUrl: data.data.coin.iconUrl,
                    symbol: data.data.coin.symbol,
                    name: data.data.coin.name,
                    price: data.data.coin.price,
                    marketCap: data.data.coin.marketCap,
                    change: data.data.coin.change,
                    rank: data.data.coin.rank
                }
                setCoinData(coinInfo)
            } catch (error) {
                console.error(`Error fetching data for ${coinId}: ${error}`)
            }
        }
        fetchData()
    }, [coinId])

    return (
        <>
            <div className="header">
                <img src={img} />
                <h2>{fullName}</h2>
                <h3>{symbol}</h3>

                <a href="#" onClick={() => onAdd(coinData)}>
                    <span className='svg-chart'><CiStar color='goldenrod' /></span>
                    <p>Add to Watchlist</p>
                </a>
                <a href=""><span className='svg-chart'><MdIosShare color='goldenrod' /></span><p>Share</p></a>
                <a href=""><span className='svg-chart'><IoDownloadOutline color='goldenrod' /></span><p>Download</p></a>
            </div>

            <div className="chart-display-section">
                <div className="chart-top-stack">
                    <span className="chart-current-price">${formatter(currentPrice)}</span>
                    <p className={`chart-gain-percentage ${checkColor(gainToDate)}`}>{gainToDate}%</p>
                    <p className='twentyfourhour'>[24H]</p>
                </div>

                <ChartVisual coinId={coinId} />

                <div className="chart-statistics">
                    <div className="chart-market-cap">
                        <div>Market Cap (USD)</div>
                        <p>${formatter(marketCap)}</p>
                    </div>

                    <div className="chart-24h-vol">
                        <div>24H Volume (USD)</div>
                        <p>${formatter(vol24h)}</p>
                    </div>

                    <div className="chart-circulating-supply">
                        <div>Circulating Supply</div>
                        <p>{formatter(circSupply)}</p>
                    </div>

                    <div className="chart-max-supply">
                        <div>Max Supply</div>
                        <p>{checkIfInfinite(formatter(maxSupply))}</p>
                    </div>

                    <div className="chart-total-supply">
                        <div>Total Supply</div>
                        <p>{formatter(totalSupply)}</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ChartDisplay