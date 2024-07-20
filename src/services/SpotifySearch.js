const SpotifySearch = async (searchString, token, updateSearchResults, createSpotifyTrackList, logError) => {

    const endpoint = 'https://api.spotify.com/v1/search?'
    const params = new URLSearchParams({
      q: searchString,
      type: 'artist,playlist,track,album'
    });
    const paramsURL = params.toString()
    const url = endpoint + paramsURL;

    if (!token) {
      logError('No access token found');
      return;
    }

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
 
      updateSearchResults([data.tracks.items]);
      createSpotifyTrackList(data.tracks.items);
      // console.log(searchResults)
    } catch (error) {
      console.error('Error fetching the albums:', error);
    }
  };

export default SpotifySearch;