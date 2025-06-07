import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

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
        image: 'https://images.pexels.com/photos/1310740/pexels-photo-1310740.jpeg',
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
        image: 'https://images.pexels.com/photos/3581349/pexels-photo-3581349.jpeg',
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
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

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

          {!selectedDestination ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(destinationsData).map(([key, destination]) => (
                <div 
                  key={key} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedDestination(key)}
                >
                  <div className="relative h-[400px] overflow-hidden mb-6">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-serif text-3xl text-white mb-2">{destination.name}</h3>
                      <p className="text-white/90 mb-4">{destination.description}</p>
                      <div className="flex items-center text-white">
                        <span className="text-sm uppercase tracking-wider">Explore</span>
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="flex items-center text-primary-900 hover:text-accent-700 transition-colors mb-4"
                >
                  ← Back to Destinations
                </button>
                <h2 className="font-serif text-4xl text-primary-950 mb-4">
                  {destinationsData[selectedDestination as keyof typeof destinationsData].name}
                </h2>
                <p className="text-primary-700 text-lg">
                  {destinationsData[selectedDestination as keyof typeof destinationsData].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinationsData[selectedDestination as keyof typeof destinationsData].places.map((place, index) => (
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;