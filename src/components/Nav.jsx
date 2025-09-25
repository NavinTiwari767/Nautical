import React, { useState, useEffect } from "react";

const Nav = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [currentVideo, setCurrentVideo] = useState("/v1.mp4");

  const menuItems = [
    "Home",
    "Merchant Navy",
    "Course",
    "Apply Online",
    "Placement",
    "Training",
    "Contact Us",
  ];

  const mobileMenuItems = ["Home", "Apply Online", "Contact Us"];

  // === Rotating Text State ===
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

  // Auto-rotate every 3 seconds
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

  const handleMenuClick = (item) => {
    setActiveItem(item);
  };

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev === "/v1.mp4" ? "/v2.mp4" : "/v1.mp4"));
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* === Background Video === */}
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

      {/* === Navigation Bar === */}
      <nav className="fixed top-0 w-full z-50 shadow-lg">
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
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeItem === item
                      ? "bg-blue-600 text-white shadow-md transform scale-105"
                      : "text-gray-700 hover:bg-blue-500 hover:text-white hover:shadow-md"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden bg-gray-50 py-3">
            <div className="flex justify-center items-center space-x-3">
              {mobileMenuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    activeItem === item
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {item === "Apply Online" ? "Apply" : item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* === Hero Section with Rotating Messages === */}
      <div className="relative z-20 pt-48 lg:pt-40 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
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
            Your gateway to the merchant navy starts here. Professional training, world-class
            facilities, and guaranteed placement opportunities await you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-bold text-lg text-white hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Explore Courses
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-bold text-lg text-white hover:bg-white hover:text-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Apply Now
            </button>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl mx-2 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-3 text-blue-200">
              Current Section
            </h2>
            <p className="text-lg flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>You are viewing:</span>
              <span className="font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full">
                {activeItem}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
