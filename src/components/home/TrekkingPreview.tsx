import React from "react";
import { Link } from "react-router-dom";
import { Mountain, MapPin, ArrowRight } from "lucide-react";

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
          {/* Ladakh Trek Card */}
          <div
            className="bg-white group slide-up rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg"
                alt="Ladakh Trek"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Diverse
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-xs uppercase tracking-wider text-primary-600 mb-2">
                <MapPin size={14} className="mr-1" />
                <span>Ladakh, India</span>
              </div>
              <h3 className="font-serif text-xl text-primary-950 mb-2">
                Ladakh Trekking Routes
              </h3>
              <div className="flex justify-between text-sm text-primary-700 mb-4">
                <span className="flex items-center">
                  <Mountain size={16} className="mr-1" />
                  Multiple Routes
                </span>
                <span>Various Durations</span>
              </div>
              <p className="text-primary-700 text-sm leading-relaxed mb-4">
                From the classic Markha Valley to the winter Chadar Trek on the
                frozen Zanskar River, Ladakh offers diverse trekking experiences
                with stunning landscapes and cultural encounters.
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

          {/* Himachal Pradesh Trek Card */}
          <div
            className="bg-white group slide-up rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg"
                alt="Himachal Pradesh Trek"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Scenic
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-xs uppercase tracking-wider text-primary-600 mb-2">
                <MapPin size={14} className="mr-1" />
                <span>Himachal Pradesh, India</span>
              </div>
              <h3 className="font-serif text-xl text-primary-950 mb-2">
                Himachal Pradesh Treks
              </h3>
              <div className="flex justify-between text-sm text-primary-700 mb-4">
                <span className="flex items-center">
                  <Mountain size={16} className="mr-1" />
                  Various Altitudes
                </span>
                <span>4-14 days</span>
              </div>
              <p className="text-primary-700 text-sm leading-relaxed mb-4">
                From the dramatic landscapes of Hampta Pass to the serene Bhrigu
                Lake and the challenging Pin Parvati Pass, Himachal Pradesh
                offers treks for all levels of experience.
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

          {/* Nepal & Bhutan Trek Card */}
          <div
            className="bg-white group slide-up rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3389537/pexels-photo-3389537.jpeg"
                alt="Nepal Trek"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Iconic
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-xs uppercase tracking-wider text-primary-600 mb-2">
                <MapPin size={14} className="mr-1" />
                <span>Nepal & Bhutan</span>
              </div>
              <h3 className="font-serif text-xl text-primary-950 mb-2">
                Nepal & Bhutan Classics
              </h3>
              <div className="flex justify-between text-sm text-primary-700 mb-4">
                <span className="flex items-center">
                  <Mountain size={16} className="mr-1" />
                  Up to 5,364m
                </span>
                <span>4-30 days</span>
              </div>
              <p className="text-primary-700 text-sm leading-relaxed mb-4">
                From the iconic Everest Base Camp and Annapurna Circuit in Nepal
                to the challenging Snowman Trek and scenic Druk Path in Bhutan,
                explore the heart of the Himalayas.
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
