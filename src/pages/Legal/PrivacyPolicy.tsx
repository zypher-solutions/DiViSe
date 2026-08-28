import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Legal.css'; // Assuming we'll create a shared css for legal pages

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DiViSe</title>
        <meta name="description" content="Privacy Policy for DiViSe Defence Marine Consulting." />
      </Helmet>
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <div className="legal-content">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At DiViSe, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you 
            express an interest in obtaining information about us or our services, such as when you fill out our contact form.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect or receive to communicate with you, to respond to your inquiries, 
            and to offer support for our services.
          </p>
          {/* Add more placeholder sections as needed */}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
