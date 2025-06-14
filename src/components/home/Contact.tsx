import React, { useState } from "react";

const Contact = () => {
  const [hoveredPlace, setHoveredPlace] = useState(null);

  const touristPlaces = [
    {
      id: 1,
      name: "Delhi",
      x: "28%",
      y: "25%",
      description: "Red Fort, India Gate, Qutub Minar",
    },
    {
      id: 2,
      name: "Agra",
      x: "30%",
      y: "28%",
      description: "Taj Mahal, Agra Fort",
    },
    {
      id: 3,
      name: "Jaipur",
      x: "25%",
      y: "30%",
      description: "Hawa Mahal, Amber Fort",
    },
    {
      id: 4,
      name: "Mumbai",
      x: "20%",
      y: "50%",
      description: "Gateway of India, Marine Drive",
    },
    {
      id: 5,
      name: "Goa",
      x: "18%",
      y: "58%",
      description: "Beaches, Portuguese Architecture",
    },
    {
      id: 6,
      name: "Kerala",
      x: "22%",
      y: "75%",
      description: "Backwaters, Hill Stations",
    },
    {
      id: 7,
      name: "Varanasi",
      x: "40%",
      y: "35%",
      description: "Ganges Ghats, Ancient Temples",
    },
    {
      id: 8,
      name: "Rishikesh",
      x: "32%",
      y: "22%",
      description: "Yoga Capital, River Rafting",
    },
    {
      id: 9,
      name: "Udaipur",
      x: "24%",
      y: "35%",
      description: "City Palace, Lake Pichola",
    },
    {
      id: 10,
      name: "Hampi",
      x: "25%",
      y: "60%",
      description: "Vijayanagara Ruins",
    },
    {
      id: 11,
      name: "Darjeeling",
      x: "55%",
      y: "30%",
      description: "Tea Gardens, Himalayan Views",
    },
    {
      id: 12,
      name: "Khajuraho",
      x: "35%",
      y: "35%",
      description: "Ancient Temples",
    },
  ];

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

          {/* India Map Section */}
          <div className="relative h-[600px] bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden border border-primary-200">
            <div className="absolute inset-0 p-8">
              <h4 className="text-2xl font-bold text-primary-900 mb-4 text-center">
                Discover India's Wonders
              </h4>

              {/* India Map with Image */}
              <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                {/* India Map Image */}
                <div className="relative w-full h-full">
                  <svg
                    viewBox="0 0 400 500"
                    className="w-full h-full"
                    style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
                  >
                    {/* Detailed India Map Path */}
                    <path
                      d="M140 50 L160 45 L180 40 L200 38 L220 40 L240 45 L260 50 L280 60 L300 75 L315 95 L325 115 L330 135 L335 155 L340 175 L345 195 L350 215 L355 235 L360 255 L365 275 L370 295 L375 315 L380 335 L385 355 L390 375 L395 395 L390 415 L380 430 L365 440 L350 445 L335 448 L320 450 L305 448 L290 445 L275 440 L260 435 L245 430 L230 425 L215 420 L200 415 L185 410 L170 405 L155 400 L140 395 L125 390 L110 385 L95 380 L80 375 L65 370 L50 365 L35 360 L25 350 L20 335 L18 320 L20 305 L25 290 L30 275 L35 260 L40 245 L45 230 L50 215 L55 200 L60 185 L65 170 L70 155 L75 140 L80 125 L85 110 L90 95 L95 80 L100 65 L110 52 L125 45 Z"
                      fill="url(#indiaGradient)"
                      stroke="#1f2937"
                      strokeWidth="2"
                    />

                    {/* Additional detail paths for states */}
                    <path
                      d="M160 80 L180 75 L200 78 L220 82 L240 85 L250 95 L245 105 L235 110 L220 108 L200 105 L180 102 L165 95 Z"
                      fill="#10b981"
                      stroke="#065f46"
                      strokeWidth="1"
                      opacity="0.7"
                    />

                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient
                        id="indiaGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#fef3c7" />
                        <stop offset="30%" stopColor="#fde68a" />
                        <stop offset="60%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Tourist Place Markers */}
                  {touristPlaces.map((place) => (
                    <div
                      key={place.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                      style={{ left: place.x, top: place.y }}
                      onMouseEnter={() => setHoveredPlace(place)}
                      onMouseLeave={() => setHoveredPlace(null)}
                    >
                      <div className="relative">
                        {/* Location Pin */}
                        <div
                          className={`transition-all duration-200 ${
                            hoveredPlace?.id === place.id
                              ? "scale-125"
                              : "hover:scale-110"
                          }`}
                        >
                          <svg
                            width="24"
                            height="30"
                            viewBox="0 0 24 30"
                            className="drop-shadow-lg"
                          >
                            <path
                              d="M12 0C5.4 0 0 5.4 0 12s12 18 12 18 12-11.4 12-18S18.6 0 12 0zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                              fill={
                                hoveredPlace?.id === place.id
                                  ? "#dc2626"
                                  : "#ef4444"
                              }
                            />
                          </svg>
                        </div>

                        {/* Pulsing effect */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-75"></div>

                        {/* Tooltip */}
                        {hoveredPlace?.id === place.id && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white p-3 rounded-lg shadow-xl border border-gray-200 min-w-56 z-20">
                            <h5 className="font-bold text-primary-900 mb-1 text-base">
                              {place.name}
                            </h5>
                            <p className="text-sm text-primary-600 leading-relaxed">
                              {place.description}
                            </p>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                          </div>
                        )}

                        {/* Place name label */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-primary-900 whitespace-nowrap shadow-sm">
                          {place.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-primary-200 shadow-lg">
                <div className="flex items-center space-x-2 text-sm mb-2">
                  <svg width="16" height="20" viewBox="0 0 24 30">
                    <path
                      d="M12 0C5.4 0 0 5.4 0 12s12 18 12 18 12-11.4 12-18S18.6 0 12 0zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                      fill="#ef4444"
                    />
                  </svg>
                  <span className="text-primary-700 font-medium">
                    Tourist Destinations
                  </span>
                </div>
                <p className="text-xs text-primary-600">
                  Hover over pins to explore attractions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
