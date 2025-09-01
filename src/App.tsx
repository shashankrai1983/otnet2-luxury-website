/* 
 * OTNET Luxury Website - Main App Component with Routing
 * Created a premium, clean design for enterprise IT solutions company
 * Features elegant typography, smooth animations, and professional layout
 * Added routing for dedicated service pages
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnterpriseITPage from './pages/EnterpriseITPage';
import AIProductsPage from './pages/AIProductsPage';
import VisionAIPage from './pages/VisionAIPage';
import SAPSolutionsPage from './pages/SAPSolutionsPage';
import BespokeSoftwarePage from './pages/BespokeSoftwarePage';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-cream font-playfair">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/enterprise-it" element={<EnterpriseITPage />} />
        <Route path="/services/ai-products" element={<AIProductsPage />} />
        <Route path="/services/vision-ai" element={<VisionAIPage />} />
        <Route path="/services/sap-solutions" element={<SAPSolutionsPage />} />
        <Route path="/services/bespoke-software" element={<BespokeSoftwarePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;