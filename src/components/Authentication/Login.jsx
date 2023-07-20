import React, {useState} from 'react';
import {Header} from '../Header/Header';
import { Link, Navigate } from 'react-router-dom';


const Login = ({setProfile}) => {
    const [username, SetUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    function handleSubmitProfile(e){
        e.preventDefault();
        const storeUsername = JSON.parse(localStorage.getItem('username'));
        const storePassword = JSON.parse(localStorage.getItem('password'));
        if(storePassword !== password || storeUsername !== username){
            setLogin(false);
            alert('username or password is wrong ')
        }else {
            setLogin(true);
            alert('logged in successfully');
            const getProfile = JSON.parse(localStorage.getItem('name'));
            sessionStorage.setItem('profile', JSON.stringify(getProfile));
            setProfile(getProfile);
            console.log(getProfile);
        }
    }
    return (
        <>
            <Header/>
            <div className='wrapper'>
                <form className='forms' onSubmit={handleSubmitProfile}>
                <h2>LogIn</h2>
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
                <button className="login-btn" type='submit'>Log In</button>
                <div className="check-login">
                    <p>If not registered Click below</p>
                    <div className="sign"><Link to={'/signup'}>Signup</Link></div>
                </div>
                </form>
            </div>
            {
                login && (
                    <Navigate to={'/'} />
                )
            }
        </>
    );
}

export default Login;
