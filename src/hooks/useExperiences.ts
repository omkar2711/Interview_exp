import { useState } from 'react';
import { experiences as initialExperiences } from '../data/mockData';
import { InterviewExperience } from '../types';

export function useExperiences() {
  const [experiences, setExperiences] = useState<InterviewExperience[]>(initialExperiences);

  const addExperience = (newExperience: Omit<InterviewExperience, 'id'>) => {
    const experience: InterviewExperience = {
      ...newExperience,
      id: Date.now().toString(),
    };
    setExperiences(prev => [experience, ...prev]);
  };

  return {
    experiences,
    addExperience,
  };
}