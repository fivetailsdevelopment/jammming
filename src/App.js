import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import React, { useState } from 'react';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Tracklist from './components/Tracklist';

function App() {
  const [searchString, setSearchString] = useState("search");
  const [track, setTrack] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState([]);
  const [tracklist, setTracklist] = useState([]);
  const [searchResult, setSearchResult] = useState([]);


  return (
    
    <div className="App">
      <div className="searchBar">
        <SearchBar searchString={searchString} setSearchString={setSearchString}/>
      </div>
      <div>
        <SearchResults searchResult={searchResult} setSearchResult={setSearchResult} searchString={searchString} track={track} setTrack={setTrack}/>
      </div>
      <div>
        <Tracklist tracklist={tracklist} setTracklist={setTracklist} track={track} setTrack={setTrack}/>
      </div> 
      <div>
        <Playlist playlist={playlist} setPlaylist={setPlaylist} playlistName={playlistName} setPlaylistName={setPlaylistName} searchResult={searchResult} track={track} setTrack={setTrack}/>
      </div>
    </div>
    
  );
}

export default App;
