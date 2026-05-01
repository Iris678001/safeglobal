"use client";

import Header from "@/components/safe-global/Header";
import HeroSection from "@/components/safe-global/HeroSection";
import TrustIndicators from "@/components/safe-global/TrustIndicators";
import ServicesSection from "@/components/safe-global/ServicesSection";
import AboutSection from "@/components/safe-global/AboutSection";
import IndustriesSection from "@/components/safe-global/IndustriesSection";
import AIDemoSection from "@/components/safe-global/AIDemoSection";
import CaseStudiesSection from "@/components/safe-global/CaseStudiesSection";
import TestimonialsSection from "@/components/safe-global/TestimonialsSection";
import BlogSection from "@/components/safe-global/BlogSection";
import ContactSection from "@/components/safe-global/ContactSection";
import Footer from "@/components/safe-global/Footer";
import ChatBot from "@/components/safe-global/ChatBot";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustIndicators />
        <ServicesSection />
        <AboutSection />
        <IndustriesSection />
        <AIDemoSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
