import React, { useEffect, useState } from 'react';
import no_profile_image from '../../../assets/no_profile_image.png'

const Profile = (props) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

//   // In Callback component after storing the token
// console.log('Stored Access Token:', localStorage.getItem('spotify_access_token'));

// // In Profile component before fetching profile
// console.log('Retrieved Access Token:', localStorage.getItem('spotify_access_token'));

   props.onNewToken(localStorage.getItem('spotify_access_token'))

  const logout = () => {
    localStorage.removeItem('spotify_access_token');
    window.location.href = '/jammming';
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('spotify_access_token');

      if (!token) {
        setError('No access token found');
        return;
      }

      try {
        const response = await fetch('https://api.spotify.com/v1/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile information');
        }

        const data = await response.json();
        setProfile(data);
       
      } catch (error) {
        setError(error.message);
        console.error('Error fetching profile information:', error);
      }
    };

    fetchProfile();

  }, []);

  useEffect(() => {
    let imageSrc;
    if (!profile) {
      imageSrc = no_profile_image;
    } else {
      // imageSrc = profile.images[0].url;
      imageSrc = no_profile_image;
    }
    props.callProfileImage(imageSrc);
  }, [profile])

  const profileImage = new Image(200,200);

  return (
    <div>
      
      {error && <div className="timedOut_Container">
                  <p className="timedOut_Message">Your session has timed out. Please logout and log in again</p>
                  <button className="login_logout_button" onClick={logout}>Logout</button>
                </div>
        }
      {profile ? (
        <div className="profile_box">
            <div className="profile_image_box">
                <div className="profileImage_container">
                  {profile.images[0] &&  <img className='profileImage' src={profile.images[1].url} max-height="200" max-width="100" /> }
                  {!profile.images[0] &&  <img className='profileImage' src={no_profile_image} max-height="200" max-width="100" /> }
                </div>
                <div className="name_box">
                  <h1>{profile.display_name}</h1>
                  <button onClick={logout}></button>
                </div>
            </div>

            <div className="profile_details_box">
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td className="profile_field_headings">User ID</td>
                    <td>{profile.id}</td>
                  </tr>
                  <tr>
                    <td  className="profile_field_headings">Email</td>
                    <td>{profile.email}</td>
                  </tr>
                  <tr>
                    <td  className="profile_field_headings">Account Plan</td>
                    <td>{profile.product}</td>
                  </tr>
                  <tr>
                    <td  className="profile_field_headings">App Permissions</td>
                    <td className="permissions_list"><ul>
                        <li>View user information</li>
                        <li>Create private playlists</li>
                        <li>Create public playlists</li>
                      </ul></td>
                  </tr>
                </tbody>
              </table>
              {/* <p><strong>External_urls:</strong> {profile.external_urls}</p> */}
            </div>
        </div>
       ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;