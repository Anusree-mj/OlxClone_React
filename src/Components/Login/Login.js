import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/firebaseContext';
import {Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const { firebase } = useContext(FirebaseContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const navigate = useHistory();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password);
     navigate.push('/');
    } catch (error) {
      console.error('Firebase Authentication Error:', error.message);
      alert('Invalid Email or Password');
    }
    
  }
  return (
    <div>
      <div className="loginParentDiv">
      <Link to="/">
          <img width="200px" height="200px" src={Logo} alt="Logo" />
        </Link>        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup' className='links'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
