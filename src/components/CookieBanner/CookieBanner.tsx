import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          We use cookies to improve your experience on our site and to analyze our traffic. 
          By clicking "Accept", you consent to our use of cookies. 
          Read our <Link to="/privacy-policy">Privacy Policy</Link> for more details.
        </p>
      </div>
      <div className="cookie-actions">
        <button className="cookie-btn accept-btn" onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
};

export default CookieBanner;
