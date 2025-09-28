import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer"; // Import Footer
import About from "./components/About";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Navy from "./pages/Navy";
import Course from "./pages/Course";
import Placement from "./pages/placement";
import Training from "./pages/Training";

// ScrollToTop component inline
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Nav />
        
        <Routes>
          {/* Home page - Components already have their own spacing */}
          <Route path="/" element={
            <div>
              <About />
              <Courses />
              <Gallery />
            </div>
          } />

          {/* Other pages */}
          <Route path="/navy" element={<Navy />} />
          <Route path="/merchant-navy" element={<Navy />} />
          <Route path="/course" element={<Course />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/training" element={<Training />} />
          
          {/* New Routes for Additional Buttons */}
          <Route path="/online-exam" element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100">
              <div className="text-center p-8">
                <h1 className="text-4xl font-bold text-green-900 mb-4">Online Exam</h1>
                <p className="text-gray-600 text-lg">Online examination portal coming soon</p>
              </div>
            </div>
          } />
          
          <Route path="/admit-card" element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-gray-100">
              <div className="text-center p-8">
                <h1 className="text-4xl font-bold text-purple-900 mb-4">Download Admit Card</h1>
                <p className="text-gray-600 text-lg">Admit card download portal coming soon</p>
              </div>
            </div>
          } />
          
          <Route path="/result" element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-gray-100">
              <div className="text-center p-8">
                <h1 className="text-4xl font-bold text-orange-900 mb-4">Download Result</h1>
                <p className="text-gray-600 text-lg">Result download portal coming soon</p>
              </div>
            </div>
          } />
          
          {/* Existing Placeholder pages */}
          <Route path="/apply" element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
              <div className="text-center p-8">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">Apply Online</h1>
                <p className="text-gray-600 text-lg">Application portal coming soon</p>
              </div>
            </div>
          } />
          
          <Route path="/contact" element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
              <div className="text-center p-8">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
                <p className="text-gray-600 text-lg">Contact information coming soon</p>
              </div>
            </div>
          } />

          {/* 404 Page */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
              <div className="text-center p-8">
                <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
                <p className="text-gray-600 text-xl mb-4">Page Not Found</p>
                <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Go Home
                </a>
              </div>
            </div>
          } />
        </Routes>

        {/* Footer - Will appear on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;