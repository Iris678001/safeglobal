import {
  Eye, Brain, FileCheck, Cpu, Activity, Monitor, Bell, Layers, TrendingUp, Radar, Lock, ShieldAlert, Shield,
  type LucideIcon,
} from "lucide-react";

export interface ServicePageData {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  badge?: string;
  heroDescription: string;
  features: { title: string; description: string }[];
  stats: { label: string; value: string; description: string }[];
  benefits: { title: string; description: string }[];
  cta: { title: string; description: string };
  relatedServices: { title: string; href: string; color: string }[];
}

export const servicesData: Record<string, ServicePageData> = {
  "ai-safety-monitoring": {
    slug: "ai-safety-monitoring", title: "AI Safety Monitoring", subtitle: "Real-Time Hazard Detection & Prevention", icon: Eye, color: "safeglobal", badge: "Popular",
    heroDescription: "Deploy computer vision and sensor fusion to detect hazards in real-time across your entire facility. Our AI processes 10,000+ data points per second to identify risks before incidents occur.",
    features: [
      { title: "Computer Vision Detection", description: "Multi-camera AI analysis for PPE compliance, fall detection, and unauthorized zone access with 99.7% accuracy." },
      { title: "Sensor Fusion Engine", description: "Combines environmental sensors, wearables, and equipment data into a unified safety intelligence stream." },
      { title: "Real-Time Alert System", description: "Sub-50ms alert delivery with automated escalation protocols and response team coordination." },
      { title: "Behavioral Analytics", description: "AI models learn normal worker behavior patterns and flag anomalies that indicate potential safety risks." },
      { title: "Zone Risk Scoring", description: "Dynamic risk scores for every facility zone updated every 30 seconds based on live conditions." },
      { title: "Incident Prediction", description: "Machine learning models predict likely incident scenarios 2-4 hours before they occur." },
      { title: "Machine Hierarchy Access", description: "Enforce strict, role-based access controls and permissions across the machine hierarchy." },
      { title: "Breach of Protocol", description: "Instant detection and automated alerting for any deviations from established safety protocols." },
    ],
    stats: [{ label: "Detection Rate", value: "99.7%", description: "Hazard identification accuracy" }, { label: "Response Time", value: "<50ms", description: "Alert to notification delivery" }, { label: "False Positive Rate", value: "0.3%", description: "Industry-leading precision" }, { label: "Workers Protected", value: "500K+", description: "Across global facilities" }],
    benefits: [{ title: "Reduce Incident Rate", description: "73% average reduction in workplace incidents within 6 months." }, { title: "Lower Insurance Costs", description: "15-30% reduction in insurance premiums." }, { title: "Regulatory Compliance", description: "Automatic compliance documentation keeps you ahead of OSHA and ISO requirements." }, { title: "Operational Efficiency", description: "Reduce manual safety inspections by 80% while improving coverage." }],
    cta: { title: "Start Monitoring in 48 Hours", description: "Get a customized AI Safety Monitoring deployment plan for your facility." },
    relatedServices: [{ title: "IoT Safety Integration", href: "/ehs-ai/iot-integration", color: "amber" }, { title: "Emergency Response AI", href: "/ehs-ai/emergency-response-ai", color: "rose" }],
  },
  "compliance-automation": {
    slug: "compliance-automation", title: "Compliance Automation", subtitle: "Auto-Track 200+ Regulations with Smart Alerts", icon: FileCheck, color: "violet",
    heroDescription: "Never miss a compliance deadline again. Our platform automatically tracks 200+ regulations across OSHA, ISO, GDPR, and industry-specific standards, generating smart alerts and auto-filled documentation.",
    features: [{ title: "Regulatory Tracking Engine", description: "Real-time monitoring of 200+ regulatory frameworks across 30+ countries." }, { title: "Auto-Generated Reports", description: "One-click compliance reports pre-filled with your safety data and formatted for auditors." }, { title: "Smart Alert System", description: "Proactive notifications for upcoming deadlines, regulation changes, and compliance gaps." }, { title: "Audit Trail Management", description: "Complete digital audit trails with tamper-proof timestamps and evidence collection." }, { title: "Gap Analysis Dashboard", description: "Visual comparison of current compliance status against required standards." }, { title: "Policy Builder", description: "AI-assisted policy document creation aligned with current regulations." }],
    stats: [{ label: "Regulations Tracked", value: "200+", description: "Across 30+ countries" }, { label: "Time Saved", value: "85%", description: "On compliance reporting" }, { label: "Audit Pass Rate", value: "99.2%", description: "First-time audit success" }, { label: "Auto-Reports/Month", value: "1,200+", description: "Generated across clients" }],
    benefits: [{ title: "Eliminate Manual Work", description: "Reduce compliance documentation time by 85% with automated reporting." }, { title: "Zero Missed Deadlines", description: "Smart alerts ensure you never miss a regulatory filing or renewal." }, { title: "Risk Reduction", description: "Proactive gap analysis prevents costly compliance violations." }, { title: "Audit Confidence", description: "99.2% first-time audit pass rate with complete documentation ready." }],
    cta: { title: "Automate Your Compliance", description: "Get a compliance gap analysis and automation roadmap." },
    relatedServices: [{ title: "AI Safety Monitoring", href: "/ehs-ai/ai-safety-monitoring", color: "safeglobal" }, { title: "Safety Audit Manager", href: "/ehs-ai/safety-audit-manager", color: "amber" }, { title: "Access Control AI", href: "/ehs-ai/access-control-ai", color: "safeglobal" }],
  },
  "iot-integration": {
    slug: "iot-integration", title: "IoT Safety Integration", subtitle: "Connect 1000+ Sensor Types for Unified Monitoring", icon: Cpu, color: "amber", badge: "New",
    heroDescription: "Unify your safety infrastructure with IoT integration that connects 1000+ sensor types into a single monitoring platform. From gas detectors to wearable tech, get real-time visibility across all safety systems.",
    features: [{ title: "Universal Sensor Hub", description: "Connect 1000+ sensor types including gas, temperature, noise, vibration, and air quality monitors." }, { title: "Wearable Integration", description: "Sync with smart helmets, safety vests, and biometric wearables for worker health monitoring." }, { title: "Edge Computing", description: "On-site edge processors ensure sub-100ms response times even without cloud connectivity." }, { title: "Device Management", description: "Centralized dashboard for monitoring sensor health, battery levels, and calibration status." }, { title: "Data Normalization", description: "Unified data pipeline that normalizes inputs from diverse sensor manufacturers and protocols." }, { title: "Predictive Calibration", description: "AI predicts when sensors need calibration, reducing false alarms by 90%." }],
    stats: [{ label: "Sensor Types", value: "1000+", description: "Supported device categories" }, { label: "Edge Latency", value: "<100ms", description: "On-site processing speed" }, { label: "Uptime", value: "99.99%", description: "Platform availability" }, { label: "Data Points/Sec", value: "10K+", description: "Processing capacity" }],
    benefits: [{ title: "Unified Visibility", description: "See all safety systems in one dashboard instead of 15+ separate tools." }, { title: "Faster Response", description: "Edge computing ensures alerts arrive in under 100ms, even offline." }, { title: "Reduced False Alarms", description: "AI-driven calibration reduces unnecessary evacuations by 90%." }, { title: "Lower Infrastructure Cost", description: "Consolidate vendors and reduce IoT management overhead by 60%." }],
    cta: { title: "Connect Your Sensors", description: "Get a free IoT integration assessment and architecture plan." },
    relatedServices: [{ title: "AI Safety Monitoring", href: "/ehs-ai/ai-safety-monitoring", color: "safeglobal" }, { title: "Safety Dashboards", href: "/ehs-ai/safety-dashboards", color: "sky" }, { title: "Emergency Response AI", href: "/ehs-ai/emergency-response-ai", color: "rose" }],
  },
  "workplace-intelligence": {
    slug: "workplace-intelligence", title: "Workplace Intelligence Systems", subtitle: "Transform Safety Data into Actionable Insights", icon: Activity, color: "safeglobal",
    heroDescription: "Turn your safety data into a strategic advantage. Workplace Intelligence Systems analyze patterns across your organization to identify improvement opportunities and measure the impact of safety investments.",
    features: [{ title: "Safety Intelligence Engine", description: "AI-powered analysis of safety patterns across shifts, zones, and teams." }, { title: "ROI Measurement", description: "Quantify the business impact of safety investments with clear before/after metrics." }, { title: "Culture Scoring", description: "Measure and track safety culture maturity across departments and locations." }, { title: "Benchmark Comparisons", description: "Compare your safety performance against industry peers and best practices." }, { title: "Recommendation Engine", description: "AI-generated improvement suggestions prioritized by impact and feasibility." }, { title: "Executive Dashboards", description: "Board-ready safety performance summaries with key metrics and trends." }],
    stats: [{ label: "Data Sources", value: "50+", description: "Integrated data pipelines" }, { label: "Insights Generated", value: "10K+", description: "Per month per client" }, { label: "ROI Improvement", value: "340%", description: "Average client ROI" }, { label: "Decision Speed", value: "5x", description: "Faster safety decisions" }],
    benefits: [{ title: "Data-Driven Strategy", description: "Replace intuition with evidence-based safety investment decisions." }, { title: "Measure Impact", description: "Prove the value of safety programs with clear ROI calculations." }, { title: "Continuous Improvement", description: "AI recommendations ensure your safety program keeps evolving." }, { title: "Board Visibility", description: "Executive dashboards make safety performance transparent at every level." }],
    cta: { title: "Unlock Your Safety Intelligence", description: "Get a workplace intelligence assessment and roadmap." },
    relatedServices: [{ title: "EHS Management Platform", href: "/ehs-ai/ehs-management-overview", color: "sky" }, { title: "Compliance Automation", href: "/ehs-ai/compliance-automation", color: "violet" }],
  },
  "ehs-management-overview": {
    slug: "ehs-management-overview",
    title: "EHS Management Platform",
    subtitle: "Centralize your Environment, Health, and Safety workflows.",
    icon: Shield,
    color: "sky",
    badge: "Platform Overview",
    heroDescription: "Our comprehensive EHS Management Platform centralizes your environmental, health, and safety workflows into a single, unified hub. By integrating specialized tools, we empower organizations to dramatically reduce operational risk, effortlessly ensure regulatory compliance, and build a proactive safety culture.",
    features: [
      { title: "Centralized Workflows", description: "Manage all your EHS initiatives from a single hub, eliminating data silos and streamlining processes across your entire organization." },
      { title: "Proactive Risk Mitigation", description: "Identify, assess, and address workplace hazards before they escalate into incidents, protecting your most valuable assets." },
      { title: "Assured Compliance", description: "Stay ahead of local, national, and international regulations with built-in compliance guardrails and centralized documentation." }
    ],
    stats: [
      { label: "Incident Reduction", value: "45%", description: "Average decrease in workplace safety incidents." },
      { label: "Compliance Achieved", value: "100%", description: "Consistent regulatory compliance maintained by our partners." },
      { label: "Admin Time Saved", value: "30h+", description: "Hours saved per month on manual safety tracking and reporting." }
    ],
    benefits: [
      { title: "Unified EHS Visibility", description: "Gain a complete picture of your safety and environmental performance without jumping between disjointed systems." },
      { title: "Audit Readiness", description: "Maintain a constant state of audit-readiness with automated record-keeping and easy access to historical safety data." },
      { title: "Empowered Workforce", description: "Foster a culture of safety where every employee is equipped to participate in EHS protocols and hazard reporting." }
    ],
    cta: { title: "Transform Your EHS Strategy", description: "Discover how centralizing your safety operations can protect your team and streamline your compliance efforts." },
    relatedServices: [
      { title: "Compliance Automation", href: "/ehs-ai/compliance-automation", color: "violet" },
      { title: "Safety Audit Manager", href: "/ehs-ai/safety-audit-manager", color: "amber" },
      { title: "Hazard Mapping", href: "/ehs-ai/hazard-mapping", color: "cyan" }
    ]
  },
  "emergency-response-ai": {
    slug: "emergency-response-ai", title: "Emergency Response AI", subtitle: "Automated Incident Response & Evacuation Guidance", icon: Bell, color: "rose", badge: "AI",
    heroDescription: "When seconds count, AI-driven emergency response coordinates evacuation routes, alerts responders, and manages incident protocols automatically. Reduce emergency response time by 80%.",
    features: [{ title: "Automated Evacuation Routing", description: "AI-calculated optimal evacuation paths based on real-time hazard locations and crowd density." }, { title: "Responder Coordination", description: "Automatic notification and task assignment to emergency response teams." }, { title: "Incident Protocol Engine", description: "Pre-defined and AI-adapted response protocols for 50+ incident types." }, { title: "Communication Hub", description: "Multi-channel emergency communication with PA systems, mobile alerts, and digital signage." }, { title: "Post-Incident Analysis", description: "Automated incident timeline reconstruction and root cause analysis." }, { title: "Drill Simulation", description: "Run realistic emergency drills with AI-generated scenarios and performance scoring." }],
    stats: [{ label: "Response Time", value: "80%↓", description: "Faster emergency response" }, { label: "Protocols", value: "50+", description: "Pre-built response plans" }, { label: "Evacuation Time", value: "60%↓", description: "Reduced evacuation duration" }, { label: "Drill Score", value: "95%", description: "Average preparedness score" }],
    benefits: [{ title: "Save Lives", description: "80% faster response time directly translates to fewer injuries and fatalities." }, { title: "Reduce Chaos", description: "Automated protocols eliminate confusion during high-stress emergencies." }, { title: "Regulatory Compliance", description: "Meet OSHA emergency action plan requirements automatically." }, { title: "Continuous Improvement", description: "Post-incident analysis and drill simulations ensure ongoing readiness." }],
    cta: { title: "Prepare Your Emergency Response", description: "Get an emergency response AI deployment plan for your facility." },
    relatedServices: [{ title: "AI Safety Monitoring", href: "/ehs-ai/ai-safety-monitoring", color: "safeglobal" }, { title: "Access Control AI", href: "/ehs-ai/access-control-ai", color: "safeglobal" }, { title: "IoT Safety Integration", href: "/ehs-ai/iot-integration", color: "amber" }],
  },
  "safety-training-vr": {
    slug: "safety-training-vr", title: "Safety Training VR", subtitle: "Immersive VR Training for High-Risk Scenarios", icon: Layers, color: "violet",
    heroDescription: "Train workers in realistic virtual environments that replicate dangerous scenarios without real-world risk. VR training improves retention by 75% and reduces training costs by 60%.",
    features: [{ title: "VR Scenario Library", description: "100+ pre-built training scenarios covering confined spaces, working at heights, chemical spills, and more." }, { title: "Custom Scenario Builder", description: "Create training scenarios specific to your facility layout and risk profile." }, { title: "Performance Tracking", description: "Measure response times, decision quality, and procedural adherence in each scenario." }, { title: "Multi-User Sessions", description: "Team-based training exercises with role-specific objectives and coordination." }, { title: "Mobile VR Support", description: "Deploy on standalone VR headsets — no expensive hardware or dedicated rooms required." }, { title: "Certification Integration", description: "Auto-generate completion certificates and sync with your LMS." }],
    stats: [{ label: "Retention Rate", value: "75%↑", description: "Compared to classroom training" }, { label: "Training Cost", value: "60%↓", description: "Reduced per-employee cost" }, { label: "Scenarios", value: "100+", description: "Pre-built VR training modules" }, { label: "Completion Rate", value: "98%", description: "Training program completion" }],
    benefits: [{ title: "Zero-Risk Practice", description: "Workers experience dangerous scenarios without any real-world risk." }, { title: "Better Retention", description: "75% higher knowledge retention compared to traditional classroom training." }, { title: "Cost Efficiency", description: "60% reduction in training costs with reusable VR modules." }, { title: "Scalable Training", description: "Train hundreds of workers simultaneously without scheduling conflicts." }],
    cta: { title: "Start VR Training", description: "Get a VR training pilot program designed for your team." },
    relatedServices: [{ title: "AI Safety Monitoring", href: "/ehs-ai/ai-safety-monitoring", color: "safeglobal" }, { title: "Emergency Response AI", href: "/ehs-ai/emergency-response-ai", color: "rose" }, { title: "Compliance Automation", href: "/ehs-ai/compliance-automation", color: "violet" }],
  },
  "hazard-mapping": {
    slug: "hazard-mapping", title: "Hazard Mapping", subtitle: "Spatial Risk Visualization with Geospatial Analytics", icon: Radar, color: "sky",
    heroDescription: "Visualize your facility's risk landscape with interactive geospatial hazard maps. Identify danger zones, track hazard migration, and optimize safety resource placement with spatial intelligence.",
    features: [{ title: "Interactive Facility Maps", description: "2D and 3D facility maps with real-time hazard overlays and zone risk scoring." }, { title: "Geospatial Analytics", description: "Spatial pattern analysis reveals hidden correlations between location and incident frequency." }, { title: "Dynamic Heat Maps", description: "Continuously updated risk heat maps based on live sensor data and incident reports." }, { title: "Resource Optimization", description: "AI-recommended placement of safety equipment and personnel based on risk distribution." }, { title: "Historical Overlay", description: "Compare current risk patterns with historical data to identify emerging trends." }, { title: "Emergency Zone Planning", description: "Design and simulate emergency zones with optimal evacuation route mapping." }],
    stats: [{ label: "Map Accuracy", value: "99.5%", description: "Spatial representation precision" }, { label: "Coverage", value: "100%", description: "Facility area mapped" }, { label: "Update Frequency", value: "30s", description: "Real-time map refresh" }, { label: "Optimization Gain", value: "40%", description: "Safety resource efficiency" }],
    benefits: [{ title: "See the Unseen", description: "Reveal spatial risk patterns invisible to traditional safety analysis." }, { title: "Optimize Placement", description: "Position safety resources where they have the greatest impact." }, { title: "Plan Effectively", description: "Data-driven emergency planning based on actual risk distribution." }, { title: "Track Progress", description: "Visualize how safety improvements change your risk landscape over time." }],
    cta: { title: "Map Your Hazards", description: "Get a hazard mapping pilot for your facility." },
    relatedServices: [{ title: "AI Safety Monitoring", href: "/ehs-ai/ai-safety-monitoring", color: "safeglobal" }, { title: "Safety Dashboards", href: "/ehs-ai/safety-dashboards", color: "sky" }],
  },
  "safety-audit-manager": {
    slug: "safety-audit-manager", title: "Safety Audit Manager", subtitle: "Digital Audit Workflows with Auto-Generated Reports", icon: FileCheck, color: "amber",
    heroDescription: "Streamline your entire audit lifecycle from planning to closure. Digital workflows, automated evidence collection, and AI-generated reports reduce audit preparation time by 85%.",
    features: [{ title: "Audit Planning Wizard", description: "AI-assisted audit planning with risk-based scheduling and scope recommendations." }, { title: "Digital Checklists", description: "Configurable digital checklists for 50+ audit types with photo and video evidence capture." }, { title: "Auto-Report Generation", description: "One-click audit reports with findings, evidence, and corrective action recommendations." }, { title: "Corrective Action Tracking", description: "End-to-end tracking from finding to resolution with accountability and deadlines." }, { title: "Regulatory Alignment", description: "Pre-mapped audit criteria aligned with OSHA, ISO 45001, and industry standards." }, { title: "Continuous Monitoring", description: "Ongoing compliance verification between scheduled audits with real-time alerts." }],
    stats: [{ label: "Prep Time Saved", value: "85%", description: "Audit preparation reduction" }, { label: "Audit Types", value: "50+", description: "Pre-built templates" }, { label: "Auto-Close Rate", value: "70%", description: "Findings resolved automatically" }, { label: "Pass Rate", value: "99.2%", description: "First-time audit success" }],
    benefits: [{ title: "Less Busywork", description: "85% reduction in audit preparation time frees your team for higher-value work." }, { title: "Higher Pass Rates", description: "99.2% first-time pass rate with comprehensive evidence and documentation." }, { title: "Faster Closure", description: "70% of findings auto-resolved with AI-recommended corrective actions." }, { title: "Continuous Compliance", description: "Monitor compliance between audits, not just during them." }],
    cta: { title: "Streamline Your Audits", description: "Get a safety audit automation plan tailored to your standards." },
    relatedServices: [{ title: "Compliance Automation", href: "/ehs-ai/compliance-automation", color: "violet" }, { title: "Access Control AI", href: "/ehs-ai/access-control-ai", color: "safeglobal" }, { title: "Safety Dashboards", href: "/ehs-ai/safety-dashboards", color: "sky" }],
  },
  "access-control-ai": {
    slug: "access-control-ai", title: "Access Control AI", subtitle: "Intelligent Zone Authorization & Visitor Management", icon: Lock, color: "safeglobal",
    heroDescription: "Manage facility access with AI-powered zone authorization. Facial recognition, credential verification, and real-time risk assessment ensure only authorized personnel enter sensitive areas.",
    features: [{ title: "Facial Recognition Access", description: "Touchless entry with 99.9% accurate facial recognition and anti-spoofing." }, { title: "Dynamic Zone Authorization", description: "AI adjusts access permissions in real-time based on risk levels and operations." }, { title: "Visitor Management", description: "Complete visitor lifecycle from pre-registration to escorted access and check-out." }, { title: "Contractor Compliance", description: "Verify contractor certifications and training before granting facility access." }, { title: "Emergency Lockdown", description: "One-touch facility or zone lockdown with automated mustering and headcount." }, { title: "Audit Trail", description: "Complete access logs with timestamps, photos, and risk assessment scores." }],
    stats: [{ label: "Recognition Rate", value: "99.9%", description: "Facial identification accuracy" }, { label: "Entry Speed", value: "<2s", description: "Touchless access time" }, { label: "Zones Managed", value: "10K+", description: "Across client facilities" }, { label: "Incidents Prevented", value: "5K+", description: "Unauthorized access blocked" }],
    benefits: [{ title: "Enhanced Security", description: "99.9% accurate identification prevents unauthorized access to hazardous areas." }, { title: "Touchless Entry", description: "Facial recognition eliminates contact points and speeds up entry." }, { title: "Dynamic Safety", description: "Access adapts to real-time risk conditions for maximum protection." }, { title: "Emergency Ready", description: "Instant lockdown and mustering when every second counts." }],
    cta: { title: "Secure Your Facility", description: "Get an access control AI assessment for your site." },
    relatedServices: [{ title: "Emergency Response AI", href: "/ehs-ai/emergency-response-ai", color: "rose" }, { title: "IoT Safety Integration", href: "/ehs-ai/iot-integration", color: "amber" }, { title: "Safety Audit Manager", href: "/ehs-ai/safety-audit-manager", color: "amber" }],
  },
  "process-safety-management": {
    slug: "process-safety-management",
    title: "Process Safety Management",
    subtitle: "Proactive Risk Mitigation and OSHA 1910.119 Compliance",
    icon: ShieldAlert,
    color: "amber",
    badge: "Advanced PSM",
    heroDescription: "Safeguard your critical operations with our comprehensive Process Safety Management solutions. We integrate digital twin technology and IoT sensors to monitor hazard lifecycles in real-time, ensuring stringent adherence to OSHA 1910.119 and minimizing catastrophic risks.",
    features: [
      { title: "Hazard Lifecycle Tracking", description: "Continuously monitor and manage hazards from identification through complete mitigation with advanced tracking, ensuring no safety gap goes unaddressed." },
      { title: "Digital Management of Change (MOC)", description: "Streamline MOC processes with automated workflows, comprehensive impact assessments, and precise approval routing to safely implement operational changes." },
      { title: "OSHA 1910.119 Protocol Adherence", description: "Ensure complete regulatory alignment with built-in protocols covering process hazard analysis (PHA), mechanical integrity, and systematic incident investigation." },
      { title: "Digital Twin & IoT Integration", description: "Leverage real-time IoT telemetry and digital twin modeling to simulate risks, predict equipment failures, and visualize critical process safety metrics." }
    ],
    stats: [
      { label: "Regulatory Compliance", value: "100%", description: "Audit-ready adherence to OSHA safety standards" },
      { label: "Incident Reduction", value: "85%", description: "Decrease in process-related safety incidents" },
      { label: "MOC Efficiency", value: "4x", description: "Faster processing and approval of MOC requests" }
    ],
    benefits: [
      { title: "Proactive Risk Identification", description: "Anticipate potential process failures before they occur through predictive analytics and continuous asset monitoring." },
      { title: "Operational Continuity", description: "Reduce costly downtime and production interruptions by maintaining optimal mechanical integrity and robust process controls." },
      { title: "Unified Safety Intelligence", description: "Centralize your process safety information (PSI) into a single, accessible platform for streamlined auditing, compliance tracking, and training." }
    ],
    cta: { title: "Modernize Process Safety", description: "Connect with our EHS experts to implement a next-generation PSM framework." },
    relatedServices: [
      { title: "IoT Safety Integration", href: "/ehs-ai/iot-integration", color: "sky" },
      { title: "AI Safety Monitoring", href: "/ehs-ai/ai-safety-monitoring", color: "safeglobal" },
      { title: "Compliance Automation", href: "/ehs-ai/compliance-automation", color: "violet" }
    ]
  },
};

export const serviceSlugs = Object.keys(servicesData);
