import React, { useState, useEffect } from "react";
import one from "../Images/one.jpeg";
import two from "../Images/two.jpeg";
import three from "../Images/three.jpeg";
import four from "../Images/four.jpeg";
import cat from "../Images/cat.jpeg";
import cat2 from "../Images/cat2.jpeg";
import cat3 from "../Images/cat3.jpeg";
import cat4 from "../Images/cat4.jpeg";
import About from "./About";
import Services from "./Services";
import Photos from "./Photos";
import Choose from "./Choose";
import OurPets from "./OurPets";

// Function to shuffle the images array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Home = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Combine all images into one array and shuffle them
    const allImages = shuffleArray([
      one,
      two,
      three,
      four,
      cat,
      cat2,
      cat3,
      cat4,
    ]);
    setImages(allImages);

    const hasSeenOverlay = localStorage.getItem("hasSeenOverlay");
    if (hasSeenOverlay) {
      setShowOverlay(false);
    }

    if (!showOverlay) {
      const timer = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
          );
          setFade(true);
        }, 1000);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [showOverlay]);

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setShowOverlay(false);
    localStorage.setItem("hasSeenOverlay", "true");
  };

  return (
    <>
      <div className="relative flex items-center justify-center bg-[#f0efeb] min-h-screen">
        {showOverlay && (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-80 p-6 rounded-2xl">
            <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">
              Welcome,
            </h1>
            <p className="text-white text-lg sm:text-xl font-[Pacifico] italic mb-6">
              The Meerut Pets Care
            </p>
            <a
              href="#"
              onClick={handleGetStartedClick}
              className="bg-[#4E4187] text-white font-bold py-2 px-6 rounded-full hover:bg-[#6B5BB3] transition duration-300"
            >
              Get Started
            </a>
          </div>
        )}
        {!showOverlay && (
          <div className="relative flex pb-5 bg-[#f0efeb] justify-center">
            <img
              src={images[currentIndex]}
              className={`h-min w-max sm:h-[700px] sm:w-[1100px] rounded-2xl sm:mt-2 border-2 border-[#800000] transition-opacity duration-1000 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              alt={`slide${currentIndex + 1}`}
            />
          </div>
        )}
      </div>
      <div>
        <About />
        <Services />
        <Photos />
        <OurPets />
        <Choose />
      </div>
    </>
  );
};

export default Home;
