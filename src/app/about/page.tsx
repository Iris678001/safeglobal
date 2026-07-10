import type { Metadata } from "next";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import AboutPageClient from "@/components/safe-global/AboutPageClient";

export const metadata: Metadata = {
  title: "About Safeglobal | AI-Powered Workplace Safety Vision & Team",
  description:
    "Learn about Safeglobal's mission to eliminate preventable workplace injuries worldwide. Meet the team of safety scientists, AI engineers, and industry veterans building the future of industrial risk management.",
  keywords: [
    "about Safeglobal",
    "workplace safety company",
    "AI safety company",
    "safety technology team",
    "industrial risk management",
  ],
  openGraph: {
    title: "About Safeglobal | AI-Powered Workplace Safety Vision & Team",
    description:
      "Founded on the belief that every worker deserves to go home safely. Meet the team redefining industrial safety with AI.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Header */}
      <section className="relative pt-8 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About" }]} />
        </div>
      </section>

      {/* Client Components: AboutSection + TeamSection */}
      <AboutPageClient />
    </div>
  );
}
