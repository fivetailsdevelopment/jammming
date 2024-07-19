import '../App.css';
import React, { useCallback } from 'react';
import './css/playlist.css'
import Tracklist from './Tracklist';


function Playlist(props) {

    const handleNameChange = useCallback(
        (event) => {
          props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );

    const handleSavePlaylist = useCallback(
    (event) => {
        event.preventDefault()
        props.savePlaylist()
    }
    )

    function handleFocus(e) {
        if (e.target.value === e.target.defaultValue) {e.target.value=""}
    }

    function handleBlur(e) {
        if (e.target.value ==='') {e.target.value = e.target.defaultValue}
    }

    return (
        <div className="playlist">
            <form className="form_box" onSubmit={handleSavePlaylist}>
            <table className="playlist_table">
                <thead>
                    <tr>
                        <td className="input_box_cell">
                        <input className="playlistTitleInput"
                                type="text" onChange={handleNameChange}
                                defaultValue={"Enter a name for your playlist"}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                />
                        </td>
                    </tr>
                </thead>
                <tbody>
                <div className='scrollenable_playlist'>
                    <table><tr><td>
                    <Tracklist tracks={props.playlistTracks}
                                isRemoval={true}
                                onRemove={props.onRemove}
                                listType="playlist"
                                checkPlaylistTracks={props.checkPlaylistTracks}
                                />                        
                    </td></tr></table>
                </div>
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
