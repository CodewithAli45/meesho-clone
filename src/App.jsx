import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
export function App () {
  return (
    <>
      <Header>
        <BrowserRouter>
          <Routes>
            <Route path='*' exact element={<h2>Error: Page not found</h2>} />
            <Route path='/' exact element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Header>
    </>
  );
}
