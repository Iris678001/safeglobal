import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/safe-global/ThemeProvider";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafeGlobal — AI-Powered Workplace Safety & Industrial Risk Management",
  description:
    "SafeGlobal delivers AI-driven safety monitoring, predictive risk analytics, compliance automation, and IoT integration for enterprises. Zero Compromise on Safety.",
  keywords: [
    "AI safety",
    "workplace safety",
    "industrial risk management",
    "predictive analytics",
    "compliance automation",
    "IoT safety",
    "SafeGlobal",
  ],
  authors: [{ name: "SafeGlobal" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "SafeGlobal — AI-Powered Safety. Zero Compromise.",
    description:
      "Enterprise AI safety monitoring, predictive risk analytics, and compliance automation solutions.",
    siteName: "SafeGlobal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeGlobal — AI-Powered Safety. Zero Compromise.",
    description:
      "Enterprise AI safety monitoring, predictive risk analytics, and compliance automation solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interSans.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
