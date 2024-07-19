import '../App.css';
import './css/searchResults.css'
import React, { useState, useEffect } from 'react';
import Tracklist from './Tracklist';

function SearchResults(props) {

    return (
        <>
            <div className='tracklist'>
                <div className="tracklist_container">
                    <Tracklist onAdd={props.onAdd} spotifyTrackList={props.spotifyTrackList} listType="searchlist"/>
                </div>
            </div>
        </>
    )
}

export default SearchResults;