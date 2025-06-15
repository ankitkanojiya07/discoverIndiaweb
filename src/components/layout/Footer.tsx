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
  Globe,
  Calendar,
  FileText,
  Heart,
  Compass,
  Mountain,
  Camera,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-primary-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info Column */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="inline-block">
              <h3 className="font-serif text-2xl mb-4 text-white">
                Discover Culture India
              </h3>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed">
              Immersive cultural journeys through India's rich heritage, crafted
              with the utmost attention to authenticity and luxury.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Destinations Column */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/destinations"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center"
                >
                  <Globe size={14} className="mr-2 text-primary-300" />
                  India
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center"
                >
                  <Globe size={14} className="mr-2 text-primary-300" />
                  Nepal
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center"
                >
                  <Globe size={14} className="mr-2 text-primary-300" />
                  Bhutan
                </Link>
              </li>
              <li>
                <Link
                  to="/wildlife"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center"
                >
                  <Heart size={14} className="mr-2 text-primary-300" />
                  Wildlife Safaris
                </Link>
              </li>
              <li>
                <Link
                  to="/trekking"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center"
                >
                  <Mountain size={14} className="mr-2 text-primary-300" />
                  Trekking Routes
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/experiences"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center"
                >
                  <Compass size={14} className="mr-2 text-primary-300" />
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center"
                >
                  <Camera size={14} className="mr-2 text-primary-300" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center"
                >
                  <FileText size={14} className="mr-2 text-primary-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center"
                >
                  <Mail size={14} className="mr-2 text-primary-300" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center"
                >
                  <Calendar size={14} className="mr-2 text-primary-300" />
                  Travel Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 mt-0.5 flex-shrink-0 text-primary-300"
                />
                <a
                  href="https://maps.google.com/?q=42+Cultural+Street+New+Delhi+110001+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  42 Cultural Street, New Delhi, 110001, India
                </a>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="mr-2 flex-shrink-0 text-primary-300"
                />
                <a
                  href="tel:+919876543210"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="mr-2 flex-shrink-0 text-primary-300"
                />
                <a
                  href="mailto:info@discovercultureindia.com"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  info@discovercultureindia.com
                </a>
              </li>
            </ul>
          </div>

          {/* Certification Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <img
                src="./17.jpg"
                alt="Certification Badge"
                className="w-32 h-auto mb-2"
              />
              <p className="text-primary-200 text-sm text-center mt-2">
                Officially recognized by the Tourism Board of India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 mt-8">
          <div className="flex justify-center items-center">
            <p className="text-xs text-primary-400 text-center">
              © {new Date().getFullYear()} Discover Culture India. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
