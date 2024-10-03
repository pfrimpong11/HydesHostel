import React from "react";
import backgroundImage from "../assets/images/background.png";

const HomeComponent: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "100px 20px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    color: "white",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "3rem",
    marginBottom: "20px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "1.2rem",
    marginBottom: "30px",
    lineHeight: 1.6,
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "12px 24px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "30px",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "1px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section id="home" style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Welcome to Hydes Hostel</h1>
        <p style={paragraphStyle}>
          Experience comfort and adventure in the heart of the city. Our hostel
          offers a unique blend of modern amenities and a warm, friendly
          atmosphere perfect for travelers from all walks of life.
        </p>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#007bff";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Book Now
        </button>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #home {
            padding: 80px 20px;
          }
          #home h1 {
            font-size: 2.5rem;
          }
          #home p {
            font-size: 1rem;
          }
        }
        @media (max-width: 480px) {
          #home {
            padding: 60px 20px;
          }
          #home h1 {
            font-size: 2rem;
          }
          #home p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeComponent;
