import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import ProfilePage from "../ProfilePage/ProfilePage"
//import Signup from '../pages/Signup';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/profilePage' element={<ProfilePage/>}></Route>
    </Routes>
  );
}

export default Main;