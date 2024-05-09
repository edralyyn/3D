// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      console.log(response.data); // Handle successful login
      setLoggedIn(true); // Update loggedIn state in parent component
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontSize: '25px'}}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
