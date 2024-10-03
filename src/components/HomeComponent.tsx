import React from "react";
import backgroundImage from "../assets/images/hydeshostel.png";

const HomeComponent: React.FC = () => {
  const phoneNumber = "233244372453";
  const message = "Hello! Please I would like to book a room.";
  const encodedMessage = encodeURIComponent(message);

  const handleButtonClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

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
          Experience comfort and community in the heart of KNUST. Our hostel
          offers modern amenities, a supportive atmosphere, and easy access to
          campus life, making it the perfect choice for students seeking a
          vibrant and convenient place to stay.
        </p>
        <button
          style={buttonStyle}
          onClick={handleButtonClick}
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
