export type Education = {
  school: string;
  degree: string;
  location?: string;
  start: string;
  end: string;
  details?: string[];
};

export const education: Education[] = [
  {
    school: 'University of California, San Diego',
    degree: 'B.S. in Computer Science & Mathematics',
    location: 'La Jolla, CA',
    start: '2022',
    end: 'June 2026',
    details: [
      'Relevant Coursework: Advanced Data Structures & Algorithms, Computer Organization & Assembly Language, Object-Oriented Programming, Probability Theory, Mathematical Reasoning & System Analysis, Discrete Mathematics',
    ],
  },
];
