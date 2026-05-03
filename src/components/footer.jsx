import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCrown, FaHeart } from 'react-icons/fa';
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';
import "./footer.css"

export default function Footer(){
  return(
    <>
    <footer className="footer">
    <div className="footer-pattern"></div>
    <div className="footer-content">
    <div className="footer-section">
    <div className="footer-logo">
    <FaCrown style={{color:"#df5334", fontSize:"100px", marginRight:"10px",marginBottom:"10px"}} />
    <h2 style={{color:"#df5334",fontSize:"30px",fontWeight:"600"}}>OCEAN PARADISE HOTEL & RESORT</h2>
    </div>

    <div className="social-icons">
    <a href="#" className="social-icon">
    <FaFacebook style={{ height: "30px", width: "30px" }} />
    </a>
    <a href="#" className="social-icon">
    <FaTwitter style={{ height: "30px", width: "30px  " }}  />
    </a>
    <a href="#" className="social-icon">
    <FaInstagram style={{ height: "30px", width: "30px" }} />
    </a>
    <a href="#" className="social-icon">
    <FaYoutube style={{ height: "30px", width: "30px" }} />
    </a>
    </div>
    </div>

    <div className="footer-section">
    <button
    className="quick-links-toggle d-lg-none"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#quickLinksMenu"
    aria-expanded="false"
    >
    Quick Links
    <span className="arrow">+</span>
    </button>

    <div className="collapse d-lg-block" id="quickLinksMenu">
    <ul className="footer-links">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/rooms">Rooms</NavLink></li>
    <li><NavLink to="/about">About Us</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li className="terms-policy-item">
    <NavLink to="/terms" className="terms-policy-link">
    Terms & Policy
    </NavLink>
    <div className="policy-tooltip">
    <div className="policy-content">
    <h4>Hotel Policies</h4>

    <ul>
    <li>
    <strong>Check-in:</strong> From 16:00<br/>
    Guests are required to show a photo <br />identification and credit card upon check-in.<br/>
    You'll need to let the <br /> property know in advance what time you'll arrive.
    </li>

    <li><strong>Check-out:</strong> Until 11:00</li>

    <li>
    <strong>Cancellation/Prepayment:</strong> Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.
    </li>

    <li>
    <strong>Refundable Damage Deposit:</strong> A damage deposit of US$150 is required on arrival. That's about ₹13,596. This will be collected by credit card. You should be reimbursed on check-out. Your deposit will be refunded in full via credit card, subject to an inspection of the property.
    </li>

    <li>
    <strong>Child Policies:</strong> Children of any age are welcome.<br/>
    To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.
    </li>

    <li><strong>Cot and Extra Bed Policies:</strong> 0 - 2 years</li>
    <li><strong>Age Restriction:</strong> The minimum age for check-in is 18</li>
    <li><strong>Pets:</strong> Pets are allowed. Charges may be applicable.</li>
    <li><strong>Groups:</strong> When booking more than 5 rooms, different policies and additional supplements may apply.</li>
    </ul>
    </div>
    </div>
    </li>
    </ul>
    </div>
    </div>

    <div className="footer-section">
    <h3>Contact Info</h3>
    <div className="contact-details">
    <div className="contact-detail-item">
    <FaLocationDot />
    <span>WA 98569, United States</span>
    </div>
    <div className="contact-detail-item">
    <FaPhone />
    <span> +1 360-289-0664, +1 360-289-2040</span>
    </div>
    <div className="contact-detail-item">
    <FaEnvelope />
    <span>Oceanshoresview@gmail.com</span>
    </div>
    </div>
    </div>
    </div>

    <div className="footer-bottom">
    <p>© 2025 Ocean Paradise. All Rights Reserved. | Powered by <FaHeart style={{display:"inline", verticalAlign:"middle"}} /> Ocean Paradise</p>
    </div>
    </footer>
    </>
  )
}
