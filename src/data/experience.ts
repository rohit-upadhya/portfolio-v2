export interface Education {
  degree: string;
  school: string;
  href: string;
  period: string;
}

export interface Role {
  title: string;
  org: string;
  href?: string;
  period: string;
  location: string;
  bullets: string[];
}

export const education: Education[] = [
  {
    degree: 'M.Sc. in Computer Science',
    school: 'Technical University of Munich',
    href: 'https://www.tum.de/en',
    period: 'October 2022 – February 2025',
  },
  {
    degree: 'B.Tech. in Computer Science and Engineering',
    school: 'National Institute of Technology Silchar',
    href: 'https://www.nits.ac.in/',
    period: 'August 2015 – May 2019',
  },
];

export const workExperience: Role[] = [
  {
    title: 'Software Engineer - ML',
    org: 'Whatfix',
    href: 'https://whatfix.com/',
    period: 'January 2026 – Present',
    location: 'Bangalore, India',
    bullets: [
      'Designed the evaluation framework for a production Computer Use Agent — telemetry, failure taxonomy, error attribution; 62% autonomous task completion across 800+ sites.',
      'Built a benchmarking framework comparing Gemini vs. the incumbent Claude-based agent, driving model selection for enterprise deployments.',
      'Found the top failure category conflated environment limits with recoverable errors; recategorizing separated true blockers from fixable behavior.',
      'Architected an end-to-end Sales Ops automation combining a CUA with event-driven Power Automate pipelines; cut deal processing time by ~180 min/week.',
    ],
  },
  {
    title: 'Senior AI/ML Engineer',
    org: 'Aiviq',
    href: 'https://www.aiviq.com/',
    period: 'May 2025 – January 2026',
    location: 'Remote, India',
    bullets: [
      'Fine-tuned embedding models for domain-specific retrieval, boosting recall@1 from ~40% to 85%+.',
      'Deployed a containerized Azure RAG pipeline (OpenAI, AI Search, Cosmos DB, Docker, GitHub Actions) with dynamic query routing over continuously ingested Confluence pages.',
      'Built a cross-encoder reranking pipeline that replaced manual client matching — 20% better match rate, 8+ hours saved weekly.',
    ],
  },
  {
    title: 'NLP Engineer (Founding Engineer)',
    org: 'Fast-AI Movies',
    href: 'https://fast-ai-movies.de/',
    period: 'October 2023 – January 2025',
    location: 'Munich, Germany',
    bullets: [
      'Built a quiz generator using PEFT fine-tuned LLaMA/Mistral models, cutting manual workload by 80%+.',
      'Built a relation extraction module (GPT-4 + fine-tuned LLaMA) with a Streamlit demo UI; structured 12,000+ support interactions.',
      'Built an automated tutorial generator (YOLO UI detection, Azure TTS/STT, OpenAI APIs) for onboarding content creation.',
      'Ran Agile sprints, aligning roadmap goals across engineering and non-technical stakeholders.',
    ],
  },
  {
    title: 'Engineer (Part Time)',
    org: "Umlaut Engineering and Consultancy Services",
    href: 'https://newsroom.accenture.com/news/2021/accenture-completes-acquisition-of-umlaut',
    period: 'October 2023 – May 2024',
    location: 'Munich, Germany',
    bullets: [
      'Built a defect-clustering pipeline for BMW, cutting manual triage workload by 60%.',
      'Rebuilt a legacy MS Access tool as a Django web app for Bosch, adding multi-user access.',
    ],
  },
  {
    title: 'Software Engineer',
    org: "Lowe's India",
    href: 'https://lowes.co.in/',
    period: 'July 2019 – July 2022',
    location: 'Bangalore, India',
    bullets: [
      'Led REST API development to automate CMDB updates and incident workflows across 30+ engineering teams.',
      'Built a real-time incident dashboard for Major Incident teams, speeding up P1 response.',
      'Served as SME for Clarity PPM across 100+ projects, standardizing governance and reporting.',
      'Replaced premium analytics tools with ElasticSearch/Kibana, saving $15K+ quarterly.',
    ],
  },
  {
    title: 'Summer Research Fellow',
    org: 'Indian Academy of Sciences',
    href: 'https://www.ias.ac.in/',
    period: 'May 2018 – June 2018',
    location: 'Bangalore, India',
    bullets: [
      'Coded image classification models using CNNs and OpenCV for various imaging datasets.',
      'Built a secure registration portal with role-based access control for an NGO.',
    ],
  },
];
