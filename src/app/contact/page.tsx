import type { Metadata } from "next";
import Breadcrumb from "@/components/safe-global/Breadcrumb";
import ContactPageClient from "@/components/safe-global/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact SafeGlobal | Get a Free Safety Assessment & Demo",
  description:
    "Contact SafeGlobal for a personalized demo, free safety audit, or consultation with our enterprise safety experts. Average response time under 2 hours.",
  keywords: [
    "contact SafeGlobal",
    "safety demo request",
    "free safety audit",
    "enterprise safety consultation",
    "workplace safety assessment",
  ],
  openGraph: {
    title: "Contact SafeGlobal | Get a Free Safety Assessment & Demo",
    description:
      "Get a personalized demo, free safety audit, or consultation with our enterprise safety experts. Response in under 2 hours.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Header */}
      <section className="relative pt-8 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} />
        </div>
      </section>

      {/* Client Component: ContactSection */}
      <ContactPageClient />
    </div>
  );
}
