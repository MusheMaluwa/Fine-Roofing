import React, { useEffect, useState } from "react";
import "./Home.css";
import AboutUs from "./AboutUs";
import BookMe from "../components/BookMe";

const Home = () => {
  const [showBookMe, setShowBookMe] = useState(false);

  useEffect(() => {
    // Add scroll animation trigger
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in, .slide-up");
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
          el.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1>
              <span className="gray">Dependable</span> <br />
              <span className="red">
                Roofing for <br />{" "}
              </span>
              <span className="red">Every Season</span>
            </h1>
            <p className="subtitle slide-up" style={{ animationDelay: "0.3s" }}>
              Quality craftsmanship that stands the test of time and weather
            </p>
            <button
              className="cta-button slide-up"
              style={{ animationDelay: "0.6s" }}
              onClick={() => {
                console.log("Button clicked"); // ✅ Correct placement
                setShowBookMe(true);
              }}
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </div>
      {showBookMe && <BookMe onClose={() => setShowBookMe(false)} />}
      <AboutUs />
    </>
  );
};

export default Home;
