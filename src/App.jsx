import React from  'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home/Home';
import {Login} from './components/Authentication/Login';
import { ProductInfo } from './components/Home/ProductInfo/ProductInfo';
import { Cart } from './components/Cart/Cart';

export function App () {

  return (  
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products/:id' element={<ProductInfo/>} />
            <Route path='*' element={<h2>Error: Page not found</h2>} />
          </Routes>
      </BrowserRouter>
  );
}
