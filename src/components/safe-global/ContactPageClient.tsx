"use client";

import dynamic from "next/dynamic";

const ContactSection = dynamic(
  () => import("@/components/safe-global/ContactSection"),
  { ssr: true }
);

export default function ContactPageClient() {
  return <ContactSection />;
}
