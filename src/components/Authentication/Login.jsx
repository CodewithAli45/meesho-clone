import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { useNavigate } from "react-router-dom";
import './LoginSignup.css'

export function Login() {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      // navigate('/');
    }
    console.log('logged in');
  }, [navigate]);

  const handleUser = (e) => {
    SetUsername(e.target.value);
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    if(username === 'admin' && password === 'admin'){
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      navigate('/');
    } else{
      setErrorMessage('Incorrect username or password');
    }
  }  

  return (
    <div>
      <Header />
      { !isLoggedIn ? (
      <div className='wrapper'>
        <form className='forms' onSubmit={handleSubmitProfile}>
          <h2>Login</h2>
          <div className="username">
              <label htmlFor="username">Username</label>
              <input type="text" value={username} required onChange={handleUser} id="username" placeholder='Enter username' />
          </div>
          <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} required onChange={handlePassword} id="password" placeholder='Enter password' />
          </div>
          <button type='submit'>Submit</button>
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </div>
      )
      :
      <h2>Welcome Back, you are already logged in.</h2>
      }
    </div>
    
  )
}
