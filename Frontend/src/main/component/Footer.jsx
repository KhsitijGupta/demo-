import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from "../../../assests/Logo/AMlogo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '#about' },
    { name: 'Features', path: '#features' },
    { name: 'Our Gallery', path: '#imageslider' },
  ];

  const courses = [
    { name: 'Mathematics', path: '#courses' },
    { name: 'Science', path: '#courses' },
    { name: 'English', path: '#courses' },
    { name: 'Social Studies', path: '#courses' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/share/1BLbRbcXRA/', label: 'Facebook' },
    {
      icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/amcoachingclasses1?igsh=YzljYTk1ODg3Zg==', label: 'Instagram'
    },
    { icon: <Youtube className="w-5 h-5" />, href: '@amcoaching.classes', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={logo}
                  alt="A.M Coaching Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">A.M Coaching Classes</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Excellence in education with personalized attention, expert faculty, and comprehensive courses for all subjects.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Street No 1, H.No. 383, Fiza Colony Rd, Ashiyana Colony, Viswakarma
                  Nagar, Nariyalkheda, Bhopal, Madhya Pradesh 462100

                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">+91 8827123844</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">amcoachingclasses34@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} A.M Coaching Classes. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;