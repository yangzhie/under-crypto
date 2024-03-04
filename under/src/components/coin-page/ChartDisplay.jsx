import React from 'react'
import { CiStar } from "react-icons/ci"
import { MdIosShare } from "react-icons/md"
import { IoDownloadOutline } from "react-icons/io5"
import './ChartDisplay.css'
import './NewsSection.css'
import './SideBar.css'
import './CoinPageGlobal.css'

function ChartDisplay() {
    return (
        <>
            <div className="wrapper">
                <div class="left-column">
                    <div className="header">
                        <img src="src/assets/Bitcoin.svg.png" alt="" />
                        <h2>Bitcoin</h2>
                        <h3>BTC</h3>

                        <a href=""><span><CiStar /></span><p>Add to Watchlist</p></a>
                        <a href=""><span><MdIosShare /></span><p>Share</p></a>
                        <a href=""><span><IoDownloadOutline /></span><p>Download</p></a>
                    </div>

                    <div className="chart-display-section">
                        <div className="chart-top-stack">
                            <span className="chart-current-price">628162</span>
                            <p className="chart-gain-percentage">666%</p>
                            <p>(24h)</p>
                        </div>

                        <div className="chart-section"></div>

                        <div className="chart-statistics">
                            <div className="chart-market-cap">
                                <div>Market Cap (USD)</div>
                                <p>12121</p>
                            </div>

                            <div className="chart-24h-vol">
                                <div>24H Volume (USD)</div>
                                <p>12121</p>
                            </div>

                            <div className="chart-circulating-supply">
                                <div>Circulating Supply</div>
                                <p>12121</p>
                            </div>

                            <div className="chart-max-supply">
                                <div>Max Supply</div>
                                <p>12121</p>
                            </div>

                            <div className="chart-total-supply">
                                <div>Total Supply</div>
                                <p>12121</p>
                            </div>
                        </div>
                    </div>









                    <div className="news-section">
                        <div className="news-header">
                            <span>News</span>
                            <div className="vert-line">|</div>
                            <p>Latest News</p>
                        </div>

                        <div className="news-article">
                            <img src="https://coingape.com/wp-content/uploads/2024/02/bitcoin-rocket.jpg" alt="" />


                            <div className="news-content">
                                <h2 className="title">article title</h2>

                                <p>coingate | 25h ago</p>
                            </div>

                        </div>

                        <button className='load-more'>Load More</button>
                    </div>
                </div>










                <div class="right-column">
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
                </div>
            </div>
        </>
    )
}

export default ChartDisplay