import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Fully from './components/Fully';
import Hero from './components/Hero'
import Questions from './components/Questions';
import Roadmap from './components/Roadmap';
import Smart from './components/Smart';
import Socials from './components/Socials';
import Tokenomics from './components/Tokenomics';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Hero />
      <About />
      <Smart />
      <Tokenomics />
      <Fully />
      <Roadmap />
      <Questions />
      <Socials />
      <Footer />
    </>
  );
}

export default App;
