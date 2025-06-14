import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "India",
    image: "./te.jpg",
    description:
      "Experience the incredible diversity of India, from ancient temples to royal palaces and spiritual traditions.",
    link: "/destinations",
  },
  {
    id: 2,
    name: "Nepal",
    image: "./3.jpg",
    description:
      "Discover the Himalayan kingdom with its ancient temples, mountain adventures, and Buddhist heritage.",
    link: "/destinations",
  },
  {
    id: 3,
    name: "Bhutan",
    image: "./4.jpg",
    description:
      "Explore the Last Shangri-La with pristine nature, Buddhist culture, and the philosophy of Gross National Happiness.",
    link: "/destinations",
  },
];

const DestinationPreview: React.FC = () => {
  return (
    <section className="py-24 bg-primary-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="section-subtitle">Curated Destinations</h2>
          <h3 className="section-title">Where Heritage Meets Luxury</h3>
          <p className="text-primary-700 mt-4 leading-relaxed">
            Each destination offers a unique lens into the rich cultural
            tapestry of the Himalayas and Indian subcontinent, carefully
            selected to provide authentic experiences with uncompromising
            comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group overflow-hidden slide-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white mb-2">
                    {destination.name}
                  </h3>
                </div>
              </div>
              <div className="p-6 bg-white border border-primary-100">
                <p className="text-primary-700 mb-4">
                  {destination.description}
                </p>
                <Link
                  to={destination.link}
                  className="inline-flex items-center text-sm uppercase tracking-wider text-primary-900 hover:text-accent-700 transition-colors font-medium"
                >
                  Explore More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/destinations" className="btn-primary inline-block">
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationPreview;
