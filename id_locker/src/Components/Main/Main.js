import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import ProfilePage from "../ProfilePage/ProfilePage"
import HealthData from "../HealthData/HealthData"

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/profilePage' element={<ProfilePage/>}></Route>
      <Route exact path='/healthPage' element={<HealthData/>}></Route>
    </Routes>
  );
}

export default Main;