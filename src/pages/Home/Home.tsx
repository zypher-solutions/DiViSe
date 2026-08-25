import React from 'react';
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
