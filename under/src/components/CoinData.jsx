import React, { useState, useEffect } from 'react';

export default function CoinData() {
    const [test, setTest] = useState([])

    useEffect(() => {
        fetch('https://api.kraken.com/0/public/Ticker')
            .then(res => res.json())
            .then(data => {
                const value = data["result"]["1INCHEUR"]["a"]
                setTest(value)
            })

    }, [])

    return (
        <div>{test[2]}</div>

    )
}