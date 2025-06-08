import React from 'react';
import { Award, Globe, Users, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-24 bg-primary-50">
        <div className="container-custom mx-auto px-4">
          {/* Header Section */}
          <div className="text-center max-w-5xl mx-auto mb-20">
            <h1 className="section-subtitle mb-2">About Us</h1>
            {/* <h2 className="section-title mb-6">Our Philosophy</h2> */}
            <p className="text-primary-700 mt-4 leading-relaxed text-base md:text-lg mx-auto">
              We are Discover Culture India, a 32-year-old travel company with a deep and abiding love 
              for the outdoors, cultural diversity and adventurous activities. Since 1990, contributing 
              to the local economy through cultural tours has been our main focus.
            </p>
          </div>

          {/* Main Content Section */}
          <div className="mb-32">
            <div className="space-y-8 max-w-4xl mx-auto">
              <h3 className="font-serif text-3xl mb-8 text-center">Our Journey</h3>
              
              <div className="space-y-8 text-primary-700 leading-relaxed">
                <p className="text-center">
                  Mr. Sheikh Abdul Ahad founded this company to combine his passion for travel with his 
                  desire to assist leisure, business and group travellers enhance the value of their travel 
                  experiences. With a career spanning more than 5 decades, he has been recognized for his 
                  knowledge and contribution to the industry.
                </p>
                
                <div className="pl-6 border-l-4 border-accent-600 bg-white/50 p-6 rounded-r-lg">
                  <p className="italic text-primary-900 font-medium mb-4">
                    Currently serving as the Vice President of TASK (Travel Agents Society of Kashmir), 
                    his leadership roles include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Treasurer of TASK (2004-2011)</li>
                    <li>Treasurer of ADTOI (Adventure Tour Operators Association of India, 2006-2012)</li>
                    <li>Treasurer of TAAI (Travel Agents Association of India, 2014-2019)</li>
                    <li>Vice President of DTOAK (Domestic Tour Operators Association of Kashmir, 2017-2019)</li>
                  </ul>
                </div>

                <p className="text-center">
                  Mr. Ajaz Sheikh, our co-founder, has been leading the inbound travel services in Delhi 
                  for the last 35 years. His expertise lies in adventure tourism, including Trekking, 
                  River Rafting, Fishing, Sailing, Camping, Mountaineering, Horse Riding, and Wildlife Safaris.
                </p>

                <div className="bg-white p-8 rounded-lg border border-primary-100 shadow-sm">
                  <h4 className="font-serif text-2xl mb-4 text-primary-900 text-center">Our Mission</h4>
                  <p className="text-center">
                    To provide high-quality, prodigious, safe, and memorable experiences to our customers. 
                    We have been recognized, approved, and licensed by The Ministry of Tourism, Government of India.
                  </p>
                </div>

                {/* Our Expertise Section */}
                <div className="space-y-6 bg-primary-50/50 p-8 rounded-lg">
                  <h4 className="font-serif text-2xl mb-8 text-primary-900 text-center">Our Expertise</h4>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Cultural Heritage Specialists",
                        desc: "Our team includes historians, anthropologists, and cultural experts who ensure authentic and respectful cultural exchanges."
                      },
                      {
                        title: "Luxury Travel Curators",
                        desc: "Years of experience in high-end travel with meticulous attention to detail and personalized service standards."
                      },
                      {
                        title: "Sustainable Tourism Advocates",
                        desc: "Committed to responsible tourism practices that benefit local communities and preserve cultural heritage."
                      }
                    ].map((exp, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg">
                        <h5 className="font-serif text-lg text-primary-900 mb-3">{exp.title}</h5>
                        <p className="text-sm text-primary-700 leading-relaxed">{exp.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Removed "Begin Your Journey" button */}
            </div>
          </div>

          {/* Team Members Section */}
          <div className="mt-32">
            <h3 className="font-serif text-3xl mb-12 text-center">Our Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                {
                  image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
                  name: "Sheikh Abdul Ahad",
                  designation: "Founder & CEO",
                  description: "35+ years of experience in luxury cultural tourism"
                },
                {
                  image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
                  name: "Ajaz Sheikh",
                  designation: "Co-Founder & Adventure Expert",
                  description: "Specialist in adventure tourism and outdoor experiences"
                },
                {
                  image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
                  name: "Sarah Khan",
                  designation: "Cultural Heritage Director",
                  description: "Expert in cultural preservation and local traditions"
                }
              ].map((member, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="mb-4 relative">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-primary-100"
                    />
                  </div>
                  <h4 className="font-serif text-lg text-primary-900 mb-1">{member.name}</h4>
                  <p className="text-accent-600 font-medium mb-2 text-sm">{member.designation}</p>
                  <p className="text-primary-700 text-xs">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Credentials & Certificates Section */}
          <section className="mt-32 bg-white border border-primary-200 rounded-lg shadow-sm">
            <div className="max-w-5xl mx-auto px-4 md:px-6 py-16">
              <div className="space-y-6">
                <h4 className="font-serif text-2xl mb-8 text-primary-950 text-center">Travel Credentials</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    { icon: Award, title: "Licensed Tour Operator", desc: "Certified by Ministry of Tourism, Government of India" },
                    { icon: Globe, title: "International Partnerships", desc: "Authorized agents in Nepal and Bhutan" },
                    { icon: Shield, title: "Travel Insurance", desc: "Comprehensive coverage and bonding" },
                    { icon: Users, title: "Expert Network", desc: "Local guides and cultural specialists" }
                  ].map((cred, index) => (
                    <div key={index} className="flex items-start p-4 bg-primary-50/50 rounded-lg">
                      <cred.icon className="text-accent-600 mr-4 mt-1" size={24} />
                      <div>
                        <h5 className="font-medium text-primary-900 mb-1">{cred.title}</h5>
                        <p className="text-sm text-primary-700">{cred.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificates Gallery */}
              <div className="mt-16">
                <h4 className="font-serif text-2xl mb-8 text-primary-950 text-center">Our Certificates</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  <img 
                    src="./cert.avif" 
                    alt="Tourism Certificate"
                    className="w-full h-48 object-contain bg-primary-50/50 p-4 rounded-lg hover:shadow-md transition-shadow"
                  />
                  <img 
                    src="./cert1.avif" 
                    alt="Travel Agency Certificate"
                    className="w-full h-48 object-contain bg-primary-50/50 p-4 rounded-lg hover:shadow-md transition-shadow"
                  />
                  <img 
                    src="./cert.avif" 
                    alt="Professional License"
                    className="w-full h-48 object-contain bg-primary-50/50 p-4 rounded-lg hover:shadow-md transition-shadow"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;