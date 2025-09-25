import React from "react";

import Nav from "./components/Nav";
import About from "./components/About";
import Course from "./components/course";
import Gallery from "./components/Gallery";
const App = () => {
  return (
    <div className="App">
      <Nav />
      <About />
      <Course />
      <Gallery />
  
    </div>
  );
};

export default App;