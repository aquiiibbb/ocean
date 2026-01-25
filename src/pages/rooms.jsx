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
import image122 from "../assest/image/area.jpg";
import image123 from "../assest/image/bedroom2.jpg";
import image124 from "../assest/image/bedroom3.jpg";
import image125 from "../assest/image/bedroom4.jpg";
import image126 from "../assest/image/bedroom5.jpeg";

import { NavLink } from 'react-router-dom';
import { useState } from "react";

export default function Rooms() {
  return (
    <div className="rooms-page">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
        <img style={{ width: '100%', height: '70vh', borderRadius: '8px', objectFit: 'cover' }} src={image134} alt="" />
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
            <h4>Where Comfort Meets Style</h4>
            <p>A beautifully designed space offering calm, comfort, and modern elegance.</p>
                <button className="book-btn royal-button">
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
                <h4>Nature at Your Doorstep</h4>
                <p>Enjoy peaceful surroundings with scenic views just moments away.</p>
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
             <h4>Your Home Away From Home</h4>
             <p>Relax in a comfortable space with everything you need to unwind.</p>
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
              <h4>Thoughtfully Designed Guest Rooms</h4>
              <p>Simple, comfortable spaces made for relaxation and convenience.</p>
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
               <h4>Classic & Welcoming</h4>
               <p>Relax in our cozy double rooms featuring plush bedding and warm, inviting light.</p>
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
             <h4>Swimming Pool</h4>
             <p>Dive Into Relaxation Description: Refresh your senses with a dip in our sparkling, temperature-controlled pool.</p>
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