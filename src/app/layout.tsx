import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
        className={`${interSans.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground relative`}
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
        <Script id="cursor-glow" strategy="afterInteractive">
          {`(function(){if(window.innerWidth<=768)return;var g=document.createElement('div');g.style.cssText='position:fixed;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(16,185,129,0.04) 0%,transparent 70%);pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:left 0.3s ease,top 0.3s ease;left:-500px;top:-500px;';document.body.appendChild(g);document.addEventListener('mousemove',function(e){g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';});})();`}
        </Script>
      </body>
    </html>
  );
}
