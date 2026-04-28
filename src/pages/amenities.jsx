import React, { useState, useEffect } from "react";
import "./amenities.css";
import image132 from "../assest/image/chair.png";

export default function AmenitiesPremium() {
  const amenitiesData = [
    {
      category: "🏨 Property Highlights",
      items: [
        { 
          image: "https://oceanparadisehotelresort.com/wp-content/uploads/2025/11/Beachside.jpg", 
          title: "Beachside Location", 
          desc: "A few steps from the shoreline, offering immediate access to coastal views." 
        },
        { 
          image: "https://oceanparadisehotelresort.com/wp-content/uploads/2025/11/family-vacation-te-220801-996315.webp", 
          title: "Beach Access", 
          desc: "Direct access to pristine sandy beaches for swimming and sunbathing." 
        },
        { 
          image: "https://oceanparadisehotelresort.com/wp-content/uploads/2025/11/Attractiuon.jpg", 
          title: "Convenient Access to Ocean Shores Attractions", 
          desc: "Popular local attractions and entertainment venues are easily accessible." 
        },
        { 
          image: "https://prodimagesbucket.blob.core.windows.net/roomtype-images/34243/12361/97aa8eb5-347e-4481-b0f3-05dce0135567", 
          title: "Sea View Rooms with Balcony", 
          desc: "Private balconies with stunning ocean views for a memorable stay." 
        }
      ]
    },
    {
      category: "🛏 Room Amenities",
      items: [
        { 
          image: "https://www.shutterstock.com/image-photo/woman-holding-air-conditioner-remote-600nw-2583573923.jpg", 
          title: "AC", 
          desc: "Individual air conditioning controls in every room for perfect comfort." 
        },
        { 
          image: "https://media-cdn.tripadvisor.com/media/photo-s/14/90/30/3f/climate-control-in-room.jpg", 
          title: "Climate Control", 
          desc: "Advanced temperature control system for optimal comfort in all weather." 
        },
        { 
          image: "https://s2.resortssupplies.com/wp-content/uploads/2025/09/Hotel-Mini-Bar-Fridge.webp", 
          title: "Fridge", 
          desc: "Compact refrigerator in every room for storing beverages and snacks." 
        },
        { 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNXsJXhgF3-2cxVt6mOU85tfXRUJ_jks3vA&s", 
          title: "Microwave", 
          desc: "In-room microwave for convenient meal preparation and reheating." 
        },
        { 
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop", 
          title: "Coffee Machine", 
          desc: "Fresh coffee setup available in every room for your morning routine." 
        },
        { 
          image: "https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/1619081310495-24HJYGFI7DYQ73O95WYF/hotel-room-service.jpg", 
          title: "In-Room Refreshments", 
          desc: "Tea, coffee, and bottled water provided daily in your room." 
        },
        { 
          image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep-KykAodhz9PD9ROCJcnYWlb3Kx2gRKbETCEItsXGk-ajuVivul3Dto38ImZztA0sP5lK6Eage3vZlvsLejpeO1hHL71-lgCuqIGXbr5BPHca4S-IAdZfK3Vbswtmt-1WQdh8=w253-h168-k-no", 
          title: "Sea View Rooms with Balcony", 
          desc: "Private balconies with stunning ocean views in select rooms." 
        },
        { 
          image: "https://blogassets.airtel.in/wp-content/uploads/2022/04/internet-services.jpg", 
          title: "High-Speed Wi-Fi", 
          desc: "Fast and reliable internet connection throughout the property." 
        },
        { 
          image: "https://poloandtweed.com/wp-content/uploads/2018/11/rawpixel-1067088-unsplash-scaled-e1611852916388.jpg", 
          title: "Daily Housekeeping", 
          desc: "Professional cleaning service to maintain room standards." 
        }
      ]
    },
    {
      category: "🍳 Food & Beverage",
      items: [
        { 
          image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=250&fit=crop", 
          title: "Continental Breakfast", 
          desc: "Start your day with complimentary breakfast featuring fresh pastries and coffee." 
        },
        { 
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop", 
          title: "In-Room Refreshments", 
          desc: "Tea, coffee, and bottled water provided daily for ultimate convenience." 
        }
      ]
    },
    {
      category: "🏊 Leisure & Recreation",
      items: [
        { 
          image: "https://oceanparadisehotelresort.com/wp-content/uploads/2025/11/Pool.jpg", 
          title: "Indoor Pool and Hot Tub", 
          desc: "Year-round swimming facility with heated spa for perfect relaxation." 
        },
        { 
          image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq0ItsUVLKhPg6IATVC3JxNgC4a3HBtEFXQsWc-Leki_t-zW3L4KUNDhi4x5ICR_0aG2bYtXMlCyVBtHXpcuHU33WiU6Y5vCcW1nylROKBabqZkKMxWilFLqMJwjyE-7F1ALFb8ig=w253-h189-k-no", 
          title: "Pool n Hot Tub", 
          desc: "Therapeutic heated spa for ultimate relaxation after a long day." 
        },
        { 
          image: "https://lh3.googleusercontent.com/proxy/Muu81-SgV_cLfgfVLy_2gjIzb4aRZhwQBxYf5yLCMisMPu9llwbWGUeclj83Ps7O0-0DTszAlOGuTFsCptLcJeeNbZeBE6NzI_tKA-CW3-AV8KUqlfthe7vn65waB2WsGuaQwQi6WGT9EW1EEwO2NoekVPrzVQ=w253-h168-k-no", 
          title: "Mini Golf Area with Family Fun", 
          desc: "Family-friendly mini golf course providing entertainment for all ages." 
        }
      ]
    },
    {
      category: "🐾 Pet-Friendly",
      items: [
        { 
          image: "https://m.media-amazon.com/images/I/81nBU+l41+L._AC_UF894,1000_QL80_.jpg", 
          title: "Pet Friendly – $30/Night", 
          desc: "Welcome your furry family members with our pet-friendly rooms and services." 
        }
      ]
    },
    {
      category: "🚗 Parking & Transportation",
      items: [
        { 
          image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqswlpYkj4RpoKJFgHVgF7TC8Z_JFc_jB3d_K5bk2YSZ4_VuCpOFwXPS1mVrM23l6Cxjdbf92hG2OQTKSZckTZB07XhbJC-zE3QszBVRhmTgLQ75RGRfoQBSMopSCrLOZyvzHp_=w253-h189-k-no", 
          title: "Free Parking",
          desc: "Complimentary parking spaces available for all registered guests." 
        },
        { 
          image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoZeW7pk__BtWe1XUXknmcjLWu9a6_2zWQYOKcRRCb2n_mI2xdlyxoBjouTcJ8vtOmkzaLzvZ23iLBRbT0v9Du-lzUVPcCvBk1g1Ap3H23PPixYpx6Pm7qoxy5KDqh77XLgncOr=w253-h189-k-no", 
          title: "Secure Parking", 
          desc: "Safe and monitored parking area with 24/7 surveillance cameras." 
        },
        { 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxzVexK7wc199AUPFEtzhlWx9YzXJSf8VNw&s", 
          title: "Luggage Assistance", 
          desc: "Professional luggage handling and assistance for guests." 
        }
      ]
    },
    {
      category: "🧳 Guest Services",
      items: [
        { 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqYShkKGL6zL6f86DKblCgnYMFNq6FGiZVw&s", 
          title: "24/7 Concierge", 
          desc: "Round-the-clock professional assistance for travel planning and guidance." 
        },
        { 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKNW36aPBmzyJ8oGbTQVajoVpw5kkeFV_Ng&s", 
          title: "Guest Laundry", 
          desc: "On-site laundry facilities available for guest convenience." 
        },
        { 
          image: "https://lh6.googleusercontent.com/proxy/ES3_9roeVsNEw8m0FPc8PpaUFugaAw1RmWJ2_BtArD_IUWoz_0kED7ZaJUxHaDp9KP347fktc6f74XJ0NxL78dg1UH-voVerh1UtvuDRneF7qMwWCj4-YvXu9FTrl2THLldNJDo4ENefN5WHRZ4wZQ397jS7zQ=w253-h189-k-no", 
          title: "Comfortable Areas for Team Alignment", 
          desc: "Quiet areas available for small group gatherings and meetings." 
        },
        { 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbaO_P9AhwTJsAGLAzIHlTz22zZZVrUwSsg&s", 
          title: "Power Backup", 
          desc: "Uninterrupted power supply ensuring all amenities remain functional." 
        }
      ]
    }
  ];

  // State management
  const [currentSlides, setCurrentSlides] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Mobile detection with proper initialization
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Reset slides when switching between mobile/desktop
      if (mobile !== isMobile) {
        const resetSlides = {};
        amenitiesData.forEach((_, index) => {
          resetSlides[index] = 0;
        });
        setCurrentSlides(resetSlides);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile, amenitiesData]);

  // Initialize slides for each category
  useEffect(() => {
    const initialSlides = {};
    amenitiesData.forEach((_, index) => {
      initialSlides[index] = 0;
    });
    setCurrentSlides(initialSlides);
  }, []);

  // Auto slide functionality with proper mobile detection
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides(prev => {
        const newSlides = { ...prev };
        amenitiesData.forEach((section, index) => {
          const itemsPerSlide = isMobile ? 2 : 3;
          if (section.items.length > itemsPerSlide) {
            const maxSlide = Math.ceil(section.items.length / itemsPerSlide) - 1;
            const currentSlide = prev[index] || 0;
            newSlides[index] = currentSlide >= maxSlide ? 0 : currentSlide + 1;
          }
        });
        return newSlides;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Navigate to specific slide
  const goToSlide = (categoryIndex, slideIndex) => {
    setCurrentSlides(prev => ({
      ...prev,
      [categoryIndex]: slideIndex
    }));
  };

  // Get visible items for current slide
  const getVisibleItems = (items, currentSlide) => {
    const itemsPerSlide = isMobile ? 2 : 3;
    const startIndex = currentSlide * itemsPerSlide;
    return items.slice(startIndex, startIndex + itemsPerSlide);
  };

  // Calculate total slides needed
  const getTotalSlides = (itemsLength) => {
    const itemsPerSlide = isMobile ? 2 : 3;
    return Math.ceil(itemsLength / itemsPerSlide);
  };

  // Check if dots should be shown
  const shouldShowDots = (itemsLength) => {
    const itemsPerSlide = isMobile ? 2 : 3;
    return itemsLength > itemsPerSlide;
  };

  return (
    <div className="ocean-amenities-main">
      {/* Hero Section */}
      <div className="ocean-hero-banner">
        <img 
          src={image132} 
          alt="Hotel Amenities" 
          className="ocean-hero-img"
        />
        <div className="ocean-hero-content-overlay">
          <h1>Hotel Amenities</h1>
          <p>Comfortable stay with essential facilities</p>
        </div>
      </div>

      {/* Amenities Container */}
      <div className="ocean-amenities-container">
        {amenitiesData.map((section, sectionIndex) => (
          <section key={sectionIndex} className="ocean-amenity-category">
            <h2>{section.category}</h2>
            
            <div className="ocean-slider-container">
              {/* Cards Grid */}
              <div className="ocean-amenities-layout">
                {getVisibleItems(section.items, currentSlides[sectionIndex] || 0).map((item, index) => (
                  <div key={`${sectionIndex}-${index}-${currentSlides[sectionIndex] || 0}`} className="ocean-amenity-item">
                    <div className="ocean-item-image">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = image132;
                        }}
                      />
                    </div>
                    <div className="ocean-item-details">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Dots Navigation */}
              {shouldShowDots(section.items.length) && (
                <div className="ocean-dots-container">
                  {Array.from({ length: getTotalSlides(section.items.length) }).map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      className={`ocean-dot ${(currentSlides[sectionIndex] || 0) === dotIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(sectionIndex, dotIndex)}
                      aria-label={`Go to slide ${dotIndex + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}