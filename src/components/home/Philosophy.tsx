import React from "react";
import { Link } from "react-router-dom";

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 bg-primary-950 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 slide-up">
            <h2 className="uppercase tracking-widest text-sm mb-4 text-primary-300">
              Our Philosophy
            </h2>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Authentic Cultural Immersion with Uncompromising Luxury
            </h3>
            <p className="text-primary-200 mb-6 leading-relaxed">
              We are Discover Culture India, a 42-year-old travel company with a
              deep and abiding love for the outdoors, cultural diversity and
              adventurous activities; and we welcome you to be a part of our
              journey. Since 1983, contributing to the local economy through
              cultural tours has been our main focus. Safety, comfort and a
              unique local experience has always been on the top of our priority
              list.
            </p>
            <p className="text-primary-200 mb-8 leading-relaxed">
              Our mission is to provide high-quality, prodigious, safe and a
              memorable experience to our customers. We have been recognised,
              approved and licensed by The Ministry of Tourism, Government of
              India and various other travel and tourism associations of India.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 border border-primary-300 text-primary-100 hover:bg-white hover:text-primary-950 transition-colors uppercase tracking-widest text-sm"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 fade-in">
            <div className="space-y-4">
              <img
                src="./10.jpg"
                alt="Cultural experience"
                className="w-full h-64 object-cover"
              />
              <img
                src="./14.jpg"
                alt="Cultural experience"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img
                src="./15.jpg"
                alt="Cultural experience"
                className="w-full h-48 object-cover"
              />
              <img
                src="./11.jpg"
                alt="Cultural experience"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
