import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Advantage from './pages/Advantage';
import Curriculum from './pages/Curriculum';
import Models from './pages/Models';
import Gallery from './pages/Gallery';
import TopBanner from './components/TopBanner';
import WhatsAppFloat from './components/WhatsAppFloat';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Add a small delay to ensure the element exists before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="font-display text-slate-900 antialiased bg-slate-50 min-h-screen flex flex-col">
          <TopBanner />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/advantage" element={<Advantage />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/models" element={<Models />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;