import React from "react";
import image1 from "../assest/image/about.jpg";
import image2 from "../assest/image/area.jpg";
import image3 from "../assest/image/bed1.jpg";
import image4 from "../assest/image/bedroom.jpg";
import image5 from "../assest/image/bedroom2.jpg";
import image6 from "../assest/image/bedroom3.jpg";
import image7 from "../assest/image/bedroom4.jpg";
import image9 from "../assest/image/bedroom5.jpeg";
import image10 from "../assest/image/chair.jpg";
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
import imag1 from "../assest/image/bedroom3.jpg";
import "./photo.css";


export default function Photos() {
  const localImages = [
    { src: image1, alt: "", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { src: image2, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image3, alt: "", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { src: image4, alt: "", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
    { src: image5, alt: "", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    { src: image6, alt: "", gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
    { src: image7, alt: "", gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
    { src: image9, alt: "", gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
    { src: image10, alt: "", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { src: image11, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image12, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image13, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image14, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image15, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image16, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image17, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image18, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image19, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image20, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { src: image21, alt: "", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
  ];

  const unsplashImages = [

   
   
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