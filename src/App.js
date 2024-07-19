import './App.css';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import UserProfile from './pages/UserProfile';
import PlayListCreator from './pages/PlayListCreator';
import no_profile_image from './assets/no_profile_image.png';

const profileOpenClose = {
  backgroundImage: 'url('+ no_profile_image +')',
  backgroundSize: 'contain',
  height: 60,
  width: 60,
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '50%',
  border: 'none',
  outline: 'none',
  alignItems: 'center',
  backgroundColor: 'transparent',
};

//////////////// TO DO LIST //////////////////

// 1. Write code that determins if the token has timed out and asks user to refresh the token
//            Note that currently when the token times out, the user has to refresh the page to show the login button

//////////////////////////////////////////////

function App() {
  const [loginRequired, setLoginRequired] =useState(true)
  const [token, setToken] = useState("")
  const [error, setError] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState("")
  


  const onNewToken = useCallback((token) => {
    setToken(token);
  });
 

  const logError = useCallback(() => {
    setError('No access token found');
  });

  const callProfileImage = useCallback((profileImageUrl) => {
    console.log(profileImageUrl)
    setProfileImageUrl(profileImageUrl);
  }, [token]
);


  return (
    
    <div className="App">
      <div className="profileAccess" onClick={() => setLoginRequired(!loginRequired)} ><button style={profileOpenClose} className="profileOpenClose" onClick={() => setLoginRequired(!loginRequired)}>
          </button>
          { loginRequired && <h3>Playlist Creator</h3> }
          { !loginRequired && <h3>Account Profile</h3> }
        </div>
      { !loginRequired && <div className="playlistCreator_div">
        <PlayListCreator token={token} logError={setError} />
      </div> }

      { loginRequired && <div className="userProfile_div">
        <UserProfile onNewToken={onNewToken} callProfileImage={callProfileImage} />
      </div> }
    </div>
    
  );
}

export default App;
