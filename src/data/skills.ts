export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java'],
  },
  {
    label: 'Systems',
    items: ['APIs', 'Git', 'Linux', 'Docker', 'CI/CD'],
  },
  {
    label: 'ML / Data',
    items: ['AST analysis', 'LLM tooling', 'Data structures', 'Pandas'],
  },
  {
    label: 'Tools',
    items: ['GitHub Actions', 'Astro', 'Vercel', 'VS Code / Cursor'],
  },
];
