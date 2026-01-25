import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  canonical?: string;
}

// Base URL - Update this to your actual domain
const BASE_URL = "https://www.ragadental.com";

// Default SEO data
const defaultSEO = {
  title: "Dr. Baskaran - Best Dentist & Implantologist in Thanjavur | Raga Dental",
  description: "Dr. Baskaran is the best dentist and implantologist in Thanjavur, Tamil Nadu. 25+ years of expertise in dental implants, laser dentistry, and digital dentistry at Raga Dental. World-class precision dentistry with global standards.",
  keywords: "Dr. Baskaran, best dentist Thanjavur, implantologist Thanjavur, Raga Dental, dental implants Thanjavur, laser dentistry Thanjavur, digital dentistry Thanjavur, best dentist Tamil Nadu, dental tourism India",
  image: `${BASE_URL}/dr-baskaran-portrait.jpg`,
  type: "website",
};

export function SEO({ title, description, keywords, image, type, noindex, canonical }: SEOProps) {
  const location = useLocation();
  const currentUrl = `${BASE_URL}${location.pathname}`;
  
  const seoTitle = title || defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = image || defaultSEO.image;
  const seoType = type || defaultSEO.type;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = seoTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Primary meta tags
    updateMetaTag("description", seoDescription);
    updateMetaTag("keywords", seoKeywords);
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");
    
    // Open Graph tags
    updateMetaTag("og:title", seoTitle, "property");
    updateMetaTag("og:description", seoDescription, "property");
    updateMetaTag("og:image", seoImage, "property");
    updateMetaTag("og:url", currentUrl, "property");
    updateMetaTag("og:type", seoType, "property");
    
    // Twitter Card tags
    updateMetaTag("twitter:title", seoTitle);
    updateMetaTag("twitter:description", seoDescription);
    updateMetaTag("twitter:image", seoImage);
    
    // Canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Update HTML lang and itemscope if needed
    document.documentElement.setAttribute("lang", "en");
  }, [seoTitle, seoDescription, seoKeywords, seoImage, seoType, currentUrl, canonicalUrl, noindex]);

  return null;
}

// Structured Data Component
export function StructuredData() {
  const location = useLocation();
  
  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    "name": "Raga Dental",
    "alternateName": "Raga Dental Clinic",
    "description": "Raga Dental is a world-class dental clinic in Thanjavur, Tamil Nadu, specializing in dental implants, laser dentistry, and digital dentistry. Led by Dr. Baskaran, a renowned implantologist with 25+ years of experience.",
    "url": "https://www.ragadental.com",
    "logo": "https://www.ragadental.com/logo.png",
    "image": "https://www.ragadental.com/dr-baskaran-portrait.jpg",
    "telephone": "+91-XXXXX-XXXXX",
    "email": "info@ragadental.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Raga Dental",
      "addressLocality": "Thanjavur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "613001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.7867",
      "longitude": "79.1378"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "20:00",
        "description": "By Appointment Only"
      }
    ],
    "priceRange": "$$",
    "medicalSpecialty": [
      "Dentistry",
      "Implantology",
      "Oral Surgery",
      "Prosthodontics",
      "Laser Dentistry",
      "Digital Dentistry"
    ],
    "areaServed": {
      "@type": "Country",
      "name": ["India", "United States", "United Kingdom", "Australia", "New Zealand", "Europe"]
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. Baskaran",
      "jobTitle": "Chief Implantologist and Founder",
      "description": "Dr. Baskaran is a renowned dentist and implantologist with over 25 years of clinical experience. Trained at New York University and Unicamillus University, Italy."
    }
  };

  // Person Schema for Dr. Baskaran
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Baskaran",
    "alternateName": "Dr. Baskaran Raga Dental",
    "description": "Dr. Baskaran is the best dentist and implantologist in Thanjavur, Tamil Nadu. With over 25 years of clinical experience, he specializes in dental implants, laser dentistry, and digital dentistry. He is the founder and chief implantologist at Raga Dental.",
    "jobTitle": "Chief Implantologist and Dentist",
    "worksFor": {
      "@type": "DentalClinic",
      "name": "Raga Dental"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thanjavur",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "Dental Implants",
      "Implantology",
      "Laser Dentistry",
      "Digital Dentistry",
      "Oral Surgery",
      "Prosthodontics",
      "Cosmetic Dentistry",
      "Dental Tourism",
      "Navigation-guided Implants",
      "Semi-robotic Implant Systems"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "New York University",
        "description": "Global training and international exposure"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Unicamillus University, Italy",
        "description": "International dental education"
      }
    ],
    "award": "Pioneer of laser dentistry in South Tamil Nadu",
    "description": "25+ years of clinical practice, early adopter of navigation-guided and semi-robotic implants"
  };

  // Medical Business Schema
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.ragadental.com/#medicalbusiness",
    "name": "Raga Dental",
    "medicalSpecialty": [
      {
        "@type": "MedicalSpecialty",
        "name": "Dentistry"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Implantology"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Laser Dentistry"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Digital Dentistry"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thanjavur",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ragadental.com"
      },
      ...(location.pathname !== "/" ? [{
        "@type": "ListItem",
        "position": 2,
        "name": location.pathname.split("/").pop()?.replace("-", " ") || "Page",
        "item": `https://www.ragadental.com${location.pathname}`
      }] : [])
    ]
  };

  // FAQ Schema (for AI/LLM optimization)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best dentist in Thanjavur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Baskaran is widely recognized as the best dentist and implantologist in Thanjavur, Tamil Nadu. With over 25 years of clinical experience, he specializes in dental implants, laser dentistry, and digital dentistry at Raga Dental."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Dr. Baskaran's dental clinic located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Baskaran practices at Raga Dental in Thanjavur, Tamil Nadu, India. The clinic is a 7,000 sq.ft advanced dental center offering world-class dental care."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Dr. Baskaran offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Baskaran offers dental implants (navigation-guided and semi-robotic), laser dentistry, digital dentistry, oral surgery, prosthodontics, and cosmetic dentistry. He is a pioneer of laser dentistry in South Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        "name": "What are Dr. Baskaran's qualifications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Baskaran has over 25 years of clinical experience. He is trained at New York University (NYU) and Unicamillus University, Italy. He is an early adopter of navigation-guided and semi-robotic implant systems."
        }
      },
      {
        "@type": "Question",
        "name": "Does Raga Dental serve international patients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Raga Dental serves patients from around the world including India, Europe, Australia, New Zealand, and other countries. The clinic specializes in dental tourism, offering world-class treatment in Thanjavur."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Dr. Baskaran the best implantologist in Thanjavur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Baskaran is the best implantologist in Thanjavur due to his 25+ years of experience, international training at NYU and Unicamillus University, early adoption of advanced technologies like navigation-guided and semi-robotic implants, and his focus on precision, predictability, and long-term outcomes."
        }
      }
    ]
  };

  useEffect(() => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add all schemas
    const schemas = [
      localBusinessSchema,
      personSchema,
      medicalBusinessSchema,
      breadcrumbSchema,
      faqSchema
    ];

    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `structured-data-${index}`;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [location.pathname]);

  return null;
}

