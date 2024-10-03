import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const QuickLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/RoomPage" },
    { name: "Book", path: "/BookingPage" },
    { name: "About", path: "/AboutPage" },
  ];

  const footerStyle: React.CSSProperties = {
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    padding: "50px 0 30px",
    // marginTop: "50px",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const columnStyle: React.CSSProperties = {
    flex: "1 1 200px",
    marginBottom: "30px",
    minWidth: "200px",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#3498db",
  };

  const listStyle: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyle: React.CSSProperties = {
    marginBottom: "10px",
  };

  const linkStyle: React.CSSProperties = {
    color: "#ecf0f1",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "10px",
    verticalAlign: "middle",
  };

  const socialLinksStyle: React.CSSProperties = {
    display: "flex",
    gap: "15px",
  };

  const socialIconStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    color: "#ecf0f1",
    transition: "color 0.3s ease",
  };

  const copyrightStyle: React.CSSProperties = {
    textAlign: "center",
    marginTop: "30px",
    paddingTop: "20px",
    borderTop: "1px solid #34495e",
    fontSize: "0.9rem",
    color: "#bdc3c7",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Hydes Hostel</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <MapPin size={16} style={iconStyle} />
              123 Traveler's Street
            </li>
            <li style={listItemStyle}>Cityville, State 12345</li>
            <li style={listItemStyle}>Country</li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Quick Links</h3>
          <ul style={listStyle}>
            {QuickLinks.map((item) => (
              <li key={item.name} style={linkStyle}>
                <Link to={item.path} style={linkStyle}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Contact Us</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <Mail size={16} style={iconStyle} />
              info@Hydeshostel.com
            </li>
            <li style={listItemStyle}>
              <Phone size={16} style={iconStyle} />
              +1 (555) 123-4567
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Follow Us</h3>
          <div style={socialLinksStyle}>
            {[
              { icon: <Facebook size={24} />, link: "#" },
              { icon: <Instagram size={24} />, link: "#" },
              { icon: <Twitter size={24} />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                style={socialIconStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3498db")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ecf0f1")}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={copyrightStyle}>
        <p>&copy; {currentYear} Hydes Hostel. All rights reserved.</p>
      </div>
      <style>{`
        @media (max-width: 768px) {
          footer > div {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          footer > div > div {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
