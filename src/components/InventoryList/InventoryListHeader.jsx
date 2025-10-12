import React, { useState } from 'react';

export const InventoryListHeader = ({
  itemsPerPage,
  onItemsPerPageChange,
  searchQuery,
  onSearchChange,
  onSearch,
  onStockIn,
  onAdjust,
  filterView,
  onFilterViewChange
}) => {
  const [localSearch, setLocalSearch] = useState(searchQuery || '');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(localSearch);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    if (onSearchChange) {
      onSearchChange(value);
    }

    // Auto search when empty
    if (value === '' && onSearch) {
      onSearch('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4">
        {/* Top Row - Title and Actions */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] font-semibold font-['Poppins',sans-serif] text-[#212529]">
            Inventory Management
          </h2>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onStockIn}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-[13px] font-['Poppins',sans-serif] font-medium flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Stock In
            </button>

            <button
              onClick={onAdjust}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-[13px] font-['Poppins',sans-serif] font-medium flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.333 2C11.5081 1.82489 11.716 1.686 11.9447 1.59124C12.1735 1.49647 12.4187 1.4477 12.6663 1.4477C12.914 1.4477 13.1592 1.49647 13.3879 1.59124C13.6167 1.686 13.8246 1.82489 13.9997 2C14.1748 2.17511 14.3137 2.38298 14.4084 2.61176C14.5032 2.84053 14.552 3.08574 14.552 3.33336C14.552 3.58098 14.5032 3.82619 14.4084 4.05496C14.3137 4.28374 14.1748 4.49161 13.9997 4.66672L5.33301 13.3334L1.33301 14.6667L2.66634 10.6667L11.333 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Adjust Stock
            </button>
          </div>
        </div>

        {/* Bottom Row - Search and Filters */}
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Items per page and Search */}
          <div className="flex items-center gap-4 flex-1">
            {/* Items per page */}
            <div className="flex items-center gap-2">
              <label className="text-[13px] font-['Poppins',sans-serif] text-[#7e7e7e] whitespace-nowrap">
                Show
              </label>
              <select
                value={itemsPerPage}
                onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-[13px] font-['Poppins',sans-serif] text-[#7e7e7e] whitespace-nowrap">
                entries
              </span>
            </div>

            {/* Search */}
            <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  value={localSearch}
                  onChange={handleSearchChange}
                  placeholder="Search by SKU or product name..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 14L11.1 11.1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </form>
          </div>

          {/* Right side - View Filters */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onFilterViewChange('all')}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-['Poppins',sans-serif] font-medium transition-colors ${filterView === 'all'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              All Items
            </button>
            <button
              onClick={() => onFilterViewChange('low-stock')}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-['Poppins',sans-serif] font-medium transition-colors ${filterView === 'low-stock'
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              Low Stock
            </button>
            <button
              onClick={() => onFilterViewChange('out-of-stock')}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-['Poppins',sans-serif] font-medium transition-colors ${filterView === 'out-of-stock'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              Out of Stock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

