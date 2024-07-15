import React, { useCallback } from 'react';
import './css/Track.css'

function Track(props) {

    const addTrack = useCallback(
        (e) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );


    const removeTrack = useCallback(
        (e) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track]
    )

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className="Track-action" onClick={removeTrack}>
                    -
                </button>
            );
        }
        return (
        <button className="Track-action" onClick={addTrack}>
            +
        </button>           
        );
    };


    return (
        <tr className='track_row'>
            <td className="track_box">
                <div className="song_info">
                    <h2 className="trackTitle">{props.songName}</h2>
                    <h3 className="trackArtist">{props.artist} | {props.album}</h3>
                </div>
                <div className="add_or_remove_button">
                    <span>{renderAction()}</span>
                </div>
            </td>
        </tr>
    )
}

export default Track;