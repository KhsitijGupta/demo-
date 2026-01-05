// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   BookOpen,
//   Users,
//   Award,
//   Clock,
//   ArrowRight,
//   GraduationCap,
//   Target,
//   TrendingUp
// } from 'lucide-react';

// import Button from '../component/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../component/ui/card';

// // Import banners from assets
// import Banner1 from '../../../assests/coachingimg1.webp';
// import Banner2 from '../../../assests/coachingimg2.jpg';

// const Home = () => {
//   /* ================= HERO BACKGROUND SLIDER ================= */
//   const banners = [Banner1, Banner2];

//   const [currentBanner, setCurrentBanner] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBanner((prev) => (prev + 1) % banners.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   /* ================= DATA ================= */
//   const courses = [
//     {
//       title: 'Mathematics',
//       description: 'Comprehensive math training from basics to advanced concepts',
//       icon: <Target className="w-8 h-8" />,
//       color: 'from-blue-500 to-blue-600'
//     },
//     {
//       title: 'Science',
//       description: 'Physics, Chemistry, and Biology for all grade levels',
//       icon: <BookOpen className="w-8 h-8" />,
//       color: 'from-green-500 to-green-600'
//     },
//     {
//       title: 'English',
//       description: 'Grammar, literature, and communication skills development',
//       icon: <GraduationCap className="w-8 h-8" />,
//       color: 'from-teal-500 to-teal-600'
//     },
//     {
//       title: 'Social Studies',
//       description: 'History, geography, and civic education courses',
//       icon: <Users className="w-8 h-8" />,
//       color: 'from-orange-500 to-orange-600'
//     }
//   ];

//   const stats = [
//     { number: '500+', label: 'Students Enrolled', icon: <Users className="w-9 h-8" /> },
//     { number: '15+', label: 'Years Experience', icon: <Award className="w-9 h-8" /> },
//     { number: '20+', label: 'Expert Teachers', icon: <GraduationCap className="w-9 h-8" /> },
//     { number: '95%', label: 'Success Rate', icon: <TrendingUp className="w-9 h-8" /> }
//   ];

//   const features = [
//     {
//       icon: <BookOpen className="w-6 h-6" />,
//       title: 'Comprehensive Curriculum',
//       description: 'Well-structured courses covering all subjects with detailed study material'
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: 'Experienced Faculty',
//       description: 'Learn from qualified and experienced teachers dedicated to your success'
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: 'Flexible Timings',
//       description: 'Multiple batch options to suit your schedule and convenience'
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: 'Proven Results',
//       description: 'Track record of excellent results and student success stories'
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* ================= HERO SECTION ================= */}
//       <section className="relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 overflow-hidden">
//         {/* Background Slider */}
//         {banners.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentBanner === index ? 'opacity-100' : 'opacity-0'
//               }`}
//             style={{ backgroundImage: `url(${img})` }}
//           />
//         ))}

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto w-full">
//           <div className="max-w-2xl space-y-6 text-white">
//             <span className="inline-block px-4 py-2 text-blue-600 bg-blue-50 rounded-full text-sm font-medium">
//               Welcome to A.M Coaching Classes
//             </span>

//             <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//               Empower Your
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
//                 Learning Journey
//               </span>
//             </h1>

//             <p className="text-xl text-gray-200">
//               Excellence in education with personalized attention, expert faculty,
//               and comprehensive courses for all subjects.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <Link to="/courses">
//                 <Button className="text-blue-600 bg-blue-50 px-4 py-3 text-lg">
//                   Explore Courses
//                 </Button>
//               </Link>
//               <Link to="/contact">
//                 <Button className="text-blue-600 bg-blue-50  px-4 py-3 text-lg">
//                   Contact Us
//                 </Button>

//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
//           {stats.map((stat, i) => (
//             <div key={i}>
//               <div className="flex justify-center mb-2">{stat.icon}</div>
//               <div className="text-4xl font-bold">{stat.number}</div>
//               <div className="text-blue-100">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       {/* <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((f, i) => (
//             <Card key={i} className="hover:shadow-xl transition">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#0f4c8c] to-green-500 rounded-lg flex items-center justify-center text-white mb-4">
//                   {f.icon}
//                 </div>
//                 <CardTitle>{f.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription>{f.description}</CardDescription>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section> */}
//     </div>
//   );
// };

// export default Home;



import { Facebook, Instagram, Youtube } from "lucide-react";
// import banner1 from "../../../assests/bg.jpg";
import image from "../../../assests/AMimg24.jpeg";

