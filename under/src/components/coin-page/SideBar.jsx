import React from 'react'
import './SideBar.css'
import './CoinPageGlobal.css'

function SideBar() {
    return (
        <>
            <div className="coin-converter">
                <div className="coin-converter-header">
                    <h2>coin convert</h2>
                </div>

                <p className='amount'>amount</p>

                <div className="coin-to-be-converted">
                    <img src="src/assets/Bitcoin.svg.png" alt="" />
                    <p>BTC</p>
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

                <h3 className="coin-converted-price">1btc = 18812 USD</h3>

                <button className='coin-buy'>BUY NOW!</button>
            </div>

            <div className="coin-stats">
                <div className="coin-stats-header">
                    BTC PRICE STATS
                </div>

                <div className="coin-stats-current-price">
                    <p>BITCOIN PRICE</p> <p>127192</p>
                </div>

                <div className="twentyfourh-hi-lo">
                    <p>24h hi/24h lo</p> <p>21218/444</p>
                </div>

                <div className="sevend-hi-lo">
                    <p>7d hi/7d lo</p> <p>21218/444</p>
                </div>

                <div className="thirtyd-hi-lo">
                    <p>30d hi/30d lo</p> <p>21218/444</p>
                </div>

                <div className="ninetyd-hi-lo">
                    <p>90d hi/90d lo</p> <p>21218/444</p>
                </div>

                <div className="ath-atl">
                    <p>All-time high / All-time low</p> <p>21218/444</p>
                </div>
            </div>
        </>
    )
}

export default SideBar