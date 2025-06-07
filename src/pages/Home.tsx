import React from 'react';
import Hero from '../components/home/Hero';
import BigScreen from '../components/home/BigScreen';
import DestinationPreview from '../components/home/DestinationPreview';
import ExperiencePreview from '../components/home/ExperiencePreview';
import GalleryPreview from '../components/home/GalleryPreview';
import Philosophy from '../components/home/Philosophy';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <DestinationPreview />
      <ExperiencePreview />
      <GalleryPreview />
      <Philosophy />
      <BigScreen />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;