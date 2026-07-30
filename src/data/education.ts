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
    start: '2022',
    end: '2026',
    details: [
      'Relevant coursework: CSE100 Data Structures and Algorithms, Databases, Machine Learning',
      'Update this entry with your school name, GPA (if strong), and notable coursework or honors.',
    ],
  },
];
