"use client";

import dynamic from "next/dynamic";

const AboutSection = dynamic(
  () => import("@/components/safe-global/AboutSection"),
  { ssr: true }
);

export default function AboutPageClient() {
  return (
    <>
      <AboutSection />
    </>
  );
}
