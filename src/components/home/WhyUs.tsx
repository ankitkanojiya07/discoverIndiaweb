import React from 'react';
import { Sparkles, Brain, Users, Shield } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  points: string[];
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "100% Tailor Made",
    points: [
      "Your entire holiday is designed as per your requirements.",
      "Explore your interests at your own speed.",
      "Select your preferred style of stay.",
      "Plan your perfect trip with the help of our destination experts."
    ]
  },
  {
    icon: Brain,
    title: "Expert Knowledge",
    points: [
      "Our destination experts have travelled extensively or are native of their respective regions.",
      "The same destination expert will handle your trip from start to finish.",
      "Our expert knowledge helps you get best out of your time and budget."
    ]
  },
  {
    icon: Users,
    title: "The Best Guides",
    points: [
      "We hand pick our guides by thorough reference and background check.",
      "Offering more then just dates and name they strive to offer real insight into their region.",
      "You may request a guide for your choice of language. Our guides speak multiple languages."
    ]
  },
  {
    icon: Shield,
    title: "Trusted Service",
    points: [
      "24X 7 emergency availability",
      "No middleman is involved",
      "Serving customers from over 50 countries."
    ]
  }
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-primary-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-subtitle">Why Us</h2>
          <h3 className="section-title mb-4">Because We Care!</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-10 h-10 text-accent-600 mb-4" />
              <h4 className="font-serif text-xl text-primary-900 mb-4">{feature.title}</h4>
              <ul className="space-y-3">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="text-primary-700 text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
