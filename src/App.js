import React from "react";
import Navbar from "./components/NavBar";
import SectionIntro from "./components/SectionIntro";
import SectionBanner from "./components/SectionBanner";
import SectionSkills from "./components/SectionSkills";
import SectionRecentWork from "./components/SectionRecentWork";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <SectionIntro />
      <SectionBanner />
      <SectionSkills />
      <SectionRecentWork />
      <Footer />
    </>
  );
}

export default App;
