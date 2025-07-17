import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Fine Roofing logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Fine Roofing Logo" className="logo-img" />
          </Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link to="/aboutus" className="nav-link" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>PROJECTS</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? "active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;