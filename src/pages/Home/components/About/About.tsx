import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section" aria-label="About DiViSe Consultancy">
      <div className="about-inner">
        {/* Left: dark navy panel that bleeds to the left edge */}
        <div className="about-image-panel">
          <div className="about-image-wrapper">
            <img src="/about-us.png" alt="Commander Dilip Jain in Naval Uniform" className="about-img" loading="lazy" />
          </div>
        </div>

        {/* Right: text content */}
        <div className="about-text-panel">
          <h2 className="about-title">About DiViSe<br/>Consultancy</h2>
          <p className="about-body">
            DiViSe Consultancy is a specialist advisory firm serving organizations
            operating in India's Defence and Marine sectors. Founded by
            Commander Dilip Jain (Retd.), the consultancy combines decades of
            operational Naval experience with executive leadership in Submarine
            Construction, Defence Manufacturing, Technology Management,
            Indigenisation, Make in India, Commercial and Technical Negotiations
            and Strategic Business Development.
          </p>
          <p className="about-body">
            The firm supports Indian enterprises, defence startups, shipyards, OEMs
            and international defence companies seeking to establish or expand
            their presence in India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
