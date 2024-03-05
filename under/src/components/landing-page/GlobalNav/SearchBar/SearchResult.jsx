import React from 'react'
import { useNavigate } from 'react-router-dom'

import './SearchResult.css'

function SearchResult({ result }) {

    const navigate = useNavigate()

    const handleResultClick = () => {
        const coinId = result.uuid;
        navigate(`/coin/${coinId}`);
    }

    return (
        <div className='search-result' onClick={handleResultClick}>{result.name}</div >
    )
}

export default SearchResult