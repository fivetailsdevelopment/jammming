import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Callback = (props) => {
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get('code');

    if (code) {
      const client_id = 'aa85065cd2354d9f8448fd150ef37e34'; // Replace with your actual client id
      const client_secret = '20758d80dbe643beb3725174025118c6'; // Replace with your actual client secret
      const redirect_uri = 'http://localhost:3000/callback'; // Replace with your actual redirect URI

      const fetchToken = async () => {
        try {
          const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
              grant_type: 'authorization_code',
              code: code,
              redirect_uri: redirect_uri,
              client_id: client_id,
              client_secret: client_secret
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });

          const { access_token } = response.data;
          // console.log('Access Token:', access_token);

        // Store the access token in local storage
        localStorage.setItem('spotify_access_token', access_token);

        // Redirect to another component that uses the token
        window.location.href = '/profile';
        } catch (error) {
        console.error('Error fetching the token:', error);
        }
        };

      fetchToken();
    }
  }, [location]);

  return (
    <div>
      <h1>Callback</h1>
      <p>Processing the login...</p>
    </div>
  );
};

export default Callback;
