import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
        <Link to="/profilePage">Home</Link>
        <Link to="/healthPage">Health Data</Link>
        </div>
    )
}

export default NavBar