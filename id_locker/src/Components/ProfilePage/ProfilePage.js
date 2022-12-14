import React from "react";
import Profile from "../Profile/Profile";
import LogoutButton from "../Logout/Logout";
import NavBar from "../NavBar/NavBar"

const ProfilePage = () =>{
    return <div>
    <div>
        <NavBar/>
    </div>
    <div>
        <Profile/>
        <LogoutButton/>
    </div>
    </div>
}

export default ProfilePage;