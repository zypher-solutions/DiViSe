import React from 'react';
import './WhyChoose.css';

const WhyChoose: React.FC = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-inner">
        <h2 className="why-choose-title">Why Choose DiViSe?</h2>
        
        <div className="why-choose-grid">
          <div className="why-card card-years">
            <h3 className="years-number">37+<br/>Years</h3>
            <p className="years-text">Combined leadership, Indian<br/>Navy & Mazagon Dock<br/>Shipbuilders Ltd.</p>
          </div>
          
          <div className="why-card card-lifecycle">
            <h3 className="lifecycle-title">Complete Warship &<br/>Submarine Lifecycle<br/>Expertise</h3>
          </div>
          
          <div className="why-card card-drydock">
            <img src="/why-choose-bg.png" alt="Why Choose DiViSe" className="drydock-img" />
          </div>
          
          <div className="why-card card-knowledge">
            <p className="knowledge-text">Deep Indian Defence<br/>Eco-System<br/>Knowledge</p>
          </div>
          
          <div className="card-split-container">
            <div className="why-card card-icon">
              <img src="/linkedin-custom.png" alt="LinkedIn" className="linkedin-custom-icon" />
            </div>
            
            <div className="why-card card-quote">
              <p className="quote-text">"Committed to Aatmanirbhar<br/>Bharat and India's defence<br/>manufacturing ecosystem."</p>
            </div>
          </div>
        </div>
        
        <div className="full-picture-section">
          <div className="full-picture-left">
            <h2 className="full-picture-title">The<br/>Full<br/>Picture</h2>
          </div>
          <div className="full-picture-right">
            <div className="full-picture-col">
              <p>37+ Years of combined leadership across the Indian Navy and Mazagon Dock Shipbuilders Ltd.</p>
              <p>Deep expertise in warship and submarine programmes across the complete lifecycle.</p>
              <p>Well-versed in India's Defence Eco-system — Procurement, DPSUs, shipyards, MSMEs and startups.</p>
              <p>Thorough knowledge of Make in India and Defence indigenization, aligned with Government policy and Technology Transfer objectives.</p>
            </div>
            <div className="full-picture-col">
              <p>Extensive experience fostering strategic collaborations between Indian and international defence companies.</p>
              <p>Practical, industry-driven advisory backed by hands-on leadership experience.</p>
              <p>Trusted expertise in project management, technology management, negotiations, operations and quality assurance.</p>
              <p>Committed to strengthening India's defence manufacturing ecosystem through innovation and Aatmanirbhar Bharat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
