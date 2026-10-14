import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Impact } from './components/Impact';
import { AboutUs } from './components/AboutUs';
import { Testimonials } from './components/Testimonials';
import { FaqContact } from './components/FaqContact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <div className="min-h-screen bg-[#05070e] text-[#cbd5e1] font-['Plus_Jakarta_Sans'] relative selection:bg-[#ff1a53]/30 selection:text-white overflow-x-hidden">
      {/* Dynamic Background FX (Ambient Glows, Lasers, Grid, Cursor Spotlight) */}
      <BackgroundEffects />

      {/* Fixed Cyber Header */}
      <Navbar onOpenConsultation={openConsultation} />

      {/* Main Page Layout */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero onOpenConsultation={openConsultation} />

        {/* Services Section */}
        <Services onOpenConsultation={openConsultation} />

        {/* Featured Projects Showcase */}
        <Projects onOpenConsultation={openConsultation} />

        {/* Impact Numbers Section */}
        <Impact />

        {/* About Us Agency Overview */}
        <AboutUs onOpenConsultation={openConsultation} />

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* Split FAQ & Contact Section */}
        <FaqContact />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Consultation Booking Modal */}
      <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
    </div>
  );
};

export default App;
