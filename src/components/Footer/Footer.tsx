import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        
        <div className="footer-brand">
          <img src="/footer-submarine-icon.png" alt="DIVISE Logo" className="footer-brand-icon" />
          <h1 className="footer-giant-text">DIVISE</h1>
        </div>

        <div className="footer-links-container">
          <div className="footer-col">
            <h4>USEFUL</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/#services">Services</Link>
            <Link to="/about#contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>LEGAL</h4>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
          <div className="footer-col">
            <h4>UPDATES</h4>
            <a href="https://www.linkedin.com/in/commander-dilip-jain-retd-b8a506268/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:dilipjain@gmail.com">Email</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
