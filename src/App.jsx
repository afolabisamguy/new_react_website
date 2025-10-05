// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Benefits1 from "./components/Benefits2";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DeleteAccount from "./components/DeleteAccount";

const Home = () => (
  <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Benefits1 />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </div>
    <ButtonGradient />
  </>
);

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-2xl">404 — Page not found</h1>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      
      <Route path="/deleteaccount" element={<DeleteAccount />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
