import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';


function App() {
  const [searchString, setSearchString] = useState("search");
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  },
  [playlistTracks]
);
  
  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
    prevTracks.filter((currentTrack) => currentTrack.id !==track.id)
  );
  },[]);

  const updatePlayListName = useCallback((name) => {
    setPlaylistName(name);
  }, []);


  return (
    
    <div className="App">
      <div className="searchBar">
        <SearchBar searchString={searchString} setSearchString={setSearchString}/>
      </div>
      <div>
        <SearchResults searchString={searchString} onAdd={addTrack}/>
      </div>
      <div>
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlayListName}
          onRemove={removeTrack}
          listType="playlist"
        />
      </div>
    </div>
    
  );
}

export default App;
