import React from "react";
import { Link } from "react-router-dom";
import { Leaf, MapPin, ArrowRight } from "lucide-react";

interface WildlifeSafari {
  id: number;
  title: string;
  location: string;
  country: string;
  image: string;
  keySpecies: string[];
  bestSeason: string;
  description: string;
}

const wildlifeSafaris: WildlifeSafari[] = [
  {
    id: 1,
    title: "Ranthambore Tiger Safari",
    location: "Rajasthan",
    country: "India",
    image: "https://images.pexels.com/photos/247566/pexels-photo-247566.jpeg",
    keySpecies: ["Bengal Tiger", "Leopard", "Sloth Bear"],
    bestSeason: "October to June",
    description:
      "Explore one of India's most renowned national parks and spot the majestic Bengal tiger in its natural habitat.",
  },
  {
    id: 2,
    title: "Chitwan National Park",
    location: "Terai",
    country: "Nepal",
    image: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
    keySpecies: ["One-horned Rhino", "Bengal Tiger", "Asian Elephant"],
    bestSeason: "October to March",
    description:
      "Discover Nepal's first national park, home to the endangered one-horned rhinoceros and diverse wildlife.",
  },
  {
    id: 3,
    title: "Manas Wildlife Sanctuary",
    location: "Assam",
    country: "India",
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    keySpecies: ["Golden Langur", "Red Panda", "Clouded Leopard"],
    bestSeason: "November to April",
    description:
      "Visit this UNESCO World Heritage site that spans the border between India and Bhutan, known for its exceptional biodiversity.",
  },
];

const WildlifePreview: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="section-subtitle">Wildlife Safaris</h2>
          <h3 className="section-title">Natural Habitats</h3>
          <p className="text-primary-700 mt-4 leading-relaxed">
            Embark on extraordinary journeys into the wild to witness majestic
            animals in their natural habitats across the diverse ecosystems of
            India, Nepal, and Bhutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wildlifeSafaris.map((safari, index) => (
            <div
              key={safari.id}
              className="bg-primary-50 group slide-up rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={safari.image}
                  alt={safari.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {safari.bestSeason}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs uppercase tracking-wider text-primary-600 mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span>
                    {safari.location}, {safari.country}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-primary-950 mb-3">
                  {safari.title}
                </h3>
                <div className="mb-4">
                  <p className="text-xs font-medium text-primary-800 mb-2">
                    Key Species:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {safari.keySpecies.map((species, idx) => (
                      <span
                        key={idx}
                        className="flex items-center text-xs bg-white text-primary-700 px-2 py-1 rounded-full"
                      >
                        <Leaf size={12} className="mr-1 text-accent-600" />
                        {species}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed mb-4">
                  {safari.description}
                </p>
                <Link
                  to="/wildlife"
                  className="text-xs uppercase tracking-wider font-medium text-primary-900 hover:text-accent-700 transition-colors flex items-center"
                >
                  View Details
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/wildlife" className="btn-primary inline-block">
            Explore All Safaris
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WildlifePreview;
