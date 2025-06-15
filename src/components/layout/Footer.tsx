import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-primary-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl mb-4 text-white">
              Discover Culture India
            </h3>
            <p className="text-primary-200 text-sm leading-relaxed">
              Immersive cultural journeys through India's rich heritage, crafted
              with the utmost attention to authenticity and luxury.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/destinations"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/experiences"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  Plan Your Journey
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 mt-0.5 flex-shrink-0 text-primary-300"
                />
                <span className="text-primary-200 text-sm">
                  42 Cultural Street, New Delhi, 110001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="mr-2 flex-shrink-0 text-primary-300"
                />
                <span className="text-primary-200 text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="mr-2 flex-shrink-0 text-primary-300"
                />
                <span className="text-primary-200 text-sm">
                  info@discovercultureindia.com
                </span>
              </li>
            </ul>
          </div>

          <div>
            {/* <h4 className="font-serif text-lg mb-4 text-white">Certified by</h4> */}
            <div className="flex flex-col items-center">
              <img
                src="./17.jpg"
                alt="Certification Badge"
                className="w-50 h-auto mb-2"
              />
              <p className="text-primary-200 text-sm text-center mt-2">
                Officially recognized by the Tourism Board of India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 mt-8 text-center text-xs text-primary-400">
          <p>
            © {new Date().getFullYear()} Discover Culture India. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
