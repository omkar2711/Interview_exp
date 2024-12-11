export interface InterviewExperience {
  id: string;
  company: string;
  role: string;
  date: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rounds: number;
  experience: string;
  author: string;
  topics: string[];
}

export interface FilterOptions {
  company: string;
  difficulty: string;
}