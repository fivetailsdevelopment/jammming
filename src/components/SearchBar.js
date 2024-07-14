import React from 'react';
import './css/searchBar.css'

function SearchBar({searchString, setSearchString}) {
    
    function handleSubmit(e) {
        e.preventDefault();
    };
    
    function handleFocus(e) {
        if (e.target.value ==='search') {setSearchString('')}
    }

    function handleBlur(e) {
        if (e.target.value ==='') {setSearchString('search')}
    }

    return (
        <>
            <div className="search-bar">
                <form onSubmit={handleSubmit}>
                    <input className="searchBox"
                            id="searchString"
                            value={searchString}
                            type="text"
                            onChange={(e) => setSearchString(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            />
                    <input className="submitButton" id="submit" type="submit" value=""/>
                </form>
            </div>
        </>
    )
}

export default SearchBar;