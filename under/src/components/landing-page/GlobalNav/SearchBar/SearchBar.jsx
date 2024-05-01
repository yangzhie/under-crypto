import React from 'react'
import { useState } from 'react'

import './SearchBar.css'

import { FaSearch } from "react-icons/fa"

function SearchBar({ setResults }) {

    const [input, setInput] = useState('')

    const fetchData = async (value) => {
        try {
            const res = await fetch('https://api.coinranking.com/v2/search-suggestions')
            const data = await res.json()

            const results = data.data.coins.filter(coin => {
                return (
                    value &&
                    coin &&
                    coin.name &&
                    coin.name.toLowerCase().includes(value)
                )
            })
            setResults(results)
        } catch (error) {
            console.error(`Error fetching data: ${error}`)
        }
    }

    function handleChange(value) {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className="input-wrapper">
            <FaSearch id='search-icon' size={20} />
            <input type="text" placeholder='Type to search...' value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default SearchBar