import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Policies from "../components/Policies";
import Footer from "../components/Footer";

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Policies/>
      <Footer />
    </>
  );
};

export default AboutPage;
