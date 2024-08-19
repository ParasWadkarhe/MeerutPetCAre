import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import BookAService from "./components/BookAService";
import Photos from "./components/Photos"; // Import Photos component
import DogDetails from "./components/DogDetails"; // Import DogDetails component
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookaservice" element={<BookAService />} />

        {/* New Routes for Photos and Dog Details */}
        <Route path="/photos" element={<Photos />} />
        <Route path="/dog/:id" element={<DogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
