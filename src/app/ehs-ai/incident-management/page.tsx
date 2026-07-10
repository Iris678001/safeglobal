"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ShieldAlert,
  Smartphone,
  FileText,
  Search,
  CheckCircle2,
  BarChart3,
  Sparkles,
  Zap,
  Globe
} from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-6 h-6 text-safeglobal" />,
    title: "Mobile Incident Reporting",
    description: "Empower frontline workers to report hazards, near-misses, and incidents in real-time from any mobile device, even offline. Instantly capture photos, location data, and witness statements.",
  },
  {
    icon: <Search className="w-6 h-6 text-safeglobal" />,
    title: "AI-Powered Root Cause Analysis (RCA)",
    description: "Go beyond surface-level symptoms. Our advanced AI algorithms help identify underlying root causes using methods like 5 Whys and Fishbone diagrams to prevent recurrence permanently.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-safeglobal" />,
    title: "Corrective & Preventive Actions (CAPA)",
    description: "Automate the assignment, tracking, and closure of CAPAs. Ensure accountability with automated reminders, escalation workflows, and real-time status tracking.",
  },
  {
    icon: <FileText className="w-6 h-6 text-safeglobal" />,
    title: "Automated Regulatory Reporting",
    description: "Instantly generate compliant reports for OSHA (300, 300A, 301), RIDDOR, and other global regulatory bodies with a single click. Say goodbye to manual paperwork and compliance risks.",
  },
];

export default function IncidentManagementPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-24">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-sky-500/10 via-background to-background pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-24">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="border-sky-500/30 text-sky-600 bg-sky-500/10 px-4 py-1.5 mb-6 text-sm">
              <ShieldAlert className="w-4 h-4 mr-2" />
              Incident Management
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Turn Incidents into <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-700">Actionable Intelligence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            Streamline your entire incident lifecycle. From initial mobile reporting to AI-driven root cause analysis, CAPA tracking, and automated OSHA/RIDDOR compliance—Safeglobal handles it all seamlessly.
          </motion.p>
        </div>

        {/* Product Showcase - Dashboard UI */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl overflow-hidden mb-32 group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-sky-500" />
                  RCA Analytics Dashboard
                </h3>
                <p className="text-muted-foreground mt-1">AI-driven insights into incident trends and root causes.</p>
              </div>
            </div>
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border/50 bg-muted">
              <Image 
                src="/images/rca-analytics-dashboard.png"
                alt="RCA Analytics Dashboard Interface"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Incident Lifecycle</h2>
            <p className="text-muted-foreground text-lg">Everything you need to report, investigate, resolve, and prevent workplace incidents in one unified platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Showcase - Mobile UI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl p-6 sm:p-10 flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-sky-500/10 rounded-3xl" />
            <div className="relative w-full max-w-[320px] aspect-[9/19] rounded-[2.5rem] overflow-hidden border-[8px] border-black/90 shadow-2xl bg-black">
              <Image 
                src="/images/incident-reporting-mobile.png"
                alt="Mobile Incident Reporting Interface"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <Badge variant="outline" className="border-sky-500/30 text-sky-600 bg-sky-500/10 px-4 py-1.5 mb-6 text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Mobile First
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Reporting from the Frontlines, <br/> <span className="text-sky-600">Instantly.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Eliminate delays in incident reporting. Our mobile-first application allows workers to log incidents, upload photos, and pinpoint locations directly from the field—even in offline environments. Data syncs automatically once connectivity is restored, ensuring no critical information is ever lost.
            </p>
            <ul className="space-y-4">
              {[
                "Intuitive, friction-free reporting flow",
                "Offline mode with auto-sync functionality",
                "Instant photo and video evidence capture",
                "Geo-tagging and location intelligence"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Global Compliance Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-sky-500/5 to-transparent p-10 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          
          <Globe className="w-16 h-16 text-sky-500 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Effortless Regulatory Compliance</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Stay ahead of regulatory requirements with automated report generation. Safeglobal instantly populates logs for OSHA 300, 300A, and 301, as well as RIDDOR and other international standards.
          </p>

        </motion.div>

      </div>
    </div>
  );
}
