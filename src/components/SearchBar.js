import '../App.css';
import React, { useEffect, useState, useCallback } from 'react';
import './css/searchBar.css'

function SearchBar(props) {
    const [searchBarText, setSearchBarText] = useState("search")

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            props.onNewSearch(searchBarText);
        });

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
            <div className="search-bar_block">
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