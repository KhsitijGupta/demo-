import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../../../assests/Logo/AMlogo.jpeg";

/* ================= LOCAL BUTTON COMPONENT ================= */
const Button = ({
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};
/* ========================================================== */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'About', path: '#about', id: 'about' },
    { name: 'Features', path: '#features', id: 'features' },
    { name: 'Courses', path: '#courses', id: 'courses' },
    { name: 'Our Gallery', path: '#imageslider', id: 'imageslider' },
  ];

  /* ================= SCROLL LOGIC ================= */
  useEffect(() => {
    const sectionIds = ['about', 'features', 'courses', 'imageslider'];
    const offset = 140;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        setActiveSection('home');
        return;
      }

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop - offset;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /* ================================================= */

  const isActive = (id) => activeSection === id;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo (FIXED) */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white">
              <img
                src={logo}
                alt="A.M Coaching Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">A.M Coaching Classes</span>
              <span className="text-xs text-gray-600">Excellence in Education</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a key={link.id} href={link.path}>
                <Button
                  className={
                    isActive(link.id)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }
                >
                  {link.name}
                </Button>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button className="text-blue-600 bg-blue-50 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white cursor-pointer">
                Enroll Now
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE NAV (FIXED) ===== */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                onClick={() => setIsOpen(false)}
              >
                <div
                  className={`block px-4 py-3 rounded-lg font-medium transition ${isActive(link.id)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {link.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
