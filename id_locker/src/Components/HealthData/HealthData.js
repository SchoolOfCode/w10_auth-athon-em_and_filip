import React from "react";
import NavBar from "../NavBar/NavBar";

async function handleClick() {
    const result = await fetch ("http://localhost:3000/profilePage");
    const data = await result.json();
    console.log(data);
    return data;
}

let healthInput = ""

function handleInput(e) {
    healthInput = e.target.value;
    console.log(healthInput);
    return healthInput;
}



const healthData = (props) => {
    return <div>
    <NavBar/>
    <h1>My Health Dashboard</h1>
    <p>My NHS Number= {props.nhsNo}</p>
    <input type="text" onChange={handleInput}></input>
    <button onClick={handleClick}>Input Data</button>
    </div>
}

export default healthData;