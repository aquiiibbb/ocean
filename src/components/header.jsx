import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import image12 from "../assest/image/s4logo.png";
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Notice Bar */}
      <div className="notice-bar">
        <div className="notice-content">
          <span className="notice-text">
            Ocean Paradise Hotel is a comfortable and luxurious seaside hotel offering beautiful ocean views, modern rooms, quality services, and a relaxing stay for guests.
          </span>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <span className="phone-icon">📞</span>
            <span className="contact-text">CONTACT US - +13 602892040</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <img src={image12} alt="Ocean Paradise Hotel" className="logo-img" />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/rooms" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Rooms
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/amenities" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Amenities
                </NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink to="/photo" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Photo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Side Items */}
          <div className="header-right">
            <div className="best-rate-badge">
              <span className="badge-text">BEST RATE</span>
              <span className="badge-subtext">GUARANTEED</span>
            </div>
            <a 
              href="https://bookingengine.stayflexi.com/?hotel_id=34243" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="book-now-btn"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">🏠</span> Home
              </NavLink>
            </li>

            <li className="mobile-nav-item">
              <NavLink 
                to="/rooms" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">🛏️</span> Rooms
              </NavLink>
            </li>
            
            <li className="mobile-nav-item">
              <NavLink 
                to="/amenities" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">✨</span> Amenities
              </NavLink>
            </li>

            <li className="mobile-nav-item">
              <NavLink 
                to="/photo" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">📸</span> Photo
              </NavLink>
            </li>
            
            <li className="mobile-nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">📞</span> Contact
              </NavLink>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;