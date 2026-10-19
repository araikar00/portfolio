export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  logo: string;
  tags: string[];
  description: string[];
};

export const experience: Experience[] = [
  {
    company: 'Wells Fargo',
    role: 'Software Engineer, Applied AI',
    location: 'San Francisco, CA',
    start: 'August 2026',
    end: 'Present',
    logo: '/logos/wells-fargo.svg',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Claude'],
    description: [
      'Shipped a ground-up enterprise estate management platform (React, Python, MongoDB) as the sole full-stack engineer, surfacing 100+ previously untracked end-of-life risks for Technology CIOs, VPs, and 2,000+ internal users.',
      'Cut design intake from 3+ days to under an hour across 300+ briefs by engineering a Claude Opus agent with tool calling, schema-validated JSON output, and streaming, replacing a manual, file-scattered intake process.',
      'Shipped the agentic intake platform (React, Node.js, Python, PostgreSQL) to 10+ product teams within weeks of pilot, persisting multi-turn conversation state in PostgreSQL so users can pause and resume intakes across sessions.',
      'Migrated a HITL approval workbench to an enterprise agentic platform in 3 days (React, Fluent UI, FastAPI), letting human reviewers approve or reject escalated actions from a customer-facing AI agent and unblocking platform work.',
      'Engineered a FastAPI agent-routing gateway with registry lookup, custom timeouts, and 24+ unit/E2E tests.',
    ],
  },
  {
    company: 'Wells Fargo',
    role: 'Software Engineer Intern',
    location: 'San Francisco, CA',
    start: 'June 2025',
    end: 'September 2025',
    logo: '/logos/wells-fargo.svg',
    tags: ['Java', 'Spring Boot', 'OpenAPI', 'LightGBM', 'JUnit'],
    description: [
      'Developed RESTful microservices with Java, Spring Boot, and OpenAPI, scaling performance for 4M+ BillPay users.',
      'Built 97% precision anomaly detection system using SPC and LightGBM, reducing customer financial risk.',
      'Achieved 100% JUnit coverage across BillPay modules using Mockito and dependency injection, improving reliability.',
      'Streamlined CI/CD workflow by instituting protected-branch rules and GitHub Actions for automated build and testing.',
    ],
  },
  {
    company: 'Albertsons Companies',
    role: 'Software Engineer Intern',
    location: 'Pleasanton, CA',
    start: 'June 2024',
    end: 'August 2024',
    logo: '/logos/albertsons.png',
    tags: ['Gemini', 'Kafka', 'MongoDB', 'LangChain', 'GitHub Actions'],
    description: [
      'Engineered GenerativeAI RAG Chatbot integrating Gemini LLM and external data, enhancing vendor automation.',
      'Optimized Kafka clusters and RESTful APIs transferring JSON payloads from MongoDB, reducing GPU usage by 15%.',
      'Automated text embedding and vector storage with LangChain, improving chatbot retrieval efficiency by 20%.',
      'Designed architecture diagrams and implemented CI/CD pipeline using GitHub Actions.',
    ],
  },
];
