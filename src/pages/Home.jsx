import './home.css'
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import image12 from "../assest/image/s4logo.png";
import image13 from "../assest/image/log.png";
import image14 from "../assest/image/123.jpeg";
import image15 from "../assest/image/236.jpeg";
import image16 from "../assest/image/hmm.jpg";
import image1123 from "../assest/image/about.jpg";
import image2123 from "../assest/image/bedroom5.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";


export default function Header() {
 
const [status,setStatus]=useState('');
  return (
    <div className="home-container">

  <div style={{ 
  position: 'relative',
  minHeight: '90vh',
  backgroundImage: `url(${image16})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'flex-end'
}}>
  {/* Overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }} />
  
  {/* Social Icons - Fixed Position */}
  <div style={{
    position: 'fixed',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  }}>
    <a href="#" style={{
      width: '45px',
      height: '45px',
      backgroundColor: '#06469a',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      textDecoration: 'none',
      transition: 'transform 0.3s ease'
    }}
    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
    >
      <FaArrowCircleDown />
    </a>
    
    <a href="#" style={{
      width: '45px',
      height: '45px',
      backgroundColor: '#5d0606',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      textDecoration: 'none',
      transition: 'transform 0.3s ease'
    }}
    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
    >
      <FaInstagramSquare />
    </a>
    
    <a href="#" style={{
      width: '45px',
      height: '45px',
      backgroundColor: '#1DA1F2',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      textDecoration: 'none',
      transition: 'transform 0.3s ease'
    }}
    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
    >
      <FaFacebookSquare />
    </a>
    
    <a href="#" style={{
      width: '45px',
      height: '45px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      textDecoration: 'none',
      transition: 'transform 0.3s ease'
    }}
    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
    >
      <FaWhatsapp />
    </a>
  </div>
  
  {/* Booking Form */}
  <div style={{
    position: 'relative',
    zIndex: 2,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: '5px 5px',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '20px',
      maxWidth: '800px',
      width: '100%',
      justifyContent: 'center'
    }}>
      
      {/* Check In */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px',
        minWidth: '160px',
        flex: '1 1 160px'
      }}>
        <label style={{ 
          color: 'white', 
          fontSize: '14px',
          fontWeight: '600',
          fontFamily: 'Arial, sans-serif'
        }}>
          Check In
        </label>
        <input
          type="date"
          defaultValue="2025-12-06"
          style={{
            padding: '12px 16px',
            width: '100%',
            height: '50px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: 'white',
            color: '#333',
            fontSize: '14px',
            fontWeight: '500',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* Check Out */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px',
        minWidth: '160px',
        flex: '1 1 160px'
      }}>
        <label style={{ 
          color: 'white', 
          fontSize: '14px',
          fontWeight: '600',
          fontFamily: 'Arial, sans-serif'
        }}>
          Check Out
        </label>
        <input
          type="date"
          defaultValue="2025-12-07"
          style={{
            padding: '12px 16px',
            width: '100%',
            height: '50px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: 'white',
            color: '#333',
            fontSize: '14px',
            fontWeight: '500',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* Book Now Button */}
      <div style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  minWidth: '150px',
  flex: '1 1 150px'
}}>
  <button
    style={{
      paddingBottom: "4px",
      marginTop: "26px",
      height: '50px',
      width: '100%',
      background: 'linear-gradient(135deg, #052a54 0%, #052a54 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      fontFamily: 'Arial, sans-serif',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(6, 34, 66, 0.3)',
      transform: 'translateY(0)',
      border:"2px solid #D4AF37"
    }}
    onMouseOver={(e) => {
      e.target.style.background = 'linear-gradient(135deg, 052a54 0%, 052a54 100%)';
      e.target.style.transform = 'translateY(-1px) scale(1.02)';
      e.target.style.boxShadow = '0 12px 35px rgba(6, 54, 196, 0.5)';
      e.target.style.borderRadius = '12px';
    }}
    onMouseOut={(e) => {
      e.target.style.background = 'linear-gradient(135deg, #052a54 0%, #073f76 100%)';
      e.target.style.transform = 'translateY(0) scale(1)';
      e.target.style.boxShadow = '0 4px 15px rgba(9, 55, 107, 0.3)';
      e.target.style.borderRadius = '8px';
    }}
    onMouseDown={(e) => {
      e.target.style.transform = 'translateY(-2px) scale(0.98)';
      e.target.style.boxShadow = '0 6px 20px rgba(6, 31, 104, 0.4)';
    }}
    onMouseUp={(e) => {
      e.target.style.transform = 'translateY(-4px) scale(1.02)';
      e.target.style.boxShadow = '0 12px 35px rgba(6, 25, 84, 0.5)';
    }}
  >
    <a href="/contact" style={{
      color: 'white',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      position: 'relative',
      zIndex: 2,
      transition: 'all 0.3s ease',
      letterSpacing: '0.5px'
    }}>
      Book Now
    </a>
  </button>
</div>
    </div>
  </div>
</div>
      

        <div className="container-clone">
          <div className="about-grid-clone">
            <div className="about-image-left-clone">
              <img
                src={image2123}
                alt="Luxury Hotel Lobby"
              />
            </div>
       
            <div className="about-content-clone">
              <span className="section-badge-clone">About Us:</span>
              <h2 style={{color:"blue"}} className="section-title-clone">OCEAN PARADISE  </h2>
              <p className="about-text-clone">
              Ocean Paradise Hotel & Resort is where comfort, value, and the beauty of Ocean Shores come together. Situated at 773 Ocean Shores Blvd NW, our property gives guests easy access to the beach—just a short two-minute walk away—while offering a peaceful place to relax after a day of exploring.
With 62 rooms ranging from standard accommodations to ocean-view rooms, suites, and spa-jacuzzi options, we’re able to welcome all types of travelers. Every guest room includes practical essentials like AC/heater, TV, mini-fridge, microwave, and a coffee maker, ensuring a convenient and pleasant stay.
We provide amenities designed for comfort and fun, including free parking, Wi-Fi, daily breakfast, guest laundry, a heated pool with hot tub, and an on-site mini golf area. Our property is also pet-friendly, so families don’t have to leave their furry companions behind.
For small gatherings or private events, we offer a versatile indoor space our breakfast area—which can comfortably host up to 30 people and is available for hourly rental.
At Ocean Paradise Hotel & Resort, our focus is simple to offer a friendly, affordable, and relaxing coastal getaway where guests feel welcome from the moment they arrive
              </p>  
              &nbsp;
            </div>

            <div className="about-image-right-clone">
              <img
                src={image1123}
                alt="Hotel Room View"
              />
            </div>
          </div>
        </div>
                

      
       <div className="featured-wrapper">
      <div className="line left"></div>

      <div className="text-block">
        <p className="caption">Discover the Difference</p>
        <h2 className="title">OCEAN PARADISE PROMISES</h2>
      </div>

      <div className="line right"></div>
    </div>
      <div className="container">

        <div class="clearfix widget-wrapper wt1imgtop-1tbbot imageDescriptionbottom1 wt-image-text-slider fullWidthWidget summit-collage-widget-mobile cards-container-4 cards-wrapper"
          id="iyssai">

          <div class="card-layout collage-grid">


            <div class="collage-box big">
              <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_751,w_4500,h_3000,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/3._24x7_support_&amp;_service_f222525a"
                alt="Female customer service representative" />
              <div class="overlay">24/7 SUPPORT & FRIENDLY SERVICE</div>
            </div>


            <div class="collage-box big">
              <img src="https://assets.simplotel.com/simplotel/image/upload/x_118,y_0,w_4095,h_2730,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/crsip_linen_7f7d2d4a"
                alt="Hotel staff making bed" />
              <div class="overlay">COZY COMFORT WITH CRISP LINENS</div>
            </div>


            <div class="collage-box small">
              <img src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_0,w_5000,h_3333,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/DSC02324_384edf2d"
                alt="Woman enjoying meal on balcony" />
              <div class="overlay">LOCAL EXPERIENCE & CUISINE</div>
              <div>
                <img alt="eye" class="eye icon" src="https://assets.simplotel.com/simplotel/image/upload/q_90,fl_progressive,w_200,c_limit/summit-hotels-resorts/local_cuisine_-_summit_04805d8b"/>
                <p>Relish authentic flavors with thoughtfully prepared local delicacies and lavish buffet spreads,
                   offering a true taste of tradition alongside global favorites,
                    all served with Ocean’s signature warmth.</p>
              </div>
            </div>


            <div class="collage-box small">
              <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_1496,w_4500,h_3001,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/6._Powerful_Shower_64757259"
                alt="Man enjoying shower" />
              <div class="overlay">COZY COMFORT WITH CRISP LINENS</div>
            </div>


            <div class="collage-box small">
              <img src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_0,w_5000,h_3333,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/DSC09120_0efa5108"
                alt="Woman entering hotel lobby" />
              <div class="overlay">COZY COMFORT WITH CRISP LINENS</div>
            </div>

          </div>


        
                
            
          
        </div>
        

      </div>
      
      

      {/* Christmas Popup */}
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
    {/* Close */}
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

    {/* Icons */}
    <div style={{ fontSize: "40px", marginBottom: "10px" }}>
      💕 🎉 💝
    </div>

    <div
      style={{
        fontSize: "22px",
        fontWeight: "900",
        color: "#fff",
        marginBottom: "6px",
      }}
    >
      New Year & Valentine Special
    </div>

    <div
      style={{
        fontSize: "14px",
        color: "#fff",
        opacity: 0.95,
        marginBottom: "15px",
      }}
    >
      Celebrate love & new beginnings
    </div>

    {/* Discount */}
    <div
      style={{
        background: "#fff",
        color: "#ff2f92",
        fontSize: "30px",
        fontWeight: "900",
        padding: "12px",
        borderRadius: "50px",
        marginBottom: "15px",
        boxShadow: "0 8px 20px rgba(255,47,146,0.35)",
      }}
    >
      💖 40% OFF 💖
    </div>

    {/* Features */}
    <div
      style={{
        background: "rgba(255,255,255,0.25)",
        borderRadius: "14px",
        padding: "12px",
        marginBottom: "15px",
        fontSize: "13px",
        color: "#fff",
        fontWeight: "600",
        lineHeight: "1.6",
      }}
    >
      🌹 Romantic Room Decor <br />
      🍷 Candle Light Dinner <br />
      ⏰ Late Checkout <br />
      🎁 Couple Surprise Gift
    </div>

    {/* Date */}
    <div
      style={{
        fontSize: "12px",
        fontWeight: "700",
        background: "#ff2f92",
        color: "#fff",
        padding: "8px",
        borderRadius: "10px",
        marginBottom: "14px",
      }}
    >
      📅 Valid till 14 Feb
    </div>

    {/* CTA */}
    <div
      style={{
        background: "#ff2f92",
        color: "#fff",
        padding: "14px",
        borderRadius: "40px",
        fontSize: "15px",
        fontWeight: "800",
        cursor: "pointer",
        boxShadow: "0 8px 25px rgba(255,47,146,0.45)",
      }}
    >
      💕 BOOK YOUR ROMANTIC STAY 💕
    </div>

    <div
      onClick={() => {
        document.getElementById("offerPopup").style.display = "none";
        sessionStorage.setItem("offerPopup", "1");
      }}
      style={{
        marginTop: "10px",
        fontSize: "12px",
        color: "#fff",
        opacity: 0.85,
        cursor: "pointer",
      }}
    >
      Maybe later
    </div>
  </div>

  <style>{`
    @keyframes pop {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `}</style>
</div>

     

      {/* Additional Features */}
<section className="reviews-section">
  <div className="container">
    <div className="section-header">
      <span className="section-badge">Testimonials</span>
      <h2 className="section-title-main">What Our Guests Say</h2>
      <p className="section-subtitle">
        Real experiences shared by our valued guests
      </p>
    </div>

    <div className="reviews-grid">

      <div className="review-card">
        <div className="review-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p className="review-text">
          Amazing stay! Rooms were spotless and staff was extremely polite.
          The overall experience exceeded expectations.
        </p>
        <h4 className="review-name">Lofi Rovel</h4>
        <span className="review-location">Texas, USA</span>
      </div>

      <div className="review-card">
        <div className="review-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p className="review-text">
          Great location and very comfortable rooms. Breakfast was tasty
          and service was prompt.
        </p>
        <h4 className="review-name">Cruss Lambargo</h4>
        <span className="review-location">Marshall, TX</span>
      </div>

      <div className="review-card">
        <div className="review-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p className="review-text">
          Very peaceful environment with excellent hospitality.
          Would definitely visit again.
        </p>
        <h4 className="review-name">Sonbat Sohn</h4>
        <span className="review-location">Dallas, TX</span>
      </div>

      <div className="review-card">
        <div className="review-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p className="review-text">
          Nice hotel and friendly staff. Wi-Fi could be better,
          but overall a decent stay.
        </p>
        <h4 className="review-name">John Son</h4>
        <span className="review-location">Houston, TX</span>
      </div>

      <div className="review-card">
        <div className="review-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p className="review-text">
          Calm atmosphere and courteous staff.
          Perfect place for a relaxed stay.
        </p>
        <h4 className="review-name">Morriss John</h4>
        <span className="review-location">Austin, TX</span>
      </div>

      <div className="review-card">
        <div className="review-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p className="review-text">
          Exceptional service and premium rooms.
          Everything was well-maintained and comfortable.
        </p>
        <h4 className="review-name">Sarah Johnson</h4>
        <span className="review-location">San Antonio, TX</span>
      </div>

    </div>
  </div>
</section>


      {/* Reviews Section - UPDATED */}
     
    </div>
  );
}