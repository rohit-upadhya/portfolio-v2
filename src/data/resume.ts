// Source of truth for the /resume page. Keep this in sync with the actual
// resume — the page and the printable/downloadable PDF both render from here.

export const contact = {
  name: 'Rohit Upadhya',
  phone: '+91 96154 22513',
  email: 'rohitupadhya18@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rohit-upadhya/',
  github: 'https://github.com/rohit-upadhya',
  portfolio: 'https://rohitupadhya.com',
};

export interface ResumeRole {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export const workExperience: ResumeRole[] = [
  {
    title: 'Software Engineer - ML',
    org: 'Whatfix',
    location: 'Bangalore, India',
    period: 'January 2026 – Present',
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
    location: 'Remote, India',
    period: 'May 2025 – January 2026',
    bullets: [
      'Fine-tuned embedding models for domain-specific semantic retrieval, improving recall@1 from ~40% to 85%+ over off-the-shelf embeddings.',
      'Architected and deployed a containerized Azure RAG pipeline (Azure OpenAI, Azure AI Search, Cosmos DB, Docker, GitHub Actions) with dynamic query routing, continuously ingesting Confluence pages to serve low-latency, context-aware answers to enterprise users.',
      'Designed a semantic matching pipeline using cross-encoder rerankers, improving client match rate by 20% over baseline and replacing manual matching, thereby eliminating 8+ hours of weekly manual work.',
    ],
  },
  {
    title: 'NLP Engineer (Founding Engineer)',
    org: 'FAST-AI Movies',
    location: 'Munich, Germany',
    period: 'October 2023 – January 2025',
    bullets: [
      'Developed a quiz generator app leveraging PEFT fine-tuned LLaMA and Mistral models, reducing manual workload by over 80%.',
      'Designed a relation extraction module using GPT-4 & fine-tuned LLaMA models, with a Streamlit UI for testing and demos; structured 12,000+ support interactions to improve response accuracy and speed.',
      'Architected and engineered an automated tutorial generator using YOLO-based UI detection, Azure TTS/STT, OpenAI APIs, streamlining content creation for onboarding and training.',
    ],
  },
  {
    title: 'Software Engineer',
    org: "Lowe's India",
    location: 'Bangalore, India',
    period: 'July 2019 – July 2022',
    bullets: [
      'Led development of REST APIs to automate CMDB updates and incident workflows, improving operational efficiency across 30+ engineering teams.',
      'Replaced premium analytics tools with ElasticSearch/Kibana, saving $15K+ quarterly and enhancing ticket trend visibility.',
    ],
  },
];

export interface Publication {
  citation: string;
  authors: string;
  venue: string;
  description: string;
}

export const publications: Publication[] = [
  {
    citation: 'LexCLiPR: Cross-Lingual Paragraph Retrieval from Legal Judgments',
    authors: 'Upadhya, R., Santosh, T.Y.S.S. (2025).',
    venue: 'ACL 2025 (Main Conference)',
    description:
      'Introduced LexCLiPR, a multilingual dataset + retrieval framework enabling paragraph-level cross-lingual retrieval of legally relevant ECtHR cases.',
  },
  {
    citation: 'An Intelligent System for Diagnosis of Diabetic Retinopathy',
    authors: 'Biswas, S.K., Upadhya, R., Das, N., Das, D., Chakraborty, M., & Purkayastha, B. (2020).',
    venue: 'SocProS 2019',
    description: 'Image-processing and ML-based system for automated detection of diabetic retinopathy.',
  },
];

export interface ResumeEducation {
  school: string;
  location: string;
  degree: string;
  period: string;
  bullets: string[];
}

export const education: ResumeEducation[] = [
  {
    school: 'Technical University of Munich',
    location: 'Munich, Germany',
    degree: 'MSc in Informatics (Computer Science)',
    period: 'October 2022 – February 2025',
    bullets: [
      'Thesis: Cross-Lingual Query based Paragraph Retrieval for European Court of Human Rights Judgements',
      'Courses: Machine Learning | Deep Learning | NLP | Legal NLP | Deep Generative Models | Uncertainty Quantification',
    ],
  },
  {
    school: 'National Institute of Technology',
    location: 'Silchar, India',
    degree: 'BTech in Computer Science and Engineering',
    period: 'August 2015 – May 2019',
    bullets: ['Thesis: Diabetic Retinopathy Detection'],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'Shell'] },
  {
    label: 'LLMs & Agents',
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
  { label: 'ML Frameworks', items: ['PyTorch', 'HuggingFace (Transformers, PEFT, Datasets)', 'PyTorch Geometric'] },
  { label: 'Retrieval & Data', items: ['FAISS', 'Azure AI Search', 'Elasticsearch', 'Weaviate', 'Cosmos DB', 'Kafka'] },
  { label: 'Infra & DevOps', items: ['Azure (ML, Functions, OpenAI)', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'AWS S3'] },
];

export interface ResumeProject {
  title: string;
  links: { label: string; href: string }[];
  bullets: string[];
}

export const projects: ResumeProject[] = [
  {
    title: 'GAVEL — Graph-Augmented Paragraph Retrieval for Legal Judgments',
    links: [
      { label: 'Github', href: 'https://github.com/rohit-upadhya' },
      { label: 'Huggingface', href: 'https://huggingface.co/rohit-upadhya/lexclipr-graph-stack__mdpr-tied-pft-msmarco__original' },
    ],
    bullets: [
      'Extended LexCLiPR to address a limitation of fine-grained legal retrieval: chunking judgments into paragraphs strips the document context that determines relevance.',
      'Modeled each judgment as its own paragraph-level graph, training dual 3-layer Graph Attention Networks — local 5-hop adjacency and global BERTopic topic nodes — under contrastive loss.',
      'Outperformed a fully fine-tuned bi-encoder using a frozen mDPR encoder: Recall@5% of 53.5 vs 44.4 on seen queries and 39.0 vs 30.5 on unseen, against a 22.6 zero-shot baseline.',
      'Showed combining local and global views beats either alone (53.5 vs 51.2 / 52.2), while per-layer fusion collapses to 35.2 through over-smoothing.',
    ],
  },
  {
    title: 'SmoLLM — 109M Parameter Language Model from Scratch',
    links: [
      { label: 'Github', href: 'https://github.com/rohit-upadhya/smol-llm' },
      { label: 'Huggingface', href: 'https://huggingface.co/rohit-upadhya/SmoLLM-109M-base' },
    ],
    bullets: [
      'Implemented a Llama-style decoder-only transformer from scratch — custom BPE tokenizer, RoPE, RMSNorm, SwiGLU, multi-head attention with causal masking — pretrained on FineWeb-Edu on a single NVIDIA A30.',
      'Diagnosed and fixed a training bug where EOS tokens were never appended at document boundaries, then ran continued pretraining to recover sequence termination behavior.',
      'Instruction-tuned on databricks-dolly-15k and released base and instruct checkpoints publicly.',
      'Measured WikiText-2 perplexity of 74.57 on the base checkpoint.',
    ],
  },
];
