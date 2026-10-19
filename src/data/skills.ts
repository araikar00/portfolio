export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C++', 'SQL'],
  },
  {
    label: 'Frameworks & APIs',
    items: ['Spring Boot', 'React', 'Node.js', 'FastAPI', 'REST APIs', 'OpenAPI'],
  },
  {
    label: 'AI, ML & Data',
    items: ['LangChain', 'RAG', 'Gemini', 'LightGBM', 'Scikit-Learn', 'Pandas'],
  },
  {
    label: 'Cloud & Tools',
    items: ['AWS', 'GCP', 'Docker', 'PostgreSQL', 'MongoDB', 'Kafka', 'GitHub Actions'],
  },
];
