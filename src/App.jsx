import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import { Cart } from './components/Cart/Cart';
import { Home } from './components/Home/Home';
import { WomenEthnic } from './components/Pages/WomenEthnic/WomenEthnic';
import { ProductInfo } from './components/ProductInfo/ProductInfo';
import { WomensWestern } from './components/Pages/WomenWestern/WomensWestern';
import { Men } from './components/Pages/Men/Men';
import { Kids } from './components/Pages/Kids/Kids';
import { Bags } from './components/Pages/Bags/Bags';
import { Beauty } from './components/Pages/Beauty/Beauty';
import { Electronics } from './components/Pages/Electronics/Electronics';
import { Jewellery } from './components/Pages/Jewellery/Jewellery';
import { HomeKitchen } from './components/Pages/HomeKitchen/HomeKitchen';

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
        <Route path='/category/womenethnics' exact={true} element={<WomenEthnic />} />
        <Route path='/category/womenewestern' exact={true} element={<WomensWestern />} />
        <Route path='/category/men' exact={true} element={<Men />} />
        <Route path='/category/kids' exact={true} element={<Kids />}/>
        <Route path='/category/bags&footware' exact={true} element={<Bags />} />
        <Route path='/category/beautyhealth' exact={true} element={<Beauty />} />
        <Route path='/category/electronics' exact={true} element={<Electronics />} />
        <Route path='/category/accessories' exact={true} element={<Jewellery />} />
        <Route path='/category/homekitchen' exact={true} element={<HomeKitchen />} />       
        <Route path='*' element={<h2>Error: Page not found</h2>} />
      </Routes>
      
    </HashRouter>
  );
}

