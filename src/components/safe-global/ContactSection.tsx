"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  Building2,
  Shield,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (888) SAFE-AI1",
    subtext: "Mon-Fri 8am-8pm EST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "enterprise@safeglobal.ai",
    subtext: "We respond within 2 hours",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "San Francisco, CA",
    subtext: "450 Mission Street, Suite 2800",
  },
  {
    icon: Clock,
    label: "Support",
    value: "24/7 AI Monitoring",
    subtext: "Always-on emergency support",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    employees: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState("success");
        setTimeout(() => {
          setFormState("idle");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            industry: "",
            employees: "",
            message: "",
          });
        }, 3000);
      } else {
        setFormState("idle");
      }
    } catch {
      setFormState("idle");
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="border-safeglobal/30 text-safeglobal bg-safeglobal/10 px-4 py-1.5 text-xs font-medium tracking-wide mb-4"
          >
            GET STARTED
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Ready to Transform Your{" "}
            <span className="text-gradient">Safety Culture?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a personalized demo, free safety audit, or consultation with our
            enterprise safety experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Free Audit Card */}
            <div className="p-6 rounded-2xl border border-safeglobal/30 bg-gradient-to-br from-safeglobal/10 to-transparent glow-emerald">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-safeglobal/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-safeglobal" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Safety Audit</h3>
                  <p className="text-xs text-muted-foreground">
                    No obligation, real insights
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Comprehensive risk assessment",
                  "Compliance gap analysis",
                  "ROI projection report",
                  "Custom recommendations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-safeglobal flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/30 hover:border-safeglobal/20 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-safeglobal/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-4 h-4 text-safeglobal" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{info.value}</div>
                    <div className="text-xs text-muted-foreground">
                      {info.subtext}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Map Placeholder */}
            <div className="relative h-48 rounded-2xl border border-border bg-card/30 overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-8 h-8 text-safeglobal/40 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    San Francisco HQ
                  </p>
                  <p className="text-xs text-muted-foreground">
                    450 Mission St, Suite 2800
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="p-6 lg:p-8 rounded-2xl border border-border bg-card/50">
              {formState === "success" ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-safeglobal/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-safeglobal" />
                  </div>
                  <h3 className="text-2xl font-bold">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Our team will reach out within 2 hours to schedule your
                    personalized demo and safety audit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="bg-background/50 border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input
                        required
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="bg-background/50 border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Work Email
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background/50 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input
                      required
                      placeholder="Acme Corporation"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="bg-background/50 border-border"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Industry</label>
                      <Select
                        value={formData.industry}
                        onValueChange={(val) =>
                          setFormData({ ...formData, industry: val })
                        }
                      >
                        <SelectTrigger className="bg-background/50 border-border">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manufacturing">
                            Manufacturing
                          </SelectItem>
                          <SelectItem value="construction">
                            Construction
                          </SelectItem>
                          <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                          <SelectItem value="warehousing">
                            Warehousing
                          </SelectItem>
                          <SelectItem value="healthcare">
                            Healthcare
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Employee Count
                      </label>
                      <Select
                        value={formData.employees}
                        onValueChange={(val) =>
                          setFormData({ ...formData, employees: val })
                        }
                      >
                        <SelectTrigger className="bg-background/50 border-border">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50-200">50 - 200</SelectItem>
                          <SelectItem value="200-1000">200 - 1,000</SelectItem>
                          <SelectItem value="1000-5000">
                            1,000 - 5,000
                          </SelectItem>
                          <SelectItem value="5000+">5,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      How can we help?
                    </label>
                    <Textarea
                      placeholder="Tell us about your safety challenges and goals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background/50 border-border min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={formState === "submitting"}
                    className="w-full bg-safeglobal hover:bg-safeglobal-dark text-white shadow-xl shadow-safeglobal/25 hover:shadow-safeglobal/40 transition-all gap-2 h-13"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Demo & Free Audit
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our Privacy Policy. We&apos;ll
                    never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
