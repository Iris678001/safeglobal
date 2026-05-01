"use client";

import Header from "@/components/safe-global/Header";
import HeroSection from "@/components/safe-global/HeroSection";
import LiveMetricsBanner from "@/components/safe-global/LiveMetricsBanner";
import TrustIndicators from "@/components/safe-global/TrustIndicators";
import PartnersSection from "@/components/safe-global/PartnersSection";
import ServicesSection from "@/components/safe-global/ServicesSection";
import HowItWorks from "@/components/safe-global/HowItWorks";
import AboutSection from "@/components/safe-global/AboutSection";
import TeamSection from "@/components/safe-global/TeamSection";
import IndustriesSection from "@/components/safe-global/IndustriesSection";
import SecurityCompliance from "@/components/safe-global/SecurityCompliance";
import AIDemoSection from "@/components/safe-global/AIDemoSection";
import SafetyScoreCalculator from "@/components/safe-global/SafetyScoreCalculator";
import CaseStudiesSection from "@/components/safe-global/CaseStudiesSection";
import TestimonialsSection from "@/components/safe-global/TestimonialsSection";
import PricingSection from "@/components/safe-global/PricingSection";
import FAQSection from "@/components/safe-global/FAQSection";
import BlogSection from "@/components/safe-global/BlogSection";
import ResourceLibrary from "@/components/safe-global/ResourceLibrary";
import ContactSection from "@/components/safe-global/ContactSection";
import Footer from "@/components/safe-global/Footer";
import ChatBot from "@/components/safe-global/ChatBot";
import StickyCTA from "@/components/safe-global/StickyCTA";
import ScrollProgress from "@/components/safe-global/ScrollProgress";
import CookieConsent from "@/components/safe-global/CookieConsent";
import AnimatedStatsSection from "@/components/safe-global/AnimatedStatsSection";
import SafetyNewsTicker from "@/components/safe-global/SafetyNewsTicker";
import BackToTop from "@/components/safe-global/BackToTop";
import ParallaxSection from "@/components/safe-global/ParallaxSection";
import AwardsSection from "@/components/safe-global/AwardsSection";
import GlobalImpact from "@/components/safe-global/GlobalImpact";
import EventCountdown from "@/components/safe-global/EventCountdown";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <LiveMetricsBanner />
        <TrustIndicators />
        <PartnersSection />
        <GlobalImpact />
        <ServicesSection />
        <HowItWorks />
        <ParallaxSection speed={0.08}>
          <AboutSection />
        </ParallaxSection>
        <ParallaxSection speed={0.08}>
          <TeamSection />
        </ParallaxSection>
        <ParallaxSection speed={0.08}>
          <IndustriesSection />
        </ParallaxSection>
        <AwardsSection />
        <SecurityCompliance />
        <AIDemoSection />
        <AnimatedStatsSection />
        <SafetyNewsTicker />
        <SafetyScoreCalculator />
        <CaseStudiesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <EventCountdown />
        <BlogSection />
        <ResourceLibrary />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />
      <StickyCTA />
      <CookieConsent />
      <BackToTop />
    </div>
  );
}
