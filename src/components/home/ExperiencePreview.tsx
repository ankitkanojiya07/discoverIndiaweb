import React from 'react';
import { Link } from 'react-router-dom';

interface Experience {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  country: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Royal Heritage Tour',
    category: 'India',
    image: 'https://images.pexels.com/photos/3581349/pexels-photo-3581349.jpeg',
    description: 'Journey through time as you explore ancient palaces and forts with expert historians.',
    country: 'India'
  },
  {
    id: 2,
    title: 'Himalayan Buddhist Pilgrimage',
    category: 'Nepal',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg',
    description: 'Visit ancient monasteries and participate in Buddhist ceremonies in the Himalayas.',
    country: 'Nepal'
  },
  {
    id: 3,
    title: 'Tiger\'s Nest Spiritual Journey',
    category: 'Bhutan',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg',
    description: 'Hike to the iconic monastery and experience Bhutanese Buddhist traditions.',
    country: 'Bhutan'
  },
  {
    id: 4,
    title: 'Artisan Workshops',
    category: 'India',
    image: 'https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg',
    description: 'Learn traditional crafts directly from master artisans in their ancestral workshops.',
    country: 'India'
  },
];

const ExperiencePreview: React.FC = () => {
  return (
    <section className="py-24 bg-primary-100">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="section-subtitle">Cultural Experiences</h2>
          <h3 className="section-title">Immersive Cultural Journeys</h3>
          <p className="text-primary-700 mt-4 leading-relaxed">
            Our carefully curated experiences connect you with the living heritage of India, Nepal, and Bhutan,
            providing authentic encounters with traditions that have thrived for centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className="bg-white group slide-up"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 border border-t-0 border-primary-200">
                <div className="text-xs uppercase tracking-wider text-accent-700 mb-2">
                  {experience.category}
                </div>
                <h3 className="font-serif text-xl text-primary-950 mb-3">
                  {experience.title}
                </h3>
                <p className="text-primary-700 text-sm leading-relaxed mb-4">
                  {experience.description}
                </p>
                <Link
                  to="/experiences"
                  className="text-xs uppercase tracking-wider font-medium text-primary-900 hover:text-accent-700 transition-colors"
                >
                  Discover More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/experiences" 
            className="btn-primary inline-block"
          >
            Explore All Experiences
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview;