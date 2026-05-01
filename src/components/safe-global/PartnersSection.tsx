"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Cpu, Wifi, Monitor, Server } from "lucide-react";

const partners = [
  { name: "SAP", category: "ERP", icon: Database },
  { name: "AWS", category: "Cloud", icon: Cloud },
  { name: "Azure", category: "Cloud", icon: Cloud },
  { name: "Siemens", category: "IoT", icon: Cpu },
  { name: "Honeywell", category: "IoT", icon: Wifi },
  { name: "Oracle", category: "ERP", icon: Database },
  { name: "ServiceNow", category: "ITSM", icon: Monitor },
  { name: "Snowflake", category: "Data", icon: Server },
];

export default function PartnersSection() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            INTEGRATIONS
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Seamless <span className="text-gradient">Integration</span> with
            Your Stack
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Native connectors to 50+ enterprise platforms. Zero disruption to
            existing workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border bg-card/30 hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all duration-300 cursor-default"
            >
              <partner.icon className="w-4 h-4 text-muted-foreground group-hover:text-safeglobal transition-colors" />
              <div>
                <span className="text-sm font-semibold group-hover:text-safeglobal transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-muted-foreground ml-2">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
          <div className="px-5 py-3 rounded-xl border border-dashed border-border text-sm text-muted-foreground">
            +42 more
          </div>
        </motion.div>
      </div>
    </section>
  );
}
