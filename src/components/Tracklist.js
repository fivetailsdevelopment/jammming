import '../App.css';
import React, { useState, useEffect, useCallback } from 'react';
import Track from './Track';
import './css/tracklist.css'
import { SampleData } from './SampleData';

function Tracklist(props) {

    if (props.listType === 'searchlist') {
    return (
        <table className="trackList_table">
            <tbody>
                {props.searchList!== undefined && props.searchList.map((track) => {

                    return (
                    <Track
                    track={track}
                    songName={track.name}
                    id={track.id}
                    artist={track.artist}
                    album={track.album}
                    key={track.id}
                    onAdd={props.onAdd}
                    onRemove={props.remove}
                    isRemoval={props.isRemoval}
                        />
                    )}
                )}

                {props.searchList === undefined && <Track />}

            </tbody>
        </table>
    )
    } else if (props.listType === 'playlist') {
    return (
        <table className="trackList_table">
            <tbody>
                {props.tracks!== undefined && props.tracks.map((track) => {
                    return (
                    <Track
                    track={track}
                    key={track.id}
                    id={track.id}
                    songName={track.name}
                    artist={track.artist}
                    album={track.album}
                    onRemove={props.onRemove}
                    isRemoval={props.isRemoval}
                        />
                    )}
                )}
                
                {props.tracks === undefined && <Track />}
            </tbody>
        </table>

    )
    }
}

export default Tracklist;