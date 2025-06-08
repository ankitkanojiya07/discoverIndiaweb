import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: './h11.jpg',
    title: 'Experience the Soul of India',
    subtitle: 'Immersive cultural journeys through ancient traditions',
  },
  {
    id: 2,
    image: './h1.jpg',
    title: 'It is time to travel',
    subtitle: 'Discover new destinations and create unforgettable memories',
  },
  {
    id: 3,
    image: './h12.jpg',
    title: 'Authentic Cultural Connections',
    subtitle: 'Engage with local communities and age-old traditions',
  }
  
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}

      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl fade-in" style={{ animationDelay: '0.5s' }}>
            {/* <h2 className="section-subtitle text-white">Discover Culture India</h2> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/experiences"
                className="px-6 py-3 bg-white text-primary-950 hover:bg-primary-100 transition-colors uppercase tracking-widest text-sm flex items-center"
              >
                Explore Experiences
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-white text-white hover:bg-white hover:text-primary-950 transition-colors uppercase tracking-widest text-sm"
              >
                Plan Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;