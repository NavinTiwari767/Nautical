//  import React from 'react'
 
//  const About = () => {
//    return (
//      <div></div>
//    )
//  }
 
//  export default About



//  import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Nav = () => {
//   const [currentVideo, setCurrentVideo] = useState("/v1.2.mp4");
//   const [isBlinking, setIsBlinking] = useState(true);
//   const location = useLocation();

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Merchant Navy", path: "/Navy" },
//     { name: "Course", path: "/course" },
//     { name: "Apply Online", path: "/Apply" },
//     { name: "Placement", path: "/placement" },
//     { name: "Training", path: "/training" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   const messages = [
//     "Welcome to AS MARITIME ACADEMY",
//     "Your Career at Sea Starts Here",
//     "Join India's Premier Maritime Institute",
//     "Shape Your Future with AS Maritime",
//     "Navigate Your Success Story",
//     "Leading Maritime Education Since 2010",
//     "Where Excellence Meets the Ocean",
//     "Your Journey to the High Seas Begins",
//   ];
//   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentMessageIndex((prevIndex) =>
//         prevIndex === messages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Blinking effect for Hero Section Apply Now button only
//   useEffect(() => {
//     const blinkInterval = setInterval(() => {
//       setIsBlinking((prev) => !prev);
//     }, 1000);
//     return () => clearInterval(blinkInterval);
//   }, []);

//   const handlePrevMessage = () => {
//     setCurrentMessageIndex((prevIndex) =>
//       prevIndex === 0 ? messages.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextMessage = () => {
//     setCurrentMessageIndex((prevIndex) =>
//       prevIndex === messages.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleVideoEnd = () => {
//     setCurrentVideo((prev) => (prev === "/v1.2.mp4" ? "/v1.2.mp4" : "/v1.2.mp4"));
//   };

//   const isHomePage = location.pathname === "/";

//   return (
//     <>
//       {/* === Navigation Bar - Always Visible === */}
//       <nav className="fixed top-0 w-full z-50 shadow-lg bg-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Header Top */}
//           <div className="bg-gradient-to-r from-blue-800 to-blue-500 py-3 sm:py-4 text-center border-b border-blue-300">
//             <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-md px-2">
//               ARIHANT SEAFARERS MARITIME ACADEMY
//             </h1>
//             <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium tracking-wide">
//               AS MARITIME ACADEMY
//             </p>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:block bg-gray-50 py-3">
//             <div className="flex justify-center items-center space-x-1">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
//                     location.pathname === item.path || 
//                     (location.pathname === "/" && item.name === "Home")
//                       ? "bg-blue-600 text-white shadow-md transform scale-105"
//                       : "text-gray-700 hover:bg-blue-500 hover:text-white hover:shadow-md"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           <div className="lg:hidden bg-gray-50 py-2 px-2">
//             <div className="flex justify-center items-center flex-wrap gap-1.5">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`px-3 py-2 rounded-md font-medium text-xs transition-all duration-300 ${
//                     location.pathname === item.path ||
//                     (location.pathname === "/" && item.name === "Home")
//                       ? "bg-blue-600 text-white shadow-md"
//                       : "text-gray-700 hover:bg-blue-500 hover:text-white"
//                   }`}
//                 >
//                   {item.name === "Apply Online" ? "Apply" : 
//                    item.name === "Merchant Navy" ? "Navy" :
//                    item.name === "Contact Us" ? "Contact" : item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* === Hero Section - Only on Home Page === */}
//       {isHomePage && (
//         <div className="min-h-screen relative bg-black">
//           {/* Background Video */}
//           <video
//             key={currentVideo}
//             autoPlay
//             muted
//             playsInline
//             onEnded={handleVideoEnd}
//             className="absolute inset-0 w-full h-full object-cover z-0"
//           >
//             <source src={currentVideo} type="video/mp4" />
//           </video>

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/50 z-10"></div>

//           {/* Hero Content */}
//           <div className="relative z-20 pt-40 sm:pt-48 lg:pt-56 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
//             <div className="max-w-6xl w-full px-4">
//               <div className="relative h-20 sm:h-24 lg:h-28 mb-6">
//                 <h1
//                   key={currentMessageIndex}
//                   className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-700 ease-in-out"
//                 >
//                   {messages[currentMessageIndex]}
//                 </h1>
//               </div>

//               {/* Navigation Controls & Dots */}
//               <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
//                 <button
//                   onClick={handlePrevMessage}
//                   className="text-white text-xl sm:text-2xl hover:text-blue-300 transition"
//                   aria-label="Previous"
//                 >
//                   ←
//                 </button>

//                 <div className="flex items-center space-x-2">
//                   {messages.map((_, index) => (
//                     <span
//                       key={index}
//                       className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
//                         index === currentMessageIndex
//                           ? "bg-white scale-125"
//                           : "bg-white/40"
//                       }`}
//                     ></span>
//                   ))}
//                 </div>

