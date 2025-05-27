import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleEditClick = () => {
    alert('Item editor form would open here.');
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
        <button aria-label="Toggle menu" onClick={toggleMenu}>☰</button>
      </header>

      <nav className={`side-menu ${menuOpen ? 'open' : ''}`} aria-label="Navigation menu">
        <div className="menu-item">📄 About</div>
        <div className="menu-item">📞 Contact Us</div>
        <div className="menu-item">🔐 Logout</div>
        <div className="menu-item">🗑️ Delete Account</div>
      </nav>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className="edit-button-container">
        <button className="edit-button" onClick={handleEditClick}>EDIT ITEM</button>
      </div>

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
