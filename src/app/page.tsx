"use client";

import dynamic from "next/dynamic";
import ScrollProgress from "@/components/safe-global/ScrollProgress";
import Header from "@/components/safe-global/Header";
import HeroSection from "@/components/safe-global/HeroSection";
import LiveMetricsBanner from "@/components/safe-global/LiveMetricsBanner";
import TrustIndicators from "@/components/safe-global/TrustIndicators";
import PartnersSection from "@/components/safe-global/PartnersSection";

// Reusable skeleton placeholder for dynamically loaded sections
function SectionSkeleton() {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse rounded-2xl bg-muted/50 h-96 p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-3 w-20 rounded-full bg-muted-foreground/15" />
            <div className="h-6 w-48 rounded-full bg-muted-foreground/10" />
          </div>
          <div className="space-y-3">
            <div className="h-4 w-3/4 rounded-full bg-muted-foreground/10" />
            <div className="h-4 w-1/2 rounded-full bg-muted-foreground/8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            <div className="h-40 rounded-xl bg-muted-foreground/8" />
            <div className="h-40 rounded-xl bg-muted-foreground/8" />
            <div className="h-40 rounded-xl bg-muted-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Dynamic imports for below-fold sections (SSR enabled for SEO)
const GlobalImpact = dynamic(
  () => import("@/components/safe-global/GlobalImpact"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const ServicesSection = dynamic(
  () => import("@/components/safe-global/ServicesSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const HowItWorks = dynamic(
  () => import("@/components/safe-global/HowItWorks"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const ParallaxSection = dynamic(
  () => import("@/components/safe-global/ParallaxSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const AboutSection = dynamic(
  () => import("@/components/safe-global/AboutSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const TeamSection = dynamic(
  () => import("@/components/safe-global/TeamSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const IndustriesSection = dynamic(
  () => import("@/components/safe-global/IndustriesSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const ComparisonSection = dynamic(
  () => import("@/components/safe-global/ComparisonSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const AwardsSection = dynamic(
  () => import("@/components/safe-global/AwardsSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const SecurityCompliance = dynamic(
  () => import("@/components/safe-global/SecurityCompliance"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const EmergencyResponseMap = dynamic(
  () => import("@/components/safe-global/EmergencyResponseMap"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const AIDemoSection = dynamic(
  () => import("@/components/safe-global/AIDemoSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const VideoShowcase = dynamic(
  () => import("@/components/safe-global/VideoShowcase"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const SafetyTimeline = dynamic(
  () => import("@/components/safe-global/SafetyTimeline"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const AnimatedStatsSection = dynamic(
  () => import("@/components/safe-global/AnimatedStatsSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const SafetyNewsTicker = dynamic(
  () => import("@/components/safe-global/SafetyNewsTicker"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const SafetyScoreCalculator = dynamic(
  () => import("@/components/safe-global/SafetyScoreCalculator"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const CaseStudiesSection = dynamic(
  () => import("@/components/safe-global/CaseStudiesSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const TestimonialsSection = dynamic(
  () => import("@/components/safe-global/TestimonialsSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const TestimonialSlider = dynamic(
  () => import("@/components/safe-global/TestimonialSlider"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const PricingSection = dynamic(
  () => import("@/components/safe-global/PricingSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const SafetyROIWidget = dynamic(
  () => import("@/components/safe-global/SafetyROIWidget"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const FAQSection = dynamic(
  () => import("@/components/safe-global/FAQSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const SafetyChecklist = dynamic(
  () => import("@/components/safe-global/SafetyChecklist"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const SafetyCultureQuiz = dynamic(
  () => import("@/components/safe-global/SafetyCultureQuiz"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const EventCountdown = dynamic(
  () => import("@/components/safe-global/EventCountdown"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const BlogSection = dynamic(
  () => import("@/components/safe-global/BlogSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const ResourceLibrary = dynamic(
  () => import("@/components/safe-global/ResourceLibrary"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const ContactSection = dynamic(
  () => import("@/components/safe-global/ContactSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const Footer = dynamic(
  () => import("@/components/safe-global/Footer"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const ChatBot = dynamic(
  () => import("@/components/safe-global/ChatBot"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const StickyCTA = dynamic(
  () => import("@/components/safe-global/StickyCTA"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const CookieConsent = dynamic(
  () => import("@/components/safe-global/CookieConsent"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const BackToTop = dynamic(
  () => import("@/components/safe-global/BackToTop"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const NotificationToast = dynamic(
  () => import("@/components/safe-global/NotificationToast"),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollProgress />
      <Header />
      <main className="flex-1 relative">
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
        <ComparisonSection />
        <AwardsSection />
        <SecurityCompliance />
        <EmergencyResponseMap />
        <AIDemoSection />
        <VideoShowcase />
        <SafetyTimeline />
        <AnimatedStatsSection />
        <SafetyNewsTicker />
        <SafetyScoreCalculator />
        <CaseStudiesSection />
        <TestimonialsSection />
        <TestimonialSlider />
        <PricingSection />
        <SafetyROIWidget />
        <FAQSection />
        <SafetyChecklist />
        <SafetyCultureQuiz />
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
      <NotificationToast />
    </div>
  );
}
