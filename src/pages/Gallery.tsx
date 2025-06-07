import React, { useState } from 'react';

type Category = 'all' | 'heritage' | 'culture' | 'nature' | 'temples' | 'people';

interface GalleryImage {
  id: number;
  image: string;
  title: string;
  category: Category;
  location: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
    title: 'Ancient Heritage',
    category: 'heritage',
    location: 'Rajasthan, India'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg',
    title: 'Sacred Temples',
    category: 'temples',
    location: 'Varanasi, India'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/5282557/pexels-photo-5282557.jpeg',
    title: 'Local Life',
    category: 'people',
    location: 'Bhutan'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
    title: 'Natural Wonders',
    category: 'nature',
    location: 'Nepal'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg',
    title: 'Temple Ceremonies',
    category: 'culture',
    location: 'Kerala, India'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/2387608/pexels-photo-2387608.jpeg',
    title: 'Mountain Monasteries',
    category: 'temples',
    location: 'Himachal Pradesh, India'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    title: 'Festival Celebrations',
    category: 'culture',
    location: 'Rajasthan, India'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg',
    title: 'Desert Landscapes',
    category: 'nature',
    location: 'Thar Desert, India'
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/3581349/pexels-photo-3581349.jpeg',
    title: 'Palace Architecture',
    category: 'heritage',
    location: 'Udaipur, India'
  }
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'heritage', label: 'Heritage' },
    { value: 'culture', label: 'Culture' },
    { value: 'nature', label: 'Nature' },
    { value: 'temples', label: 'Temples' },
    { value: 'people', label: 'People' }
  ];

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === 'all' || image.category === selectedCategory
  );

  return (
    <div className="pt-24">
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="section-subtitle">Our Gallery</h1>
            <h2 className="section-title">Visual Journey Through Culture</h2>
            <p className="text-primary-700 mt-4 leading-relaxed">
              Explore our collection of stunning photographs capturing the essence of India, 
              Nepal, and Bhutan's rich cultural heritage, natural beauty, and vibrant traditions.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-primary-900 text-white'
                      : 'bg-white text-primary-900 hover:bg-primary-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((item) => (
              <div key={item.id} className="group relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-white/70 text-sm uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-serif mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
