import '../App.css';
import React, { useState, useEffect, useCallback } from 'react';
import './css/playlist.css'
import Tracklist from './Tracklist';

function Playlist(props) {

    const handleNameChange = useCallback(
        (event) => {
          props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );

    return (
        <div className="playlist">
            <form className="form_box">
            <table className="playlist_table">
                <thead>
                    <tr>
                        <td className="input_box_cell">
                        <input className="playlistTitleInput" type="text" onChange={handleNameChange} defaultValue={"New Playlist"} />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <Tracklist tracks={props.playlistTracks}
                                isRemoval={true}
                                onRemove={props.onRemove}
                                listType="playlist"
                                />
                </tbody>
                <tfoot>
                    <tr>
                        <td><input className="button_SaveToSpotify" type="submit" value="Save to Spotify" /></td>
                    </tr>
                </tfoot>
            </table>
            </form>
            
        </div>
    )
}

export default Playlist;
