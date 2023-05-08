import React from  'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home/Home';
import {Login} from './components/Authentication/Login';
import { ProductInfo } from './components/Home/ProductInfo/ProductInfo';
import { Cart } from './components/Cart/Cart';



export function App () {

  return (
      <HashRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products/:id' element={<ProductInfo/>} />
            <Route path='*' element={<h2>Error: Page not found</h2>} />
          </Routes>
      </HashRouter>
  );
}
