import React, { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  const sectionStyle: React.CSSProperties = {
    padding: "80px 20px",
    backgroundColor: "#f8f9fa",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "600px",
    margin: "0 auto",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "40px",
    color: "#333",
  };

  const formStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const inputGroupStyle: React.CSSProperties = {
    marginBottom: "20px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "5px",
    color: "#555",
    fontSize: "0.9rem",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    transition: "border-color 0.3s ease",
  };

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    minHeight: "120px",
    resize: "vertical",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s ease",
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "8px",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label htmlFor="name" style={labelStyle}>
              Name:
            </label>
            <div style={{ position: "relative" }}>
              <User
                size={18}
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "10px",
                  color: "#007bff",
                }}
              />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ ...inputStyle, paddingLeft: "35px" }}
                placeholder="Your Name"
              />
            </div>
          </div>
          <div style={inputGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email:
            </label>
            <div style={{ position: "relative" }}>
              <Mail
                size={18}
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "10px",
                  color: "#007bff",
                }}
              />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ ...inputStyle, paddingLeft: "35px" }}
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div style={inputGroupStyle}>
            <label htmlFor="message" style={labelStyle}>
              Message:
            </label>
            <div style={{ position: "relative" }}>
              <MessageSquare
                size={18}
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "10px",
                  color: "#007bff",
                }}
              />
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ ...textareaStyle, paddingLeft: "35px" }}
                placeholder="Your message here..."
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            <Send size={18} style={iconStyle} />
            Send Message
          </button>
        </form>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #contact h2 {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          #contact {
            padding: 60px 15px;
          }
          #contact h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
