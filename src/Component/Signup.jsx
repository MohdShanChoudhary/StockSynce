import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="title-main">StockSync</h1>
        <h2 className="title-sub">Create a New Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <p className="footer-text">
          Already have an account?{' '}
          <Link to="/" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
