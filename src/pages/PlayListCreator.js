import React, { useState, useEffect, useCallback } from "react";
import SearchBar from '../components/SearchBar'
import SearchResults from "../components/SearchResults";
import Playlist from "../components/Playlist"
import CreateNewPlaylist from "../services/CreateNewPlaylist";
import SpotifySearch from "../services/SpotifySearch";
import './css/PlayListCreator.css'



function PlayListCreator(props) {
    const [searchString, setSearchString] = useState("search");
    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [spotifyTrackList, setSpotifyTrackList] = useState({});


    const checkPlaylistTracks = useCallback(() => {
        return playlistTracks.length;
    })


    const updateSearchString = useCallback((string) => {
        setSearchString(string);
    });

    const updateSearchResults = useCallback((results) => {
        setSearchResults(results);
      });

// Validates the search string entered

    useEffect(() => {
        if (searchString === "") {
        console.log("no value")
        } else if (searchString ==="search") {
        console.log('Search is not a search term. Please enter a search term')
        } else {
        SpotifySearch(searchString, props.token, updateSearchResults, createSpotifyTrackList, props.logError);
        }
    },[searchString])
    
    // Translate Search Results
    const createSpotifyTrackList = useCallback((tracks) => {
        setSpotifyTrackList([]);
        for (let key in tracks) {
        setSpotifyTrackList((prev) => [...prev, {id:tracks[key].id,
                                                trackname:tracks[key].name,
                                                artist:tracks[key].artists[0].name,
                                                album:tracks[key].album.name, uri:tracks[key].uri}
                                                ])
        }
    })

// Adds a track to the playlist

    // const addTrack = useCallback(
    //     (track) => {
    //     if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
    //         return };
    //     setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    //     console.log(playlistTracks);
    //     }
    // );

    const addTrack = (track) => {       
        setPlaylistTracks((prevTracks) => {
            console.log(prevTracks)
            if (prevTracks.some((savedTrack) => savedTrack.id === track.id)) {
                return [...prevTracks]
            } else {
                return [...prevTracks, track]
            }
        })
    };

// Removes a track from the playlist

    const removeTrack = useCallback((track) => {
        setPlaylistTracks((prevTracks) =>
        prevTracks.filter((currentTrack) => currentTrack.id !==track.id)
        );
    }, []);

    const updatePlayListName = useCallback((name) => {
        setPlaylistName(name);
    }, []);

 // Saves the playlist

    const savePlaylist = useCallback(() => {

        const trackUris = playlistTracks.map((track) => track.uri);

        CreateNewPlaylist(playlistName, trackUris).then(() => {
            setPlaylistName("New Playlist");
            setPlaylistTracks([]);
        });
    }, [playlistName, playlistTracks]);
  

    return (
        <div className="playlistCreator_component">
            <div className="searchBar_div searchBar_web">
                <SearchBar searchString={searchString} onNewSearch={updateSearchString} onAdd={addTrack} />
            </div>
            <div className="header_mobile_only"></div>

        <div className="playlistBody">
            <div className="searchBar_mobile">
                <SearchBar searchString={searchString} onNewSearch={updateSearchString} onAdd={addTrack} />
            </div>
                <div className="searchResults_div">
                    <SearchResults searchString={searchString} spotifyTrackList={spotifyTrackList} onAdd={addTrack}/>
                </div>

                <div className="playlist_div">
                    <Playlist
                    playlistName={playlistName}
                    playlistTracks={playlistTracks}
                    onNameChange={updatePlayListName}
                    onRemove={removeTrack}
                    onSave={savePlaylist}
                    checkPlaylistTracks={checkPlaylistTracks()}
                    />
                </div>
            </div>
        </div>
    )
}

export default PlayListCreator