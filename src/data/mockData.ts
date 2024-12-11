import { InterviewExperience } from '../types';

export const experiences: InterviewExperience[] = [
  {
    id: '1',
    company: 'Google',
    role: 'Software Engineer',
    date: '2024-03-15',
    difficulty: 'Hard',
    rounds: 4,
    experience: 'The interview process consisted of 4 rounds. Started with a technical screening, followed by 3 coding rounds focusing on algorithms, system design, and behavioral questions.',
    author: 'John Doe',
    topics: ['Algorithms', 'System Design', 'Data Structures']
  },
  {
    id: '2',
    company: 'Microsoft',
    role: 'Frontend Developer',
    date: '2024-03-10',
    difficulty: 'Medium',
    rounds: 3,
    experience: 'Had three rounds focusing on React, JavaScript fundamentals, and a practical coding exercise. The interviewers were friendly and helpful.',
    author: 'Jane Smith',
    topics: ['React', 'JavaScript', 'CSS']
  }
];