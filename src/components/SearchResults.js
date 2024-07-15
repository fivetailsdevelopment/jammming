import '../App.css';
import './css/searchResults.css'
import React, { useState, useEffect } from 'react';
import Tracklist from './Tracklist';
import { SampleData } from './SampleData';

function SearchResults(props) {
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        let filteredArray = [];
        setSearchList((prev) => { 
            if (props.searchString === "") {
                return (SampleData)
            } else if (props.searchString === "search") {
                return (SampleData)
            } else {
                for (let i=0; i < SampleData.length; i++) {
                    for (const key in SampleData[i]) {
                        let testVal = SampleData[i][key]
                        if (testVal.toLowerCase().includes(props.searchString.toLowerCase())) {
                        filteredArray.push(SampleData[i]);
                        }
                    }
                }
            return (filteredArray)
            }
        }
        )
    }, [props.searchString]);

    return (
        <>
            <div className='tracklist'>
                <h1>Search Results</h1>
                <Tracklist searchList={searchList} onAdd={props.onAdd} listType="searchlist"/>
            </div>
        </>
    )
}

export default SearchResults;