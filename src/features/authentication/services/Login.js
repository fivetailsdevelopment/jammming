import React from 'react';
import querystring from 'querystring';
import { useHistory } from 'react-router-dom';

const Login = () => {

// Spotify API Configuration

const client_id = '***********************'; // Replace with your actual client id
// const client_secret = '***********************'; // Replace with your actual client secret
// const grant_type = 'client_credentials';
// const url = 'https://accounts.spotify.com/api/token';
// const body = `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;

  const redirect_uri = 'https://fivetailsdevelopment.github.io/jammming/callback'; // Replace with your actual redirect URI
  // const redirect_uri = 'http://localhost:3000/callback'; // Replace with your actual redirect URI
  const scope = 'user-read-private user-read-email playlist-modify-private playlist-modify-public';

  const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const handleLogin = () => {
    const state = generateRandomString(16);

    const authUrl = 'https://accounts.spotify.com/authorize?' + querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    });

    window.location.href = authUrl;
  };

  
  return (
    <div >
      <h1 className="login_Message">Login to Spotify</h1>
      <button className="login_logout_button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;




//End Spotify API Configuration
