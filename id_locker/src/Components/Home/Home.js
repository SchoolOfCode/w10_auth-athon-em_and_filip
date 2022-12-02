import React from "react";
import Banner from "../Banner/Banner";
import LoginButton from "../Login/Login";
import LogoutButton from "../Logout/Logout"
//import { Link } from "react-router-dom";

const Home = () => {
    return <div>
    <Banner text="Welcome to Locker ID!"/>
    <LoginButton/>
    <LogoutButton/>
    </div>
    }

export default Home;