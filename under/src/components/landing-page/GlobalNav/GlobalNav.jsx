import React from 'react'
import { useState } from 'react'

import SearchBar from './SearchBar/SearchBar'
import SearchList from './SearchBar/SearchList'

import './GlobalNav.css'
import { Link } from 'react-router-dom'

function GlobalNav() {

    const [results, setResults] = useState([])

    return (
        <>
            <div className="global-nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><Link to={"/watchlist"}>watchlist</Link></li>
                    <li><a href="">Businesses</a></li>
                    <li><a href="">Developers</a></li>
                    <li><a href="">Learn</a></li>
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