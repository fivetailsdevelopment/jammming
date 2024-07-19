import React from 'react'
// Saves the playlist

  // const savePlaylistButton = useCallback(() => {
  //   const trackUris = playlistTracks.map((track) => track.uri);
  //   savePlaylist(playlistName, trackUris).then(() => {
  //     setPlaylistName("New Playlist");
  //     setPlaylistTracks([]);
  //   });
  // }, [playlistName, playlistTracks]);


  // function savePlaylist(name, trackUris, token) {
  //   if (!name || !trackUris.length) {
  //     return;
  //   }
  
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/json'
  //   };
  //   let userId;
  
  //   return fetch('https://api.spotify.com/v1/me', { headers: headers })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch user information');
  //       }
  //       return response.json();
  //     })
  //     .then(jsonResponse => {
  //       userId = jsonResponse.id;
  //       console.log('User ID:', userId);
  //       return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
  //         headers: headers,
  //         method: 'POST',
  //         body: JSON.stringify({ name: name })
  //       });
  //     })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to create playlist');
  //       }
  //       return response.json();
  //     })
  //     .then(jsonResponse => {
  //       const playlistId = jsonResponse.id;
  //       console.log('Playlist ID:', playlistId);
  //       return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
  //         headers: headers,
  //         method: 'POST',
  //         body: JSON.stringify({ uris: trackUris })
  //       });
  //     })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to add tracks to playlist');
  //       }
  //       return response.json();
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }