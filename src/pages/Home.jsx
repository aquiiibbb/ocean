import './home.css'
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import image16 from "../assest/image/hmm.png";
import image17 from "../assest/image/area.png";
import image20 from "../assest/image/pic4.png";
import image21 from "../assest/image/upar.jpg";
import image22 from "../assest/image/bich.webp";
import image23 from "../assest/image/dr.png";
import image25 from "../assest/image/oc.jpeg";
import image26 from "../assest/image/oc1.jpeg";
import image27 from "../assest/image/oc2.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // FIXED: Use real current dates instead of hardcoded ones
  const [checkInDate, setCheckInDate] = useState(() => new Date());
  const [checkOutDate, setCheckOutDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });

  // Images array - add more images here
  const sliderImages = [image21, image23, image25 , image26, image27, image16, image20, image17];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload images to prevent flash
  useEffect(() => {
    sliderImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-slide effect with smoother transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="home-container">
    {/* Custom DatePicker Styling + Smooth Slider Styles */}
    <style jsx global>{`
      /* React DatePicker Blue-White Theme */
      .react-datepicker {
        background-color: #f0f4f8;
        border: 2px solid #073f76;
        border-radius: 0px;
        box-shadow: 0 12px 32px rgba(7,63,118,0.25);
        font-family: inherit;
        overflow: hidden;
      }

      .react-datepicker__header {
        background: linear-gradient(135deg, #052a54 0%, #073f76 100%);
        border-bottom: 2px solid #D4AF37;
        color: white;
        padding: 12px 0;
        border-radius: 0;
      }

      .react-datepicker__current-month {
        color: white;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .react-datepicker__day-names {
        background: rgba(212, 175, 55, 0.1);
        margin: 0;
        padding: 8px 0;
      }

      .react-datepicker__day-name {
        color: #052a54;
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.3px;
      }

      .react-datepicker__month {
        background: #f0f4f8;
        padding: 8px;
      }

      .react-datepicker__day {
        color: #052a54;
        border-radius: 0px;
        font-weight: 600;
        font-size: 14px;
        width: 36px;
        height: 36px;
        line-height: 36px;
        margin: 2px;
        transition: all 0.2s ease;
      }

      .react-datepicker__day:hover {
        background: linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 100%);
        color: #073f76;
        transform: scale(1.05);
        box-shadow: 0 2px 8px rgba(7,63,118,0.2);
      }

      .react-datepicker__day--selected {
        background: linear-gradient(135deg, #052a54 0%, #073f76 100%);
        color: white;
        font-weight: 700;
        box-shadow: 0 4px 12px rgba(5,42,84,0.3);
      }

      .react-datepicker__day--selected:hover {
        background: linear-gradient(135deg, #073f76 0%, #0a4d8a 100%);
        transform: scale(1.05);
      }

      .react-datepicker__day--today {
        background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
        color: #052a54;
        font-weight: 700;
        box-shadow: 0 2px 8px rgba(212,175,55,0.3);
      }

      .react-datepicker__day--today:hover {
        background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
        color: #052a54;
      }

      .react-datepicker__day--keyboard-selected {
        background: rgba(7, 63, 118, 0.1);
        color: #073f76;
      }

      .react-datepicker__day--outside-month {
        color: #ccc;
      }

      .react-datepicker__navigation {
        background: rgba(212, 175, 55, 0.2);
        border-radius: 0px;
        width: 32px;
        height: 32px;
        margin: 8px;
        transition: all 0.2s ease;
      }

      .react-datepicker__navigation:hover {
        background: rgba(212, 175, 55, 0.4);
        transform: scale(1.1);
      }

      .react-datepicker__navigation-icon::before {
        border-color: white;
        border-width: 2px 2px 0 0;
      }

      .react-datepicker__triangle {
        display: none;
      }

      /* Custom Input Styling */
      .custom-date-input {
        padding: 10px 12px;
        width: 100%;
        height: 50px;
        border: 2px solid #073f76;
        border-radius: 0px;
        fontSize: 13px;
        box-sizing: border-box;
        outline: none;
        box-shadow: 0 4px 12px rgba(7,63,118,0.2);
        background-color: white;
        color: #052a54;
        font-weight: 500;
        transition: all 0.3s ease;
        cursor: pointer;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23052a54' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 8px center;
        background-size: 16px 16px;
        padding-right: 35px;
      }

      .custom-date-input:focus {
        border-color: #D4AF37;
        box-shadow: 0 0 0 3px rgba(212,175,55,0.3), 0 4px 12px rgba(7,63,118,0.2);
        background-color: #f8f9ff;
      }

      .custom-date-input:hover {
        border-color: #0a4d8a;
        box-shadow: 0 6px 16px rgba(7,63,118,0.3);
      }

      /* Mobile Calendar Styles */
      .custom-date-input-mobile {
        width: 100%;
        padding: 6px 6px 6px 28px;
        font-size: 11px;
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 0px;
        background: rgba(255,255,255,0.95);
        color: #333;
        font-weight: 500;
        box-sizing: border-box;
      }

      .custom-date-input-mobile:focus {
        outline: none;
        border-color: #D4AF37;
        box-shadow: 0 0 6px rgba(212,175,55,0.3);
      }

      /* SMOOTH SLIDER STYLES - NEW ADDITION */
      .hero-slider-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .hero-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        filter: brightness(115%) contrast(108%);
        transition: opacity 1.5s ease-in-out;
        will-change: opacity;
      }

      /* FIXED SOCIAL ICONS STYLES */
      .social-icons-container {
        position: fixed !important;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 9999 !important;
        display: flex;
        flex-direction: column;
        gap: 6px;
        pointer-events: auto;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        will-change: transform;
      }

      @media (min-width: 769px) {
        .social-icons-container {
          right: 15px;
          gap: 12px;
        }
      }

      .social-icon-item {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 12px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        cursor: pointer;
        position: relative;
      }

      @media (min-width: 769px) {
        .social-icon-item {
          width: 45px;
          height: 45px;
          font-size: 18px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.2);
        }
      }

      .social-icon-item:hover {
        transform: scale(1.05) translateX(-1px);
        box-shadow: 0 3px 8px rgba(0,0,0,0.25);
      }

      @media (min-width: 769px) {
        .social-icon-item:hover {
          transform: scale(1.1) translateX(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
      }

      /* Ensure body doesn't interfere */
      body {
        overflow-x: hidden;
      }

      /* Mobile specific calendar */
      @media (max-width: 768px) {
        .react-datepicker {
          font-size: 10px !important;
          border: 1px solid #ddd !important;
          border-radius: 0px !important;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15) !important;
          z-index: 1000 !important;
          padding: 1px !important;
          width: 150px !important;
          max-width: 150px !important;
          position: fixed !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          top: 50% !important;
          margin-top: -80px !important;
        }

        .react-datepicker__month-container {
          width: 100% !important;
        }

        .react-datepicker__header {
          background: linear-gradient(135deg, #052a54 0%, #073f76 100%) !important;
          color: white !important;
          border-bottom: 1px solid #D4AF37 !important;
          padding: 4px 1px !important;
          margin-bottom: 1px !important;
        }

        .react-datepicker__current-month {
          font-size: 9px !important;
          font-weight: 700 !important;
          margin: 0 !important;
          padding: 0 !important;
          color: white !important;
        }

        .react-datepicker__day-names-container {
          margin-bottom: 0px !important;
        }

        .react-datepicker__day-name {
          width: 16px !important;
          height: 16px !important;
          line-height: 16px !important;
          margin: 0px !important;
          font-size: 7px !important;
          font-weight: 700 !important;
          padding: 0 !important;
          color: #052a54 !important;
        }

        .react-datepicker__day {
          width: 16px !important;
          height: 16px !important;
          line-height: 16px !important;
          margin: 0px !important;
          font-size: 7px !important;
          font-weight: 600 !important;
          padding: 0 !important;
          color: #052a54 !important;
        }

        .react-datepicker__day--selected {
          background: #D4AF37 !important;
          color: #052a54 !important;
          font-weight: bold !important;
        }

        .react-datepicker__day--keyboard-selected {
          background: #073f76 !important;
          color: white !important;
        }

        .react-datepicker__day:hover {
          background: #e8d4a8 !important;
          color: #052a54 !important;
        }

        .react-datepicker__navigation {
          top: 1px !important;
          line-height: 8px !important;
          width: 10px !important;
          height: 10px !important;
          font-size: 6px !important;
          margin: 1px !important;
        }

        .react-datepicker__navigation--previous {
          left: 1px !important;
        }

        .react-datepicker__navigation--next {
          right: 1px !important;
        }

        .react-datepicker__month {
          margin: 0px !important;
        }

        .react-datepicker__week {
          margin: 0 !important;
        }

        .react-datepicker__popper {
          z-index: 1000 !important;
        }
      }
      `}</style>

      {/* Fixed Social Icons */}
      <div className="social-icons-container">
      {[
        {
          icon: <FaArrowCircleDown />,
          bg: '#06469a',
          href: '#contact',
          title: 'Contact Ocean Parradise Hotel'
        },
        {
          icon: <FaInstagramSquare />,
          bg: '#960620',
          href: 'https://instagram.com/yourhandle',
          title: 'Follow Ocean Parradise Hotel on Instagram'
        },
        {
          icon: <FaFacebookSquare />,
          bg: '#1877F2',
          href: 'https://facebook.com/yourpage',
          title: 'Like Ocean Parradise Hotel on Facebook'
        },
        {
          icon: <FaWhatsapp />,
          bg: '#25D366',
          href: 'https://wa.me/13602890664?text=Hi%20there!%20I%20want%20to%20know%20more%20about%20your%20services',
          title: 'WhatsApp Ocean Parradise Hotel'
        }
      ].map((item, index) => (
        <a
        key={index}
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : '_self'}
        rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
        title={item.title}
        className="social-icon-item"
        style={{
          backgroundColor: item.bg
        }}
        >
        {item.icon}
        </a>
      ))}
      </div>

      {/* Hero Section with Smooth Slider */}
      <div style={{
        position: 'relative',
        minHeight: isMobile ? '50vh' : '90vh',
        height: isMobile ? '50vh' : '90vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        marginTop: isMobile ? '40px' : '50px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
      {/* Smooth Slider Implementation */}
      <div className="hero-slider-container">
      {sliderImages.map((image, index) => (
        <div
        key={index}
        className="hero-slide"
        style={{
          backgroundImage: `url(${image})`,
                                           opacity: index === currentImageIndex ? 1 : 0,
                                           zIndex: index === currentImageIndex ? 1 : 0
        }}
        />
      ))}
      </div>

      {/* Booking Form */}
      <div style={{
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
          padding: isMobile ? '8px 4px' : '12px 15px',
          display: 'flex',
          justifyContent: 'center',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          position: 'relative',
          zIndex: 10
      }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: isMobile ? '4px' : '15px',
        maxWidth: isMobile ? '100%' : '750px',
        width: '100%',
        alignItems: 'flex-end',
        padding: '0'
      }}>

      {/* Check In */}
      <div style={{
        flex: isMobile ? '1' : '1',
        minWidth: '0',
        position: 'relative'
      }}>
      <label style={{
        color: 'white',
        fontSize: isMobile ? '9px' : '13px',
        fontWeight: '600',
        display: 'block',
        marginBottom: isMobile ? '2px' : '6px',
        textShadow: '0 1px 2px rgba(0,0,0,0.7)',
          textTransform: 'uppercase',
          letterSpacing: isMobile ? '0.3px' : '0.5px'
      }}>
      Check In
      </label>
      {isMobile && (
        <div style={{ position: 'relative' }}>
        <span style={{
          position: 'absolute',
          left: '6px',
          top: '50%',
          transform: 'translateY(-50%)',
                    fontSize: '14px',
                    zIndex: '5'
        }}>
        📅
        </span>
        <DatePicker
        selected={checkInDate}
        onChange={(date) => setCheckInDate(date)}
        dateFormat="yyyy-MM-dd"
        className="custom-date-input-mobile"
        minDate={new Date()}
        placeholderText="Select date"
        popperPlacement="bottom"
        />
        </div>
      )}
      {!isMobile && (
        <DatePicker
        selected={checkInDate}
        onChange={(date) => setCheckInDate(date)}
        dateFormat="yyyy-MM-dd"
        className="custom-date-input"
        minDate={new Date()}
        placeholderText="Select check-in date"
        />
      )}
      </div>

      {/* Check Out */}
      <div style={{
        flex: isMobile ? '1' : '1',
        minWidth: '0',
        position: 'relative'
      }}>
      <label style={{
        color: 'white',
        fontSize: isMobile ? '9px' : '13px',
        fontWeight: '600',
        display: 'block',
        marginBottom: isMobile ? '2px' : '6px',
        textShadow: '0 1px 2px rgba(0,0,0,0.7)',
          textTransform: 'uppercase',
          letterSpacing: isMobile ? '0.3px' : '0.5px'
      }}>
      Check Out
      </label>
      {isMobile && (
        <div style={{ position: 'relative' }}>
        <span style={{
          position: 'absolute',
          left: '6px',
          top: '50%',
          transform: 'translateY(-50%)',
                    fontSize: '14px',
                    zIndex: '5'
        }}>
        📅
        </span>
        <DatePicker
        selected={checkOutDate}
        onChange={(date) => setCheckOutDate(date)}
        dateFormat="yyyy-MM-dd"
        className="custom-date-input-mobile"
        minDate={checkInDate || new Date()}
        placeholderText="Select date"
        popperPlacement="bottom"
        />
        </div>
      )}
      {!isMobile && (
        <DatePicker
        selected={checkOutDate}
        onChange={(date) => setCheckOutDate(date)}
        dateFormat="yyyy-MM-dd"
        className="custom-date-input"
        minDate={checkInDate || new Date()}
        placeholderText="Select check-out date"
        />
      )}
      </div>

      {/* Book Button */}
      <div style={{
        flex: isMobile ? '0 0 60px' : '0 0 140px'
      }}>
      {!isMobile && <div style={{ height: '22px' }} />}
      <a
      href="https://bookingengine.stayflexi.com/?hotel_id=34243"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        height: isMobile ? '32px' : '50px',
        width: '100%',
        background: 'linear-gradient(135deg, #052a54 0%, #073f76 50%, #0a4d8a 100%)',
          color: 'white',
          border: '2px solid #D4AF37',
          borderRadius: '0px',
          fontSize: isMobile ? '9px' : '14px',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          boxShadow: '0 4px 16px rgba(5,42,84,0.3)',
          textTransform: 'uppercase',
          letterSpacing: isMobile ? '0.3px' : '0.8px',
          position: 'relative',
          overflow: 'hidden',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
      }}
      onMouseOver={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(5,42,84,0.4)';
          e.currentTarget.style.borderColor = '#FFD700';
          e.currentTarget.style.background = 'linear-gradient(135deg, #073f76 0%, #0a4d8a 50%, #0d5ba0 100%)';
        }
      }}
      onMouseOut={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(5,42,84,0.3)';
          e.currentTarget.style.borderColor = '#D4AF37';
          e.currentTarget.style.background = 'linear-gradient(135deg, #052a54 0%, #073f76 50%, #0a4d8a 100%)';
        }
      }}
      >
      {isMobile ? 'Book' : 'Book Now'}
      </a>
      </div>
      </div>
      </div>
      </div>

      {/* About Section */}
      <div className="container-clone">
      <div className="about-grid-clone">
      <div className="about-image-left-clone">
      <img src={image21} alt="Ocean Paradise Hotel luxury lobby entrance with elegant reception area and comfortable seating" />
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
      <img src={image22} alt="Ocean Paradise Hotel oceanview room with comfortable bedding and modern amenities overlooking the Pacific coast" />
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
      <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_751,w_4500,h_3000,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/3._24x7_support_&amp;_service_f222525a" alt="Ocean Paradise Hotel 24/7 front desk support and friendly customer service staff ready to assist guests" />
      <div className="overlay">24/7 SUPPORT & FRIENDLY SERVICE</div>
      </div>

      <div className="collage-box big">
      <img src="https://assets.simplotel.com/simplotel/image/upload/x_118,y_0,w_4095,h_2730,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/crsip_linen_7f7d2d4a" alt="Ocean Paradise Hotel crisp white linens and comfortable bedding for cozy guest room accommodations" />
      <div className="overlay">COZY COMFORT WITH CRISP LINENS</div>
      </div>

      <div className="collage-box small">
      <img src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_0,w_5000,h_3333,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/DSC02324_384edf2d" alt="Ocean Paradise Hotel local Pacific Northwest cuisine and dining experience featuring fresh regional ingredients" />
      <div className="overlay">LOCAL EXPERIENCE & CUISINE</div>
      </div>

      <div className="collage-box small">
      <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_1496,w_4500,h_3001,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/6._Powerful_Shower_64757259" alt="Ocean Paradise Hotel powerful refreshing showers with modern fixtures and hot water for guest comfort" />
      <div className="overlay">POWERFUL REFRESHING SHOWERS</div>
      </div>

      <div className="collage-box small">
      <img src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_0,w_5000,h_3333,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/DSC09120_0efa5108" alt="Ocean Paradise Hotel elegant lobby experience with welcoming atmosphere and modern interior design" />
      <div className="overlay">ELEGANT LOBBY EXPERIENCE</div>
      </div>
      </div>
      </div>
      </div>

      </div>
  );
}
