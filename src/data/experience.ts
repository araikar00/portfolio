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
    role: 'Software Engineer',
    location: 'San Francisco, CA',
    start: 'August 2026',
    end: 'Present',
    logo: '/logos/wells-fargo.svg',
    tags: ['Java', 'Spring Boot', 'Microservices', 'ML'],
    description: [
      'Incoming full-time Software Engineer.',
      'Focus areas include building and shipping production software in a large-scale enterprise environment.',
    ],
  },
  {
    company: 'Wells Fargo',
    role: 'Software Engineer Intern',
    location: 'San Francisco, CA',
    start: 'May 2025',
    end: 'August 2025',
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
