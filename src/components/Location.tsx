import React from "react";
import { Phone, Mail } from "lucide-react";
import MapComponent from "./ui/MapComponent";

const Location: React.FC = () => {
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

  const descriptionStyle: React.CSSProperties = {
    textAlign: "center",
    maxWidth: "600px",
    marginBottom: "30px",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#555",
  };

  const mapContainerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "800px",
    height: "400px",
    backgroundColor: "#eee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const addressContainerStyle: React.CSSProperties = {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  };

  const addressStyle: React.CSSProperties = {
    fontStyle: "normal",
    textAlign: "center",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#333",
  };

  const contactItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#555",
  };

  return (
    <section id="location" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Our Location</h2>
        <div style={contentStyle}>
          <p style={descriptionStyle}>
            We're located just minutes from KNUST campus, offering convenient
            access to lecture halls, libraries, and student hotspots. Surrounded
            by essential services, eateries, and vibrant student life, our prime
            location ensures you'll have everything you need right at your
            doorstep!
          </p>
          <div style={mapContainerStyle}>
            <MapComponent/>
          </div>
          <div style={addressContainerStyle}>
            <address style={addressStyle}>
              <strong>Hydes Hostel</strong>
              <br />
              Kotei Road
              <br />
              Kumasi
              <br />
              Ghana
            </address>
            <div style={contactItemStyle}>
              <Phone size={20} />
              <span>+233 (024) 437-2453</span>
            </div>
            <div style={contactItemStyle}>
              <Mail size={20} />
              <span>info@Hydeshostel.com</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #location h2 {
            font-size: 2rem;
          }
          #location p {
            font-size: 1rem;
          }
        }
        @media (max-width: 480px) {
          #location {
            padding: 60px 15px;
          }
          #location h2 {
            font-size: 1.75rem;
          }
          #location p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Location;
