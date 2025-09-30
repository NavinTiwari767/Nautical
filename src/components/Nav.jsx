import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [currentVideo, setCurrentVideo] = useState("/v1.2.mp4");
  const [isBlinking, setIsBlinking] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Merchant Navy", path: "/Navy" },
    { name: "Course", path: "/course" },
    { name: "Apply Online", path: "/Apply" },
    { name: "Placement", path: "/placement" },
    { name: "Training", path: "/training" },
    { name: "Contact Us", path: "/contact" },
  ];

  // New additional buttons - removed since they're now in hero section
  // const additionalButtons = [
  //   { name: "Online Exam", path: "/online-exam" },
  //   { name: "Download Admit Card", path: "/admit-card" },
  //   { name: "Download Result", path: "/result" },
  // ];

  const mobileMenuItems = [
    { name: "Home", path: "/" },
    { name: "Apply Online", path: "Apply" },
    { name: "Contact Us", path: "/contact" },
  ];

  const messages = [
    "Welcome to AS MARITIME ACADEMY",
    "Your Career at Sea Starts Here",
    "Join India's Premier Maritime Institute",
    "Shape Your Future with AS Maritime",
    "Navigate Your Success Story",
    "Leading Maritime Education Since 2010",
    "Where Excellence Meets the Ocean",
    "Your Journey to the High Seas Begins",
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Blinking effect for Hero Section Apply Now button only
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 1000); // Blink every 1 second
    return () => clearInterval(blinkInterval);
  }, []);

  const handlePrevMessage = () => {
    setCurrentMessageIndex((prevIndex) =>
      prevIndex === 0 ? messages.length - 1 : prevIndex - 1
    );
  };

  const handleNextMessage = () => {
    setCurrentMessageIndex((prevIndex) =>
      prevIndex === messages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev === "/v1.2.mp4" ? "/v1.2.mp4" : "/v1.2.mp4"));
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* === Navigation Bar - Always Visible === */}
      <nav className="fixed top-0 w-full z-50 shadow-lg bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Top */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-500 py-4 text-center border-b border-blue-300">
            <h1 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-md">
              ARHANT SEAFARERS MARITIME ACADEMY
            </h1>
            <p className="text-sm text-blue-100 mt-1 font-medium tracking-wide">
              AS MARITIME ACADEMY
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block bg-gray-50 py-3">
            <div className="flex justify-center items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    location.pathname === item.path || 
                    (location.pathname === "/" && item.name === "Home")
                      ? "bg-blue-600 text-white shadow-md transform scale-105"
                      : "text-gray-700 hover:bg-blue-500 hover:text-white hover:shadow-md"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden bg-gray-50 py-2">
            {/* First Row - Main Menu Items */}
            <div className="flex justify-center items-center flex-wrap gap-1 mb-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 ${
                    location.pathname === item.path ||
                    (location.pathname === "/" && item.name === "Home")
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {item.name === "Apply Online" ? "Apply" : 
                   item.name === "Merchant Navy" ? "Navy" :
                   item.name === "Contact Us" ? "Contact" : item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* === Hero Section - Only on Home Page === */}
      {isHomePage && (
        <div className="min-h-screen relative bg-black pt-0">
          {/* Background Video */}
          <video
            key={currentVideo}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={currentVideo} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Hero Content */}
          <div className="relative z-20 pt-56 lg:pt-48 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
            <div className="max-w-6xl w-full px-4">
              <div className="relative h-28 mb-6">
                <h1
                  key={currentMessageIndex}
                  className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-700 ease-in-out"
                >
                  {messages[currentMessageIndex]}
                </h1>
              </div>

              {/* Navigation Controls & Dots */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <button
                  onClick={handlePrevMessage}
                  className="text-white text-2xl hover:text-blue-300 transition"
                  aria-label="Previous"
                >
                  ←
                </button>

                <div className="flex items-center space-x-2">
                  {messages.map((_, index) => (
                    <span
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentMessageIndex
                          ? "bg-white scale-125"
                          : "bg-white/40"
                      }`}
                    ></span>
                  ))}
                </div>

                <button
                  onClick={handleNextMessage}
                  className="text-white text-2xl hover:text-blue-300 transition"
                  aria-label="Next"
                >
                  →
                </button>
              </div>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
                Your gateway to the merchant navy starts here. Professional training,
                world-class facilities, and guaranteed placement opportunities await you.
              </p>

              <div className="flex flex-col lg:flex-row gap-3 justify-center mb-8 flex-wrap">
                <Link 
                  to="/course"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-bold text-base text-white hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
                >
                  Explore Courses
                </Link>
                <Link 
                  to="/apply"
                  className={`px-6 py-3 border-2 border-white rounded-full font-bold text-base transform hover:scale-105 transition-all duration-300 shadow-xl text-center ${
                    isBlinking 
                      ? 'bg-red-600 border-red-600 text-white' 
                      : 'bg-transparent text-white border-white'
                  } animate-pulse`}
                >
                  Apply Now
                </Link>
                <Link 
                  to="/online-exam"
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 rounded-full font-bold text-base text-white hover:from-green-700 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
                >
                  Online Exam
                </Link>
                <Link 
                  to="/admit-card"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full font-bold text-base text-white hover:from-purple-700 hover:to-purple-900 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
                >
                  Download Admit Card
                </Link>
                <Link 
                  to="/result"
                  className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-800 rounded-full font-bold text-base text-white hover:from-orange-700 hover:to-orange-900 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
                >
                  Download Result
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add spacing for other pages */}
      {!isHomePage && <div className="h-32"></div>}
    </>
  );
};

export default Nav;