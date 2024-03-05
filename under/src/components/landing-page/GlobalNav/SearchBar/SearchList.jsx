import React from 'react'

import SearchResult from './SearchResult'

import './SearchList.css'

function SearchList({ results }) {
    return (
        <div className="results-list">
            {results.map((result, idx) => {
                return (
                    <SearchResult result={result} key={idx} />
                )
            })}
        </div>
    )
}

export default SearchList