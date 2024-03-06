import React from 'react'

import './Watchlist.css'

function Watchlist({ coin, onDelete }) {
    return (
        <>
            <img src={coin.iconUrl} alt="" />

            <div className="left-hand-side">
                <div>{coin.symbol}</div>
                <div>{coin.name}</div>
            </div>

            <div className="middle-side-1">
                {coin.marketCap}
            </div>

            <div className="middle-side-2">
                {coin.change}
            </div>

            <div className="right-hand-side">
                <div>{coin.price}</div>
                <div>{coin.rank}</div>
            </div>

            <div className="remove-btn" onClick={() => onDelete(coin)}>
                <button>Remove from Watchlist</button>
            </div>
        </>
    )
}

export default Watchlist
