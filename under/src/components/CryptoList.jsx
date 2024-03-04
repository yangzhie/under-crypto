import React from 'react'
import './CryptoList.css'

function CryptoList() {
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

                    <div className="item">
                        <a href="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="" />
                            <span className="symbol">BTC</span>
                            <span className="name">Bitcoin</span>

                            <p className="current-price">$62000</p>

                            <p className="gain-to-date">6%</p>

                            <p className="market-cap">$4.3B</p>

                            <div className="trade-btn">
                                <a href="">Trade</a>
                            </div>
                        </a>
                    </div>

                    <div className="load">
                        <a href="" className="load-btn">Load More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoList