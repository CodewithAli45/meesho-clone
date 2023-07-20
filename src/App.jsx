import React, {useState} from 'react';
import { Home } from './components/Home/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {ProductInfo} from './components/ProductInfo/ProductInfo';
import { Cart } from './components/Cart/Cart';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';

export const App = () => {
  const [profile, setProfile] = useState(() => {
    const storedProfile = sessionStorage.getItem('profile');
    return storedProfile ? JSON.parse(storedProfile) : '';
  });
  return (
    <HashRouter>
      <Routes>
        <Route path='/' exact={true} element={<Home profile={profile}/>} />
        <Route path='/products/:id' exact={true} element={<ProductInfo />} />
        <Route path='/cart'exact={true} element={<Cart />} />
        <Route path='/signup' exact={true} element={<Signup /> } />
        <Route path='/login' exact={true} element={<Login setProfile={setProfile}/>} />
        <Route path='*' element={<h2>Error: Page not found</h2>} />
      </Routes>
      
    </HashRouter>
  );
}

