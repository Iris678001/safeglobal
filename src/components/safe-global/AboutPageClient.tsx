"use client";

import dynamic from "next/dynamic";

const AboutSection = dynamic(
  () => import("@/components/safe-global/AboutSection"),
  { ssr: true }
);

const TeamSection = dynamic(
  () => import("@/components/safe-global/TeamSection"),
  { ssr: true }
);

export default function AboutPageClient() {
  return (
    <>
      <AboutSection />
      <TeamSection />
    </>
  );
}
