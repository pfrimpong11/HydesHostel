import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/RoomPage" },
    { name: "Gallery", path: "/PhotoGallery" },
    { name: "About", path: "/AboutPage" },
    { name: "Contact", path: "/ContactPage" },
  ];

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle: React.CSSProperties = {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
    color: "#3498db",
  };

  const navStyle: React.CSSProperties = {
    display: "flex",
  };

  const menuButtonStyle: React.CSSProperties = {
    display: isMobile ? "block" : "none",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#3498db",
    zIndex: 1001,
  };

  const ulStyle: React.CSSProperties = {
    display: isMobile ? "none" : "flex",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const liStyle: React.CSSProperties = {
    marginLeft: "20px",
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "color 0.3s ease",
  };

  const mobileMenuStyle: React.CSSProperties = {
    display: isMobile ? "block" : "none",
    position: "fixed",
    top: 0,
    right: isMenuOpen ? 0 : "-70%",
    width: "70%",
    height: "100%",
    backgroundColor: "#ffffff",
    boxShadow: "-2px 0 4px rgba(0,0,0,0.1)",
    transition: "right 0.3s ease",
    zIndex: 1000,
    overflowY: "auto",
  };

  const mobileLinkStyle: React.CSSProperties = {
    ...linkStyle,
    display: "block",
    padding: "15px 20px",
    borderBottom: "1px solid #e0e0e0",
  };

  const overlayStyle: React.CSSProperties = {
    display: isMobile && isMenuOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  return (
    <header style={headerStyle}>
      <h1 style={logoStyle}>Hydes Hostel</h1>
      <nav style={navStyle}>
        <button
          style={menuButtonStyle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <ul style={ulStyle}>
          {menuItems.map((item) => (
            <li key={item.name} style={liStyle}>
              <Link
                to={item.path}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3498db")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={overlayStyle} onClick={toggleMenu}></div>
      <div style={mobileMenuStyle}>
        <div style={{ padding: "20px", borderBottom: "1px solid #e0e0e0" }}>
          <h2 style={{ ...logoStyle, fontSize: "20px" }}>Hydes Hostel</h2>
        </div>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
