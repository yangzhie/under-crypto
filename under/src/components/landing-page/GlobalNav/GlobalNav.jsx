import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar/SearchBar'
import SearchList from './SearchBar/SearchList'

import './GlobalNav.css'

function GlobalNav() {

    const [results, setResults] = useState([])

    return (
        <>
            <div className="global-nav">
                <ul>
                    <li><img src="/under-high-resolution-logo-transparent.png" /></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Businesses</a></li>
                    <li><a href="/">Developers</a></li>
                    <li><a href="/">Learn</a></li>
                    <li><Link to={"/watchlist"}>Watchlist</Link></li>
                    <li>
                        <div className="search-bar-container">
                            <SearchBar setResults={setResults} />
                            <SearchList results={results} />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default GlobalNav