import React from 'react';
import { Plus } from 'lucide-react';

export const ActionSection = () => {
  return (
    <button className="flex items-center bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
      <Plus className="w-5 h-5 mr-2" />
      Add Product
    </button>
  );
};
