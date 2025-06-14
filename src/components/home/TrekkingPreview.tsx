import React from "react";
import { Link } from "react-router-dom";
import { Mountain, MapPin, ArrowRight } from "lucide-react";

interface TrekkingRoute {
  id: number;
  title: string;
  location: string;
  country: string;
  image: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Difficult";
  duration: string;
  altitude: string;
  description: string;
}

const trekkingRoutes: TrekkingRoute[] = [
  {
    id: 1,
    title: "Markha Valley Trek",
    location: "Ladakh",
    country: "India",
    image: "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg",
    difficulty: "Moderate",
    duration: "7-9 days",
    altitude: "5,200m",
    description:
      "Experience the breathtaking landscapes of Ladakh through traditional villages and high mountain passes.",
  },
  {
    id: 2,
    title: "Everest Base Camp",
    location: "Khumbu",
    country: "Nepal",
    image: "https://images.pexels.com/photos/3389537/pexels-photo-3389537.jpeg",
    difficulty: "Challenging",
    duration: "12-14 days",
    altitude: "5,364m",
    description:
      "The classic trek to the foot of the world's highest mountain through Sherpa villages and dramatic landscapes.",
  },
  {
    id: 3,
    title: "Druk Path Trek",
    location: "Paro to Thimphu",
    country: "Bhutan",
    image: "https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg",
    difficulty: "Moderate",
    duration: "4-6 days",
    altitude: "4,200m",
    description:
      "A short but scenic trek connecting Paro and Thimphu through forests and high ridges with views of the Himalayas.",
  },
];

const TrekkingPreview: React.FC = () => {
  return (
    <section
      className="py-24 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('./16.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="section-subtitle text-white">Mountain Adventures</h2>
          <h3 className="section-title text-white">Himalayan Trekking</h3>
          <p className="text-white mt-4 leading-relaxed">
            Explore the majestic peaks and valleys of the Himalayas with our
            carefully curated trekking experiences across India, Nepal, and
            Bhutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trekkingRoutes.map((route, index) => (
            <div
              key={route.id}
              className="bg-white group slide-up rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {route.difficulty}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs uppercase tracking-wider text-primary-600 mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span>
                    {route.location}, {route.country}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-primary-950 mb-2">
                  {route.title}
                </h3>
                <div className="flex justify-between text-sm text-primary-700 mb-4">
                  <span className="flex items-center">
                    <Mountain size={16} className="mr-1" />
                    {route.altitude}
                  </span>
                  <span>{route.duration}</span>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed mb-4">
                  {route.description}
                </p>
                <Link
                  to="/trekking"
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
          <Link
            to="/trekking"
            className="btn-primary inline-block bg-accent-600 hover:bg-accent-600"
          >
            Explore All Treks
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrekkingPreview;
