import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { ProductInfo } from './components/Home/ProductInfo/ProductInfo';

export function App () {
  return (  
      <BrowserRouter>
        {/* <Header />  */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductInfo/>} />
          <Route path='*' exact element={<h2>Error: Page not found</h2>} />
        </Routes>
      </BrowserRouter>
  );
}
