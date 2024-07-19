import React from "react";
import UserSetup from "../features/authentication";
import './css/UserProfile.css'

function UserProfile(props) {
    return (
        <div className="UserProfilePage">

                <UserSetup onNewToken={props.onNewToken} callProfileImage={props.callProfileImage}/>
            
        </div>
    )
}

export default UserProfile