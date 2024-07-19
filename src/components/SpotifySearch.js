import React, { useState } from 'react';

const SpotifySearch = () => {
  const [searchKey, setSearchKey] = useState('');
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);

  const searchArtists = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('spotify_access_token');

    if (!token) {
      setError('No access token found');
      return;
    }

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=artist`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch artists');
      }

      const data = await response.json();
      setArtists(data.artists.items);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching artists:', error);
    }
  };

  return (
  <></>
  );
};

export default SpotifySearch;