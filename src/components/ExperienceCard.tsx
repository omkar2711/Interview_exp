import React from 'react';
import { Calendar, Building2, BarChart3, Users } from 'lucide-react';
import { InterviewExperience } from '../types';

interface Props {
  experience: InterviewExperience;
}

export function ExperienceCard({ experience }: Props) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{experience.role}</h3>
          <div className="flex items-center mt-2 text-gray-600">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{experience.company}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(experience.difficulty)}`}>
          {experience.difficulty}
        </span>
      </div>
      
      <div className="flex items-center text-gray-600 mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{new Date(experience.date).toLocaleDateString()}</span>
        <Users className="w-4 h-4 ml-4 mr-2" />
        <span>{experience.rounds} rounds</span>
      </div>

      <p className="text-gray-700 mb-4">{experience.experience}</p>

      <div className="flex flex-wrap gap-2">
        {experience.topics.map((topic) => (
          <span key={topic} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Shared by {experience.author}
      </div>
    </div>
  );
}