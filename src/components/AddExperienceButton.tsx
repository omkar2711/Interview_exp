import React from 'react';
import { PlusCircle } from 'lucide-react';

interface Props {
  onClick: () => void;
}

export function AddExperienceButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <PlusCircle className="w-5 h-5" />
      Share Your Experience
    </button>
  );
}