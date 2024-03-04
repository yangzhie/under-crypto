import React from 'react'
import './NewsSection.css'
import './CoinPageGlobal.css'

function NewsSection() {
    return (
        <div className="news-section">
            <div className="news-header">
                <span>News</span>
                <div className="vert-line">|</div>
                <p>Latest News</p>
            </div>

            <div className="news-article">
                <img src="https://coingape.com/wp-content/uploads/2024/02/bitcoin-rocket.jpg" alt="" />
                <div className="article-content">
                    <h2 className="title">article title</h2>
                </div>

                <div className="article-footer">
                    <p>coingate</p>
                    <div className="vert-line">|</div>
                    <p>25h ago</p>
                </div>
            </div>

            <button className='load-more'>Load More</button>
        </div>
    )
}

export default NewsSection