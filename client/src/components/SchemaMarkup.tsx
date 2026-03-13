import { useEffect } from 'react';

export default function SchemaMarkup() {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Thyme Woodfired Pizzeria",
      "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663434078785/E4YdUvjfhETzg7dLaimZGM/hero-pizza-oven-VAJB7J5TtndG4XZmmNDChh.webp",
      "description": "Handcrafted wood-fired sourdough pizza in Whitefield, Bangalore. Authentic Italian pizzeria with fresh ingredients and slow-fermented dough.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "AECS Layout",
        "addressLocality": "Whitefield",
        "addressRegion": "Bangalore",
        "postalCode": "560066",
        "addressCountry": "IN"
      },
      "telephone": "+919876543210",
      "email": "hello@thymepizzeria.com",
      "priceRange": "₹₹",
      "cuisineType": "Italian",
      "servesCuisine": ["Italian", "Pizza"],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "11:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday", "Saturday"],
          "opens": "11:00",
          "closes": "23:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "12:00",
          "closes": "22:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "450"
      },
      "menu": "https://thymepizzeria.com/menu",
      "acceptsReservations": "True",
      "sameAs": [
        "https://www.instagram.com/thymepizzeria",
        "https://www.zomato.com",
        "https://www.swiggy.com"
      ]
    };

    // Create and inject schema script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
