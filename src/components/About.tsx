import React from "react";
import { Users, MapPin, Calendar } from "lucide-react";

import HostelImage from "../assets/images/background.png";

const About: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    padding: "80px 20px",
    backgroundColor: "#f8f9fa",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "40px",
    color: "#333",
  };

  const contentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px",
  };

  const textStyle: React.CSSProperties = {
    maxWidth: "800px",
    textAlign: "center",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "30px",
  };

  const featuresStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
  };

  const featureItemStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    width: "200px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>About Hydes Hostel</h2>
        <div style={contentStyle}>
          <img src={HostelImage} alt="Hydes Hostel" style={imageStyle} />
          <p style={textStyle}>
            Hydes Hostel has been welcoming travelers from around the world
            since 2010. Our mission is to provide a comfortable, friendly, and
            affordable place for adventurers to rest and connect. With our
            central location and vibrant community atmosphere, we're the perfect
            base for exploring the city and making new friends.
          </p>
          <div style={featuresStyle}>
            <div
              style={featureItemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 4px rgba(0, 0, 0, 0.05)";
              }}
            >
              <Users
                size={32}
                color="#007bff"
                style={{ marginBottom: "10px" }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
                Friendly Community
              </h3>
              <p style={{ textAlign: "center", fontSize: "0.9rem" }}>
                Meet travelers from all over the world
              </p>
            </div>
            <div
              style={featureItemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 4px rgba(0, 0, 0, 0.05)";
              }}
            >
              <MapPin
                size={32}
                color="#007bff"
                style={{ marginBottom: "10px" }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
                Central Location
              </h3>
              <p style={{ textAlign: "center", fontSize: "0.9rem" }}>
                Easy access to city attractions
              </p>
            </div>
            <div
              style={featureItemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 4px rgba(0, 0, 0, 0.05)";
              }}
            >
              <Calendar
                size={32}
                color="#007bff"
                style={{ marginBottom: "10px" }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
                Since 2010
              </h3>
              <p style={{ textAlign: "center", fontSize: "0.9rem" }}>
                Over a decade of hospitality
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #about h2 {
            font-size: 2rem;
          }
          #about p {
            font-size: 1rem;
          }
        }
        @media (max-width: 480px) {
          #about {
            padding: 60px 15px;
          }
          #about h2 {
            font-size: 1.75rem;
          }
          #about p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
