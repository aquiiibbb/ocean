import React from "react";
import image1 from "../assest/image/s1.jpg";
import image2 from "../assest/image/s2.jpg";
import image3 from "../assest/image/s3.jpg";
import image4 from "../assest/image/s4.jpg";
import image5 from "../assest/image/s5.jpg";
import image6 from "../assest/image/s6.jpg";
import image7 from "../assest/image/s7.jpg";
import image9 from "../assest/image/s9.jpg";
import image10 from "../assest/image/s10.jpg";
import image11 from "../assest/image/s11.jpg";
import image12 from "../assest/image/s4logo.png";
import image13 from "../assest/image/log.png";
import imag1 from "../assest/image/bedroom3.jpg";



import "./photo.css";
import { NavLink } from 'react-router-dom';


export default function Photos() {
  const localImages = [
    { src: image1, alt: "Hotel Room 1", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { src: image2, alt: "Hotel Room 2", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image3, alt: "Hotel Lobby", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { src: image4, alt: "Hotel Exterior", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
    { src: image5, alt: "Hotel Amenities", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    { src: image6, alt: "Hotel Restaurant", gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
    { src: image7, alt: "Hotel Pool", gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
    { src: image9, alt: "Hotel Conference Room", gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
    { src: image10, alt: "Hotel Bar", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { src: image11, alt: "Hotel Gym", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
  ];

  const unsplashImages = [

   
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
      alt: "Modern Hotel Room",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80",
      alt: "Hotel Interior",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
      alt: "Hotel Dining",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
      alt: "Hotel Lounge",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      src: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=1000&q=80",
      alt: "Hotel View",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
  ];

  const allImages = [...localImages, ...unsplashImages];

  return (
    <div className="photos-container">
     
      {/* Decorative Pattern */}
      <div className="royal-pattern"></div>

      {/* Hero Section */}
      <div className="photos-her">
        <img src={imag1} alt="" />
        <div className="hero-particles">
            
        </div>
      
      </div>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Collection</span>
            <h2 className="section-title-main">Visual Journey</h2>
            <p className="section-subtitle">
              Take a visual tour through our stunning facilities and luxurious spaces
            </p>
          </div>

          <div className="photos-grid">
            {allImages.map((image, index) => (
              <div className="photo-card" key={index}>
                <div className="photo-wrapper">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="photo-overlay" style={{ background: image.gradient }}>
                    <div className="overlay-content">
                      <i className="fa-solid fa-search-plus"></i>
                      <span className="photo-caption">{image.alt}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="gallery-content">
        <div className="container">
          <section className="content-section">
            <div className="content-card">
              <div className="content-icon">
                <i className="fa-solid fa-camera"></i>
              </div>
              <h2 className="section-title">Our Hotel Gallery</h2>
              <p className="section-text">
                Welcome to the Xpress Inn gallery, where you can get a glimpse of
                our renowned hotel in an easy-to-use format. We have some of the
                most amazing amenities and facilities that will make your stay with
                us memorable and unforgettable. We are located a few miles from
                Houston, Texas, and this means that we are in the midst of all the
                fun activities, tourist spots, and hotels near me.
              </p>
            </div>
          </section>

          <section className="content-section">
            <div className="content-card">
              <div className="content-icon">
                <i className="fa-solid fa-building"></i>
              </div>
              <h2 className="section-title">Enjoy our indoors and outdoors</h2>
              <p className="section-text">
                The Xpress Inn Hotel in Marshall, Texas is known for its innovative
                design and range of clientele. Most travelers see our hotel as one
                of the top hip and vibrant hotels not only in Marshall but across
                Texas. Our guests can truly unwind in a comfortable and relaxed
                atmosphere while enjoying and relishing in the well-maintained chic
                rooms and lobbies that our hotel is renowned for.
              </p>
            </div>
          </section>

          <section className="content-section">
            <div className="content-card">
              <div className="content-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h2 className="section-title">
                Convenient for business and leisure travelers
              </h2>
              <p className="section-text">
                Situated close to Houston, Texas Xpress Inn hotel is in the heart of
                all the entertainment and fun spots in Marshall. The convenient
                location of our hotel makes it a perfect choice for both leisure and
                business travelers who are looking for the best Texas business
                hotels.
              </p>
            </div>
          </section>

          <section className="content-section">
            <div className="content-card">
              <div className="content-icon">
                <i className="fa-solid fa-bed"></i>
              </div>
              <h2 className="section-title">Our accommodations</h2>
              <p className="section-text">
                The Xpress Inn's flair for unique locations and a personal touch is
                what makes our facility stand out. We have beautiful artwork in the
                corridors, lobby, foyer, and in all our rooms. The décor adds
                vibrant splashes of color, with rain showers, cozy beddings, sofas,
                refrigerators, microwaves, free Wi-Fi internet connectivity, and
                smart technology features.
              </p>
            </div>
          </section>

          <section className="content-section">
            <div className="content-card">
              <div className="content-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h2 className="section-title">Prime location</h2>
              <p className="section-text">
                Our hotel is conveniently located in Marshall, and this makes
                traveling anywhere in Texas easy. We are situated a few miles from
                the George Bush International Airport. We are also walking distance
                away from great entertainment and dining options.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}