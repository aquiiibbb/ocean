import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
import { NavLink } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    checkIn: "",
    checkOut: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ Data
  const faqData = [
    {
      question: "How close is the hotel to the beach?",
      answer: "Ocean Paradise is located steps from the shoreline, providing quick and easy access to walks, sunsets and daily coastal activities."
    },
    {
      question: "What amenities are available?",
      answer: "Indoor pool, hot tub, spacious rooms, Wi-Fi and practical essentials for a comfortable stay."
    },
    {
      question: "Is the hotel suitable for business teams?",
      answer: "Yes. Many teams choose our hotel for retreats and planning sessions because of its calm atmosphere and practical location."
    },
    {
      question: "Do you offer rooms for families and groups?",
      answer: "Yes. We offer room types suitable for families, groups and small teams."
    },
    {
      question: "Is parking available?",
      answer: "Yes. Complimentary parking is available on-site."
    }
  ];

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        message: formData.message
      });

      setStatus("Message Sent Successfully! We'll get back to you soon.");

      // Reset fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        checkIn: "",
        checkOut: "",
        message: ""
      });

    } catch (error) {
      console.error(error);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="contact-main-wrapper">
      {/* Hero Section */}
      <div className="contact-hero-banner">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <p className="contact-hero-welcome">WELCOME</p>
          <h1 className="contact-hero-title">A modern hotel for the modern world.</h1>
          <button className="contact-hero-btn">GET TO KNOW US</button>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="contact-bg-pattern"></div>

      {/* Why Contact Us Section */}
      <section className="contact-intro-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="contact-section-badge">Why Reach Out</span>
            <h2 className="contact-section-title">We're Always Here For You</h2>
            <p className="contact-section-subtitle">
              Whether you have questions, need assistance, or want to make a reservation, our dedicated team is ready to help 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="contact-form-wrapper">
        <div className="contact-container">
          <h1 className="contact-form-title">Reach Out to Us</h1>
          
          <div className="contact-form-box">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name Field */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  NAME<span className="contact-required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="contact-form-input"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  EMAIL<span className="contact-required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email ID"
                  className="contact-form-input"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  PHONE NUMBER<span className="contact-required">*</span>
                </label>
                <div className="contact-phone-group">
                  <select className="contact-country-select">
                    <option value="+91">🇮🇳 India (+91)</option>
                    <option value="+1">🇺🇸 United States (+1)</option>
                    <option value="+44">🇬🇧 United Kingdom (+44)</option>
                    <option value="+61">🇦🇺 Australia (+61)</option>
                    <option value="+33">🇫🇷 France (+33)</option>
                    <option value="+49">🇩🇪 Germany (+49)</option>
                    <option value="+81">🇯🇵 Japan (+81)</option>
                    <option value="+86">🇨🇳 China (+86)</option>
                    <option value="+7">🇷🇺 Russia (+7)</option>
                    <option value="+55">🇧🇷 Brazil (+55)</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    className="contact-form-input contact-phone-input"
                    required
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  SUBJECT<span className="contact-required">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="contact-form-input"
                  required
                />
              </div>

              {/* Check-in Date */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  CHECK-IN<span className="contact-required">*</span>
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
              </div>

              {/* Check-out Date */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  CHECK-OUT<span className="contact-required">*</span>
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  MESSAGE<span className="contact-required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter messages or queries"
                  rows="5"
                  className="contact-form-textarea"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="contact-form-group">
                <button type="submit" className="contact-submit-btn">
                  SUBMIT
                </button>
              </div>

              {/* Status Message */}
              {status && (
                <div className={`contact-status-msg ${status.includes('Error') ? 'contact-error' : 'contact-success'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="contact-section-badge">FAQ</span>
            <h2 className="contact-section-title">Frequently Asked Questions</h2>
            <p className="contact-section-subtitle">
              Quick answers to common questions about our hotel and services
            </p>
          </div>
          
          <div className="contact-faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className="contact-faq-item">
                <div 
                  className="contact-faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className={`contact-faq-icon ${openFAQ === index ? 'contact-faq-open' : ''}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
                <div className={`contact-faq-answer ${openFAQ === index ? 'contact-faq-open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="contact-section-badge">Location</span>
            <h2 className="contact-section-title">Find Us Here</h2>
            <p className="contact-section-subtitle">
              Company Address: 773 OCEAN SHORES BLVD NW, OCEAN SHORES, WA - 98569
            </p>
          </div>
          
          <div className="contact-map-wrapper">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=773+OCEAN+SHORES+BLVD+NW,+OCEAN+SHORES,+WA+98569&hl=en&z=16&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="contact-location-details">
            <div className="contact-detail-item">
              <i className="fa-solid fa-location-dot"></i>
              <span><strong>Address:</strong> 773 OCEAN SHORES BLVD NW, OCEAN SHORES, WA - 98569</span>
            </div>
            
            <div className="contact-detail-item">
              <i className="fa-solid fa-phone"></i>
              <span><strong>Phone:</strong> +1 (360) 289-2040</span>
            </div>
            
            <div className="contact-detail-item">
              <i className="fa-solid fa-envelope"></i>
              <span><strong>Email:</strong> oceanshoresview@gmail.com</span>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/UEmtAnmPCw5yX7QJ7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-directions-btn"
            >
              <i className="fa-solid fa-diamond-turn-right"></i>
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}