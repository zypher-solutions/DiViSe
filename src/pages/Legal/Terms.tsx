import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Legal.css'; 

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | DiViSe</title>
        <meta name="description" content="Terms of Service for DiViSe Defence Marine Consulting." />
      </Helmet>
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <div className="legal-content">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            These Terms of Service constitute a legally binding agreement made between you and DiViSe, 
            concerning your access to and use of our website and services.
          </p>
          <h2>Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, 
            functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
            are owned or controlled by us.
          </p>
          <h2>User Representations</h2>
          <p>
            By using the Site, you represent and warrant that all registration information you submit will be 
            true, accurate, current, and complete.
          </p>
          {/* Add more placeholder sections as needed */}
        </div>
      </div>
    </>
  );
};

export default Terms;
