import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./ContactUs.css";
import Team from "../assets/Fine Roofing Team.jpg";

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-wrapper">
        <div className="contact-image">
          <img 
            src={Team} 
            alt="Contact" 
            className="responsive-image"
            loading="lazy"
          />
        </div>
        <div className="contact-details">
          <div className="contact-info">
            <p className="info-item">
              <MailOutlineIcon className="contact-icon" /> email@address.co.za
            </p>
            <p className="info-item">
              <PhoneIcon className="contact-icon" /> 012 358 0358
            </p>
            <p className="info-item">
              <FacebookOutlinedIcon className="contact-icon" /> Facebook Page
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;