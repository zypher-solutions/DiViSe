import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setOpen(false);

  const isFloatingPage = location.pathname === '/' || location.pathname === '/about';
  const isTransparent = isFloatingPage && !scrolled && !open;

  const navbarClasses = `navbar${open ? ' open' : ''}${isFloatingPage ? ' navbar-floating' : ''}${isTransparent ? ' navbar-transparent' : ''}`;

  return (
    <nav className={navbarClasses}>
      <div className="navbar-inner">
        <Link to="/" className="logo-link" onClick={close}>
          <img src="/logo.png" alt="DiViSe Logo" className="logo" />
        </Link>

        {/* Desktop nav */}
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <a href="/#services" className="nav-link">Services</a>
          <Link to="/about#contact" className="btn-contact">Contact</Link>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          aria-label="Toggle navigation"
          onClick={() => setOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className="nav-drawer">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={close}>Home</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={close}>About</Link>
        <a href="/#services" className="nav-link" onClick={close}>Services</a>
        <Link to="/about#contact" className="btn-contact" onClick={close}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
