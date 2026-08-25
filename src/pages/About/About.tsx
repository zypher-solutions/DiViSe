import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Contact from '../Home/components/Contact/Contact';
import './About.css';
import AboutHero from './components/AboutHero/AboutHero';
import TrackRecord from './components/TrackRecord/TrackRecord';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Navbar />

      <AboutHero />

      <TrackRecord />

      <Contact theme="light" />
      <Footer />
    </div>
  );
};

export default About;
