import React from "react";
import Callback from "./services/Callback";
import Profile from "./services/Profile";
import Login from "./services/Login";
// import { HashRouter, Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function UserSetup(props) {

    return (
        <div className="authentication">
            <Router>
                <Routes>
                    <Route path="/jammming" element={<Login />} />
                    <Route path="/Callback" element={<Callback onNewToken={props.onNewToken} />} />
                    <Route path="/Profile" element={<Profile onNewToken={props.onNewToken} callProfileImage={props.callProfileImage} />} />
                </Routes>
            </Router>
            {/* <HashRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/:Callback(Callback=.*)" element={<Callback onNewToken={props.onNewToken} />} />
                    <Route path="/:Profile(Profile=.*)" element={<Profile onNewToken={props.onNewToken} callProfileImage={props.callProfileImage} />} />
                </Routes>
            </HashRouter> */}
        </div>
    )
}

export default UserSetup