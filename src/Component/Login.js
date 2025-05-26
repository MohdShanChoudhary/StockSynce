import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginRegister.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'admin' && password === '1234') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="title-main">StockSync</h1>
        <h2 className="title-sub">Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input name="username" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="footer-text">
          <Link to="#">Forgot Password?</Link>
        </p>
        <p className="footer-text">
          Don't have an account?{' '}
          <Link to="/register" className="register-link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
