import React, { useState } from "react";

const Contact = () => {
  return (
    <section className="py-24 bg-accent-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="slide-up relative z-10">
            <h2 className="text-accent-600 text-sm uppercase tracking-wider mb-2">
              Begin Your Journey
            </h2>
            <h3 className="text-4xl font-bold text-primary-900 mb-4">
              Plan Your Cultural Experience
            </h3>
            <p className="text-primary-700 mt-4 mb-8 leading-relaxed">
              Our travel designers are ready to craft a personalized journey
              that aligns with your interests, preferences, and schedule.
              Contact us to begin planning your immersive cultural experience in
              India.
            </p>

            <div className="bg-white p-8 border border-primary-200 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary-900 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border-b border-primary-300 py-2 focus:border-accent-600 focus:outline-none bg-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary-900 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border-b border-primary-300 py-2 focus:border-accent-600 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-primary-900 mb-1"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full border-b border-primary-300 py-2 focus:border-accent-600 focus:outline-none bg-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="heritage">Heritage & Architecture</option>
                    <option value="spiritual">Spiritual Journeys</option>
                    <option value="culinary">Culinary Experiences</option>
                    <option value="crafts">Arts & Crafts</option>
                    <option value="custom">Custom Experience</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary-900 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border-b border-primary-300 py-2 focus:border-accent-600 focus:outline-none bg-transparent"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-primary-900 text-white py-3 uppercase tracking-wider text-sm hover:bg-primary-800 transition-colors"
                  onClick={() => console.log("Form submitted")}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-[600px] rounded-lg overflow-hidden border border-primary-200 shadow-lg">
            <img
              src="./19.jpg"
              alt="Indian Heritage and Culture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h4 className="text-3xl font-bold mb-2">
                Discover India's Rich Heritage
              </h4>
              <p className="text-lg opacity-90">
                Experience the magnificent architecture, vibrant culture, and
                timeless traditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
