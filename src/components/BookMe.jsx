import React, { useState } from "react";
import "./BookMe.css";

const BookMe = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="bookme-modal">
      <div className="bookme-content">
        <button className="close-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <div className="bookme-header">
          <h2>Schedule Your Roofing Consultation</h2>
          <p className="bookme-subtitle">Quality craftsmanship that stands the test of time and weather</p>
        </div>
        
        <div className="booking-tabs">
          <button 
            className={`tab-button ${activeTab === "form" ? "active" : ""}`}
            onClick={() => setActiveTab("form")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Contact Form
          </button>
          <button 
            className={`tab-button ${activeTab === "calendar" ? "active" : ""}`}
            onClick={() => setActiveTab("calendar")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Book Meeting
          </button>
          <button 
            className={`tab-button ${activeTab === "whatsapp" ? "active" : ""}`}
            onClick={() => setActiveTab("whatsapp")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12C21 16.9706 16.9706 21 12 21C10.6155 21 9.30787 20.6635 8.15625 20.0695L3 21L4.0625 15.8125C3.36725 14.6299 3 13.315 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 14.875C16.1667 14.5417 15.4583 14.25 15 14.375C14.5833 14.5 13.5 15.5 13.25 15.625C13 15.75 12.75 15.7917 12.375 15.4583C11.1667 14.4167 10.25 13.25 9.875 12.625C9.54167 12.0417 9.70833 11.5833 9.875 11.25C10 10.9167 10.25 10.25 10.125 9.875C10 9.5 9.70833 9.54167 9.5 9.5C9.25 9.5 8.91667 9.5 8.625 9.79167C7.875 10.5417 7.875 11.5 8 12C8.35417 13.4792 9.52083 14.6458 10 15C10.5 15.375 11.5208 16.1458 13 16.5C13.5 16.625 14.4583 16.625 15.2083 15.875C15.5 15.5833 15.5 15.25 15.5 15C15.5 14.7917 15.5 14.5 15.375 14.25C15.2917 14 15.8333 14.2083 16.5 14.875Z" fill="currentColor"/>
            </svg>
            WhatsApp
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "form" && (
            <form onSubmit={handleSubmit} className="booking-form">
              {isSubmitted && (
                <div className="success-message">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Thank you! We'll contact you shortly.</span>
                </div>
              )}
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
                <label htmlFor="name">Full Name</label>
                <div className="form-underline"></div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
                <label htmlFor="email">Email Address</label>
                <div className="form-underline"></div>
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
                <label htmlFor="phone">Phone Number</label>
                <div className="form-underline"></div>
              </div>
              <div className="form-group textarea-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder=" "
                ></textarea>
                <label htmlFor="message">How Can We Help?</label>
                <div className="form-underline"></div>
              </div>
              <button type="submit" className="submit-button">
                <span>Send Request</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}

          {activeTab === "calendar" && (
            <div className="calendar-booking">
              <div className="booking-illustration">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Select a convenient time</h3>
              <p>Choose from our available slots for a personalized consultation about your roofing needs.</p>
              <a
                href="https://calendly.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="calendar-button"
              >
                <span>View Available Times</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          )}

          {activeTab === "whatsapp" && (
            <div className="whatsapp-booking">
              <div className="booking-illustration">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C10.6155 21 9.30787 20.6635 8.15625 20.0695L3 21L4.0625 15.8125C3.36725 14.6299 3 13.315 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 14.875C16.1667 14.5417 15.4583 14.25 15 14.375C14.5833 14.5 13.5 15.5 13.25 15.625C13 15.75 12.75 15.7917 12.375 15.4583C11.1667 14.4167 10.25 13.25 9.875 12.625C9.54167 12.0417 9.70833 11.5833 9.875 11.25C10 10.9167 10.25 10.25 10.125 9.875C10 9.5 9.70833 9.54167 9.5 9.5C9.25 9.5 8.91667 9.5 8.625 9.79167C7.875 10.5417 7.875 11.5 8 12C8.35417 13.4792 9.52083 14.6458 10 15C10.5 15.375 11.5208 16.1458 13 16.5C13.5 16.625 14.4583 16.625 15.2083 15.875C15.5 15.5833 15.5 15.25 15.5 15C15.5 14.7917 15.5 14.5 15.375 14.25C15.2917 14 15.8333 14.2083 16.5 14.875Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Instant WhatsApp Connection</h3>
              <p>Chat with us directly for quick responses to your roofing questions and scheduling needs.</p>
              <a
                href="https://wa.me/1234567890?text=Hi,%20I'd%20like%20to%20schedule%20a%20roofing%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <span>Message Us on WhatsApp</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookMe;