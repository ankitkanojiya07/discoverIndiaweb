import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const destinationsData = {
  india: {
    name: 'India',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
    description: 'Experience the incredible diversity of India, from ancient temples to royal palaces.',
    places: [
      {
        name: 'Rajasthan',
        image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg',
        description: 'Land of kings with magnificent palaces and desert landscapes.',
        highlights: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer']
      },
      {
        name: 'Kerala',
        image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg',
        description: 'God\'s own country with backwaters and spice plantations.',
        highlights: ['Kochi', 'Munnar', 'Alleppey', 'Thekkady']
      },
      {
        name: 'Varanasi',
        image: 'https://images.pexels.com/photos/3393546/pexels-photo-3393546.jpeg',
        description: 'Spiritual capital with ancient ghats along the Ganges.',
        highlights: ['Dashashwamedh Ghat', 'Sarnath', 'Ramnagar Fort']
      },
      {
        name: 'Goa',
        image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
        description: 'Coastal paradise with Portuguese heritage and pristine beaches.',
        highlights: ['Old Goa', 'Anjuna Beach', 'Dudhsagar Falls']
      },
      {
        name: 'Himachal Pradesh',
        image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
        description: 'Mountain state with hill stations and Buddhist monasteries.',
        highlights: ['Shimla', 'Manali', 'Dharamshala', 'Spiti Valley']
      },
      {
        name: 'Tamil Nadu',
        image: 'https://images.pexels.com/photos/2310360/pexels-photo-2310360.jpeg',
        description: 'Temple state with Dravidian architecture and classical arts.',
        highlights: ['Chennai', 'Madurai', 'Thanjavur', 'Mahabalipuram']
      }
    ]
  },
  nepal: {
    name: 'Nepal',
    image: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg',
    description: 'Himalayan kingdom with ancient temples and mountain adventures.',
    places: [
      {
        name: 'Kathmandu Valley',
        image: 'https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg',
        description: 'Historic valley with UNESCO World Heritage sites.',
        highlights: ['Kathmandu Durbar Square', 'Patan', 'Bhaktapur', 'Swayambhunath']
      },
      {
        name: 'Pokhara',
        image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
        description: 'Lake city with stunning Himalayan views.',
        highlights: ['Phewa Lake', 'Sarangkot', 'World Peace Pagoda', 'Begnas Lake']
      },
      {
        name: 'Chitwan',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
        description: 'Wildlife sanctuary in the Terai lowlands.',
        highlights: ['Chitwan National Park', 'Elephant Safari', 'Tharu Culture']
      },
      {
        name: 'Everest Region',
        image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
        description: 'Home to the world\'s highest peak and Sherpa culture.',
        highlights: ['Namche Bazaar', 'Tengboche Monastery', 'Kala Patthar']
      }
    ]
  },
  bhutan: {
    name: 'Bhutan',
    image: 'https://images.pexels.com/photos/5282557/pexels-photo-5282557.jpeg',
    description: 'Last Shangri-La with pristine nature and Buddhist culture.',
    places: [
      {
        name: 'Thimphu',
        image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg',
        description: 'Capital city blending tradition with modernity.',
        highlights: ['Tashichho Dzong', 'Buddha Dordenma', 'Weekend Market']
      },
      {
        name: 'Paro',
        image: 'https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg',
        description: 'Historic town with the famous Tiger\'s Nest monastery.',
        highlights: ['Tiger\'s Nest Monastery', 'Paro Dzong', 'National Museum']
      },
      {
        name: 'Punakha',
        image: 'https://images.pexels.com/photos/2387608/pexels-photo-2387608.jpeg',
        description: 'Former capital with stunning dzong architecture.',
        highlights: ['Punakha Dzong', 'Chimi Lhakhang', 'Suspension Bridge']
      },
      {
        name: 'Bumthang',
        image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
        description: 'Spiritual heartland with ancient temples.',
        highlights: ['Jakar Dzong', 'Jambay Lhakhang', 'Kurjey Lhakhang']
      }
    ]
  }
};

const Destinations: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const country = params.get('country');
    if (country && Object.keys(destinationsData).includes(country)) {
      setActiveCountry(country);
      // Scroll to the country section
      setTimeout(() => {
        const element = document.getElementById(`country-${country}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="pt-24">
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="section-subtitle">Explore</h1>
            <h2 className="section-title">Our Destinations</h2>
            <p className="text-primary-700 mt-4 leading-relaxed">
              Discover the cultural treasures of the Himalayas and the Indian subcontinent 
              through our carefully curated destinations across India, Nepal, and Bhutan.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mb-16">
            {Object.entries(destinationsData).map(([key, destination]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveCountry(key);
                  navigate(`/destinations?country=${key}`, { replace: true });
                  const element = document.getElementById(`country-${key}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeCountry === key
                    ? 'bg-accent-600 text-white'
                    : 'bg-white text-primary-900 hover:bg-primary-100'
                }`}
              >
                {destination.name}
              </button>
            ))}
          </div>

          {/* Country sections */}
          {Object.entries(destinationsData).map(([key, destination]) => (
            <div
              key={key}
              id={`country-${key}`}
              className={`mb-24 transition-opacity duration-500 ${
                activeCountry && activeCountry !== key ? 'opacity-50' : 'opacity-100'
              }`}
            >
              <div className="mb-12">
                <h2 className="font-serif text-4xl text-primary-950 mb-4">
                  {destination.name}
                </h2>
                <p className="text-primary-700 text-lg max-w-4xl">
                  {destination.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destination.places.map((place, index) => (
                  <div key={index} className="bg-white group">
                    <div className="relative overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 border border-t-0 border-primary-200">
                      <h3 className="font-serif text-xl text-primary-950 mb-3">
                        {place.name}
                      </h3>
                      <p className="text-primary-700 text-sm leading-relaxed mb-4">
                        {place.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-primary-900">Key Attractions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {place.highlights.map((highlight, idx) => (
                            <span 
                              key={idx}
                              className="flex items-center text-xs bg-primary-100 text-primary-800 px-2 py-1"
                            >
                              <MapPin size={12} className="mr-1" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;