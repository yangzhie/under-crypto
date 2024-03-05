import React, { useState, useEffect } from 'react'

import './CryptoList.css'

import Coin from './Coin.jsx'

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

                    <Coin coinName="bitcoin" />
                    <Coin coinName="ethereum" />
                    <Coin coinName="solana" />
                    <Coin coinName="cardano" />
                    <Coin coinName="ripple" />
                    <Coin coinName="dogecoin" />
                    <Coin coinName="litecoin" />

                    <div className="load">
                        <a href="" className="load-btn">Load More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoList