export interface Education {
  degree: string;
  school: string;
  href: string;
  logo: string;
  period: string;
}

export interface Role {
  title: string;
  org: string;
  href: string;
  logo: string;
  period: string;
  location: string;
  bullets: string[];
}

export const education: Education[] = [
  {
    degree: 'M.Sc. in Computer Science',
    school: 'Technical University of Munich',
    href: 'https://www.tum.de/en',
    logo: '/assets/tum_logo.png',
    period: 'October 2022 – February 2025',
  },
  {
    degree: 'B.Tech. in Computer Science and Engineering',
    school: 'National Institute of Technology Silchar',
    href: 'https://www.nits.ac.in/',
    logo: '/assets/1920px-National_Institute_Of_Technology_Silchar_Logo.svg.png',
    period: 'August 2015 – May 2019',
  },
];

export const workExperience: Role[] = [
  {
    title: 'Senior AI/ML Engineer',
    org: 'Aiviq',
    href: 'https://www.aiviq.com/',
    logo: '/assets/aiviq.png',
    period: 'May 2025 – Present',
    location: 'Remote',
    bullets: [
      'Architected and launched a dynamic Azure RAG chat assistant, using Azure Open-AI models, Cognitive Search, Cosmos DB, that continuously ingests new Confluence pages and, via dynamic routing and caching, serves low-latency, context-aware answers to enterprise users.',
      'Designing LangGraph-based autonomous customer-service agents that ingest real-time hedge-fund data feeds, perform statistical QC, and auto-populate filings—removing manual reconciliation steps and accelerating regulatory reporting.',
    ],
  },
  {
    title: 'NLP Engineer',
    org: 'Fast-AI Movies',
    href: 'https://fast-ai-movies.de/',
    logo: '/assets/fast-ai.png',
    period: 'October 2023 – January 2025',
    location: 'Munich, Germany',
    bullets: [
      'Developed a Streamlit-based quiz generator leveraging PEFT-tuned LLaMA/Mistral models, reducing manual workload by 80%.',
      'Designed a relation extraction module using GPT-4 & fine-tuned LLaMA models with a Streamlit UI for testing and demos; structured 12,000+ support interactions to improve response accuracy and speed.',
      'Engineered backend infrastructure for an automated tutorial generator using YOLO-based UI detection, Azure TTS/STT, OpenAI APIs — streamlining onboarding and training content creation.',
      'Ran Agile sprints and translated technical plans for cross-functional teams, aligning roadmap goals across engineering and non-technical stakeholders.',
    ],
  },
  {
    title: 'Engineer (Part Time)',
    org: "Umlaut Engineering and Consultancy Services",
    href: 'https://newsroom.accenture.com/news/2021/accenture-completes-acquisition-of-umlaut',
    logo: '/assets/umlaut.png',
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
    logo: '/assets/lowes.png',
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
    logo: '/assets/iasc.png',
    period: 'May 2018 – June 2018',
    location: 'Bangalore, India',
    bullets: [
      'Coded image classification models using CNNs and Open-CV for various imaging datasets.',
      'Developed a secure registration portal with role-based access control for an NGO, enabling streamlined user onboarding for community services.',
    ],
  },
];
