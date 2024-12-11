import React, { useState } from 'react';
import { X } from 'lucide-react';
import { InterviewExperience } from '../types';

interface Props {
  onSubmit: (experience: Omit<InterviewExperience, 'id'>) => void;
  onClose: () => void;
}

export function AddExperienceForm({ onSubmit, onClose }: Props) {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    date: new Date().toISOString().split('T')[0],
    difficulty: 'Medium' as InterviewExperience['difficulty'],
    rounds: '1',
    experience: '',
    author: '',
    topics: [] as string[],
    currentTopic: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { currentTopic, rounds, ...rest } = formData;
    onSubmit({
      ...rest,
      rounds: parseInt(rounds, 10)
    });
    onClose();
  };

  const handleRoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setFormData(prev => ({ ...prev, rounds: value }));
    }
  };

  const addTopic = () => {
    if (formData.currentTopic.trim() && !formData.topics.includes(formData.currentTopic.trim())) {
      setFormData(prev => ({
        ...prev,
        topics: [...prev.topics, prev.currentTopic.trim()],
        currentTopic: ''
      }));
    }
  };

  const removeTopic = (topicToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      topics: prev.topics.filter(topic => topic !== topicToRemove)
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Share Your Interview Experience</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  required
                  type="text"
                  value={formData.company}
                  onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <input
                  required
                  type="text"
                  value={formData.role}
                  onChange={e => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Interview Date</label>
                <input
                  required
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                <select
                  value={formData.difficulty}
                  onChange={e => setFormData(prev => ({ ...prev, difficulty: e.target.value as InterviewExperience['difficulty'] }))}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Rounds</label>
                <input
                  required
                  type="text"
                  pattern="\d+"
                  min="1"
                  value={formData.rounds}
                  onChange={handleRoundsChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  required
                  type="text"
                  value={formData.author}
                  onChange={e => setFormData(prev => ({ ...prev, author: e.target.value }))}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Topics Covered</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={formData.currentTopic}
                  onChange={e => setFormData(prev => ({ ...prev, currentTopic: e.target.value }))}
                  placeholder="Add a topic"
                  className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addTopic())}
                />
                <button
                  type="button"
                  onClick={addTopic}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.topics.map(topic => (
                  <span
                    key={topic}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {topic}
                    <button
                      type="button"
                      onClick={() => removeTopic(topic)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
              <textarea
                required
                value={formData.experience}
                onChange={e => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                placeholder="Share your interview experience..."
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}