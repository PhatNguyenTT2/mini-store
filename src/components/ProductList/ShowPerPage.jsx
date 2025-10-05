import React, { useState } from 'react';
import { Grid, ChevronDown } from 'lucide-react';

export const ShowPerPage = ({ value = 8, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [8, 12, 16, 20];

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-emerald-300 transition-colors"
      >
        <Grid className="w-3.5 h-3.5 text-gray-500" />
        <span className="text-sm font-medium text-gray-500">Show:</span>
        <span className="text-sm font-medium text-gray-600">{value}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-full">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-2 text-sm text-left hover:bg-emerald-50 transition-colors ${value === option ? 'text-emerald-600 font-semibold' : 'text-gray-600'
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
