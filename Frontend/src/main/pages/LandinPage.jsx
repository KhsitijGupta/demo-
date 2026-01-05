import React, { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import AboutUs from "../component/About";
import Features from "../component/Features";
import ImageSlider from "../component/imageSlider"
import Courses from "../component/Courses";
import ContactUs from "../component/Contact";
import Footer from "../component/Footer";
import MapSection from "../component/MapSection";

// Inline Button component
const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium ${className}`}
  >
    {children}
  </button>
);

// Inline Card component
const Card = ({ children, className, ...props }) => (
  <div
    {...props}
    className={`rounded-xl border bg-white shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div {...props} className={`p-4 ${className}`}>
    {children}
  </div>
);
const LandinPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" bg-[#F2F2F2] scroll-smooth">
        <HeroSection />
        <AboutUs />
        <Features />
        <Courses />
        <ImageSlider />
        <ContactUs />
        <MapSection />
        <Footer />
      </div >
    </>
  );
};

export default LandinPage;
