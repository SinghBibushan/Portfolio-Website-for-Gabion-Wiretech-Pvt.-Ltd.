import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProductsSection } from './components/ProductsSection';
import { SpecsSection } from './components/SpecsSection';
import { QualitySection } from './components/QualitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnimatePresence } from 'framer-motion';
export function App() {
  return <AnimatePresence>
      <div className="min-h-screen bg-white font-[Inter,sans-serif]">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <WhyChooseUsSection />
          <ProductsSection />
          <SpecsSection />
          <QualitySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </AnimatePresence>;
}