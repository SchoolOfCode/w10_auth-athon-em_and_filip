import React from "react";
import Banner from "../Banner/Banner";
import LoginButton from "../Login/Login";
import Description from '../Description/Description'
import './Home.css'

//import { Link } from "react-router-dom";

const Home = () => {
    return <div className="home-container">
    <div className="login-container">   
        <Banner text="Welcome to our deployed site !"/>
        <Description/>
        <LoginButton/>
    </div>
    
   
    </div>
    }

export default Home;