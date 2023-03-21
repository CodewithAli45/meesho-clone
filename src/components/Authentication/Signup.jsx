import React from 'react';
import './LoginSignup.css'

export function Signup() {

  return (
    <div className='wrapper'>
        <form className='forms'>
        <h2>Sign up</h2>
        <div className="fullname">
            <label htmlFor="fname">Name: </label>
            <input type="text" id="fname"  />
        </div>
        <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email"  id="email" />
        </div>
        <div className="username">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
        </div>
        <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
        </div>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
