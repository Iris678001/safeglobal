export interface RealImage {
  src: string;
  alt: string;
}

const unsplash = (photoId: string, crop = "faces,entropy"): string =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1400&q=80&crop=${crop}`;

export const serviceImages: Record<string, RealImage> = {
  "ai-safety-monitoring": {
    src: unsplash("photo-1581091226825-a6a2a5aee158"),
    alt: "Safety engineer reviewing industrial monitoring equipment on a factory floor",
  },
  "predictive-risk-analytics": {
    src: unsplash("photo-1551288049-bebda4e38f71", "entropy"),
    alt: "Analytics dashboard used for operational risk forecasting",
  },
  "compliance-automation": {
    src: unsplash("photo-1450101499163-c8848c66ca85", "entropy"),
    alt: "Compliance documents and audit records on a desk",
  },
  "iot-integration": {
    src: unsplash("photo-1513828583688-c52646db42da", "entropy"),
    alt: "Industrial piping and connected equipment inside a processing facility",
  },
  "workplace-intelligence": {
    src: unsplash("photo-1460925895917-afdab827c52f", "entropy"),
    alt: "Business intelligence charts used by safety operations teams",
  },
  "safety-dashboards": {
    src: unsplash("photo-1551288049-bebda4e38f71", "entropy"),
    alt: "Real-time operational dashboard with performance metrics",
  },
  "emergency-response-ai": {
    src: unsplash("photo-1504917595217-d4dc5ebe6122", "entropy"),
    alt: "Emergency response planning at an active construction site",
  },
  "safety-training-vr": {
    src: unsplash("photo-1593508512255-86ab42a8e620", "entropy"),
    alt: "Worker using immersive training technology",
  },
  "predictive-maintenance": {
    src: unsplash("photo-1581092160562-40aa08e78837", "entropy"),
    alt: "Technician inspecting industrial machinery for maintenance",
  },
  "hazard-mapping": {
    src: unsplash("photo-1497366754035-f200968a6e72", "entropy"),
    alt: "Operations team mapping facility risks and work zones",
  },
  "safety-audit-manager": {
    src: unsplash("photo-1454165804606-c3d57bc86b40", "entropy"),
    alt: "Safety audit checklist and workplace documentation",
  },
  "access-control-ai": {
    src: unsplash("photo-1558002038-1055907df827", "entropy"),
    alt: "Secure access control hardware at a facility entrance",
  },
};

export const industryImages: Record<string, RealImage> = {
  manufacturing: {
    src: unsplash("photo-1513828583688-c52646db42da", "entropy"),
    alt: "Modern manufacturing plant with industrial equipment and process piping",
  },
  "chemical-processing": {
    src: "/images/chemical_processing.png",
    alt: "High-tech chemical processing facility with industrial vats and laboratory equipment",
  },
  construction: {
    src: unsplash("photo-1504917595217-d4dc5ebe6122", "entropy"),
    alt: "Construction site with workers and heavy equipment",
  },
  "oil-gas": {
    src: "/images/ppe_detection_oil_gas.png",
    alt: "AI computer vision identifying PPE compliance on workers in an oil and gas refinery",
  },
  healthcare: {
    src: unsplash("photo-1586773860418-d37222d8fce3", "entropy"),
    alt: "Healthcare workers in a clinical facility",
  },
  "logistics-warehousing": {
    src: "/images/iot_fleet_smart_containers.png",
    alt: "AI dashboard displaying global IoT fleet tracking and smart container monitoring",
  },
  "mining-extraction": {
    src: unsplash("photo-1516026672322-bc52d61a55d5", "entropy"),
    alt: "Mining and extraction operation in an industrial landscape",
  },
};

export const blogImages: Record<string, RealImage> = {
  "predictive-ai-reduced-workplace-incidents-2024": {
    src: unsplash("photo-1551288049-bebda4e38f71", "entropy"),
    alt: "Predictive analytics dashboard for safety performance",
  },
  "complete-guide-iso-45001-compliance-automation": {
    src: unsplash("photo-1450101499163-c8848c66ca85", "entropy"),
    alt: "Compliance paperwork and audit documentation",
  },
  "iot-sensor-networks-smart-safety-foundation": {
    src: unsplash("photo-1513828583688-c52646db42da", "entropy"),
    alt: "Industrial equipment connected into a sensor network",
  },
  "workplace-safety-trends-ehs-leaders-2025": {
    src: unsplash("photo-1504917595217-d4dc5ebe6122", "entropy"),
    alt: "Safety leaders reviewing work at an industrial site",
  },
  "computer-vision-ppe-compliance-real-world": {
    src: unsplash("photo-1581091226825-a6a2a5aee158"),
    alt: "Industrial worker wearing PPE in a manufacturing environment",
  },
  "emergency-response-ai-saves-lives-case-study": {
    src: unsplash("photo-1517048676732-d65bc937f952", "entropy"),
    alt: "Emergency response team coordinating around a planning table",
  },
};

export const caseStudyImages: Record<string, RealImage> = {
  "globalmfg-corp-manufacturing": {
    src: unsplash("photo-1513828583688-c52646db42da", "entropy"),
    alt: "Manufacturing facility with process equipment and production infrastructure",
  },
  "petrochem-industries-oil-gas": {
    src: "/images/oil_gas_facility.png",
    alt: "Petrochemical facility with pipework and industrial processing equipment",
  },
  "buildright-construction": {
    src: unsplash("photo-1504917595217-d4dc5ebe6122", "entropy"),
    alt: "Construction site where safety systems monitor active work zones",
  },
  "pharma-global-life-sciences": {
    src: unsplash("photo-1581093588401-fbb62a02f120", "entropy"),
    alt: "Clean industrial lab and life sciences production environment",
  },
};

export const homepageBlogImages: Record<string, RealImage> = {
  "How Predictive AI Reduced Workplace Incidents by 73% in 2024":
    blogImages["predictive-ai-reduced-workplace-incidents-2024"],
  "The Complete Guide to ISO 45001 Compliance Automation":
    blogImages["complete-guide-iso-45001-compliance-automation"],
  "IoT Sensor Networks: Building the Foundation for Smart Safety":
    blogImages["iot-sensor-networks-smart-safety-foundation"],
  "5 Workplace Safety Trends Every EHS Leader Must Watch in 2025":
    blogImages["workplace-safety-trends-ehs-leaders-2025"],
};
