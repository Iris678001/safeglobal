import {
  Factory,
  HardHat,
  Flame,
  HeartPulse,
  Warehouse,
  Mountain,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export interface IndustryPageData {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  heroDescription: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  stats: { label: string; value: string; description: string }[];
  caseStudy: { title: string; company: string; result: string };
  cta: { title: string; description: string };
}

export const industriesData: Record<string, IndustryPageData> = {
  manufacturing: {
    slug: "manufacturing",
    title: "Manufacturing",
    subtitle: "Smart Factory Safety & Production Line Protection",
    icon: Factory,
    color: "safeglobal",
    heroDescription:
      "Comprehensive safety solutions for manufacturing environments, from assembly lines to chemical processing plants. Our AI monitors equipment, environment, and worker behavior in real-time to prevent incidents before they occur.",
    challenges: [
      { title: "Machine-Related Injuries", description: "Unguarded machinery and automated equipment cause 18% of all manufacturing injuries, from crush wounds to amputations." },
      { title: "Chemical Exposure", description: "Workers face daily exposure to hazardous chemicals, solvents, and fumes leading to chronic respiratory and skin conditions." },
      { title: "Ergonomic Hazards", description: "Repetitive motions, heavy lifting, and awkward postures account for 40% of manufacturing workplace injuries." },
      { title: "Noise-Induced Hearing Loss", description: "Prolonged exposure to industrial noise above 85 dB permanently damages hearing in 25% of workers." },
    ],
    solutions: [
      { title: "Real-Time Machine Guarding", description: "Computer vision monitors machine perimeters and instantly halts equipment when workers enter danger zones." },
      { title: "Chemical Spill Detection", description: "IoT sensor networks detect gas leaks and chemical spills within seconds, triggering automated ventilation and containment." },
      { title: "Posture Monitoring & Alerts", description: "Wearable sensors track worker posture and provide real-time haptic feedback to prevent ergonomic injuries." },
      { title: "Automated Lockout/Tagout", description: "AI-driven LOTO procedures ensure equipment is properly de-energized before maintenance, eliminating human error." },
    ],
    stats: [
      { label: "Incident Reduction", value: "68%", description: "Average decrease in workplace incidents" },
      { label: "Compliance Rate", value: "99.4%", description: "OSHA regulatory compliance achieved" },
      { label: "ROI", value: "340%", description: "Return on investment within 12 months" },
      { label: "Workers Protected", value: "150K+", description: "Across manufacturing facilities" },
    ],
    caseStudy: {
      title: "Smart Factory Safety Transformation",
      company: "Fortune 500 Automotive Manufacturer",
      result: "Achieved 73% reduction in recordable incidents and $4.2M annual savings in insurance and workers' compensation costs within 8 months of deployment.",
    },
    cta: { title: "Transform Your Factory Safety", description: "Get a customized manufacturing safety assessment and deployment plan." },
  },
  "chemical-processing": {
    slug: "chemical-processing",
    title: "Chemical Processing",
    subtitle: "Advanced Hazard Management & Regulatory Compliance",
    icon: FlaskConical,
    color: "amber",
    heroDescription:
      "State-of-the-art safety infrastructure tailored for chemical manufacturing and processing. Our AI-driven platform monitors toxic exposures, prevents material mishandling, and automates compliance reporting in real-time.",
    challenges: [
      { title: "Toxic Exposure", description: "Inhalation and skin contact with hazardous chemicals lead to severe acute and chronic health issues." },
      { title: "Material Mishandling", description: "Improper storage and transport of reactive substances can cause catastrophic fires and explosions." },
      { title: "Regulatory Complexity", description: "Maintaining up-to-date compliance with OSHA, EPA, and international chemical handling standards is error-prone." },
      { title: "Spill Containment", description: "Undetected leaks and spills cause massive environmental damage and pose immediate threats to worker safety." },
    ],
    solutions: [
      { title: "Real-Time Toxicity Monitoring", description: "Advanced IoT sensors detect airborne contaminants instantly, automatically adjusting ventilation and warning personnel." },
      { title: "Automated Inventory Tracking", description: "Computer vision verifies the safe storage and segregation of reactive materials to prevent accidental mixing." },
      { title: "Dynamic Compliance Dashboards", description: "AI continuously logs safety data and automatically generates audit-ready reports, ensuring 100% regulatory compliance." },
      { title: "Instant Spill Detection", description: "Thermal and optical sensors identify chemical leaks within seconds, automatically triggering containment protocols." },
    ],
    stats: [
      { label: "Exposure Reduction", value: "85%", description: "Decrease in hazardous exposure incidents" },
      { label: "Audit Readiness", value: "100%", description: "Automated compliance logging accuracy" },
      { label: "Spill Response", value: "<10s", description: "Time to identify and initiate containment" },
      { label: "Facilities Secured", value: "250+", description: "Global chemical processing plants" },
    ],
    caseStudy: {
      title: "Chemical Safety Overhaul",
      company: "Leading Global Chemical Producer",
      result: "Achieved an 85% drop in exposure incidents and eliminated all OSHA compliance fines within the first year of deployment.",
    },
    cta: { title: "Secure Your Chemical Operations", description: "Request a specialized chemical hazard assessment and AI integration strategy." },
  },
  construction: {
    slug: "construction",
    title: "Construction",
    subtitle: "Site-Wide Safety Monitoring for Every Project Phase",
    icon: HardHat,
    color: "amber",
    heroDescription:
      "End-to-end safety monitoring for construction sites of any scale. From high-rise builds to infrastructure projects, we prevent the most common and catastrophic incidents with AI-powered real-time surveillance and predictive analytics.",
    challenges: [
      { title: "Fall Hazards", description: "Falls from height remain the #1 cause of construction fatalities, accounting for 36% of all deaths on job sites." },
      { title: "Struck-By Incidents", description: "Moving equipment, falling objects, and swinging loads cause 15% of construction worker fatalities annually." },
      { title: "Trenching Accidents", description: "Trench collapses kill an average of 25 workers per year, with fatality rates that have increased 15% in recent years." },
      { title: "Electrical Contact", description: "Contact with power lines and live circuits causes 8% of construction fatalities, often in unpredictable scenarios." },
    ],
    solutions: [
      { title: "Height Safety Monitoring", description: "AI cameras detect unprotected edges, missing harnesses, and fall risks in real-time across multi-story projects." },
      { title: "Proximity Warning Systems", description: "Wearable beeps and zone alerts warn workers when heavy equipment enters their proximity zone." },
      { title: "Ground Stability Analysis", description: "IoT soil sensors and AI analysis predict trench collapse risk before it becomes dangerous." },
      { title: "Electrical Isolation Alerts", description: "Smart sensors detect live circuits and alert workers before they enter electrical hazard zones." },
    ],
    stats: [
      { label: "Near-Miss Prevention", value: "82%", description: "Reduction in reported near-miss events" },
      { label: "Fall Detection", value: "99.2%", description: "Accuracy in identifying fall hazards" },
      { label: "Response Time", value: "<3s", description: "From hazard detection to alert delivery" },
      { label: "Sites Monitored", value: "2K+", description: "Active construction site deployments" },
    ],
    caseStudy: {
      title: "Mega-Project Safety Overhaul",
      company: "Top 10 Global Construction Firm",
      result: "Zero fatalities over 18 months on a $2B infrastructure project, down from 3 serious incidents in the prior year. 65% reduction in OSHA citations.",
    },
    cta: { title: "Protect Your Construction Sites", description: "Get a construction site safety audit and monitoring plan." },
  },
  "oil-gas": {
    slug: "oil-gas",
    title: "Oil & Gas",
    subtitle: "Critical Safety Infrastructure for Hazardous Environments",
    icon: Flame,
    color: "rose",
    heroDescription:
      "Critical safety infrastructure for the world's most hazardous industrial environments. Our platform provides continuous monitoring of explosive atmospheres, toxic gas exposure, and high-pressure systems to prevent catastrophic incidents.",
    challenges: [
      { title: "Explosion Risks", description: "Volatile hydrocarbons create ever-present explosion hazards requiring continuous atmospheric monitoring at all facility locations." },
      { title: "Toxic Gas Leaks", description: "H2S, CO, and other toxic gases can be lethal in minutes; rapid detection and response is literally life or death." },
      { title: "Confined Space Entry", description: "Tank and vessel entry procedures are high-risk operations with 2.5x the fatality rate of general industrial work." },
      { title: "Hot Work Hazards", description: "Welding and cutting near hydrocarbon systems causes 15% of refinery incidents, often with catastrophic outcomes." },
      { title: "PPE Non-Compliance", description: "Workers operating without proper protective equipment face severe risks from chemical splashes and mechanical impacts." },
      { title: "Protocol Deviations", description: "Failure to adhere to strict operational protocols can rapidly escalate into severe incidents and emergency scenarios." },
    ],
    solutions: [
      { title: "Gas Detection Networks", description: "Dense IoT sensor grids monitor LEL, H2S, CO, and O2 levels with sub-second alert propagation across facilities." },
      { title: "Hot Work Monitoring", description: "AI validates atmospheric conditions and permit compliance before hot work begins, with continuous monitoring during operations." },
      { title: "Confined Space Tracking", description: "Real-time tracking of all personnel in confined spaces with atmospheric monitoring and automatic rescue alerts." },
      { title: "Permit-to-Work Automation", description: "Digital PTW system with AI-verified prerequisites, real-time condition checks, and automatic permit suspension on hazard detection." },
      { title: "PPE Detection", description: "Computer vision monitors PPE compliance in real-time, instantly identifying missing hard hats, FR clothing, and safety glasses." },
      { title: "Breach of Protocol", description: "Automated alert systems detect protocol deviations immediately, triggering instant interventions before accidents occur." },
    ],
    stats: [
      { label: "Compliance Improvement", value: "91%", description: "Increase in regulatory compliance scores" },
      { label: "Gas Leak Response", value: "<5s", description: "From detection to full facility alert" },
      { label: "Incident Prevention", value: "78%", description: "Reduction in reportable safety events" },
      { label: "Facilities Protected", value: "500+", description: "Refineries, rigs, and processing plants" },
    ],
    caseStudy: {
      title: "Refinery Safety Modernization",
      company: "Major International Oil Company",
      result: "Eliminated all Category 1 safety events for 24 consecutive months across 12 offshore platforms. Reduced gas leak response time from 45 minutes to under 5 seconds.",
    },
    cta: { title: "Modernize Your Facility Safety", description: "Get an oil & gas safety infrastructure assessment and deployment roadmap." },
  },
  healthcare: {
    slug: "healthcare",
    title: "Healthcare",
    subtitle: "Staff & Patient Safety Intelligence for Medical Facilities",
    icon: HeartPulse,
    color: "cyan",
    heroDescription:
      "Advanced safety and compliance solutions for healthcare facilities. Protect staff and patients with AI-powered monitoring of workplace violence, biohazards, patient handling risks, and regulatory compliance across all care settings.",
    challenges: [
      { title: "Workplace Violence", description: "Healthcare workers face the highest rate of workplace violence of any industry, with 73% reporting verbal or physical assault." },
      { title: "Sharps & Biohazards", description: "Needlestick injuries and bloodborne pathogen exposure affect 385,000 healthcare workers annually in the US alone." },
      { title: "Patient Handling Injuries", description: "Manual patient handling causes 52% of musculoskeletal injuries among nurses and nursing assistants." },
      { title: "Radiation Exposure", description: "Cumulative radiation exposure in interventional suites increases cancer risk for medical staff over their careers." },
    ],
    solutions: [
      { title: "Behavioral Threat Detection", description: "AI cameras identify escalating aggression and alert security before incidents occur, with 94% prediction accuracy." },
      { title: "Biohazard Zone Monitoring", description: "Automated tracking of contamination zones, PPE compliance, and proper biohazard disposal procedures." },
      { title: "Safe Lift Compliance AI", description: "Computer vision ensures proper lift equipment usage and body mechanics during patient transfers." },
      { title: "Radiation Boundary Alerts", description: "Real-time dosimetry tracking with automated alerts when staff approach cumulative exposure thresholds." },
      { title: "Conversational AI for Appointment Booking", description: "AI-powered voice and text assistants that handle patient scheduling, reduce wait times, and integrate seamlessly with existing EMR systems." },
    ],
    stats: [
      { label: "Claim Reduction", value: "56%", description: "Decrease in workers' compensation claims" },
      { label: "Violence Prevention", value: "73%", description: "Reduction in workplace violence incidents" },
      { label: "Compliance Score", value: "98%", description: "Joint Commission compliance rate" },
      { label: "Hospitals Served", value: "200+", description: "Healthcare facilities worldwide" },
    ],
    caseStudy: {
      title: "Hospital Safety Intelligence Platform",
      company: "Top 5 US Hospital Network",
      result: "56% reduction in staff injury claims and 73% decrease in workplace violence incidents across 14 hospitals in the first year. Saved $6.8M in workers' compensation and agency staffing costs.",
    },
    cta: { title: "Protect Your Healthcare Staff", description: "Get a healthcare facility safety assessment and action plan." },
  },
  "logistics-warehousing": {
    slug: "logistics-warehousing",
    title: "Logistics & Warehousing",
    subtitle: "Intelligent Safety for High-Traffic Distribution Operations",
    icon: Warehouse,
    color: "violet",
    heroDescription:
      "Intelligent safety systems for logistics and warehousing operations. Reduce accidents, improve compliance, and protect your workforce in high-traffic distribution environments where forklifts, pedestrians, and inventory create complex risk scenarios.",
    challenges: [
      { title: "Forklift Accidents", description: "Forklift incidents cause 85 fatalities and 34,900 serious injuries annually, with pedestrian collisions being the most severe." },
      { title: "Manual Handling Injuries", description: "Lifting, carrying, and repetitive motion injuries account for 45% of all warehouse worker compensation claims." },
      { title: "Slips, Trips & Falls", description: "Wet floors, uneven surfaces, and misplaced inventory cause 25% of warehouse injuries, many resulting in lost work days." },
      { title: "Racking Collapses", description: "Overloaded or damaged storage racking systems can collapse catastrophically, endangering multiple workers simultaneously." },
      { title: "Fleet Blind Spots", description: "Lack of real-time visibility into transit conditions and vehicle telemetry creates significant risks for drivers and cargo during transport." },
      { title: "Cargo Integrity", description: "Environmental fluctuations and unauthorized access during shipping compromise cargo safety and regulatory compliance." },
    ],
    solutions: [
      { title: "Forklift Collision Avoidance", description: "AI-powered proximity detection with automatic speed limiting and braking when pedestrians are detected near forklifts." },
      { title: "Load Monitoring AI", description: "Computer vision verifies proper load securing, weight distribution, and stacking procedures in real-time." },
      { title: "Floor Hazard Detection", description: "Automated detection of spills, debris, and obstructions with instant alert dispatch to nearby workers and cleaning crews." },
      { title: "Structural Integrity Alerts", description: "IoT sensors monitor racking alignment, load distribution, and impact damage with automated area exclusion on detection." },
      { title: "IoT Fleet Monitoring", description: "Real-time tracking and telematics for transport fleets, monitoring driver behavior, vehicle health, and route safety to prevent accidents." },
      { title: "Smart Containers", description: "IoT-enabled shipping containers with continuous environmental monitoring, intrusion detection, and automated compliance logging." },
    ],
    stats: [
      { label: "Injury Reduction", value: "74%", description: "Decrease in recordable injuries" },
      { label: "Collision Prevention", value: "92%", description: "Forklift-pedestrian incidents prevented" },
      { label: "Efficiency Gain", value: "28%", description: "Improvement in safety compliance efficiency" },
      { label: "Warehouses Secured", value: "800+", description: "Distribution centers globally" },
    ],
    caseStudy: {
      title: "Warehouse Safety Transformation",
      company: "Global E-Commerce Logistics Provider",
      result: "74% reduction in recordable injuries and 92% elimination of forklift-pedestrian near-misses across 35 fulfillment centers. ROI achieved in under 6 months.",
    },
    cta: { title: "Secure Your Distribution Centers", description: "Get a logistics and warehousing safety assessment and deployment plan." },
  },
  "mining-extraction": {
    slug: "mining-extraction",
    title: "Mining & Extraction",
    subtitle: "Underground & Open-Pit Safety Systems for Mining Operations",
    icon: Mountain,
    color: "safeglobal",
    heroDescription:
      "Purpose-built safety systems for underground and open-pit mining operations. Monitor ground stability, air quality, equipment health, and personnel location in the most challenging environments on Earth.",
    challenges: [
      { title: "Ground Instability", description: "Rock bursts, cave-ins, and slope failures cause 40% of mining fatalities, often with little advance warning." },
      { title: "Hazardous Atmospheres", description: "Underground mines face methane explosions, CO poisoning, and oxygen deficiency that can be lethal within minutes." },
      { title: "Equipment Failures", description: "Heavy mining equipment failures cause 25% of fatalities, often in remote locations with delayed emergency response." },
      { title: "Worker Isolation", description: "Remote and underground workers face extended response times when incidents occur, increasing severity of outcomes." },
    ],
    solutions: [
      { title: "Geotechnical Monitoring", description: "Micro-seismic sensors and extensometers provide early warning of ground instability hours before failure occurs." },
      { title: "Atmospheric Intelligence", description: "Continuous multi-gas monitoring with AI-driven ventilation optimization and automatic evacuation triggers." },
      { title: "Equipment Health Prediction", description: "Vibration and thermal analysis predict critical equipment failures 2-6 weeks in advance with 92% accuracy." },
      { title: "Personnel Tracking System", description: "Real-time location tracking of all personnel with automated headcount and rescue coordination during emergencies." },
    ],
    stats: [
      { label: "Fatality Prevention", value: "86%", description: "Reduction in mining fatalities" },
      { label: "Early Warning", value: "4-6hrs", description: "Advance notice before ground failure" },
      { label: "Equipment Uptime", value: "94%", description: "Increase in critical equipment availability" },
      { label: "Mines Protected", value: "120+", description: "Across 15 countries worldwide" },
    ],
    caseStudy: {
      title: "Underground Mine Safety Platform",
      company: "Top 5 Global Mining Corporation",
      result: "86% reduction in serious incidents and zero fatalities over 30 months across 8 underground mines. Achieved 94% equipment uptime through predictive maintenance, saving $12M annually.",
    },
    cta: { title: "Protect Your Mining Operations", description: "Get a mining safety assessment and technology deployment plan." },
  },
};

export const industrySlugs = Object.keys(industriesData);
