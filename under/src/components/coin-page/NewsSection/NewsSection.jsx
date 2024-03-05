import React from 'react'

import News from './News'

import '../CoinPageGlobal.css'
import './NewsSection.css'

function NewsSection() {
    return (
        <div className="news-section">
            <div className="news-header">
                <span>News</span>
                <div className="vert-line">|</div>
                <p>Latest News</p>
            </div>

            <News />

            <button className='load-more'>Load More</button>
        </div>
    )
}

export default NewsSection