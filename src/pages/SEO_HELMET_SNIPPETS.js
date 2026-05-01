// ================================================================
// SEO HELMET SNIPPETS — Ocean Paradise Hotel & Resort
// Add the relevant <SeoHead> import + JSX to each page file.
// Do NOT change any existing UI/JSX — only add <SeoHead> at top of return().
// ================================================================

// ── STEP 1: Install dependency ────────────────────────────────
// npm install react-helmet-async
// (Add to package.json: "react-helmet-async": "^2.0.4")

// ── STEP 2: In each page file, add this import ────────────────
// import SeoHead from "../components/SeoHead";
// (adjust path based on file location)

// ================================================================
// HOME PAGE  (src/pages/Home.jsx  or  src/pages/HomePage.jsx)
// ================================================================
/*
return (
  <>
    <SeoHead
      title={undefined}  // uses site default full title
      description="Ocean Paradise Hotel & Resort in Ocean Shores, WA — beachfront hotel with stunning Pacific views, modern amenities, and unforgettable coastal experiences. Book direct for best rates."
      canonical="/"
    />
    {/* ... existing Home JSX unchanged ... *}
  </>
);
*/

// ================================================================
// ROOMS PAGE  (src/pages/Rooms.jsx)
// ================================================================
/*
const roomsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.oceanparadisehotel.us/" },
    { "@type": "ListItem", "position": 2, "name": "Rooms & Suites", "item": "https://www.oceanparadisehotel.us/rooms" }
  ]
};

return (
  <>
    <SeoHead
      title="Rooms & Suites"
      description="Browse our ocean-view rooms and suites at Ocean Paradise Hotel & Resort, Ocean Shores WA. Cozy rooms, spacious suites, and breathtaking Pacific views for every budget."
      canonical="/rooms"
      jsonLd={roomsJsonLd}
    />
    {/* ... existing Rooms JSX unchanged ... *}
  </>
);
*/

// ================================================================
// AMENITIES PAGE  (src/pages/Amenities.jsx)
// ================================================================
/*
return (
  <>
    <SeoHead
      title="Amenities"
      description="Enjoy top-tier amenities at Ocean Paradise Hotel — free parking, beach access, pet-friendly rooms, high-speed WiFi, and more. Perfect for families and couples in Ocean Shores, WA."
      canonical="/amenities"
    />
    {/* ... existing Amenities JSX unchanged ... *}
  </>
);
*/

// ================================================================
// ACTIVITIES PAGE  (src/pages/Activities.jsx)
// ================================================================
/*
return (
  <>
    <SeoHead
      title="Activities & Attractions"
      description="Discover activities near Ocean Paradise Hotel in Ocean Shores, WA — beachcombing, horse riding, kite flying, razor clamming, kayaking, and more Pacific coast adventures."
      canonical="/activities"
    />
    {/* ... existing Activities JSX unchanged ... *}
  </>
);
*/

// ================================================================
// LOCATION PAGE  (src/pages/Location.jsx)
// ================================================================
/*
const locationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Ocean Paradise Hotel & Resort",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "773 Ocean Shores Blvd NW",
    "addressLocality": "Ocean Shores",
    "addressRegion": "WA",
    "postalCode": "98569",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.9741,
    "longitude": -124.1565
  },
  "telephone": "+1-360-289-0664",
  "url": "https://www.oceanparadisehotel.us/location"
};

return (
  <>
    <SeoHead
      title="Location & Directions"
      description="Find Ocean Paradise Hotel & Resort at 773 Ocean Shores Blvd NW, Ocean Shores, WA 98569. Easy access from Seattle and Olympia. Get directions and nearby attractions."
      canonical="/location"
      jsonLd={locationJsonLd}
    />
    {/* ... existing Location JSX unchanged ... *}
  </>
);
*/

// ================================================================
// CONTACT PAGE  (src/pages/Contact.jsx)
// ================================================================
/*
return (
  <>
    <SeoHead
      title="Contact Us"
      description="Contact Ocean Paradise Hotel & Resort — call +1 360-289-0664 or email Oceanshoresview@gmail.com. We're happy to help with reservations, special requests, and inquiries."
      canonical="/contact"
    />
    {/* ... existing Contact JSX unchanged ... *}
  </>
);
*/

// ================================================================
// GALLERY PAGE  (src/pages/Gallery.jsx)  — if exists
// ================================================================
/*
return (
  <>
    <SeoHead
      title="Photo Gallery"
      description="Explore photos of Ocean Paradise Hotel & Resort — ocean-view rooms, beachfront, amenities, and the stunning Pacific coastline of Ocean Shores, WA."
      canonical="/gallery"
      image="https://www.oceanparadisehotel.us/static/media/gallery-og.jpg"
    />
    {/* ... existing Gallery JSX unchanged ... *}
  </>
);
*/

// ================================================================
// BOOKING PAGE  (src/pages/Booking.jsx)  — if exists
// ================================================================
/*
return (
  <>
    <SeoHead
      title="Book Your Stay"
      description="Book your beachfront stay at Ocean Paradise Hotel & Resort, Ocean Shores WA. Best rates guaranteed when you book direct. Check availability now."
      canonical="/booking"
    />
    {/* ... existing Booking JSX unchanged ... *}
  </>
);
*/

// ================================================================
// FAQ PAGE  (src/pages/FAQ.jsx)  — if exists
// ================================================================
/*
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What time is check-in and check-out at Ocean Paradise Hotel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Check-in is at 3:00 PM and check-out is at 11:00 AM." }
    },
    {
      "@type": "Question",
      "name": "Is Ocean Paradise Hotel pet-friendly?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, we welcome pets. Please contact us for details." }
    },
    {
      "@type": "Question",
      "name": "Is there free parking at Ocean Paradise Hotel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, free on-site parking is available for all guests." }
    }
  ]
};

return (
  <>
    <SeoHead
      title="FAQ"
      description="Frequently asked questions about Ocean Paradise Hotel & Resort — check-in times, pet policy, parking, amenities, and more. Plan your Ocean Shores, WA visit."
      canonical="/faq"
      jsonLd={faqJsonLd}
    />
    {/* ... existing FAQ JSX unchanged ... *}
  </>
);
*/
