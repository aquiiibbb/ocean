import './home.css'
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from "react"; // useEffect add kiya
import image12 from "../assest/image/s4logo.png";
import image13 from "../assest/image/log.png";
import image14 from "../assest/image/123.jpeg";
import image15 from "../assest/image/236.jpeg";
import image16 from "../assest/image/hmm.png";
import image1123 from "../assest/image/about.jpg";
import image2123 from "../assest/image/bedroom5.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Home() { // Header se Home kar diya
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
    <div style={{ 
  position: 'relative',
  minHeight: isMobile ? '65vh' : '90vh',
  backgroundImage: `url(${image16})`,
  backgroundSize: 'cover',
  backgroundPosition: '50% 25%',
  display: 'flex',
  alignItems: 'flex-end',
  overflow: 'hidden',
  marginTop: isMobile ? '60px' : '80px' // Top margin add kiya
}}>
  
  {/* Social Icons */}
  <div style={{
    position: 'fixed',
    right: isMobile ? '10px' : '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '10px' : '15px'
  }}>
    {[
      { icon: <FaArrowCircleDown />, bg: '#06469a' },
      { icon: <FaInstagramSquare />, bg: '#5d0606' },
      { icon: <FaFacebookSquare />, bg: '#1DA1F2' },
      { icon: <FaWhatsapp />, bg: '#25D366' }
    ].map((item, index) => (
      <a key={index} href="#" style={{
        width: isMobile ? '35px' : '45px',
        height: isMobile ? '35px' : '45px',
        backgroundColor: item.bg,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: isMobile ? '16px' : '20px',
        textDecoration: 'none',
        transition: 'transform 0.3s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {item.icon}
      </a>
    ))}
  </div>
  
  {/* Booking Form */}
  <div style={{
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: isMobile ? '2x 4px' : '8px',
    display: 'flex',
    justifyContent: 'center',
    backdropFilter: 'blur(5px)'
  }}>
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row',
      gap: isMobile ? '5px' : '20px',
      maxWidth: isMobile ? '100%' : '800px',
      width: '100%',
      alignItems: 'flex-end'
    }}>
      
      {/* Check In */}
      <div style={{ 
        flex: isMobile ? '1' : '1',
        minWidth: isMobile ? '0' : 'auto'
      }}>
        <label style={{ 
          color: 'white', 
          fontSize: isMobile ? '10px' : '14px',
          fontWeight: '600',
          display: 'block',
          marginBottom: isMobile ? '4px' : '8px',
          textShadow: '0 1px 2px rgba(0,0,0,0.5)'
        }}>
          Check In
        </label>
        <input
          type="date"
          defaultValue="2025-12-06"
          style={{
            padding: isMobile ? '6px 4px' : '12px',
            width: '100%',
            height: isMobile ? '36px' : '50px',
            border: 'none',
            borderRadius: '4px',
            fontSize: isMobile ? '10px' : '14px',
            boxSizing: 'border-box',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      {/* Check Out */}
      <div style={{ 
        flex: isMobile ? '1' : '1',
        minWidth: isMobile ? '0' : 'auto'
      }}>
        <label style={{ 
         color: 'white', 
          fontSize: isMobile ? '10px' : '14px',
          fontWeight: '600',
          display: 'block',
          marginBottom: isMobile ? '4px' : '8px',
          textShadow: '0 1px 2px rgba(0,0,0,0.5)'
        }}>
          Check Out
        </label>
        <input
          type="date"
          defaultValue="2025-12-07"
          style={{
            padding: isMobile ? '6px 4px' : '12px',
            width: '100%',
            height: isMobile ? '36px' : '50px',
            border: 'none',
            borderRadius: '4px',
            fontSize: isMobile ? '10px' : '14px',
            boxSizing: 'border-box',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      {/* Book Button */}
      <div style={{ 
        flex: isMobile ? '0 0 auto' : '1',
        minWidth: isMobile ? '70px' : 'auto'
      }}>
        {!isMobile && <div style={{ height: '22px' }} />}
        <button
          style={{
            height: isMobile ? '36px' : '50px',
            width: '100%',
            minWidth: isMobile ? '70px' : '120px',
            background: 'linear-gradient(135deg, #052a54, #073f76)',
            color: 'white',
            border: '2px solid #D4AF37',
            borderRadius: '4px',
            fontSize: isMobile ? '11px' : '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
          onMouseOver={(e) => {
            if (!isMobile) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(5, 42, 84, 0.4)';
              e.currentTarget.style.borderColor = '#FFD700';
            }
          }}
          onMouseOut={(e) => {
            if (!isMobile) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
              e.currentTarget.style.borderColor = '#D4AF37';
            }
          }}
        >
          <NavLink to="/contact" style={{
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            fontSize: 'inherit'
          }}>
            {isMobile ? 'Book' : 'Book Now'}
          </NavLink>
        </button>
      </div>
    </div>
  </div>
</div>

      {/* About Section */}
      <div className="container-clone">
        <div className="about-grid-clone">
          <div className="about-image-left-clone">
            <img src={image2123} alt="Luxury Hotel Lobby" />
          </div>
     
          <div className="about-content-clone">
            <span className="section-badge-clone">About Us:</span>
            <h2 style={{color:"blue"}} className="section-title-clone">OCEAN PARADISE</h2>
            <p className="about-text-clone">
              Ocean Paradise Hotel & Resort is where comfort, value, and the beauty of Ocean Shores come together. Situated at 773 Ocean Shores Blvd NW, our property gives guests easy access to the beach—just a short two-minute walk away—while offering a peaceful place to relax after a day of exploring.
              <br /><br />
              With 62 rooms ranging from standard accommodations to ocean-view rooms, suites, and spa-jacuzzi options, we're able to welcome all types of travelers. Every guest room includes practical essentials like AC/heater, TV, mini-fridge, microwave, and a coffee maker, ensuring a convenient and pleasant stay.
              <br /><br />
              We provide amenities designed for comfort and fun, including free parking, Wi-Fi, daily breakfast, guest laundry, a heated pool with hot tub, and an on-site mini golf area. Our property is also pet-friendly, so families don't have to leave their furry companions behind.
            </p>  
          </div>

          <div className="about-image-right-clone">
            <img src={image1123} alt="Hotel Room View" />
          </div>
        </div>
      </div>

      {/* Promises Section */}
      <div className="featured-wrapper">
        <div className="line left"></div>
        <div className="text-block">
          <p className="caption">Discover the Difference</p>
          <h2 className="title">OCEAN PARADISE PROMISES</h2>
        </div>
        <div className="line right"></div>
      </div>

      {/* Cards Section */}
      <div className="container">
        <div className="clearfix widget-wrapper wt1imgtop-1tbbot imageDescriptionbottom1 wt-image-text-slider fullWidthWidget summit-collage-widget-mobile cards-container-4 cards-wrapper" id="iyssai">
          <div className="card-layout collage-grid">
            <div className="collage-box big">
              <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_751,w_4500,h_3000,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/3._24x7_support_&amp;_service_f222525a" alt="24/7 Support" />
              <div className="overlay">24/7 SUPPORT & FRIENDLY SERVICE</div>
            </div>

            <div className="collage-box big">
              <img src="https://assets.simplotel.com/simplotel/image/upload/x_118,y_0,w_4095,h_2730,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/crsip_linen_7f7d2d4a" alt="Crisp Linens" />
              <div className="overlay">COZY COMFORT WITH CRISP LINENS</div>
            </div>

            <div className="collage-box small">
              <img src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_0,w_5000,h_3333,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/DSC02324_384edf2d" alt="Local Cuisine" />
              <div className="overlay">LOCAL EXPERIENCE & CUISINE</div>
            </div>

            <div className="collage-box small">
              <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_1496,w_4500,h_3001,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/6._Powerful_Shower_64757259" alt="Powerful Shower" />
              <div className="overlay">POWERFUL REFRESHING SHOWERS</div>
            </div>

            <div className="collage-box small">
              <img src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_0,w_5000,h_3333,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/DSC09120_0efa5108" alt="Hotel Lobby" />
              <div className="overlay">ELEGANT LOBBY EXPERIENCE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      <div
        id="offerPopup"
        onClick={() => {
          document.getElementById("offerPopup").style.display = "none";
          sessionStorage.setItem("offerPopup", "1");
        }}
        style={{
          display: sessionStorage.getItem("offerPopup") ? "none" : "flex",
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.85)",
          zIndex: 999999,
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: "360px",
            background: "linear-gradient(135deg,#ff6fae,#ffb6d5)",
            borderRadius: "22px",
            padding: "25px 20px",
            textAlign: "center",
            boxShadow: "0 20px 50px rgba(255,105,180,0.45)",
            animation: "pop 0.4s ease-out",
            position: "relative",
          }}
        >
          <div
            onClick={() => {
              document.getElementById("offerPopup").style.display = "none";
              sessionStorage.setItem("offerPopup", "1");
            }}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "#fff",
              color: "#ff4f9a",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            ✕
          </div>

          <div style={{ fontSize: "40px", marginBottom: "10px" }}>💕 🎉 💝</div>
          <div style={{ fontSize: "22px", fontWeight: "900", color: "#fff", marginBottom: "6px" }}>
            New Year & Valentine Special
          </div>
          <div style={{ fontSize: "14px", color: "#fff", opacity: 0.95, marginBottom: "15px" }}>
            Celebrate love & new beginnings
          </div>
          <div style={{
            background: "#fff",
            color: "#ff2f92",
            fontSize: "30px",
            fontWeight: "900",
            padding: "12px",
            borderRadius: "50px",
            marginBottom: "15px",
            boxShadow: "0 8px 20px rgba(255,47,146,0.35)",
          }}>
            💖 40% OFF 💖
          </div>
          <div style={{
            background: "rgba(255,255,255,0.25)",
            borderRadius: "14px",
            padding: "12px",
            marginBottom: "15px",
            fontSize: "13px",
            color: "#fff",
            fontWeight: "600",
            lineHeight: "1.6",
          }}>
            🌹 Romantic Room Decor <br />
            🍷 Candle Light Dinner <br />
            ⏰ Late Checkout <br />
            🎁 Couple Surprise Gift
          </div>
          <div style={{
            fontSize: "12px",
            fontWeight: "700",
            background: "#ff2f92",
            color: "#fff",
            padding: "8px",
            borderRadius: "10px",
            marginBottom: "14px",
          }}>
            📅 Valid till 14 Feb
          </div>
          <div style={{
            background: "#ff2f92",
            color: "#fff",
            padding: "14px",
            borderRadius: "40px",
            fontSize: "15px",
            fontWeight: "800",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(255,47,146,0.45)",
          }}>
            💕 BOOK YOUR ROMANTIC STAY 💕
          </div>
        </div>

        <style>{`
          @keyframes pop {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title-main">What Our Guests Say</h2>
            <p className="section-subtitle">Real experiences shared by our valued guests</p>
          </div>

          <div className="reviews-grid">
            {[
              { name: "Lofi Rovel", location: "Texas, USA", stars: 5, text: "Amazing stay! Rooms were spotless and staff was extremely polite. The overall experience exceeded expectations." },
              { name: "Cruss Lambargo", location: "Marshall, TX", stars: 4, text: "Great location and very comfortable rooms. Breakfast was tasty and service was prompt." },
              { name: "Sonbat Sohn", location: "Dallas, TX", stars: 5, text: "Very peaceful environment with excellent hospitality. Would definitely visit again." },
              { name: "John Son", location: "Houston, TX", stars: 3, text: "Nice hotel and friendly staff. Wi-Fi could be better, but overall a decent stay." },
              { name: "Morriss John", location: "Austin, TX", stars: 4, text: "Calm atmosphere and courteous staff. Perfect place for a relaxed stay." },
              { name: "Sarah Johnson", location: "San Antonio, TX", stars: 5, text: "Exceptional service and premium rooms. Everything was well-maintained and comfortable." }
            ].map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={i < review.stars ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
                <h4 className="review-name">{review.name}</h4>
                <span className="review-location">{review.location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}