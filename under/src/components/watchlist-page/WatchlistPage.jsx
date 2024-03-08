import React from 'react'

import Watchlist from './Watchlist'
import GlobalNav from '../landing-page/GlobalNav/GlobalNav'

import './WatchlistPage.css'

function WatchlistPage({ coins, onDelete }) {
    return (
        <>
            <GlobalNav />

            <div className="full-wrapper">
                <aside>
                    <h2>Your Watchlists</h2>
                    <div>Watchlist 1</div>
                    <div>Watchlist 2</div>
                    <div>Watchlist 3</div>
                    <div>Watchlist 4</div>
                    <div>Watchlist 5</div>
                </aside>

                <div className="mini-wrapper">
                    <div className="watchlist-header">
                        <h1>Watchlist 1 <span>{coins.length} instruments</span></h1>
                    </div>

                    {coins.map((coin, idx) => (
                        <Watchlist
                            key={idx}
                            onDelete={onDelete}
                            coin={coin}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default WatchlistPage
