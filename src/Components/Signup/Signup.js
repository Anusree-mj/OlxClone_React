import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/firebaseContext';
import 'firebase/auth'
import { Link,useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../olx-logo.png';
import './Signup.css';


export default function Signup() {
  const history = useHistory()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({ displayName: username });

      await firebase.firestore().collection('users').add({
        id: result.user.uid,
        username: username,
        phone: phone
      });

      history.push('/login');
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <div className="signupParentDiv">
        <Link to="/">
          <img width="200px" height="200px" src={Logo} alt="Logo" />
        </Link>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            id="fname"
            name="name"
            onChange={(e) => { setUsername(e.target.value) }}
          />
          <br />

          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            name="email"
            onChange={(e) => { setEmail(e.target.value) }}

          />
          <br />

          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            name="phone"
            onChange={(e) => { setPhone(e.target.value) }}
          />
          <br />

          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            name="password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='/login' style={{ color: 'black' }}>Login</a>
      </div>
    </div>
  );
}