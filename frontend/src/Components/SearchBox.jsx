import React from 'react'
import search from '../Resources/search.png'

function SearchBox() {
    return (
        <div className="search">
            <input type="text" placeholder={`Search`} />
            <img src={search} alt="search icon" />
        </div>
    )
}

export default SearchBox