import React from 'react'

import Watchlist from './Watchlist'

import './WatchlistPage.css'

function WatchlistPage({ coins, onDelete }) {
    return (
        <>
            <div className="full-wrapper">
                <aside>
                    <h2>Watchlists</h2>
                    <div>watchlist 1</div>
                    <div>watchlist 2</div>
                    <div>watchlist 3</div>
                    <div>watchlist 4</div>
                    <div>watchlist 5</div>
                </aside>

                <div className="wrapper">
                    <div className="watchlist-header">
                        <h1>Watchlist 1</h1>
                        <h2>you have {coins.length} instruments</h2>
                    </div>

                    <div className='card'>
                        {coins.map((coin, idx) => (
                            <Watchlist
                                key={idx}
                                onDelete={onDelete}
                                coin={coin}
                            />
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}
export default WatchlistPage
