import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Workflow from './components/Workflow';
import Industries from './components/Industries';
import OperationalBlueprint from './components/OperationalBlueprint';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LiquidBackground from './components/LiquidBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <LiquidBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />




        <OperationalBlueprint />
        <Technologies />


        <Workflow />

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
