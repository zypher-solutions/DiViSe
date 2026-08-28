import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setServicesVisible(false);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setServicesVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );
    const servicesEl = document.getElementById('services');
    if (servicesEl) observer.observe(servicesEl);
    return () => {
      if (servicesEl) observer.unobserve(servicesEl);
    };
  }, [location.pathname]);

  const close = () => setOpen(false);

  const handleContactClick = (e: React.MouseEvent) => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      e.preventDefault();
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    close();
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
    close();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    close();
  };

  const isFloatingPage = location.pathname === '/' || location.pathname === '/about';
  const isTransparent = isFloatingPage && !scrolled && !open;

  const navbarClasses = `navbar${open ? ' open' : ''}${isFloatingPage ? ' navbar-floating' : ''}${isTransparent ? ' navbar-transparent' : ''}`;

  return (
    <nav className={navbarClasses}>
      <div className="navbar-inner">
        <Link to="/" className="logo-link" onClick={handleLogoClick}>
          <img src="/logo.png" alt="DiViSe Logo" className="logo" />
        </Link>

        {/* Desktop nav */}
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' && !servicesVisible ? 'active' : ''}`} onClick={close}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={close}>About</Link>
          <Link to="/#services" className={`nav-link ${servicesVisible ? 'active' : ''}`} onClick={handleServicesClick}>Services</Link>
          <Link to="#contact" className="btn-contact" onClick={handleContactClick}>Contact</Link>
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
        <Link to="/" className={`nav-link ${location.pathname === '/' && !servicesVisible ? 'active' : ''}`} onClick={close}>Home</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={close}>About</Link>
        <Link to="/#services" className={`nav-link ${servicesVisible ? 'active' : ''}`} onClick={handleServicesClick}>Services</Link>
        <Link to="#contact" className="btn-contact" onClick={handleContactClick}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
