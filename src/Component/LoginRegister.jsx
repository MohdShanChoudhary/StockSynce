import React from 'react';
import { Link } from 'react-router-dom';  // import Link
import './LoginRegister.css';

const LoginRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="title-main">StockSync</h1>
        <h2 className="title-sub">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="footer-text">
          <a href="#">Forgot Password?</a>
        </p>
        <p className="footer-text">
          Don't have an account?{' '}
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
