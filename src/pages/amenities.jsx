import React from "react";
import "./amenities.css";
import { NavLink } from 'react-router-dom';
import image132 from "../assest/image/chair.jpg";
import image2132 from "../assest/image/bedroom5.jpeg";

export default function AmenitiesPremium() {
  const premiumAmenities = [
    { icon: "🛎️", title: "24/7 Concierge", desc: "Professional assistance for travel, dining, and local guidance." },
    { icon: "🛏️", title: "Luxury Rooms", desc: "Spacious rooms with premium bedding and soundproof comfort." },
    { icon: "❄️", title: "Climate Control", desc: "Individually controlled air-conditioning in every room." },
    { icon: "📶", title: "High-Speed Wi-Fi", desc: "Fast and secure internet across the hotel premises." },
    { icon: "🧹", title: "Daily Housekeeping", desc: "Impeccable cleanliness with daily room servicing." },
    { icon: "🚗", title: "Secure Parking", desc: "Dedicated parking area with 24/7 surveillance." },
    { icon: "☕", title: "In-Room Refreshments", desc: "Tea & coffee setup with complimentary bottled water." },
    { icon: "🧳", title: "Luggage Assistance", desc: "Storage and porter service for guest convenience." },
    { icon: "🔥", title: "Power Backup", desc: "Uninterrupted power supply for a comfortable stay." }
  ];

  return (
    <div className="amenities-page">
      {/* Hero Image */}
      <div className="hero-image-container">
        <img src={image132} alt="Hotel" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Hotel Amenities</h1>
            <p className="hero-subtitle">Comfortable stay with essential facilities</p>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
   
<section className="premium-amenities">
      <div className="container">
        <div className="premium-header">
          <span className="premium-badge">Premium</span>
          <h2>Exclusive Hotel Amenities</h2>
          <p>Designed for comfort, convenience, and a refined stay experience</p>
        </div>

        <div className="premium-grid">
          {premiumAmenities.map((item, index) => (
            <div key={index} className="premium-card">
              <div className="premium-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for a Comfortable Stay?</h2>
            <p>Book your room and enjoy our essential amenities</p>
            <NavLink to="/rooms" className="cta-button">
              Book Your Stay
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}