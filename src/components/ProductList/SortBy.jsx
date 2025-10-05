import React, { useState } from 'react';
import { ArrowUpDown, ChevronDown } from 'lucide-react';

export const SortBy = () => {
  const [sortBy, setSortBy] = useState('Featured');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Release Date', 'Avg. Rating'];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-emerald-300 transition-colors"
      >
        <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
        <span className="text-sm font-medium text-gray-500">Sort by:</span>
        <span className="text-sm font-medium text-gray-600">{sortBy}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-full whitespace-nowrap">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSortBy(option);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-sm text-left hover:bg-emerald-50 transition-colors ${sortBy === option ? 'text-emerald-600 font-semibold' : 'text-gray-600'
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
