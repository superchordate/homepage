import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Media from "./pages/Media";
import Resume from "./pages/Resume";
// import FAQ from "./pages/FAQ";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/media" element={<Media />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/faq" element={<FAQ />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
