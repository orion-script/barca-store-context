import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Notice from "../components/Notice";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collections />
      <Notice />
      <Footer />
    </div>
  );
}

export default Home;
