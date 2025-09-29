import React from 'react';
import { Search, Bell, ShoppingCart, Plus } from 'lucide-react';

const HeaderAdmin = () => {
  return (
    <header className="bg-purple-50 flex items-center justify-between px-6 py-4">
      <div>
        <h1 className="text-2xl font-medium text-gray-800">Overview</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </div>
        </div>

        <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Add Product
        </button>
      </div>
    </header>
  );
};

export default HeaderAdmin;
