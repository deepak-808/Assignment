import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/home/Home";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from "./components/pages/services/Service";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Service />} />
          </Routes>
          <Footer/>
    </div>
  );
};

export default App;
