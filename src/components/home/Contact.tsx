import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-accent-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="slide-up relative z-10">
            <h2 className="section-subtitle">Begin Your Journey</h2>
            <h3 className="section-title">Plan Your Cultural Experience</h3>
            <p className="text-primary-700 mt-4 mb-8 leading-relaxed">
              Our travel designers are ready to craft a personalized journey that 
              aligns with your interests, preferences, and schedule. Contact us to 
              begin planning your immersive cultural experience in India.
            </p>
            
            <div className="bg-white p-8 border border-primary-200 rounded-lg shadow-sm">
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
          </div>
          
          <div className="relative h-[600px] overflow-hidden">
            {/* First Image - Bottom Layer */}
            <div className="absolute inset-0">
              {/* <img
                src="/1.jpg"
                alt="Cultural experience background"
                className="w-full h-full object-cover"
              /> */}
            </div>

            {/* Second Image - Top Layer with Diagonal Clip */}
            <div 
              className="absolute inset-0 transform"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0 100%)',
              }}
            >
              <img
                src="/c.jpg"
                alt="Luxury cultural experience"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Add subtle gradient overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;