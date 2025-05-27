// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import './Component/LoginRegister.css';
import './Component/Signup.css';
import './Component/Dashboard.css';

// ----------- Login Component -----------
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
        <h2 className="title-main">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input name="username" placeholder="Username" required autoComplete="username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" placeholder="Password" required autoComplete="current-password" />
          </div>
          <button className="login-btn" type="submit">Login</button>
        </form>
        <p className="footer-text">
          Don't have an account? <Link className="register-link" to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

// ----------- Signup Component -----------
const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    alert(`Account created for ${username} (${email})`);
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="title-main">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" required autoComplete="username" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" required autoComplete="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" required autoComplete="new-password" />
          </div>
          <button className="signup-btn" type="submit">Sign Up</button>
        </form>
        <p className="footer-text">
          Already have an account? <Link className="login-link" to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

// ----------- Dashboard Component -----------
const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [menuOpen]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <header>
        <div className="logo" aria-label="StockSync Logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Stock_icon.svg"
            alt="StockSync Logo"
            width={50}
          />
        </div>
        <button className="hamburger" aria-label="Toggle menu" onClick={toggleMenu}>☰</button>
      </header>

      <nav className={`side-menu ${menuOpen ? 'open' : ''}`} aria-label="Navigation menu">
        <div className="menu-item">📄 About</div>
        <div className="menu-item">📞 Contact Us</div>
        <div className="menu-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>🔐 Logout</div>
        <div className="menu-item">🗑️ Delete Account</div>
      </nav>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <main>
        <h2>Welcome to Dashboard</h2>
        <section className="cards-container">
          <div className="stock-card">
            <div className="card-icon">📦</div>
            <span className="card-label">Total Stock</span>
            <span className="card-value">50</span>
          </div>
          <div className="stock-card">
            <div className="card-icon">⚠️</div>
            <span className="card-label">Low Stock</span>
            <span className="card-value">2</span>
          </div>
          <div className="stock-card">
            <div className="card-icon">⏳</div>
            <span className="card-label">About to Expire</span>
            <span className="card-value">5</span>
          </div>
        </section>
      </main>
    </>
  );
};

// ----------- App Component -----------
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
