import '../App.css';
import React, { useEffect, useState } from 'react';
import './css/searchBar.css'

function SearchBar({searchString, setSearchString}) {
    const [searchBarText, setSearchBarText] = useState("search")

    function handleSubmit(e) {
        e.preventDefault();
        setSearchString(searchBarText);
    };

    const handleUserInput = ({target}) => {
        return setSearchBarText(target.value)
    };
      
    function handleFocus(e) {
        if (e.target.value ==='search') {setSearchBarText('')}
    }

    function handleBlur(e) {
        if (e.target.value ==='') {setSearchBarText('search')}
    }

    return (
        <>
            <div className="search-bar">
                <form onSubmit={handleSubmit}>
                    <input className="searchBox"
                            id="searchString"
                            type="text"
                            value={searchBarText}
                            onChange={handleUserInput}
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