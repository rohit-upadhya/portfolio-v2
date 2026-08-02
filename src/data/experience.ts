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
    period: 'January 2026 – Present',
    location: 'Bangalore, India',
    bullets: [
      'Designed the evaluation framework for a production Computer Use Agent — run telemetry, failure taxonomy, and error attribution driving prompt and architecture iteration; 62% autonomous task completion across 800+ real-world sites.',
      'Built a benchmarking framework comparing Gemini against the incumbent Claude-based agent on task accuracy and latency, driving model selection for enterprise deployments.',
      'Found the dominant failure category conflated environment limits with recoverable agent errors; recategorizing separated true blockers from fixable behavior and redirected improvement effort.',
      'Architected an end-to-end Sales Ops automation integrating a CUA with event-driven Power Automate pipelines triggered by incoming emails; cut deal processing time by 30 min/sale (~180 min/week).',
    ],
  },
  {
    title: 'Senior AI/ML Engineer',
    org: 'Aiviq',
    href: 'https://www.aiviq.com/',
    period: 'May 2025 – January 2026',
    location: 'Remote, India',
    bullets: [
      'Fine-tuned embedding models for domain-specific semantic retrieval, improving recall@1 from ~40% to 85%+ over off-the-shelf embeddings.',
      'Architected and deployed a containerized Azure RAG pipeline (Azure OpenAI, Azure AI Search, Cosmos DB, Docker, GitHub Actions) with dynamic query routing, continuously ingesting Confluence pages to serve low-latency, context-aware answers to enterprise users.',
      'Designed a semantic matching pipeline using cross-encoder rerankers, improving client match rate by 20% over baseline and replacing manual matching, thereby eliminating 8+ hours of weekly manual work.',
    ],
  },
  {
    title: 'NLP Engineer (Founding Engineer)',
    org: 'Fast-AI Movies',
    href: 'https://fast-ai-movies.de/',
    period: 'October 2023 – January 2025',
    location: 'Munich, Germany',
    bullets: [
      'Developed a quiz generator app leveraging PEFT fine-tuned LLaMA and Mistral models, reducing manual workload by over 80%.',
      'Designed a relation extraction module using GPT-4 & fine-tuned LLaMA models, with a Streamlit UI for testing and demos; structured 12,000+ support interactions to improve response accuracy and speed.',
      'Architected and engineered an automated tutorial generator using YOLO-based UI detection, Azure TTS/STT, OpenAI APIs, streamlining content creation for onboarding and training.',
      'Ran Agile sprints and translated technical plans for cross-functional teams, aligning roadmap goals across engineering and non-technical stakeholders.',
    ],
  },
  {
    title: 'Engineer (Part Time)',
    org: "Umlaut Engineering and Consultancy Services",
    href: 'https://newsroom.accenture.com/news/2021/accenture-completes-acquisition-of-umlaut',
    period: 'October 2023 – May 2024',
    location: 'Munich, Germany',
    bullets: [
      'Built a defect clustering pipeline for BMW, reducing manual triage workload by 60% and improving turnaround time for engineering teams.',
      'Rebuilt a legacy MS Access tool as a scalable Django-based web app for Bosch, enabling multi-user access and reducing maintenance overhead.',
    ],
  },
  {
    title: 'Software Engineer',
    org: "Lowe's India",
    href: 'https://lowes.co.in/',
    period: 'July 2019 – July 2022',
    location: 'Bangalore, India',
    bullets: [
      'Led development of REST APIs to automate CMDB updates and incident workflows, improving operational efficiency across 30+ engineering teams.',
      'Built a real-time incident dashboard for Major Incident Managing teams, reducing incident response time and increasing visibility for P1 outages.',
      'Served as SME for Clarity PPM across 100+ projects, streamlining governance and ensuring consistent project reporting.',
      'Replaced premium analytics tools with ElasticSearch/Kibana, saving $15K+ quarterly and enhancing ticket trend visibility.',
    ],
  },
  {
    title: 'Summer Research Fellow',
    org: 'Indian Academy of Sciences',
    href: 'https://www.ias.ac.in/',
    period: 'May 2018 – June 2018',
    location: 'Bangalore, India',
    bullets: [
      'Coded image classification models using CNNs and Open-CV for various imaging datasets.',
      'Developed a secure registration portal with role-based access control for an NGO, enabling streamlined user onboarding for community services.',
    ],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: 'languages', items: ['Python', 'JavaScript', 'SQL', 'Shell'] },
  {
    label: 'llms & agents',
    items: [
      'RAG',
      'Computer Use Agents (CUA)',
      'Agent Evaluation & Benchmarking',
      'PEFT/LoRA Fine-tuning',
      'Instruction Tuning',
      'Prompt Engineering',
      'Cross-Encoders',
      'Contrastive Learning',
    ],
  },
  {
    label: 'ml frameworks',
    items: ['PyTorch', 'HuggingFace (Transformers, PEFT, Datasets)', 'PyTorch Geometric'],
  },
  {
    label: 'retrieval & data',
    items: ['FAISS', 'Azure AI Search', 'Elasticsearch', 'Weaviate', 'Cosmos DB', 'Kafka'],
  },
  {
    label: 'infra & devops',
    items: ['Azure (ML, Functions, OpenAI)', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'AWS S3'],
  },
];
