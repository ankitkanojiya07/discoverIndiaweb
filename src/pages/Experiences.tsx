import React, { useState } from 'react';
import { Clock, Users, Star } from 'lucide-react';

const experiencesData = {
  india: {
    name: 'Experience India',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
    description: 'Immerse yourself in India\'s rich cultural tapestry through authentic experiences.',
    experiences: [
      {
        title: 'Royal Heritage Tour',
        category: 'Heritage & Architecture',
        image: 'https://images.pexels.com/photos/3581349/pexels-photo-3581349.jpeg',
        description: 'Stay in palace hotels and explore magnificent forts with expert historians.',
        duration: '5-7 days',
        groupSize: '2-8 people',
        rating: 4.9
      },
      {
        title: 'Spiritual Varanasi Journey',
        category: 'Spiritual & Rituals',
        image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg',
        description: 'Participate in sacred ceremonies and witness ancient rituals along the Ganges.',
        duration: '4-6 days',
        groupSize: '2-6 people',
        rating: 4.8
      },
      {
        title: 'Kerala Backwater Heritage',
        category: 'Nature & Culture',
        image: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        description: 'Luxury houseboat journey through serene backwaters with cultural immersion.',
        duration: '3-4 days',
        groupSize: '2-10 people',
        rating: 4.9
      },      
      {
        title: 'Rajasthani Culinary Experience',
        category: 'Culinary Arts',
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
        description: 'Learn royal recipes from palace chefs and explore spice markets.',
        duration: '2-3 days',
        groupSize: '4-12 people',
        rating: 4.7
      },
      {
        title: 'Artisan Craft Workshop',
        category: 'Arts & Crafts',
        image: 'https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg',
        description: 'Work with master craftsmen in traditional textile and pottery workshops.',
        duration: '3-5 days',
        groupSize: '2-8 people',
        rating: 4.8
      },
      {
        title: 'Ayurvedic Wellness Retreat',
        category: 'Wellness & Healing',
        image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg',
        description: 'Traditional healing practices in luxury wellness centers.',
        duration: '7-14 days',
        groupSize: '2-6 people',
        rating: 4.9
      }
    ]
  },
  nepal: {
    name: 'Experience Nepal',
    image: 'https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg',
    description: 'Discover Nepal\'s mountain culture and ancient Buddhist traditions.',
    experiences: [
      {
        title: 'Himalayan Buddhist Pilgrimage',
        category: 'Spiritual Journey',
        image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg',
        description: 'Visit ancient monasteries and participate in Buddhist ceremonies.',
        duration: '6-8 days',
        groupSize: '2-8 people',
        rating: 4.9
      },
      {
        title: 'Kathmandu Valley Heritage',
        category: 'Heritage & Architecture',
        image: 'https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg',
        description: 'Explore UNESCO World Heritage sites with local historians.',
        duration: '3-4 days',
        groupSize: '2-10 people',
        rating: 4.8
      },
      {
        title: 'Everest Base Camp Cultural Trek',
        category: 'Adventure & Culture',
        image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
        description: 'Combine trekking with Sherpa cultural immersion.',
        duration: '12-16 days',
        groupSize: '2-6 people',
        rating: 4.9
      },
      {
        title: 'Thangka Painting Workshop',
        category: 'Arts & Crafts',
        image: 'https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg',
        description: 'Learn traditional Buddhist art from master painters.',
        duration: '4-6 days',
        groupSize: '2-8 people',
        rating: 4.7
      },
      {
        title: 'Chitwan Wildlife & Culture',
        category: 'Nature & Culture',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
        description: 'Wildlife safari combined with Tharu cultural experiences.',
        duration: '3-4 days',
        groupSize: '2-12 people',
        rating: 4.8
      }
    ]
  },
  bhutan: {
    name: 'Experience Bhutan',
    image: 'https://images.pexels.com/photos/5282557/pexels-photo-5282557.jpeg',
    description: 'Explore the Last Shangri-La through sustainable cultural tourism.',
    experiences: [
      {
        title: 'Tiger\'s Nest Spiritual Journey',
        category: 'Spiritual & Adventure',
        image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg',
        description: 'Hike to the iconic monastery and participate in Buddhist rituals.',
        duration: '2-3 days',
        groupSize: '2-8 people',
        rating: 4.9
      },
      {
        title: 'Dzong Architecture Tour',
        category: 'Heritage & Architecture',
        image: 'https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg',
        description: 'Explore fortress-monasteries with traditional architecture experts.',
        duration: '4-6 days',
        groupSize: '2-10 people',
        rating: 4.8
      },
      {
        title: 'Gross National Happiness Experience',
        category: 'Philosophy & Culture',
        image: 'https://images.pexels.com/photos/2387608/pexels-photo-2387608.jpeg',
        description: 'Learn about Bhutan\'s unique development philosophy.',
        duration: '5-7 days',
        groupSize: '2-8 people',
        rating: 4.9
      },
      {
        title: 'Traditional Weaving Workshop',
        category: 'Arts & Crafts',
        image: 'https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg',
        description: 'Learn traditional Bhutanese textile arts from master weavers.',
        duration: '3-4 days',
        groupSize: '2-6 people',
        rating: 4.7
      },
      {
        title: 'Festival Cultural Immersion',
        category: 'Festivals & Traditions',
        image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
        description: 'Participate in colorful Buddhist festivals and masked dances.',
        duration: '4-5 days',
        groupSize: '2-12 people',
        rating: 4.9
      }
    ]
  }
};

const Experiences: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="pt-24">
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="section-subtitle">Discover</h1>
            <h2 className="section-title">Cultural Experiences</h2>
            <p className="text-primary-700 mt-4 leading-relaxed">
              Immerse yourself in authentic cultural experiences across India, Nepal, and Bhutan, 
              carefully curated to connect you with local traditions and heritage.
            </p>
          </div>

          {!selectedCountry ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(experiencesData).map(([key, country]) => (
                <div 
                  key={key} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedCountry(key)}
                >
                  <div className="relative h-[400px] overflow-hidden mb-6">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-serif text-3xl text-white mb-2">{country.name}</h3>
                      <p className="text-white/90 mb-4">{country.description}</p>
                      <div className="flex items-center text-white">
                        <span className="text-sm uppercase tracking-wider">Explore Experiences</span>
                        <Clock size={16} className="ml-2" />
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
                  onClick={() => setSelectedCountry(null)}
                  className="flex items-center text-primary-900 hover:text-accent-700 transition-colors mb-4"
                >
                  ← Back to Experiences
                </button>
                <h2 className="font-serif text-4xl text-primary-950 mb-4">
                  {experiencesData[selectedCountry as keyof typeof experiencesData].name}
                </h2>
                <p className="text-primary-700 text-lg">
                  {experiencesData[selectedCountry as keyof typeof experiencesData].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiencesData[selectedCountry as keyof typeof experiencesData].experiences.map((experience, index) => (
                  <div key={index} className="bg-white group">
                    <div className="relative overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white text-primary-900 text-sm">
                        {experience.duration}
                      </div>
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
                      <div className="flex items-center justify-between text-sm text-primary-600">
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          {experience.groupSize}
                        </div>
                        <div className="flex items-center">
                          <Star size={14} className="mr-1 text-accent-600" />
                          {experience.rating}
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

export default Experiences;