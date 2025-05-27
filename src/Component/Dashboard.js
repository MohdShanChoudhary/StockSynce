import React, { useState, useEffect } from 'react';
import './Dashboard.css';


const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleEditClick = () => {
    alert('Item editor form would open here.');
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [menuOpen]);

  return (
    <>
      <header>
        <div className="logo" aria-label="StockSync Logo">
          <img src={logo} alt="StockSync Logo" width={50} />
        </div>
        <button
          className="hamburger"
          aria-label="Open navigation menu"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </header>

      <div className="edit-button-container">
        <button className="edit-button" onClick={handleEditClick}>
          EDIT ITEM
        </button>
      </div>

      <nav className={`side-menu ${menuOpen ? 'open' : ''}`} aria-label="Navigation menu">
        <div className="menu-item">📄 About</div>
        <div className="menu-item">📞 Contact Us</div>
        <div className="menu-item">🔐 Logout</div>
        <div className="menu-item">🗑️ Delete Account</div>
      </nav>

      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      <main className="cards-container" aria-label="Stock Summary Cards">
        <section className="stock-card" data-type="total">
          <div className="card-icon">📦</div>
          <div className="card-text">
            <span className="card-label">TOTAL STOCK</span>
            <span className="card-value">50</span>
          </div>
        </section>

        <section className="stock-card" data-type="low">
          <div className="card-icon">📉</div>
          <div className="card-text">
            <span className="card-label">LOW STOCK</span>
            <span className="card-value">02</span>
          </div>
        </section>

        <section className="stock-card" data-type="expire">
          <div className="card-icon">⏳</div>
          <div className="card-text">
            <span className="card-label">ABOUT TO EXPIRE</span>
            <span className="card-value">05</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
