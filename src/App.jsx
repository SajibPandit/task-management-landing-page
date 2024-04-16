import "./assets/css/App.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <Home />
      <Brands />
      <Tasks />
      <Footer />
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FaArrowCircleUp className="arrow-icon" />
        </button>
      )}
    </>
  );
}

export default App;
