import React, { useState } from 'react';

export const OrderListHeader = () => {
  const [sortBy, setSortBy] = useState('Sort by');
  const [itemsPerPage, setItemsPerPage] = useState('10');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between gap-3">
        {/* Title */}
        <div className="flex items-center">
          <h2 className="text-[13px] font-normal font-['Poppins',sans-serif] text-black leading-[20px] whitespace-nowrap">
            All Orders
          </h2>
        </div>

        {/* Controls Container */}
        <div className="flex items-center gap-2 flex-1 ml-4">
          {/* Sort By Dropdown */}
          <div className="relative w-[120px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full h-[36px] bg-white border border-[#ced4da] rounded-lg px-3 py-2 text-[12px] font-['Poppins',sans-serif] text-[#212529] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="Sort by">Sort by</option>
              <option value="date">Date</option>
              <option value="status">Status</option>
              <option value="customer">Customer</option>
              <option value="total">Total</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Items Per Page Dropdown */}
          <div className="relative w-[80px]">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
              className="w-full h-[36px] bg-white border border-[#ced4da] rounded-lg px-3 py-2 text-[12px] font-['Poppins',sans-serif] text-[#212529] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#212529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Search Input */}
          <div className="flex-1 max-w-[250px]">
            <div className="flex h-[36px]">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-white border border-[#ced4da] rounded-l-lg px-3 py-2 text-[12px] font-['Poppins',sans-serif] text-gray-900 placeholder:text-[#6c757d] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button
                className="w-[40px] bg-white border border-[#ced4da] border-l-0 rounded-r-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                onClick={() => {
                  // Handle search
                  console.log('Search:', searchQuery);
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 11.5C9.26142 11.5 11.5 9.26142 11.5 6.5C11.5 3.73858 9.26142 1.5 6.5 1.5C3.73858 1.5 1.5 3.73858 1.5 6.5C1.5 9.26142 3.73858 11.5 6.5 11.5Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 12.5L10.5 10.5"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Actions Button - CONVERTED from purple (#634c9f) to emerald */}
        <div className="relative ml-auto">
          <button className="h-[36px] px-4 bg-emerald-600 hover:bg-emerald-700 border border-emerald-600 rounded-lg text-white text-[12px] font-['Poppins',sans-serif] leading-[20px] flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 whitespace-nowrap">
            <span>Actions</span>
            <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L4 4L8 0H0Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
