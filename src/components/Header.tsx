import React from 'react';
import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Interview Insights</h1>
        </div>
        <p className="text-blue-100 text-lg">
          Learn from real interview experiences shared by fellow students
        </p>
      </div>
    </header>
  );
}