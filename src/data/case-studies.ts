export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
  testimonial: { quote: string; author: string; role: string };
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "globalmfg-corp-manufacturing",
    title: "GlobalMfg Corp: 79% Incident Reduction Across 12 Facilities",
    client: "GlobalMfg Corp",
    industry: "Manufacturing",
    challenge:
      "GlobalMfg Corp was struggling with 680+ recordable incidents annually across 12 facilities worldwide. Their aging safety infrastructure relied on manual inspections and paper-based compliance tracking, leading to delayed hazard identification, inconsistent safety protocols, and rising insurance costs. With an expanding workforce and increasingly complex operations, the company needed a scalable, technology-driven approach to safety management.",
    solution:
      "SafeGlobal deployed an integrated AI safety platform across all 12 facilities, combining AI Safety Monitoring with Predictive Risk Analytics and IoT sensor integration. Computer vision cameras were installed at critical hazard points for real-time PPE compliance monitoring and fall detection. IoT sensors were connected to a unified monitoring hub covering gas detection, equipment vibration, and environmental conditions. Automated compliance reporting replaced manual processes, generating auditor-ready documentation with a single click.",
    results: [
      { metric: "Incident Reduction", value: "79%", description: "From 680 to 142 recordable incidents per year" },
      { metric: "Compliance Rate", value: "98%", description: "Up from 67% — near-perfect audit scores" },
      { metric: "Annual Savings", value: "$14.2M", description: "340% ROI within 18 months of deployment" },
    ],
    testimonial: {
      quote:
        "SafeGlobal transformed our safety culture. What used to take weeks of manual audits now happens in real-time with AI precision. Our workers go home safe every day, and our bottom line has never been stronger.",
      author: "James Patterson",
      role: "VP of Operations, GlobalMfg Corp",
    },
    image: "from-safeglobal/20 via-emerald-500/10 to-safeglobal/5",
  },
  {
    slug: "petrochem-industries-oil-gas",
    title: "PetroChem Industries: Eliminating Confined Space Near-Misses",
    client: "PetroChem Industries",
    industry: "Oil & Gas",
    challenge:
      "PetroChem Industries operated high-risk confined space activities across 8 remote processing facilities with legacy gas detection systems that failed to provide real-time alerts. Near-miss events were occurring at a rate of 45 per quarter, and the existing systems had a 12-minute average alert delay — an eternity in toxic gas environments. Manual permit-to-work processes were error-prone, and inconsistent emergency protocols across sites created unacceptable risk exposure.",
    solution:
      "SafeGlobal implemented a comprehensive IoT-enabled gas detection network with AI-powered predictive leak detection. Over 2,000 connected gas sensors were deployed across all facilities, feeding data into the Predictive Risk Analytics engine that identifies potential leaks 2–4 hours before they reach dangerous levels. Automated emergency response protocols were configured for 25 incident scenarios, with real-time evacuation routing and responder coordination. The Access Control AI module enforced permit-to-work compliance, ensuring only authorized and properly equipped personnel entered confined spaces.",
    results: [
      { metric: "Near-Miss Reduction", value: "93%", description: "From 45 to 3 near-miss events per quarter" },
      { metric: "Compliance Rate", value: "99%", description: "Up from 78% across all 8 facilities" },
      { metric: "Annual Savings", value: "$8.7M", description: "520% ROI with zero confined space incidents" },
    ],
    testimonial: {
      quote:
        "The ROI was undeniable, but the real value is knowing our people go home safe every single day. SafeGlobal didn't just give us technology — they gave us peace of mind.",
      author: "Dr. Amara Osei",
      role: "HSE Director, PetroChem Industries",
    },
    image: "from-cyan-500/20 via-teal-500/10 to-cyan-500/5",
  },
  {
    slug: "buildright-construction",
    title: "BuildRight Construction: From Industry Average to Best-in-Class Safety",
    client: "BuildRight Construction",
    industry: "Construction",
    challenge:
      "BuildRight Construction managed 40+ active construction sites with a safety record that hovered around industry average — 234 OSHA recordable incidents per year. Fall-from-height and struck-by events were the most common incident types, driven by inconsistent safety oversight across sites, limited visibility into real-time conditions, and a heavy reliance on manual safety briefings that failed to account for site-specific hazards. Insurance premiums were rising 15% year over year.",
    solution:
      "SafeGlobal rolled out a multi-layered safety intelligence platform across all active sites. Computer vision fall detection systems were installed on tower cranes and scaffolding perimeters. Proximity warning systems using wearable IoT devices alerted workers when they entered hazard zones near heavy equipment. AI-powered daily safety briefings were customized for each site based on real-time risk assessments, weather conditions, and planned activities. The Safety Dashboard provided centralized visibility across all sites for the first time.",
    results: [
      { metric: "Incident Reduction", value: "88%", description: "From 234 to 28 OSHA recordables per year" },
      { metric: "Compliance Rate", value: "96%", description: "Up from 54% — best-in-class for construction" },
      { metric: "Annual Savings", value: "$6.3M", description: "280% ROI with 15% lower insurance premiums" },
    ],
    testimonial: {
      quote:
        "We went from the industry average to best-in-class safety in under 18 months. The AI catches what humans miss, and our workers have never been more confident in their safety.",
      author: "Michael Torres",
      role: "Chief Safety Officer, BuildRight Construction",
    },
    image: "from-amber-500/20 via-orange-500/10 to-amber-500/5",
  },
  {
    slug: "pharma-global-life-sciences",
    title: "PharmaGlobal: Achieving Zero Contamination Events in Cleanroom Operations",
    client: "PharmaGlobal",
    industry: "Life Sciences",
    challenge:
      "PharmaGlobal operated 6 pharmaceutical manufacturing facilities with stringent cleanroom requirements. Despite rigorous protocols, contamination events were occurring 12 times per year, resulting in batch losses exceeding $4M annually. Manual environmental monitoring created blind spots between readings, and human error in gowning procedures was the leading contamination source. Regulatory scrutiny was intensifying, with two FDA warning letters in the previous 18 months threatening facility operations.",
    solution:
      "SafeGlobal deployed a specialized cleanroom monitoring suite combining environmental IoT sensors with computer vision gowning verification. Real-time particulate, temperature, humidity, and pressure differential sensors provided continuous monitoring with sub-second alerting — replacing 4-hour manual reading intervals. Computer vision cameras at gowning entry points verified proper PPE donning with 99.9% accuracy before allowing cleanroom access. The Compliance Automation module automated FDA documentation requirements, generating real-time environmental monitoring reports and deviation investigations.",
    results: [
      { metric: "Contamination Events", value: "Zero", description: "From 12 events/year to zero in 12 months" },
      { metric: "Audit Readiness", value: "100%", description: "Full FDA compliance — warning letters resolved" },
      { metric: "Batch Savings", value: "$4.1M", description: "Eliminated contamination-related batch losses" },
    ],
    testimonial: {
      quote:
        "Zero contamination events was a goal we'd been chasing for years. SafeGlobal didn't just help us achieve it — they made it the new standard. Our regulators and our patients are both better served.",
      author: "Dr. Katherine Walsh",
      role: "VP Quality Assurance, PharmaGlobal",
    },
    image: "from-violet-500/20 via-purple-500/10 to-violet-500/5",
  },
];

export const caseStudySlugs = caseStudies.map((study) => study.slug);
