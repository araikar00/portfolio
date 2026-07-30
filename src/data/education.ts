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
    school: 'University',
    degree: 'B.S. in Computer Science',
    start: '2022',
    end: '2026',
    details: [
      'Relevant coursework: Data Structures, Algorithms, Operating Systems, Databases, Machine Learning',
      'Update this entry with your school name, GPA (if strong), and notable coursework or honors.',
    ],
  },
];
