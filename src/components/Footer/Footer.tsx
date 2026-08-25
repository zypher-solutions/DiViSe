import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* Icon removed as requested */}
        </div>

        <div className="footer-top-right">
          <div className="footer-col">
            <h4>USEFUL</h4>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h4>LEGAL</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <div className="footer-col">
            <h4>UPDATES</h4>
            <a href="https://www.linkedin.com/in/commander-dilip-jain-retd-b8a506268/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:dilipjain@gmail.com">dilipjain@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-brand">
          <img src="/footer-submarine-icon.png" alt="DIVISE Logo" className="footer-bottom-icon" />
          <h1 className="footer-giant-text">DIVISE</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
