import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  comment: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Isaac Asante-Kobia",
      comment: "Hydes Hostel is a nice place to be. The security is very tight and it has quite a big compound. It has two entrances: small way for humans and big gateway for vehicles. No Dusty compound and I love that it has a pharmacy shop just in front of the hostel.",
      rating: 5,
    },
    {
      name: "Rabbi Tek",
      comment: "I stayed here as a student and I never had any problems. The management takes very good care of the place and complaints are quickly addressed. Very hospitable reception. Home away from home indeed.",
      rating: 5,
    },
    {
      name: "Dapson Ishmeal",
      comment: "One of the best hostels in Kumasi with modern facilities which serves the students of KNUST. A few minutes drive away from KNUST campus. A story building with three floors.",
      rating: 3,
    },
    {
      name: "Evans Amoah",
      comment: "Nicely secured hostel facility for students with good accommodation and common floor kitchens.",
      rating: 4,
    },
    {
      name: "Rabbi Tek",
      comment: "It's a cool place for students. They have good and spacious rooms and a well furnished study room.",
      rating: 4,
    },
    {
      name: "Emmanuella Mensah",
      comment: "Prices for rooms are very friendly.  Place is always kept very neat. Also has a huge study room for students' advantage",
      rating: 4,
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
        <h2 style={headingStyle}>What Our Residents Say</h2>
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
                  {testimonial.name}
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
