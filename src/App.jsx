import "./assets/css/App.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";
import Page from "./components/Page";

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

  // const Home = () => <h1>Home Page</h1>
  const About = () => <h1>About Page</h1>

  return (
    <>

      {/* <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
      </Routes> */}
      {/* <Header />
      <Home /> */}
      <Page/>
      {/* <Brands />
      <Tasks />
      <Footer /> */}
      {/* {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FaArrowCircleUp className="arrow-icon" />
        </button>
      )} */}
    </>
  );
}

export default App;
