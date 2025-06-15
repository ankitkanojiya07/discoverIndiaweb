import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const GalleryPreview: React.FC = () => {
  const previewImages = [
    {
      id: 1,
      image: "./19.jpg",
      title: "Desert",
      category: "Nature",
    },
    {
      id: 2,
      image: "./24.jpg",
      title: "Taj Mahal",
      category: "Historic",
    },
    {
      id: 3,
      image: "./8.jpg",
      title: "Legacy",
      category: "wildlife",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="section-subtitle">Our Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">
            Curated Off-The-Beaten-Path Experiences
          </h3>
          <p className="text-gray-600 mb-8">
            Discover our collection of breathtaking destinations and
            unforgettable moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewImages.map((item) => (
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
                <h4 className="text-white text-xl font-serif">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center px-6 py-3 bg-primary-950 text-white hover:bg-primary-900 transition-colors uppercase tracking-widest text-sm"
          >
            View Full Gallery
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
