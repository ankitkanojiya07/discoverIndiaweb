import React from 'react';
import { Link } from 'react-router-dom';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 bg-primary-950 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 slide-up">
            <h2 className="uppercase tracking-widest text-sm mb-4 text-primary-300">Our Philosophy</h2>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Authentic Cultural Immersion with Uncompromising Luxury
            </h3>
            <p className="text-primary-200 mb-6 leading-relaxed">
              At Discover Culture India, we believe that true luxury lies in authentic experiences. 
              Our approach harmoniously blends cultural immersion with refined comfort, allowing 
              you to connect deeply with India's heritage while enjoying the highest standards of 
              hospitality.
            </p>
            <p className="text-primary-200 mb-8 leading-relaxed">
              Each journey is thoughtfully crafted to provide intimate access to cultural treasures 
              while maintaining respect for local communities and traditions. We work closely with 
              local experts, artisans, and communities to ensure that your experience is both 
              authentic and sustainable.
            </p>
            <Link 
              to="/about" 
              className="inline-block px-6 py-3 border border-primary-300 text-primary-100 hover:bg-white hover:text-primary-950 transition-colors uppercase tracking-widest text-sm"
            >
              Learn More About Us
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 fade-in">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/2387608/pexels-photo-2387608.jpeg" 
                alt="Cultural experience" 
                className="w-full h-64 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg" 
                alt="Cultural experience" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg" 
                alt="Cultural experience" 
                className="w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg" 
                alt="Cultural experience" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;