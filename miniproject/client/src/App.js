import React from 'react';
import Hero from './components/Hero';
import Facts from './components/Facts';
import Calculator from './components/Calculator';
import Tips from './components/Tips';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Facts />
      <Calculator />
      <MapSection />
      <Tips />
      <Footer />
    </div>
  );
}

export default App;