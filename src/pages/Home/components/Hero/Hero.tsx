import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-image-wrapper">
        <img src="/hero-bg.png" alt="Naval Submarine" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-text-band">
        <div className="hero-text-inner">
          <div className="hero-left">
            <h1 className="hero-title">
              DEFENCE MARINE<br/>
              CONSULTING
            </h1>
          </div>
          <div className="hero-right">
            <div className="hero-divider"></div>
            <h3 className="hero-subtitle">Strategic Advisory</h3>
            <p className="hero-body">
              Delivering Strategic defence and marine consultancy<br/>
              with over 37 years of combined leadership across<br/>
              the India's premier Submarines and Warships building<br/>
              ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