//                 <button
//                   onClick={handleNextMessage}
//                   className="text-white text-xl sm:text-2xl hover:text-blue-300 transition"
//                   aria-label="Next"
//                 >
//                   →
//                 </button>
//               </div>

//               <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
//                 Your gateway to the merchant navy starts here. Professional training,
//                 world-class facilities, and guaranteed placement opportunities await you.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 flex-wrap px-2">
//                 <Link 
//                   to="/course"
//                   className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-bold text-sm sm:text-base text-white hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
//                 >
//                   Explore Courses
//                 </Link>
//                 <Link 
//                   to="/apply"
//                   className={`px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white rounded-full font-bold text-sm sm:text-base transform hover:scale-105 transition-all duration-300 shadow-xl text-center ${
//                     isBlinking 
//                       ? 'bg-red-600 border-red-600 text-white' 
//                       : 'bg-transparent text-white border-white'
//                   } animate-pulse`}
//                 >
//                   Apply Now
//                 </Link>
//                 <Link 
//                   to="/online-exam"
//                   className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-green-800 rounded-full font-bold text-sm sm:text-base text-white hover:from-green-700 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
//                 >
//                   Online Exam
//                 </Link>
//                 <Link 
//                   to="/admit-card"
//                   className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full font-bold text-sm sm:text-base text-white hover:from-purple-700 hover:to-purple-900 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
//                 >
//                   Download Admit Card
//                 </Link>
//                 <Link 
//                   to="/result"
//                   className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-orange-600 to-orange-800 rounded-full font-bold text-sm sm:text-base text-white hover:from-orange-700 hover:to-orange-900 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
//                 >
//                   Download Result
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add spacing for other pages - INCREASED FOR MOBILE */}
//       {!isHomePage && <div className="h-36 sm:h-32"></div>}
//     </>
//   );
// };

// export default Nav;










// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Courses = () => {
//   const [isBlinking, setIsBlinking] = useState(true);

//   // Blinking effect for Apply Now button
//   React.useEffect(() => {
//     const blinkInterval = setInterval(() => {
//       setIsBlinking((prev) => !prev);
//     }, 1000);
//     return () => clearInterval(blinkInterval);
//   }, []);

//   const courses = [
//     {
//       title: "Pre Sea Training",
//       duration: "6 Months",
//       icon: "⚓"
//     },
//     {
//       title: "Watchkeeping",
//       duration: "3-6 Months", 
//       icon: "🧭"
//     },
//     {
//       title: "Seaman Book",
//       duration: "2-4 Weeks",
//       icon: "📘"
//     },
//     {
//       title: "C.O.C Certification",
//       duration: "6-12 Months",
//       icon: "🎓"
//     }
//   ];

//   return (
//     <div className="py-12 bg-gradient-to-br from-blue-50 to-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Action Buttons Section */}
//         <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
//             Quick Actions
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap px-2">
//             <Link 
//               to="/course"
//               className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-blue-800 rounded-full font-bold text-sm sm:text-base hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
//             >
//               Explore Courses
//             </Link>
//             <Link 
//               to="/apply"
//               className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base transform hover:scale-105 transition-all duration-300 shadow-xl text-center ${
//                 isBlinking 
//                   ? 'bg-red-600 text-white' 
//                   : 'bg-white text-red-600'
//               } animate-pulse`}
//             >
//               Apply Now
//             </Link>
//             <Link 
//               to="/online-exam"
//               className="px-4 sm:px-6 py-2.5 sm:py-3 bg-green-600 rounded-full font-bold text-sm sm:text-base text-white hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
//             >
//               Online Exam
//             </Link>
//             <Link 
//               to="/admit-card"
//               className="px-4 sm:px-6 py-2.5 sm:py-3 bg-purple-600 rounded-full font-bold text-sm sm:text-base text-white hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
//             >
//               Download Admit Card
//             </Link>
//             <Link 
//               to="/result"
//               className="px-4 sm:px-6 py-2.5 sm:py-3 bg-orange-600 rounded-full font-bold text-sm sm:text-base text-white hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
//             >
//               Download Result
//             </Link>
//           </div>
//         </div>

//         {/* Courses Section */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-blue-900">Our Courses</h2>
//           <p className="text-gray-600 mt-2">Professional maritime training programs</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {courses.map((course, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
//               <div className="text-4xl mb-3">{course.icon}</div>
//               <h3 className="text-lg font-bold text-blue-800 mb-2">{course.title}</h3>
//               <p className="text-gray-600 text-sm mb-4">Duration: {course.duration}</p>
//               <Link 
//                 to="/course" 
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-300"
//               >
//                 Learn More
//               </Link>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-8">
//           <Link 
//             to="/course" 
//             className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300"
//           >
//             View All Courses
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Courses