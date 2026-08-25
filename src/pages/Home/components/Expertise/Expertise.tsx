import React from 'react';
import './Expertise.css';

const Expertise: React.FC = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-left">
        <h2 className="expertise-title">Areas of<br/>Expertise</h2>
        <div className="expertise-list">
          <div className="expertise-badge">
            <span className="badge-icon badge-icon-blue"></span>
            Product Management - Operations
          </div>
          <div className="expertise-badge">
            <span className="badge-icon badge-icon-blue"></span>
            Outfitting - Indigenization
          </div>
          <div className="expertise-badge">
            <span className="badge-icon badge-icon-blue"></span>
            Commercial & Technical Negotiations
          </div>
          <div className="expertise-badge">
            <span className="badge-icon badge-icon-blue"></span>
            Inspections, Testing & Acceptance Trials
          </div>
          <div className="expertise-badge">
            <span className="badge-icon badge-icon-blue"></span>
            <span className="badge-text">Management of International Defence<br/>Technologies</span>
          </div>
        </div>
      </div>
      
      <div className="expertise-right">
        <div className="expertise-right-bg"></div>
        <div className="expertise-right-content">
          <h2 className="expertise-title dark-text">Core<br/>Competencies</h2>
          <div className="competencies-grid">
            <div className="competency-badge">
              <span className="badge-icon badge-icon-navy"></span>
              Leadership
            </div>
            <div className="competency-badge">
              <span className="badge-icon badge-icon-navy"></span>
              Business Consulting
            </div>
            <div className="competency-badge">
              <span className="badge-icon badge-icon-navy"></span>
              Strategic Planning
            </div>
            <div className="competency-badge">
              <span className="badge-icon badge-icon-navy"></span>
              Marine Engineering
            </div>
            <div className="competency-badge">
              <span className="badge-icon badge-icon-navy"></span>
              HR Consulting
            </div>
            <div className="competency-badge">
              <span className="badge-icon badge-icon-navy"></span>
              Technology Management
            </div>
            <div className="competency-badge">
              <span className="badge-icon badge-icon-navy"></span>
              Operations Management
            </div>
            <div className="competency-badge">
              <span className="badge-icon badge-icon-navy"></span>
              Marketing Strategy
            </div>
            <div className="competency-badge">
              <span className="badge-icon badge-icon-navy"></span>
              Programme Management
            </div>
            <div className="competency-badge">
              <span className="badge-icon badge-icon-navy"></span>
              <span className="badge-text">Commercial and Technical<br/>Negotiations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
