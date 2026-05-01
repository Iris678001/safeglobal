"use client";

import Header from "@/components/safe-global/Header";
import HeroSection from "@/components/safe-global/HeroSection";
import TrustIndicators from "@/components/safe-global/TrustIndicators";
import ServicesSection from "@/components/safe-global/ServicesSection";
import HowItWorks from "@/components/safe-global/HowItWorks";
import AboutSection from "@/components/safe-global/AboutSection";
import IndustriesSection from "@/components/safe-global/IndustriesSection";
import AIDemoSection from "@/components/safe-global/AIDemoSection";
import SafetyScoreCalculator from "@/components/safe-global/SafetyScoreCalculator";
import CaseStudiesSection from "@/components/safe-global/CaseStudiesSection";
import TestimonialsSection from "@/components/safe-global/TestimonialsSection";
import PartnersSection from "@/components/safe-global/PartnersSection";
import BlogSection from "@/components/safe-global/BlogSection";
import ContactSection from "@/components/safe-global/ContactSection";
import Footer from "@/components/safe-global/Footer";
import ChatBot from "@/components/safe-global/ChatBot";
import StickyCTA from "@/components/safe-global/StickyCTA";
import ScrollProgress from "@/components/safe-global/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustIndicators />
        <PartnersSection />
        <ServicesSection />
        <HowItWorks />
        <AboutSection />
        <IndustriesSection />
        <AIDemoSection />
        <SafetyScoreCalculator />
        <CaseStudiesSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />
      <StickyCTA />
    </div>
  );
}
