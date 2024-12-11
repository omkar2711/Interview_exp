import React, { useState } from 'react';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { ExperienceCard } from './components/ExperienceCard';
import { AddExperienceButton } from './components/AddExperienceButton';
import { AddExperienceForm } from './components/AddExperienceForm';
import { useExperiences } from './hooks/useExperiences';
import { FilterOptions } from './types';

function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    company: '',
    difficulty: ''
  });
  const [showForm, setShowForm] = useState(false);
  const { experiences, addExperience } = useExperiences();

  const filteredExperiences = experiences.filter(exp => {
    const matchesCompany = exp.company.toLowerCase().includes(filters.company.toLowerCase());
    const matchesDifficulty = !filters.difficulty || exp.difficulty === filters.difficulty;
    return matchesCompany && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Filters filters={filters} onFilterChange={setFilters} />
          <AddExperienceButton onClick={() => setShowForm(true)} />
        </div>
        
        <div className="space-y-6">
          {filteredExperiences.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">No interview experiences found matching your criteria.</p>
            </div>
          ) : (
            filteredExperiences.map(experience => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))
          )}
        </div>

        {showForm && (
          <AddExperienceForm
            onSubmit={addExperience}
            onClose={() => setShowForm(false)}
          />
        )}
      </main>
    </div>
  );
}

export default App;