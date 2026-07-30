export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    label: 'Backend & Systems',
    items: ['Spring Boot', 'REST APIs', 'OpenAPI', 'Kafka', 'MongoDB'],
  },
  {
    label: 'ML / Data',
    items: ['LightGBM', 'LangChain', 'RAG', 'Pandas', 'Gemini'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Docker', 'GitHub Actions', 'JUnit', 'Mockito'],
  },
];
