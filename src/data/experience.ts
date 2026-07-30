export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: 'Wells Fargo',
    role: 'Software Engineer',
    location: 'United States',
    start: 'Aug 2026',
    end: 'Present',
    bullets: [
      'Incoming full-time Software Engineer after receiving a return offer.',
      'Focus areas include building and shipping production software in a large-scale enterprise environment.',
    ],
  },
  {
    company: 'Wells Fargo',
    role: 'Software Engineer Intern',
    location: 'United States',
    start: '2025',
    end: '2025',
    bullets: [
      'Completed a software engineering internship contributing to production systems and team delivery.',
      'Collaborated with engineers on design, implementation, testing, and code review practices.',
      'Earned a full-time return offer based on internship performance.',
    ],
  },
];
