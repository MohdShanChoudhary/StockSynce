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
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input name="username" placeholder="Username" required autoComplete="username" />
        <input name="password" type="password" placeholder="Password" required autoComplete="current-password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
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
    // Aap backend integration yahan kar sakte hain
    alert(`Account created for ${username} (${email})`);
    navigate('/');
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required autoComplete="username" />
        <input type="email" name="email" placeholder="Email" required autoComplete="email" />
        <input type="password" name="password" placeholder="Password" required autoComplete="new-password" />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
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
    // Agar localStorage/sessionStorage use kar rahe ho to clear kar do yahan
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
        <button aria-label="Toggle menu" onClick={toggleMenu}>
          ☰
        </button>
      </header>

      <nav className={`side-menu ${menuOpen ? 'open' : ''}`} aria-label="Navigation menu">
        <div className="menu-item">📄 About</div>
        <div className="menu-item">📞 Contact Us</div>
        <div className="menu-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
          🔐 Logout
        </div>
        <div className="menu-item">🗑️ Delete Account</div>
      </nav>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <main>
        <h2>Welcome to Dashboard</h2>
        <p>You are now logged in.</p>
        <section>
          <div>Total Stock: 50</div>
          <div>Low Stock: 2</div>
          <div>About to Expire: 5</div>
        </section>
      </main>
    </>
  );
};

// ----------- Main App Component with Routing -----------
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
