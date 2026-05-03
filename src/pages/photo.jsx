import React from "react";
import image1 from "../assest/image/about.jpg";
import image2 from "../assest/image/area.png";
import image3 from "../assest/image/bed1.png";
import image4 from "../assest/image/bedroom.jpg";
import image5 from "../assest/image/bedroom2.jpg";
import image6 from "../assest/image/bedroom3.jpg";
import image7 from "../assest/image/bedroom4.jpg";
import image9 from "../assest/image/bedroom5.jpeg";
import image10 from "../assest/image/chair.png";
import image11 from "../assest/image/ciken.jpg";
import image12 from "../assest/image/hmm.png";
import image13 from "../assest/image/IMG_7278.jpeg";
import image14 from "../assest/image/IMG_7288.jpeg";
import image15 from "../assest/image/IMG_7293.jpeg";
import image16 from "../assest/image/IMG_7358.jpeg";
import image17 from "../assest/image/unnamed (1).jpg";
import image18 from "../assest/image/unnamed (2)juyj.jpg";
import image19 from "../assest/image/unnamed (10).jpg";
import image20 from "../assest/image/unnamed (11).jpg";
import image21 from "../assest/image/unnamed (17).jpg";
import imag1 from "../assest/image/d1.jpeg";
import image101 from "../assest/image/oc.jpeg";
import image102 from "../assest/image/oc1.jpeg";
import image103 from "../assest/image/oc2.jpeg";
import "./photo.css";


export default function Photos() {
  const localImages = [
    { src: image1,   alt: " Ocean Shores Washington",                          gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { src: image101, alt: " Ocean Shores Washington",                    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { src: image102, alt: " Ocean Shores Washington",                   gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { src: image103, alt: " Ocean Shores Washington",                  gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { src: image2,   alt: " Ocean Shores Washington",             gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image3,   alt: " Ocean Shores Washington",               gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { src: image4,   alt: " Ocean Shores Washington",                 gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
    { src: image5,   alt: " Ocean Shores Washington",                gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    { src: image6,   alt: " Ocean Shores Washington",                gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
    { src: image7,   alt: " Ocean Shores Washington",         gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
    { src: image9,   alt: " Ocean Shores Washington",          gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
    { src: image10,  alt: " Ocean Shores Washington",               gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { src: image11,  alt: " Ocean Shores Washington",                   gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image12,  alt: " Ocean Shores Washington",                  gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image13,  alt: " Ocean Shores Washington",                  gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image14,  alt: " Ocean Shores Washington",                         gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image15,  alt: " Ocean Shores Washington",                      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image16,  alt: " Ocean Shores Washington",                      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image17,  alt: " Ocean Shores Washington",                  gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image18,  alt: " Ocean Shores Washington",            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image19,  alt: " Ocean Shores Washington",                            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image20,  alt: " Ocean Shores Washington",                  gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image21,  alt: " Ocean Shores Washington",                        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
  ];

  const unsplashImages = [];
  const allImages = [...localImages, ...unsplashImages];

  return (
    <div className="photos-container">
    {/* Decorative Pattern */}
    <div className="royal-pattern"></div>

    {/* Hero Section */}
    <div className="photos-her">
    <img src={imag1} alt="Ocean Paradise Hotel & Resort photo gallery hero — Ocean Shores Washington" />
    <div className="hero-particles"></div>
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
    </div>
  );
}
