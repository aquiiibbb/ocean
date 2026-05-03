import React, { useState, useEffect } from "react";
import "./rooms.css";
import image134 from "../assest/image/k2.jpeg";
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
      images: [
        { src: image12188, alt: "Standard Queen Room at Ocean Paradise Hotel — Ocean Shores WA" }
      ],
      features: ["Free WiFi", "AC", "TV", "Room Service"]
    },
    {
      id: 2,
      title: "Double Queen Standard",
      description: "Spacious room with two queen beds, perfect for families or groups.",
      images: [
        { src: image1rio,    alt: "Double Queen Standard Room at Ocean Paradise Hotel — Ocean Shores WA" },
        { src: image1218b,   alt: "Double Queen Standard Room interior view — Ocean Paradise Hotel" },
        { src: image1218dw8, alt: "Double Queen Standard Room with ocean view — Ocean Shores WA" },
        { src: image121vf,   alt: "Double Queen Standard Room balcony — Ocean Paradise Hotel & Resort" },
        { src: image1218df,  alt: "Double Queen Standard Room amenities — Ocean Paradise Hotel WA" },
      ],
      features: ["Two Queen Beds", "Ocean View", "Mini Fridge", "Balcony"]
    },
    {
      id: 3,
      title: "Superior Double Queen",
      description: "Enhanced room with premium amenities and two comfortable queen beds.",
      images: [
        { src: imagef,   alt: "Superior Double Queen Room at Ocean Paradise Hotel — Ocean Shores WA" },
        { src: image1f,  alt: "Superior Double Queen Room sea view — Ocean Paradise Hotel" },
        { src: image1,   alt: "Superior Double Queen Room interior — Ocean Paradise Hotel & Resort" },
        { src: image1df, alt: "Superior Double Queen Room with coffee maker — Ocean Shores WA" },
      ],
      features: ["Premium Bedding", "Sea View", "Coffee Maker", "Work Desk"]
    },
    {
      id: 4,
      title: "Superior King",
      description: "Upgraded king room with luxury touches and modern conveniences.",
      images: [
        { src: image1d,   alt: "Superior King Room at Ocean Paradise Hotel — Ocean Shores WA" },
        { src: image1cdf, alt: "Superior King Room premium view — Ocean Paradise Hotel" },
        { src: image1dl,  alt: "Superior King Room with jacuzzi — Ocean Paradise Hotel & Resort" },
        { src: image1ddc, alt: "Superior King Room interior — Ocean Shores WA beachfront hotel" },
        { src: image1dff, alt: "Superior King Room mini bar — Ocean Paradise Hotel Ocean Shores" },
      ],
      features: ["King Bed", "Premium View", "Jacuzzi", "Mini Bar"]
    },
    {
      id: 5,
      title: "Luxury King with Balcony",
      description: "Premium king suite featuring a private balcony with stunning views.",
      images: [
        { src: image1dsdf, alt: "Luxury King Room with private balcony — Ocean Paradise Hotel Ocean Shores WA" },
        { src: image1daf,  alt: "Luxury King Room ocean view balcony — Ocean Paradise Hotel & Resort" },
        { src: image1ff,   alt: "Luxury King Room luxury bathroom — Ocean Paradise Hotel WA" },
        { src: image1dfe,  alt: "Luxury King Room butler service — Ocean Paradise Hotel Ocean Shores" },
      ],
      features: ["Private Balcony", "Ocean View", "Luxury Bath", "Butler Service"]
    },
    {
      id: 6,
      title: "Luxury Double Queen",
      description: "High-end accommodation with two queen beds and luxury amenities.",
      images: [
        { src: image1ddfe1, alt: "Luxury Double Queen Room at Ocean Paradise Hotel — Ocean Shores WA" },
        { src: image1ddfe2, alt: "Luxury Double Queen Room spa bath — Ocean Paradise Hotel" },
        { src: image1ddfe3, alt: "Luxury Double Queen Room interior — Ocean Paradise Hotel & Resort" },
        { src: image1ddfe4, alt: "Luxury Double Queen Room concierge service — Ocean Shores WA" },
        { src: image1ddfe5, alt: "Luxury Double Queen Room amenities — Ocean Paradise Hotel WA" },
        { src: image1ddfe6, alt: "Luxury Double Queen Room view — Ocean Paradise Hotel Ocean Shores" },
      ],
      features: ["Two Queen Beds", "Luxury Amenities", "Spa Bath", "Concierge"]
    },
    {
      id: 7,
      title: "Standard Single Queen",
      description: "Cozy single queen room with garden views and essential comforts.",
      images: [
        { src: image1ddfee, alt: "Standard Single Queen Room at Ocean Paradise Hotel — Ocean Shores WA" },
        { src: image1ddfee, alt: "Standard Single Queen Room garden view — Ocean Paradise Hotel" },
        { src: image1ddfee, alt: "Standard Single Queen Room workspace — Ocean Paradise Hotel & Resort" },
        { src: image1ddfee, alt: "Standard Single Queen Room with breakfast — Ocean Shores WA" },
      ],
      features: ["Queen Bed", "Garden View", "Work Space", "Free Breakfast"]
    },
    {
      id: 8,
      title: "Standard King",
      description: "Classic king room with modern amenities and city views.",
      images: [
        { src: image1ddfle,  alt: "Standard King Room at Ocean Paradise Hotel — Ocean Shores WA" },
        { src: image1ddfle1, alt: "Standard King Room modern amenities — Ocean Paradise Hotel" },
        { src: image1ddfle,  alt: "Standard King Room with 24/7 service — Ocean Paradise Hotel WA" },
      ],
      features: ["King Bed", "Modern Amenities", "City View", "24/7 Service"]
    },
    {
      id: 9,
      title: "Luxury King Suite",
      description: "Top-tier king suite with VIP services and premium location.",
      images: [
        { src: image1ddf901, alt: "Luxury King Suite at Ocean Paradise Hotel — Ocean Shores WA" },
        { src: image1ddf901, alt: "Luxury King Suite VIP service — Ocean Paradise Hotel & Resort" },
      ],
      features: ["King Suite", "Premium Location", "VIP Service", "All Inclusive"]
    }
  ];

  const [currentSlides, setCurrentSlides] = useState({});
  const [isPaused, setIsPaused] = useState({});

  useEffect(() => {
    const initialSlides = {};
    const initialPaused = {};
    roomsData.forEach(room => {
      initialSlides[room.id] = 0;
      initialPaused[room.id] = false;
    });
    setCurrentSlides(initialSlides);
    setIsPaused(initialPaused);
  }, []);

  useEffect(() => {
    const intervals = {};
    roomsData.forEach(room => {
      if (room.images.length > 1) {
        intervals[room.id] = setInterval(() => {
          if (!isPaused[room.id]) {
            setCurrentSlides(prev => ({
              ...prev,
              [room.id]: (prev[room.id] + 1) % room.images.length
            }));
          }
        }, 3000);
      }
    });
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [isPaused]);

  const goToSlide = (roomId, slideIndex) => {
    setCurrentSlides(prev => ({ ...prev, [roomId]: slideIndex }));
  };

  const nextSlide = (roomId) => {
    const room = roomsData.find(r => r.id === roomId);
    setCurrentSlides(prev => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % room.images.length
    }));
  };

  const prevSlide = (roomId) => {
    const room = roomsData.find(r => r.id === roomId);
    setCurrentSlides(prev => ({
      ...prev,
      [roomId]: prev[roomId] === 0 ? room.images.length - 1 : prev[roomId] - 1
    }));
  };

  const handleMouseEnter = (roomId) => {
    setIsPaused(prev => ({ ...prev, [roomId]: true }));
  };

  const handleMouseLeave = (roomId) => {
    setIsPaused(prev => ({ ...prev, [roomId]: false }));
  };

  return (
    <div className="oceanparadise-rooms-page">
    {/* Hero Section */}
    <div className="oceanparadise-hero-image-container">
    <img src={image134} alt="Ocean Paradise Hotel rooms and suites — Ocean Shores WA beachfront hotel" />
    <div className="oceanparadise-hero-overlay">
    <div className="oceanparadise-hero-content">
    <h1>Ocean Paradise</h1>
    <p>Where Luxury Meets Comfort</p>
    </div>
    </div>
    </div>

    {/* Decorative Pattern */}
    <div className="oceanparadise-royal-pattern"></div>

    {/* Rooms Section */}
    <section className="oceanparadise-rooms-container">
    <div className="oceanparadise-container">
    <div className="oceanparadise-section-header">
    <span className="oceanparadise-section-badge">Accommodation</span>
    <h2 className="oceanparadise-section-title-main">Choose Your Perfect Room</h2>
    <p className="oceanparadise-section-subtitle">
    Experience luxury and comfort in our carefully designed rooms and suites at Ocean Paradise
    </p>
    </div>

    <div className="oceanparadise-rooms-grid">
    {roomsData.map((room) => (
      <div
      key={room.id}
      className="oceanparadise-room-card"
      onMouseEnter={() => handleMouseEnter(room.id)}
      onMouseLeave={() => handleMouseLeave(room.id)}
      >
      {/* Custom Auto-Sliding Carousel */}
      <div className="oceanparadise-custom-carousel">
      <div className="oceanparadise-carousel-container">
      {room.images.map((image, index) => (
        <img
        key={index}
        src={image.src}
        className={`oceanparadise-carousel-image ${index === (currentSlides[room.id] || 0) ? 'active' : ''}`}
        alt={image.alt}
        />
      ))}
      </div>

      {room.images.length > 1 && (
        <>
        <button
        className="oceanparadise-carousel-arrow oceanparadise-carousel-arrow-prev"
        onClick={() => prevSlide(room.id)}
        >
        <i className="fas fa-chevron-left"></i>
        </button>
        <button
        className="oceanparadise-carousel-arrow oceanparadise-carousel-arrow-next"
        onClick={() => nextSlide(room.id)}
        >
        <i className="fas fa-chevron-right"></i>
        </button>
        </>
      )}

      {room.images.length > 1 && (
        <div className="oceanparadise-carousel-dots">
        {room.images.map((_, index) => (
          <button
          key={index}
          className={`oceanparadise-dot ${index === (currentSlides[room.id] || 0) ? 'active' : ''}`}
          onClick={() => goToSlide(room.id, index)}
          />
        ))}
        </div>
      )}

      {isPaused[room.id] && room.images.length > 1 && (
        <div className="oceanparadise-pause-indicator">
        <i className="fas fa-pause"></i>
        </div>
      )}
      </div>

      {/* Card Body */}
      <div className="oceanparadise-card-body">
      <h5 className="oceanparadise-card-title">{room.title}</h5>
      <p className="oceanparadise-card-text">{room.description}</p>

      <div className="oceanparadise-room-features">
      {room.features.map((feature, index) => (
        <span key={index} className="oceanparadise-feature-tag">
        <i className="fas fa-check"></i>
        {feature}
        </span>
      ))}
      </div>

      <a
      href="https://bookingengine.stayflexi.com/?hotel_id=34243"
      target="_blank"
      rel="noopener noreferrer"
      className="oceanparadise-book-btn"
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
    </div>
  );
}
