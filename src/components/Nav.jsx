import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [currentVideo, setCurrentVideo] = useState("/v1.2.mp4");
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
          <div className="bg-gradient-to-r from-blue-800 to-blue-500 py-3 sm:py-4 text-center border-b border-blue-300">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-md px-2">
              ARIHANT SEAFARERS MARITIME ACADEMY
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium tracking-wide">
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
          <div className="lg:hidden bg-gray-50 py-2 px-2">
            <div className="flex justify-center items-center flex-wrap gap-1.5">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md font-medium text-xs transition-all duration-300 ${
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
        <div className="min-h-screen relative bg-black">
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
          <div className="relative z-20 pt-40 sm:pt-48 lg:pt-56 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
            <div className="max-w-6xl w-full px-4">
              <div className="relative h-20 sm:h-24 lg:h-28 mb-6">
                <h1
                  key={currentMessageIndex}
                  className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-700 ease-in-out"
                >
                  {messages[currentMessageIndex]}
                </h1>
              </div>

              {/* Navigation Controls & Dots */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <button
                  onClick={handlePrevMessage}
                  className="text-white text-xl sm:text-2xl hover:text-blue-300 transition"
                  aria-label="Previous"
                >
                  ←
                </button>

                <div className="flex items-center space-x-2">
                  {messages.map((_, index) => (
                    <span
                      key={index}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentMessageIndex
                          ? "bg-white scale-125"
                          : "bg-white/40"
                      }`}
                    ></span>
                  ))}
                </div>

                <button
                  onClick={handleNextMessage}
                  className="text-white text-xl sm:text-2xl hover:text-blue-300 transition"
                  aria-label="Next"
                >
                  →
                </button>
              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Your gateway to the merchant navy starts here. Professional training,
                world-class facilities, and guaranteed placement opportunities await you.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add spacing for other pages */}
      {!isHomePage && <div className="h-36 sm:h-32"></div>}
    </>
  );
};

export default Nav;