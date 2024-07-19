import '../App.css';
import React, { useState, useEffect, useCallback } from 'react';
import Track from './Track';
import './css/tracklist.css'

function Tracklist(props) {


    if (props.listType === 'searchlist') {
    return (
        <table className="trackList_table">
            <tbody>
            {props.spotifyTrackList.length > 0 && props.spotifyTrackList.map((track) => {
                return (
                    <Track 
                    id={track.id}
                    uri={track.uri}
                    trackname={track.trackname}
                    artist={track.artist}
                    album={track.album}
                    track={track}
                    onAdd={props.onAdd}
                    />

                )
            }
            )}
                {props.spotifyTrackList <= 0 && <Track />}

            </tbody>
        </table>
    )
    } else if (props.listType === 'playlist') {
    return (
        <table className="trackList_table">
            <tbody>
                {props.checkPlaylistTracks > 0 && props.tracks.map((track) => {
                    return (
                    <Track
                    id={track.id}
                    uri={track.uri}
                    trackname={track.trackname}
                    artist={track.artist}
                    album={track.album}
                    track={track}
                    onRemove={props.onRemove}
                    isRemoval={props.isRemoval}
                        />
                    )}
                )}
                
                {props.checkPlaylistTracks <= 0 && <></>}
            </tbody>
        </table>

    )
    }
}

export default Tracklist;