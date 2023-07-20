import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import './index.css';
import {MyContext} from './MyContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContext>
    <App />
  </MyContext>
);


