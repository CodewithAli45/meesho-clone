import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './SignupLogin.css';
import {Header} from '../Header/Header';

const Signup = () => {
    const [username, SetUsername] = useState("");
    const [name ,setName] = useState('');
    const [password, setPassword] = useState("");
    const [signedUp, setSignedUp] = useState(false);
    const [usernameError, setUsernameError] = useState("");

    function handleSubmitProfile(e){
        e.preventDefault();
        const existingUsername = JSON.parse(localStorage.getItem('username'));
        if (existingUsername === username) {
        setUsernameError("Username already exists. Please choose a different username.");
        return;
        }
        localStorage.setItem('name', JSON.stringify(name));
        localStorage.setItem('username', JSON.stringify(username));
        localStorage.setItem('password', JSON.stringify(password));

        setSignedUp(!signedUp);
    }
    return (
        <>
            <Header />
            <div className='wrapper'>
                <form className='forms' onSubmit={handleSubmitProfile}>
                <h2>Signup</h2>
                <div className="name">
                    <label htmlFor="username">Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        required 
                        onChange={(e) => setName(e.target.value)} 
                        id="name" 
                        placeholder='Enter name' 
                    />
                </div>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        required 
                        onChange={(e) => SetUsername(e.target.value)} 
                        id="username" 
                        placeholder='Enter username' 
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        required 
                        onChange={(e) => setPassword(e.target.value)} 
                        id="password" 
                        placeholder='Enter password' 
                    />
                </div>
                <button className="login-btn" type='submit'>Signup</button>
                
                </form>
                {
                    signedUp && (
                        <div className="navigation">
                            <Link to={'/login'} style={{color: 'white'}}>Click to Login</Link>
                        </div>
                        
                    )
                }
                {usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}
            </div>
        </>
    );
}

export default Signup;
