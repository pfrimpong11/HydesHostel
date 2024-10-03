import React from "react";
import {
  Wifi,
  Clock,
  Utensils,
  Sofa,
  Shirt,
  Briefcase,
  Sparkles,
  BookOpen,
  Droplet,
  Tv,
  Car,
  Trash,
  Wrench
} from "lucide-react";

interface Amenity {
  name: string;
  icon: React.ReactNode;
}

const Amenities: React.FC = () => {
  const amenities: Amenity[] = [
    { name: "Cloud Wi-Fi", icon: <Wifi size={24} /> },
    { name: "24/7 Reception", icon: <Clock size={24} /> },
    { name: "Fully Equipped Kitchen", icon: <Utensils size={24} /> },
    { name: "Lounge Area", icon: <Sofa size={24} /> },
    { name: "Laundry Facilities", icon: <Shirt size={24} /> },
    { name: "Luggage Storage", icon: <Briefcase size={24} /> },
    { name: "Daily Cleaning Service", icon: <Sparkles size={24} /> },
    { name: "Constant Water Flow", icon: <Droplet size={24} /> },
    { name: "Study Room", icon: <BookOpen size={24} /> },
    { name: "TV Room", icon: <Tv size={24} /> },
    { name: "Car Park", icon: <Car size={24} /> },
    { name: "Dustbins for Each Room", icon: <Trash size={24} /> },
    { name: "High Maintenance Culture", icon: <Wrench size={24} /> },
  ];
  
  const sectionStyle: React.CSSProperties = {
    padding: "80px 20px",
    backgroundColor: "#f8f9fa",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "40px",
    color: "#333",
  };

  const listStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    padding: 0,
    listStyle: "none",
  };

  const listItemStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const iconStyle: React.CSSProperties = {
    marginBottom: "15px",
    color: "#007bff",
  };

  const amenityNameStyle: React.CSSProperties = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <section id="amenities" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Amenities and Services</h2>
        <ul style={listStyle}>
          {amenities.map((amenity, index) => (
            <li
              key={index}
              style={listItemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div style={iconStyle}>{amenity.icon}</div>
              <div style={amenityNameStyle}>{amenity.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #amenities h2 {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          #amenities {
            padding: 60px 15px;
          }
          #amenities h2 {
            font-size: 1.75rem;
          }
          #amenities ul {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Amenities;
