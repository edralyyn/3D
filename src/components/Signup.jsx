// Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', { username, password });
      console.log(response.data); // Handle successful signup
    } catch (error) {
      console.error('Signup failed:', error.response.data.error);
      setError('Username already exists. Please choose a different username.');
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontSize: '25px' }}>
      <h2>Signup</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={handleSignup}>Signup</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Signup;