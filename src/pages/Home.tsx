import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Directory from "../components/Directory";
import Notice from "../components/Notice";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Directory />
        <Notice />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
