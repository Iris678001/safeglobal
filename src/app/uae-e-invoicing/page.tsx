"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  CalendarClock,
  DatabaseZap,
  Eraser,
  Handshake,
  Network,
  TestTube2,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Building2,
  Cpu,
  LineChart
} from 'lucide-react';
import Link from 'next/link';

export default function UAEInvoicingReadinessPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const steps = [
    {
      id: 1,
      title: "Confirm your scope",
      description: "Start by identifying whether your business transactions are in scope. B2B, B2G, G2B, and G2G transactions are covered, while B2C transactions are currently outside the system until a future decision.",
      icon: <ShieldCheck className="w-8 h-8 text-sky-500 relative z-10" />,
      bgIcon: <Building2 className="w-24 h-24 text-sky-500/10 absolute -right-4 -bottom-4 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
    },
    {
      id: 2,
      title: "Check your deadline",
      description: "Businesses with revenue of AED 50 million or more must appoint an Accredited Service Provider (ASP) by 31 July 2026 and implement by 1 January 2027. Businesses below AED 50 million must appoint an ASP by 31 March 2027 and implement by 1 July 2027. Government entities must implement by 1 October 2027.",
      icon: <CalendarClock className="w-8 h-8 text-sky-500 relative z-10" />,
      bgIcon: <CalendarClock className="w-24 h-24 text-sky-500/10 absolute -right-4 -bottom-4 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
    },
    {
      id: 3,
      title: "Review ERP and accounting systems",
      description: "Check whether your systems can generate all required invoice data. This includes invoice details, buyer and seller data, tax fields, document totals, and line-item information.",
      icon: <DatabaseZap className="w-8 h-8 text-sky-500 relative z-10" />,
      bgIcon: <Cpu className="w-24 h-24 text-sky-500/10 absolute -right-4 -bottom-4 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
    },
    {
      id: 4,
      title: "Clean master data",
      description: "Customer and supplier records must be accurate. Missing TRNs, trade license details, addresses, country codes, tax categories, or payment terms can cause invoice validation problems.",
      icon: <Eraser className="w-8 h-8 text-sky-500 relative z-10" />,
      bgIcon: <Eraser className="w-24 h-24 text-sky-500/10 absolute -right-4 -bottom-4 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
    },
    {
      id: 5,
      title: "Select and onboard with an ASP",
      description: "Review the MoF’s pre-approved service provider list and assess providers based on experience, integration capability, support, security, pricing, and scalability.",
      icon: <Handshake className="w-8 h-8 text-sky-500 relative z-10" />,
      bgIcon: <Handshake className="w-24 h-24 text-sky-500/10 absolute -right-4 -bottom-4 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
    },
    {
      id: 6,
      title: "Build integrations",
      description: "ERP, accounting, procurement, AP, and AR systems should connect with ASP workflows. Middleware may be required where multiple systems are involved.",
      icon: <Network className="w-8 h-8 text-sky-500 relative z-10" />,
      bgIcon: <Network className="w-24 h-24 text-sky-500/10 absolute -right-4 -bottom-4 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
    },
    {
      id: 7,
      title: "Test before go-live",
      description: "Test different invoice scenarios, credit notes, error cases, buyer responses, and reporting confirmations.",
      icon: <TestTube2 className="w-8 h-8 text-sky-500 relative z-10" />,
      bgIcon: <TestTube2 className="w-24 h-24 text-sky-500/10 absolute -right-4 -bottom-4 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
    },
    {
      id: 8,
      title: "Train users and define governance",
      description: "Finance and IT teams should know how to handle rejected invoices, system failures, ASP issues, and data updates.",
      icon: <GraduationCap className="w-8 h-8 text-sky-500 relative z-10" />,
      bgIcon: <GraduationCap className="w-24 h-24 text-sky-500/10 absolute -right-4 -bottom-4 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-sky-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-900/40 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-sky-500/10 rounded-full blur-[100px] mix-blend-screen animate-float" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQsIDE2NSwgMjMzLCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-8 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-medium text-sky-300 tracking-wide uppercase">MoF Compliance Guide</span>
          </motion.div>

          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            UAE E-Invoicing
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500">
              Readiness Checklist
            </span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-xl text-zinc-400 mb-6 font-light">
            For Finance, Tax and IT Teams
          </motion.p>
          
          <motion.div variants={fadeIn} className="relative p-[1px] rounded-2xl bg-gradient-to-b from-sky-500/30 to-transparent max-w-3xl mx-auto mt-12">
            <div className="bg-zinc-950/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl text-left border border-zinc-800/50">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <LineChart className="w-6 h-6 text-sky-400" />
                Why readiness matters
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                UAE e-invoicing requires more than appointing a provider. Businesses must prepare systems, data, people, workflows, and controls. A readiness checklist helps finance, tax, and IT teams work together before mandatory deadlines arrive.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                The MoF guidelines include a readiness checklist covering ERP or accounting application changes, integration with ASP systems, testing, governance, and go-live readiness.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* 8 Steps Grid */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-sky-500/30" />
            <h2 className="text-3xl font-bold text-white tracking-tight">The 8 Core Steps</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-sky-500/30" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step) => (
              <motion.div key={step.id} variants={fadeIn} className="group relative h-full">
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-sky-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative h-full flex flex-col bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-sky-500/30 rounded-3xl p-8 overflow-hidden transition-colors duration-500">
                  {step.bgIcon}
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500/20 to-sky-500/5 flex items-center justify-center border border-sky-500/20 shadow-[inset_0_0_20px_rgba(14,165,233,0.1)]">
                      {step.icon}
                    </div>
                    <span className="text-6xl font-black text-white/5 group-hover:text-sky-500/10 transition-colors duration-500 select-none">
                      {step.id}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                    {step.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed relative z-10 flex-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-sky-500/30 bg-zinc-900/80"
        >
          {/* CTA Background Effects */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900/90 to-sky-900/40" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-[100px]" />

          <div className="relative z-10 px-8 py-16 md:py-24 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                How Safeglobal can help
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light mb-8">
                Safeglobal can lead e-invoicing readiness assessments, integration planning, data mapping, ASP connectivity, workflow automation, and dashboard development.
              </p>
              
              <Link href="/contact">
                <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-sky-500 text-white rounded-full font-semibold text-lg transition-all hover:bg-sky-400 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] overflow-hidden">
                  <span className="relative z-10">Get Expert Assistance</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </Link>
            </div>
            
            <div className="hidden lg:block relative w-64 h-64">
              {/* Abstract decorative element representing integration/connectivity */}
              <div className="absolute inset-0 border border-sky-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-dashed border-sky-400/40 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-sky-500/20 rounded-full blur-xl animate-pulse" />
                <Network className="w-16 h-16 text-sky-400 absolute" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
