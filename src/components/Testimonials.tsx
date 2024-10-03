import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  country: string;
  comment: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah",
      country: "USA",
      comment:
        "Hydes Hostel was the highlight of my trip! The staff was incredibly friendly and the atmosphere was perfect for meeting other travelers.",
      rating: 5,
    },
    {
      name: "Juan",
      country: "Spain",
      comment:
        "Great location and very clean facilities. I loved the communal kitchen and the events organized by the hostel.",
      rating: 4,
    },
    {
      name: "Yuki",
      country: "Japan",
      comment:
        "I felt very safe and comfortable during my stay. The beds were Hydes and the lockers were spacious. Highly recommended!",
      rating: 5,
    },
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

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
  };

  const quoteStyle: React.CSSProperties = {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
    flex: 1,
    position: "relative",
    paddingLeft: "30px",
  };

  const quoteIconStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    color: "#007bff",
  };

  const authorStyle: React.CSSProperties = {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const ratingStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <section id="testimonials" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>What Our Guests Say</h2>
        <div style={gridStyle}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
              }}
            >
              <p style={quoteStyle}>
                <Quote size={24} style={quoteIconStyle} />
                {testimonial.comment}
              </p>
              <div style={authorStyle}>
                <span>
                  {testimonial.name} - {testimonial.country}
                </span>
                <div style={ratingStyle}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #testimonials h2 {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          #testimonials {
            padding: 60px 15px;
          }
          #testimonials h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
