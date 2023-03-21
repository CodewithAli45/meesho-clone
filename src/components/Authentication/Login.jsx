import React, { useState } from 'react';
import { Header } from '../Header/Header';
import './LoginSignup.css'

export function Login(props) {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUser = (e) => {
    SetUsername(e.target.value);
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    if(username === 'admin' && password === 'admin'){
      // props.onLogin();
      
    } else{
      setErrorMessage('Incorrect username or password');
    }
  }  

  return (
    <div>
      <Header />
      <div className='wrapper'>
        <form className='forms' onSubmit={handleSubmitProfile}>
          <h2>Login</h2>
          <div className="username">
              <label htmlFor="username">Username</label>
              <input type="text" value={username} onChange={handleUser} id="username" placeholder='Enter username' />
          </div>
          <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} onChange={handlePassword} id="password" placeholder='Enter password' />
          </div>
          <button type='submit'>Submit</button>
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </div>
    </div>
    
  )
}
