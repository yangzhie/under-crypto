import React from 'react'

import './Watchlist.css'

function Watchlist({ coin, onDelete }) {

    function formatter(value) {
        return Intl.NumberFormat('en', {
            notation: 'compact',
            maximumSignificantDigits: 4
        }).format(value)
    }

    function checkColor(value) {
        if (value < 0) {
            return 'negative'
        } else if (value > 0) {
            return 'positive'
        } else {
            return 'neutral'
        }
    }

    return (
        <>
            <div className='card'>
                <div className="initial">
                    <img src={coin.iconUrl} />
                    <div>
                        <div>{coin.symbol}</div>
                        <div>{coin.name}</div>
                    </div>
                </div>

                <div className="owned">
                    <span>Owned</span>
                    <span>0.0</span>
                </div>

                <div className="change-percentage">
                    <span>% Change</span>
                    <span className={checkColor(coin.change)}>{coin.change}%</span>
                </div>

                <div className="final">
                    <div><span>Current Price:</span> ${formatter(coin.price)}</div>
                    <div><span>Coin Rank:</span> {coin.rank}</div>
                </div>

                <div className="remove-btn" onClick={() => onDelete(coin)}>
                    <button>Remove</button>
                </div>
            </div >
        </>
    )
}

export default Watchlist
