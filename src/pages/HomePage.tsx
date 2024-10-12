import React from "react";
import Header from "../components/Header";
import HomeComponent from "../components/HomeComponent";
import Rooms from "../components/Rooms";
import Location from "../components/Location";
import Amenities from "../components/Amenities";
import HomeGallery from "../components/HomeGallery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const App: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "0",
      }}
    >
      <Header />
      <HomeComponent />
      <Rooms />
      <Location />
      <Amenities />
      <HomeGallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
