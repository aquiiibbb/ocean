import React from "react";
import "./dining.css";
import { NavLink } from 'react-router-dom';
import image112 from "../assest/image/ciken.jpg";




export default function Dining() {
  const dishes = [
    {
      id: 1,
      title: "Royal Biryani",
      desc: "Aromatic long-grain rice with rich spices and tender meat.",
      img: "https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-Featured.jpg",
      icon: "fa-solid fa-bowl-rice",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Creamy Alfredo Pasta",
      desc: "Silky cream sauce, parmesan and fresh herbs.",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1400&q=80",
      icon: "fa-solid fa-plate-wheat",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Grilled Salmon",
      desc: "Perfectly seared salmon with lemon butter glaze.",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
      icon: "fa-solid fa-fish",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Signature Steak",
      desc: "Charred to perfection, served with truffle mash.",
      img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1400&q=80",
      icon: "fa-solid fa-drumstick-bite",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Seasonal Salad",
      desc: "Fresh seasonal greens, roasted nuts and citrus dressing.",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=80",
      icon: "fa-solid fa-leaf",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 6,
      title: "Decadent Dessert",
      desc: "Chocolate lava cake with vanilla bean ice cream.",
      img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1400&q=80",
      icon: "fa-solid fa-ice-cream",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    }
  ];

  return (
    <div className="dining-page">
     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
    <img style={{ width: '100%', height: '60vh', borderRadius: '8px', objectFit: 'cover' }} src={image112} alt="" />
</div>
      {/* Decorative Pattern */}
      <div className="royal-pattern"></div>

      {/* HERO */}
     

      {/* INTRO */}
      <section className="dining-intro">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-left">
              <div className="section-header">
                <span className="section-badge">Our Philosophy</span>
                <h2 className="section-title-main">Culinary Excellence</h2>
              </div>
              <p className="intro-text">
                We combine fresh local ingredients with global techniques to create
                a menu that delights everyone — from quick bites to full-course meals.
                Each plate is made with care and presented beautifully.
              </p>
              <ul className="intro-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  Farm-to-table ingredients
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Expert chefs & seasonal menus
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Comfortable fine-dining ambience
                </li>
              </ul>
            </div>
            <div className="intro-right">
              <div className="intro-image-wrapper">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80" alt="Dining Ambience" />
                <div className="image-overlay">
                  <div className="overlay-badge">
                    <i className="fa-solid fa-utensils"></i>
                    <span>Fine Dining</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISHES GRID */}
      <section className="dishes-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge light">Menu</span>
            <h2 className="section-title-main light">Signature Dishes</h2>
            <p className="section-subtitle light">Handpicked favorites from our chef's menu</p>
          </div>

          <div className="dishes-grid">
            {dishes.map((d) => (
              <article className="dish-card" key={d.id}>
                <div className="dish-image-wrapper">
                  <img src={d.img} alt={d.title} loading="lazy" />
                  <div className="dish-overlay" style={{ background: d.gradient }}>
                    <div className="overlay-icon">
                      <i className={d.icon}></i>
                    </div>
                  </div>
                </div>
                <div className="dish-body">
                  <div className="dish-icon-wrapper" style={{ background: d.gradient }}>
                    <i className={d.icon}></i>
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                  <button className="btn-order royal-button">
                    <span>Order Now</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHEF & AMBIENCE */}
      <section className="chef-section">
        <div className="container">
          <div className="chef-wrapper">
            <div className="chef-image-wrapper">
              <img src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=80" alt="Head Chef" />
              <div className="chef-badge">
                <i className="fa-solid fa-award"></i>
                <span>Award Winning</span>
              </div>
            </div>
            <div className="chef-text">
              <div className="section-header">
                <span className="section-badge">Our Team</span>
                <h2 className="section-title-main">Meet Our Head Chef</h2>
              </div>
              <p>
                Chef Arjun leads our kitchen with over 15 years of experience across
                international restaurants. He blends classic technique with modern presentation
                to create unforgettable dining experiences.
              </p>
              <a href="#menu" className="btn-ghost royal-button">
                <span>Explore Full Menu</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION CTA  section hai*/}
      <section id="reserve" className="reserve-section">
        <div className="container">
          <div className="reserve-content">
            <div className="reserve-icon">
              <i className="fa-solid fa-calendar-check"></i>
            </div>
            <h2>Book Your Table</h2>
            <p>Call us or reserve online — we'll make your evening special</p>
            <div className="reserve-actions">
              <a href="tel:+19034718277" className="btn-call royal-button">
                <i className="fa-solid fa-phone"></i>
                <span>Call +1 (903) 471-8277</span>
              </a>
              <NavLink to="/contact" className="btn-secondary royal-button">
                <span>Contact Us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}