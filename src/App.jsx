import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import About from "./components/About";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Navy from "./pages/Navy";
import Course from "./pages/Course";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        
        <Routes>
          {/* Home page - No extra spacing needed */}
          <Route path="/" element={
            <div>
              <About />
              <Courses />
              <Gallery />
            </div>
          } />

          {/* Other pages - They already have pt-32 */}
          <Route path="/Navy" element={<Navy />} />
          <Route path="/course" element={<Course />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          
          {/* Placeholder pages */}
          <Route path="/apply" element={<div className="min-h-screen pt-32 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">Apply Online Page - Coming Soon</div>} />
          <Route path="/placement" element={<div className="min-h-screen pt-32 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">Placement Page - Coming Soon</div>} />
          <Route path="/training" element={<div className="min-h-screen pt-32 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">Training Page - Coming Soon</div>} />
          <Route path="/contact" element={<div className="min-h-screen pt-32 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">Contact Us Page - Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
};

 export default App;