import React, { useState, useEffect } from 'react';
import './Dashboard.css';
<img src="/logo.png" alt="StockSync Logo" />


const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

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
            src={logo} 
            alt="StockSync Logo"
            width={50}
          />
        </div>
        <button
          className="hamburger"
          aria-label="Open navigation menu"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </header>

      {}
    </>
  );
};

export default Dashboard;
