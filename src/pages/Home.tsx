import React from 'react';
import Hero from '../components/home/Hero';
import BigScreen from '../components/home/BigScreen';
// import AboutUs from '../components/home/AboutUs';
import DestinationPreview from '../components/home/DestinationPreview';
import ExperiencePreview from '../components/home/ExperiencePreview';
import GalleryPreview from '../components/home/GalleryPreview';
import Philosophy from '../components/home/Philosophy';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import WhyUs from '../components/home/WhyUs';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <AboutUs /> */}
      <DestinationPreview />
      <ExperiencePreview />
      <GalleryPreview />
      <Philosophy />
      <BigScreen />
      <Testimonials />
      <Contact />
      <WhyUs />
    </>
  );
};

export default Home;