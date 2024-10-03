import React from "react";

const MapComponent: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
      <iframe
        title="Map of Cozy Hostel location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.2218393443336!2d-1.5616059250057635!3d6.670520093324496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9487ed628cf5%3A0x8c9070090e08f686!2sHydes%20Hostel!5e1!3m2!1sen!2sgh!4v1727990564064!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
