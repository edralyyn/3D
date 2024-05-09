import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success

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

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', { username, password });
      console.log(response.data); // Handle successful signup
      setSignupSuccess(true); // Set signup success state to true
    } catch (error) {
      console.error('Signup failed:', error.response.data.error);
      setError('Username already exists. Please choose a different username.');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(''); // Reset error message when switching between forms
    setSignupSuccess(false); // Reset signup success message
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-2">
          <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {isLogin ? (
              <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
            ) : (
              <button type="button" className="btn btn-primary btn-block" onClick={handleSignup}>Signup</button>
            )}
            {error && <p className="mt-3 text-danger">{error}</p>}
            {signupSuccess && <p className="mt-3 text-success">Signup successful! Please login.</p>}
          </form>
          <p className="mt-2 text-center">{isLogin ? "Don't have an account? " : "Already have an account? "}
            <button className="btn btn-link" onClick={toggleForm}>
              {isLogin ? "Create Account" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