const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center font-medium transition-all duration-300 md:px-3 md:py-3 ${className}`}
  >
    {children}
  </button>
);
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="md:pt-15 relative flex items-center justify-center text-white overflow-hidden md:h-160"
    >
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slowZoom"
        style={{ backgroundImage: `url(${banner1})` }}
      /> */}

      {/* Dark overlay */}
      <div className="absolute inset-0   "></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-5 md:pt-6 grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="order-2 md:order-1 animate-fadeInUp  text-left md:mt-20 ">
          <h1 className="   text-3xl md:text-4xl lg:text-5xl font-bold  text-black pt-4 md:pt-0">
            Shaping Young Minds
            <span className="text-blue-400 pt-2 block"> Building Bright Futures</span>
          </h1>
          <br></br>
          {/* Paragraph */}
          <p className="  flex   text-gray-700 mb-8 max-w-lg mx-auto md:mx-0 animate-fadeIn delay-200">
            We offer result-oriented coaching for Classes 1 to 12 with personalized mentoring, strong fundamentals, and exam-focused preparation to help students succeed with confidence.
          </p>


          {/* Social Buttons */}
          <div className="flex flex-row gap-4 md: animate-fadeIn delay-600 justify-start md:justify-start pb-10">
            {/* YouTube */}
            <Button
              onClick={() =>
                window.open(
                  "@amcoaching.classes",
                  "_blank",
                  "noopener,noreferrer"
                )
              }

              className="bg-white text-red-600 border border-transparent 
               hover:bg-red-50 hover:border-red-200 hover:scale-110 
               rounded-full md:rounded-lg 
               w-10 h-10 md:w-auto md:h-auto 
               shadow-md hover:shadow-xl 
               group cursor-pointer"
            >
              <Youtube className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              {/* <span className="hidden md:inline ml-2">YouTube</span> */}
            </Button>

            {/* Facebook */}
            <Button
              onClick={() =>
                window.open(
                  "https://www.facebook.com/share/1BLbRbcXRA/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-white text-blue-600 border border-transparent 
             hover:bg-blue-50 hover:border-blue-200 hover:scale-110 
             rounded-full md:rounded-lg 
             w-10 h-10 md:w-auto md:h-auto 
             shadow-md hover:shadow-xl 
             group transition-all duration-300 cursor-pointer"
            >
              <Facebook className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
              {/* <span className="hidden md:inline ml-2">Facebook</span> */}
            </Button>

            {/* Instagram */}
            <Button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/amcoachingclasses1?igsh=YzljYTk1ODg3Zg==",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-white text-pink-600 border border-transparent 
               hover:bg-pink-50 hover:border-pink-200 hover:scale-110 
               rounded-full md:rounded-lg 
               w-10 h-10 md:w-auto md:h-auto 
               shadow-md hover:shadow-xl 
               group cursor-pointer"
            >
              <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              {/* <span className="hidden md:inline ml-2">Instagram</span> */}
            </Button>
          </div>

          {/* Mobile Image (connects to bottom like desktop) */}
          <div className="md:hidden flex justify-center  relative">
            <div className="relative w-full flex justify-center">
              {/* Shadow / border pulse effect */}
              <div className="absolute animate-pulse"></div>

              {/* Image */}
              <img
                src={image}
                alt="img"
                className="relative w-79  h-auto object-contain rounded-2xl p-1 -mb-1  "
              />
            </div>
          </div>
        </div>

        {/* Right Image (only visible on md and above) */}
        <div className="order-1 md:order-2 hidden md:flex justify-center items-center relative pb-6 lg:ml-33">
          <div className="relative group perspective">
            {/* 3D shadow glow layer */}
            <div className="absolute inset-0 rounded-2xl   opacity-40 blur-xl group-hover:opacity-60 transition duration-500"></div>

            {/* Floating shadow under image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-6  rounded-full opacity-40 group-hover:opacity-60 transition-all duration-500"></div>

            {/* Main image with 3D tilt effect */}
            <img
              src={image}
              alt="image"
              className="md:rounded-xl md:border xl:border-0 w-40 sm:w-56 md:w-80 lg:w-[30rem] h-[75vh] "
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        // .animate-gradient {
        //   background-image: linear-gradient(
        //     90deg,
        //     #98bf45,
        //     #6bb5ff,
        //     #ff6584,
        //     #98bf45
        //   );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fadeIn {
          opacity: 0;
          animation: fadeInUp 1.2s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-slowZoom {
          animation: slowZoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
