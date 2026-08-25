import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section">
      {/* Left: dark navy panel that bleeds to the left edge */}
      <div className="about-image-panel">
        <div className="about-image-wrapper">
          <img src="/about-us.png" alt="About DiViSe Consultancy" className="about-img" />
        </div>
      </div>

      {/* Right: text content */}
      <div className="about-text-panel">
        <h2 className="about-title">About DiViSe<br/>Consultancy</h2>
        <p className="about-body">
          DiViSe Consultancy is a specialist advisory firm serving organizations<br/>
          operating in India's Defence and Marine sectors. Founded by<br/>
          Commander Dilip Jain (Retd.), the consultancy combines decades of<br/>
          operational Naval experience with executive leadership in Submarine<br/>
          Construction, Defence Manufacturing, Technology Management,<br/>
          Indigenisation, Make in India, Commercial and Technical Negotiations<br/>
          and Strategic Business Development.
        </p>
        <p className="about-body">
          The firm supports Indian enterprises, defence startups, shipyards, OEMs<br/>
          and international defence companies seeking to establish or expand<br/>
          their presence in India.
        </p>
      </div>
    </section>
  );
};

export default About;
