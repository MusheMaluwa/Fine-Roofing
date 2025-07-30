import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-branding">
          <div className="footer-logo">FineRoofing</div>
          <div className="footer-contact">
            <a href="tel:0123456789">012 345 6789</a>
            <a href="mailto:info@fineroof.com">info@fineroof.com</a>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="link-column">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/aboutus">About Us</a>
            <a href="/services">Services</a>
          </div>
          
          <div className="link-column">
            <h4>Services</h4>
            <a href="/roofing">Roofing</a>
            <a href="/repair">Repair</a>
            <a href="/maintenance">Maintenance</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FineRadio. All rights reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;