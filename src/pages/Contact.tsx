import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="section-subtitle">Connect</h1>
            <h2 className="section-title">Plan Your Journey</h2>
            <p className="text-primary-700 mt-4 leading-relaxed">
              Our travel designers are ready to craft a personalized journey that aligns 
              with your interests and preferences. Contact us to begin planning your 
              immersive cultural experience in India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 border border-primary-200 mb-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full border-b border-primary-300 py-2 focus:border-accent-600 focus:outline-none bg-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-1">
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
                    <label htmlFor="interest" className="block text-sm font-medium text-primary-900 mb-1">
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
                    <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full border-b border-primary-300 py-2 focus:border-accent-600 focus:outline-none bg-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-900 text-white py-3 uppercase tracking-wider text-sm hover:bg-primary-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start bg-white/50 p-4 rounded-lg">
                  <MapPin size={20} className="mr-3 text-primary-800 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary-900 mb-1">Address</h4>
                    <p className="text-sm text-primary-700">42 Cultural Street, New Delhi, 110001, India</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg">
                  <Phone size={20} className="mr-3 text-primary-800 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary-900 mb-1">Phone</h4>
                    <p className="text-sm text-primary-700">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg">
                  <Mail size={20} className="mr-3 text-primary-800 flex-shrink-0" />
                  <div className="min-w-0">
                    <h4 className="font-medium text-primary-900 mb-1">Email</h4>
                    <p className="text-sm text-primary-700 break-words">info@discovercultureindia.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg"
                alt="Luxury cultural experience"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;