import React from 'react';
import { ArrowRight, Award, Globe, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="section-subtitle">About Us</h1>
            <h2 className="section-title">Our Philosophy</h2>
            <p className="text-primary-700 mt-4 leading-relaxed">
              At Discover Culture India, we believe that true luxury lies in authentic experiences 
              and meaningful connections. Our journey began with a vision to showcase the rich 
              cultural heritage of India, Nepal, and Bhutan through thoughtfully curated experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h3 className="font-serif text-2xl mb-6">Our Approach</h3>
              <p className="text-primary-700 mb-6 leading-relaxed">
                We craft experiences that go beyond traditional tourism, offering intimate access 
                to the living heritage of the Himalayas and Indian subcontinent while maintaining 
                the highest standards of luxury and comfort.
              </p>
              <p className="text-primary-700 mb-6 leading-relaxed">
                Our team works closely with local communities, artisans, and cultural experts across 
                India, Nepal, and Bhutan to ensure that each journey is both authentic and sustainable, 
                creating meaningful connections between our guests and these ancient traditions.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-primary-900 hover:text-accent-700 transition-colors"
              >
                Begin Your Journey <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg"
                alt="Cultural experience"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="text-center p-8 bg-white">
              <img 
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg"
                alt="Authentic experiences"
                className="w-full h-48 object-cover mb-6"
              />
              <h4 className="font-serif text-xl mb-4">Authentic Experiences</h4>
              <p className="text-primary-700">
                Carefully curated experiences that connect you with living heritage across three nations.
              </p>
            </div>
            <div className="text-center p-8 bg-white">
              <img 
                src="https://images.pexels.com/photos/5282557/pexels-photo-5282557.jpeg"
                alt="Luxury accommodations"
                className="w-full h-48 object-cover mb-6"
              />
              <h4 className="font-serif text-xl mb-4">Luxury Accommodations</h4>
              <p className="text-primary-700">
                Hand-picked heritage properties and luxury hotels that reflect local culture.
              </p>
            </div>
            <div className="text-center p-8 bg-white">
              <img 
                src="https://images.pexels.com/photos/2387608/pexels-photo-2387608.jpeg"
                alt="Expert guidance"
                className="w-full h-48 object-cover mb-6"
              />
              <h4 className="font-serif text-xl mb-4">Expert Guidance</h4>
              <p className="text-primary-700">
                Knowledgeable local experts who bring each destination to life.
              </p>
            </div>
          </div>

          {/* Team & Credentials Section */}
          <section className="py-16 bg-white border border-primary-200">
            <div className="max-w-4xl mx-auto px-8">
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl text-primary-950 mb-4">Our Team & Credentials</h3>
                <p className="text-primary-700 leading-relaxed">
                  Meet the passionate team behind your extraordinary cultural journeys, backed by 
                  proper licensing and years of expertise in luxury cultural tourism.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="font-serif text-xl mb-6 text-primary-950">Travel Credentials</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="text-accent-600 mr-3 mt-1" size={20} />
                      <div>
                        <h5 className="font-medium text-primary-900">Licensed Tour Operator</h5>
                        <p className="text-sm text-primary-700">Certified by Ministry of Tourism, Government of India</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="text-accent-600 mr-3 mt-1" size={20} />
                      <div>
                        <h5 className="font-medium text-primary-900">International Partnerships</h5>
                        <p className="text-sm text-primary-700">Authorized agents in Nepal and Bhutan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="text-accent-600 mr-3 mt-1" size={20} />
                      <div>
                        <h5 className="font-medium text-primary-900">Travel Insurance</h5>
                        <p className="text-sm text-primary-700">Comprehensive coverage and bonding</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="text-accent-600 mr-3 mt-1" size={20} />
                      <div>
                        <h5 className="font-medium text-primary-900">Expert Network</h5>
                        <p className="text-sm text-primary-700">Local guides and cultural specialists</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-xl mb-6 text-primary-950">Our Expertise</h4>
                  <div className="space-y-4">
                    <div className="bg-primary-50 p-4">
                      <h5 className="font-medium text-primary-900 mb-2">Cultural Heritage Specialists</h5>
                      <p className="text-sm text-primary-700">
                        Our team includes historians, anthropologists, and cultural experts who ensure 
                        authentic and respectful cultural exchanges.
                      </p>
                    </div>
                    <div className="bg-primary-50 p-4">
                      <h5 className="font-medium text-primary-900 mb-2">Luxury Travel Curators</h5>
                      <p className="text-sm text-primary-700">
                        Years of experience in high-end travel with meticulous attention to detail 
                        and personalized service standards.
                      </p>
                    </div>
                    <div className="bg-primary-50 p-4">
                      <h5 className="font-medium text-primary-900 mb-2">Sustainable Tourism Advocates</h5>
                      <p className="text-sm text-primary-700">
                        Committed to responsible tourism practices that benefit local communities 
                        and preserve cultural heritage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-primary-600 text-sm mb-4">
                  License Numbers: Tourism License #DL-1234567890 | IATA Certified | Member of TAAI
                </p>
                <Link 
                  to="/contact" 
                  className="btn-primary inline-block"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;