import React from 'react';
import './TrackRecord.css';

const TrackRecord: React.FC = () => {
  return (
    <section className="track-record-section">
      <div className="track-record-left">
        <div className="track-record-left-inner">
          <h2 className="track-record-title">Expertise &amp; Track<br />Record</h2>
          <span className="track-record-label">BY THE NUMBERS</span>

          <div className="track-record-grid">
            <div className="track-record-card small">
              <span className="track-record-number">37+</span>
              <span className="track-record-text">Years</span>
            </div>
            
            <div className="track-record-card small">
              <span className="track-record-number">23+</span>
              <span className="track-record-text">Years</span>
              <span className="track-record-desc">Indian Navy, Submarine<br />Arm</span>
            </div>
            
            <div className="track-record-card large">
              <div className="track-record-large-left">
                <span className="track-record-number">14+</span>
                <span className="track-record-text">Years</span>
              </div>
              <span className="track-record-desc align-right">Mazagon Dock<br />Shipbuilders Ltd.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="track-record-right">
        <img src="/about-section-bg.png" alt="Submarine" className="track-record-img" />
      </div>
    </section>
  );
};

export default TrackRecord;
