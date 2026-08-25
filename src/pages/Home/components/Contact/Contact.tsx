import React from 'react';
import './Contact.css';

interface ContactProps {
  theme?: 'dark' | 'light';
}

const Contact: React.FC<ContactProps> = ({ theme = 'dark' }) => {
  return (
    <section className={`contact-section theme-${theme}`}>
      <div className="contact-left">
        <img src="/contact-bg.png" alt="Naval Compass" className="contact-bg-img" />
        <div className="contact-overlay"></div>
        <h3 className="contact-quote">
          Partner with Decades<br/>
          of Naval & Shipbuilding<br/>
          Leadership
        </h3>
      </div>
      
      <div className="contact-right">
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="johndoe@gmail.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone No.</label>
              <input type="tel" placeholder="+91 12345 67890" />
            </div>
            <div className="form-group">
              <label>Organization</label>
              <input type="text" placeholder="John Doe's LLC" />
            </div>
          </div>
          <div className="form-group message-group">
            <label>Message</label>
            <textarea placeholder="Your Message..."></textarea>
          </div>
          <div className="form-submit-wrapper">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
