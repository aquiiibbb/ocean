import React from "react";
import "./rooms.css";
import image13 from "../assest/image/log.png";
import image134 from "../assest/image/bed1.jpg";
import image136 from "../assest/image/ph1.jpg";
import image137 from "../assest/image/ph2.jpg";
import image9 from "../assest/image/about.jpg";
import image139 from "../assest/image/ph4.jpg";
import image140 from "../assest/image/ph5.jpg";
import image1341 from "../assest/image/ph6.jpg";
import image121 from "../assest/image/bedroom.jpg";
import image12187 from "../assest/image/s3.jpg";
import image122 from "../assest/image/area.jpg";
import image123 from "../assest/image/bedroom2.jpg";
import image124 from "../assest/image/bedroom3.jpg";
import image125 from "../assest/image/bedroom4.jpg";
import image126 from "../assest/image/bedroom5.jpeg";
import image127 from "../assest/image/upar.jpg";
import image129 from "../assest/image/bich.webp";
import image130 from "../assest/image/new1.jpg";

import { NavLink } from 'react-router-dom';
import { useState } from "react";

export default function Rooms() {
  return (
    <div className="rooms-page">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
        <img style={{ width: '100%', height: '60vh', borderRadius: '8px', objectFit: 'cover' }} src={image134} alt="" />
      </div>
      
      {/* Decorative Pattern */}
      <div className="royal-pattern"></div>

      {/* ROOM GRID */}
      <section className="rooms-container">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Accommodation</span>
            <h2 className="section-title-main">Choose Your Perfect Room</h2>
            <p className="section-subtitle">
              Experience luxury and comfort in our carefully designed rooms and suites
            </p>
          </div>

          <div className="rooms-grid">
            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image136} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
            <h4>Comfortable Areas for Team Alignment </h4>
<p>Ideal for team retreats with relaxed spaces for planning and collaboration - informal yet productive.</p>                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image127} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
                 <h4>King Room with Sea View</h4>
                <p>A comfortable and convenient stay designed for relaxation and easy access.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image130} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
                 <h4>Beachside Location</h4>
            <p>A few steps from the shoreline, offering immediate access to coastal views, walks and sunsets </p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image134} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
                 <h4>Deluxe King Room</h4>
<p>Indulge in an expansive retreat featuring a plush king-sized bed, premium finishes, and a serene atmosphere designed for ultimate relaxation.</p>                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image137} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
                 <h4>Experience Timeless Comfort</h4>
            <p>Thoughtfully designed interiors that make you feel at home instantly.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image129} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
  <h4>Vacation, Families and Leisure Travel</h4>
<p>Perfect for family getaways, romantic escapes, or peaceful retreats with comfortable rooms and beach access.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image12187} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
                <h4> Single Room with Sea View</h4>
                <p>A comfortable and convenient stay designed for relaxation and easy access.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image9} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
                <h4>Welcome to Ocean Paradise Hotel & Resort</h4>
                <p>A comfortable and convenient stay designed for relaxation and easy access.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image139} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
                <h4>On-Site Mini Golf Experience</h4>
                <p>A fun and refreshing activity just steps away from your room.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image140} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
                <h4>Convenient Access to Ocean Shores Attractions</h4>
                <p>Resturants , cafes ,local shops and popular activities are all within walking distance or a short drive .</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image1341} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
                <h4>Clean. Simple. Comfortable.</h4>
                <p>Everything you need in a fresh, functional bathroom space.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image121} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
             <h4>Queen Room</h4>
             <p>Disability Access King Room</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
           
            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image122} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
              <h4>Wake Up to Coastal Beauty</h4>
              <p>Peaceful dunes and ocean waves create a perfect escape.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image123} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
              <h4>Deluxe King Room</h4>
              <p>A perfect blend of luxury and function, featuring a king-sized bed and a spacious layout designed for ultimate relaxation.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image124} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
               <h4>Queen Room with Two Queen Beds</h4>
               <p>Experience ultimate comfort in our double queen room, outfitted with premium bedding and inviting decor.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image-wrapper">
                <img src={image126} alt="QUEEN BED" />
                <div className="room-overlay" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="overlay-icon">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
              </div>
              <div className="room-info">
             <h4>Indoor Pool and Hot Tub</h4>
             <p>Perfect for years - round relaxation regardless of weather.</p>
                <button className="book-btn royal-button">
                  <span>Book Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Stay?</h2>
            <p>Experience luxury and comfort at Xpress Inn. Book now and enjoy exclusive benefits</p>
            <NavLink to="/contact" className="cta-button royal-button">
              <span>Contact Us</span>
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}