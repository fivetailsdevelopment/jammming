import React from "react";

function CreateNewPlaylist(name, trackUris) {

    const tokenCheck = localStorage.getItem('spotify_access_token');
    if (!name || !trackUris.length) {
        return;
    }
    // console.log(tokenCheck);
    const headers = {
        Authorization: `Bearer ${tokenCheck}`,
        'Content-Type': 'application/json'
    };
    let userId;
    
    return fetch('https://api.spotify.com/v1/me', { headers: headers })
        .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch user information');
        }
        return response.json();
        })
        .then(jsonResponse => {
        userId = jsonResponse.id;
        console.log('User ID:', userId);
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({ name: name, description: 'app created playlist', public: false })
        });
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create playlist');
        }
        return response.json();
        })
        .then(jsonResponse => {
        const playlistId = jsonResponse.id;
        console.log('Playlist ID:', playlistId);
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({uris: trackUris})
        });
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add tracks to playlist');
        }
        return response.json();
        })
        .catch(error => {
        console.error('Error:', error);
        });
}

export default CreateNewPlaylist