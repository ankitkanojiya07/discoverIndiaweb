import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { X, Mail, MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Contact Button */}
      <button
        onClick={() => setShowContact(true)}
        className="fixed bottom-6 right-6 bg-accent-600 text-white rounded-full shadow-lg flex items-center gap-2 px-5 py-3 hover:bg-accent-700 transition-all duration-300 group z-50"
        aria-label="Contact Us"
      >
        <MessageCircle size={18} className="animate-pulse" />
        <span className="text-sm font-medium">Contact Us</span>
      </button>

      {/* Contact Popup */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-sm relative">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-3 right-3 text-primary-500 hover:text-primary-700 transition-colors"
              aria-label="Close contact form"
            >
              <X size={20} />
            </button>

            <div className="p-5">
              <h2 className="font-serif text-xl text-primary-950 mb-2">Contact Us</h2>
              <p className="text-primary-700 text-xs mb-4">
                Fill out this form and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-3" onSubmit={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}>
                <div>
                  <label className="block text-xs font-medium text-primary-900 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-1.5 text-sm border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-600"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-primary-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-1.5 text-sm border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-600"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-primary-900 mb-1">
                    Destination
                  </label>
                  <select 
                    className="w-full px-3 py-1.5 text-sm border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-600"
                    required
                  >
                    <option value="">Select destination</option>
                    <option value="india">India</option>
                    <option value="nepal">Nepal</option>
                    <option value="bhutan">Bhutan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-primary-900 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-1.5 text-sm border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-600 h-16"
                    placeholder="Tell us about your travel plans"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-600 text-white py-2 px-4 rounded-md hover:bg-accent-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Mail size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;