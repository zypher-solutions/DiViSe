import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Expertise from './components/Expertise/Expertise';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Contact from './components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home | DiViSe - Defence Marine Consulting</title>
        <meta name="description" content="DiViSe Defence Marine Consulting. Partner with Decades of Naval & Shipbuilding Leadership." />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <WhyChoose />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
