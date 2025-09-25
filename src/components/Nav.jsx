import React, { useState } from "react";

const Nav = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [currentVideo, setCurrentVideo] = useState("/v1.mp4"); // start with v1

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

  const handleMenuClick = (item) => {
    setActiveItem(item);
  };

  // handle video sequence
  const handleVideoEnd = () => {
    if (currentVideo === "/v1.mp4") {
      setCurrentVideo("/v2.mp4");
    } else {
      setCurrentVideo("/v1.mp4"); // loop back to v1
    }
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* === Background Video (one at a time) === */}
      <video
        key={currentVideo} // key change forces reload
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
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center group">
              <a
                href="#"
                className="flex items-center space-x-2 hover:scale-105 transform transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500">
                    ⚓
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  <span className="text-blue-600">Nautical Crew Maritime</span>
                </span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`group relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden ${
                    activeItem === item
                      ? "bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg shadow-red-500/40"
                      : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/40"
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden py-3">
            <div className="flex justify-center items-center mb-3">
              <a
                href="#"
                className="flex items-center space-x-2 hover:scale-105 transform transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    ⚓
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-800">
                  <span className="text-blue-600">Nautical Crew Maritime</span>
                </span>
              </a>
            </div>

            <div className="flex justify-center items-center space-x-3">
              {mobileMenuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeItem === item
                      ? "bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-600 hover:text-white"
                  }`}
                >
                  {item === "Apply Online" ? "Apply" : item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* === Hero Section === */}
      <div className="relative z-20 pt-28 lg:pt-24 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <div className="max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
            Welcome to Maritime Academy
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto px-2">
            Your gateway to the merchant navy starts here. Professional
            training, world-class facilities, and guaranteed placement
            opportunities await you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-bold text-sm sm:text-base text-white hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Explore Courses
            </button>
            <button className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white rounded-full font-bold text-sm sm:text-base text-white hover:bg-white hover:text-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Apply Now
            </button>
          </div>

          <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl mx-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-blue-200">
              Current Section
            </h2>
            <p className="text-sm sm:text-base md:text-xl flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>You are viewing:</span>
              <span className="font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-xs sm:text-sm">
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
