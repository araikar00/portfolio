export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  role: string;
  outcome: string;
  tech: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'llm-auditor',
    name: 'LLM Auditor',
    tagline: 'Governance pipeline for AI-generated code',
    problem:
      'AI coding tools ship fast — and can hallucinate secrets, auth gaps, and unsafe shell calls into production. Teams lack a local + CI gate that proves what was machine-written and whether it is safe.',
    role:
      'Designed and built the full pipeline: provenance tracking via Git hooks, AST-based static analysis, Docker sandbox execution, and CI reporting for pull requests.',
    outcome:
      'A developer-facing audit tool that flags AI-authored diffs, scores risk from AST patterns, sandboxes suspicious changes, and posts Markdown risk reports on PRs.',
    tech: ['Python', 'AST', 'Docker', 'Git Hooks', 'GitHub Actions'],
    href: 'https://github.com/araikar',
    featured: true,
  },
  {
    slug: 'portfolio',
    name: 'Personal Portfolio',
    tagline: 'Fast static site for SWE applications',
    problem:
      'Recruiters and hiring managers need a clear, fast signal of who you are, what you have built, and how to get your resume — without a noisy multi-page brochure.',
    role:
      'Designed and implemented a content-driven Astro site with strong performance, accessible layout, and one-click resume hosting.',
    outcome:
      'A production portfolio optimized for SWE/ML outreach: selected work, experience, education, and resume PDF on a CDN-backed deploy.',
    tech: ['Astro', 'TypeScript', 'Vercel'],
    featured: true,
  },
];
