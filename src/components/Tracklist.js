import React from 'react';
import Track from './Track';
import './css/tracklist.css'

function Tracklist(props) {

    return (
        <>
            <div className='tracklist'>
                <p>This is the Tracklist</p>
                <Track />
                <p>Track</p>
                <br />
                <p>Track</p>
                <br />
                <p>Track</p>
                <br />
                <p>Track</p>
                <br />
                <p>Track</p>
                <br />
            </div>
        </>
    )
}

export default Tracklist;