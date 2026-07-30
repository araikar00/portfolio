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
    degree: 'B.S. in Mathematics and Computer Science',
    location: 'La Jolla, CA',
    start: '2022',
    end: '2026',
    details: [
      'Coursework: Data Structures & Algorithms, Databases, Machine Learning, Operating Systems',
      'Focus areas: software engineering, applied ML, and systems for reliable production software',
    ],
  },
];
