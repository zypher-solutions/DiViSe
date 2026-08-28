import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Contact from '../Home/components/Contact/Contact';
import './About.css';
import AboutHero from './components/AboutHero/AboutHero';
import TrackRecord from './components/TrackRecord/TrackRecord';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | DiViSe - Defence Marine Consulting</title>
        <meta name="description" content="Learn more about DiViSe and our track record in Defence Marine Consulting." />
      </Helmet>
      <Navbar />

      <AboutHero />

      <TrackRecord />

      <Contact theme="light" />
      <Footer />
    </div>
  );
};

export default About;
