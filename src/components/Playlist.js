import React from 'react';
import './css/playlist.css'

function Playlist(props) {

    return (
        <div className="playlist">
            <form className="form_box">
            <table className="playlist_table">
                <thead>
                    <tr>
                        <td className="input_box_cell">
                        <input className="playlistTitleInput"
                                type="text" id="playlistName"
                                value={props.playlistName}
                                onChange={(e) => props.setPlaylistName(e.target.value)}
                                />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tracks will go here</td>
                    </tr>
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
