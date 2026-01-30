import React from "react";
import "./rooms.css";
import image134 from "../assest/image/bed1.jpg";
import image12188 from "../assest/image/sk.jpeg";
import image1rio from "../assest/image/d1.jpeg";
import image1218b from "../assest/image/d2.jpeg";
import image1218dw8 from "../assest/image/d3.jpeg";
import image121vf from "../assest/image/d4.jpeg";
import image1218df from "../assest/image/d5.jpeg";
import imagef from "../assest/image/sd1.jpeg";
import image1f from "../assest/image/sd2.jpeg";
import image1 from "../assest/image/sd3.jpeg";
import image1df from "../assest/image/sd4.jpeg";
import image1d from "../assest/image/f1.jpeg";
import image1cdf from "../assest/image/f2.jpeg";
import image1dl from "../assest/image/f3.jpeg";
import image1ddc from "../assest/image/f4.jpeg";
import image1dff from "../assest/image/f5.jpeg";
import image1dsdf from "../assest/image/fv1.jpeg";
import image1daf from "../assest/image/fv2.jpeg";
import image1ff from "../assest/image/fv3.jpeg";
import image1dfe from "../assest/image/fv4.jpeg";
import image1ddfe1 from "../assest/image/sp1.jpeg";
import image1ddfe2 from "../assest/image/sp2.jpeg";
import image1ddfe3 from "../assest/image/sp3.jpeg";
import image1ddfe4 from "../assest/image/sp4.jpeg";
import image1ddfe5 from "../assest/image/sp5.jpeg";
import image1ddfe6 from "../assest/image/sp6.jpeg";
import image1ddfee from "../assest/image/ss.jpeg";
import image1ddfle from "../assest/image/k1.jpeg";
import image1ddfle1 from "../assest/image/k2.jpeg";
import image1ddf901 from "../assest/image/m1.jpeg";

import { NavLink } from 'react-router-dom';

export default function Rooms() {
 const roomsData = [
  {
    id: 1,
    title: "Standard Queen Room",
    description: "Comfortable queen room with essential amenities for a pleasant stay.",
    images: [image12188],
    features: ["Free WiFi", "AC", "TV", "Room Service"]
  },
  {
    id: 2,
    title: "Double Queen Standard",
    description: "Spacious room with two queen beds, perfect for families or groups.",
    images: [image1rio, image1218b, image1218dw8, image121vf, image1218df],
    features: ["Two Queen Beds", "Ocean View", "Mini Fridge", "Balcony"]
  },
  {
    id: 3,
    title: "Superior Double Queen",
    description: "Enhanced room with premium amenities and two comfortable queen beds.",
    images: [imagef, image1f, image1, image1df],
    features: ["Premium Bedding", "Sea View", "Coffee Maker", "Work Desk"]
  },
  {
    id: 4,
    title: "Superior King",
    description: "Upgraded king room with luxury touches and modern conveniences.",
    images: [image1d, image1cdf, image1dl, image1ddc, image1dff],
    features: ["King Bed", "Premium View", "Jacuzzi", "Mini Bar"]
  },
  {
    id: 5,
    title: "Luxury King with Balcony",
    description: "Premium king suite featuring a private balcony with stunning views.",
    images: [image1dsdf, image1daf, image1ff, image1dfe],
    features: ["Private Balcony", "Ocean View", "Luxury Bath", "Butler Service"]
  },
  {
    id: 6,
    title: "Luxury Double Queen",
    description: "High-end accommodation with two queen beds and luxury amenities.",
    images: [image1ddfe1, image1ddfe2, image1ddfe3, image1ddfe4, image1ddfe5, image1ddfe6],
    features: ["Two Queen Beds", "Luxury Amenities", "Spa Bath", "Concierge"]
  },
  {
    id: 7,
    title: "Standard Single Queen",
    description: "Cozy single queen room with garden views and essential comforts.",
    images: [image1ddfee, image1ddfee, image1ddfee, image1ddfee],
    features: ["Queen Bed", "Garden View", "Work Space", "Free Breakfast"]
  },
  {
    id: 8,
    title: "Standard King",
    description: "Classic king room with modern amenities and city views.",
    images: [image1ddfle, image1ddfle1, image1ddfle],
    features: ["King Bed", "Modern Amenities", "City View", "24/7 Service"]
  },
  {
    id: 9,
    title: "Luxury King Suite",
    description: "Top-tier king suite with VIP services and premium location.",
    images: [image1ddf901, image1ddf901],
    features: ["King Suite", "Premium Location", "VIP Service", "All Inclusive"]
  }
];

  return (
    <div className="rooms-page">
      {/* Hero Section */}
      <div className="hero-image-container">
        <img src={image134} alt="Ocean Paradise Hotel Rooms" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Ocean Paradise</h1>
            <p>Where Luxury Meets Comfort</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Pattern */}
      <div className="royal-pattern"></div>

      {/* Rooms Section */}
      <section className="rooms-container">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Accommodation</span>
            <h2 className="section-title-main">Choose Your Perfect Room</h2>
            <p className="section-subtitle">
              Experience luxury and comfort in our carefully designed rooms and suites at Ocean Paradise
            </p>
          </div>

          <div className="rooms-grid">
            {roomsData.map((room) => (
              <div key={room.id} className="room-card">
                {/* Carousel */}
                <div id={`carousel-${room.id}`} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {room.images.map((image, index) => (
                      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img 
                          src={image} 
                          className="d-block w-100 card-img-top" 
                          alt={`${room.title} - View ${index + 1}`} 
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Controls - Only show if more than 1 image */}
                  {room.images.length > 1 && (
                    <>
                      <button 
                        className="carousel-control-prev" 
                        type="button" 
                        data-bs-target={`#carousel-${room.id}`} 
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button 
                        className="carousel-control-next" 
                        type="button" 
                        data-bs-target={`#carousel-${room.id}`} 
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                      
                      {/* Indicators */}
                      <div className="carousel-indicators">
                        {room.images.map((_, index) => (
                          <button 
                            key={index}
                            type="button" 
                            data-bs-target={`#carousel-${room.id}`} 
                            data-bs-slide-to={index} 
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                          ></button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Card Body */}
                <div className="card-body">
                  <h5 className="card-title">{room.title}</h5>
                  <p className="card-text">{room.description}</p>
                  
                  {/* Features */}
                  <div className="room-features">
                    {room.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        <i className="fas fa-check"></i>
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="https://bookingengine.stayflexi.com/?hotel_id=34243" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary book-btn"
                  >
                    <span>Book Now</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Stay?</h2>
            <p>Experience luxury and comfort at Ocean Paradise. Book now and enjoy exclusive benefits</p>
            <NavLink to="/contact" className="cta-button">
              <span>Contact Us</span>
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}