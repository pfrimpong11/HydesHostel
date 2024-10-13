import React, { useState } from "react";
import { X } from "lucide-react";

import HostelExterior from "../assets/images/front-image.png";
import Stairs1 from '../assets/images/stairs1.jpg';
import StudyRoom1 from '../assets/images/studyRoom1.png';
import DryLine1 from '../assets/images/dryLine1.jpg';
import CarPark from '../assets/images/carPark1.jpg';
import FloorEntrance from '../assets/images/floorEntrance.jpg'
import Kitchen1 from "../assets/images/kitchen1.jpg";
import TvRoom from "../assets/images/tvRoom.png";

interface Photo {
  src: string;
  alt: string;
}

const HomeGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    { src: HostelExterior, alt: "Hostel Exterior" },
    { src: Stairs1, alt: "Stair way" },
    { src: StudyRoom1, alt: "Study Room" },
    { src: DryLine1, alt: "Dry Lines" },
    { src: Kitchen1, alt: "Kitchen" },
    { src: FloorEntrance, alt: "Floor Entrance" },
    { src: TvRoom, alt: "Tv Room" },
    { src: CarPark, alt: "Car Park" },
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

  const galleryStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  };

  const imageContainerStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "10px",
    transform: "translateY(100%)",
    transition: "transform 0.3s ease",
  };

  const modalStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalImageStyle: React.CSSProperties = {
    maxWidth: "90%",
    maxHeight: "90%",
    objectFit: "contain",
  };

  const closeButtonStyle: React.CSSProperties = {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  };

  return (
    <section id="gallery" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Photo Gallery</h2>
        <div style={galleryStyle}>
          {photos.map((photo, index) => (
            <div
              key={index}
              style={imageContainerStyle}
              onClick={() => setSelectedPhoto(photo)}
              onMouseEnter={(e) => {
                // Safely assert the target element as an HTMLElement
                const target = e.currentTarget as HTMLElement;
                target.style.transform = "scale(1.05)";
                target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";

                const overlayElement = target.querySelector(
                  ".overlay"
                ) as HTMLElement | null;
                if (overlayElement) {
                  overlayElement.style.transform = "translateY(0)";
                }
              }}
              onMouseLeave={(e) => {
                // Safely assert the target element as an HTMLElement
                const target = e.currentTarget as HTMLElement;
                target.style.transform = "scale(1)";
                target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";

                const overlayElement = target.querySelector(
                  ".overlay"
                ) as HTMLElement | null;
                if (overlayElement) {
                  overlayElement.style.transform = "translateY(100%)";
                }
              }}
            >
              <img src={photo.src} alt={photo.alt} style={imageStyle} />
              <div className="overlay" style={overlayStyle}>
                {photo.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedPhoto && (
        <div style={modalStyle} onClick={() => setSelectedPhoto(null)}>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            style={modalImageStyle}
          />
          <button
            style={closeButtonStyle}
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={24} />
          </button>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          #gallery h2 {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          #gallery {
            padding: 60px 15px;
          }
          #gallery h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeGallery;
