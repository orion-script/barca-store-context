import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Directory from "../components/Directory";
import Notice from "../components/Notice";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Directory />
      <Notice />
      <Footer />
    </div>
  );
}

export default Home;
