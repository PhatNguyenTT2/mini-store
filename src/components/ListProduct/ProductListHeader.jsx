import React, { useState, useRef, useEffect } from 'react';

const ProductListHeader = ({
  itemsPerPage,
  setItemsPerPage,
  searchQuery,
  setSearchQuery,
  onExport,
  onPrint,
  onAdd
}) => {
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  const [showItemsDropdown, setShowItemsDropdown] = useState(false);
  const actionsDropdownRef = useRef(null);
  const itemsDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (actionsDropdownRef.current && !actionsDropdownRef.current.contains(event.target)) {
        setShowActionsDropdown(false);
      }
      if (itemsDropdownRef.current && !itemsDropdownRef.current.contains(event.target)) {
        setShowItemsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between gap-3">
        {/* Left Side - Actions Dropdown */}
        <div className="relative" ref={actionsDropdownRef}>
          <button
            onClick={() => setShowActionsDropdown(!showActionsDropdown)}
            className="h-[36px] px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-['Poppins',sans-serif] text-[13px] font-medium transition-colors flex items-center gap-2"
          >
            Actions
            <svg
              className={`w-4 h-4 transition-transform ${showActionsDropdown ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showActionsDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
              <button
                onClick={() => {
                  onAdd();
                  setShowActionsDropdown(false);
                }}
                className="w-full px-4 py-2 text-left text-[13px] font-['Poppins',sans-serif] text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Product
              </button>
              <button
                onClick={() => {
                  onExport();
                  setShowActionsDropdown(false);
                }}
                className="w-full px-4 py-2 text-left text-[13px] font-['Poppins',sans-serif] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export CSV
              </button>
              <button
                onClick={() => {
                  onPrint();
                  setShowActionsDropdown(false);
                }}
                className="w-full px-4 py-2 text-left text-[13px] font-['Poppins',sans-serif] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
            </div>
          )}
        </div>

        {/* Middle - Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by SKU or Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[36px] pl-10 pr-4 border border-gray-300 rounded-lg font-['Poppins',sans-serif] text-[13px] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Right Side - Items Per Page */}
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-['Poppins',sans-serif] text-gray-600">Show</span>
          <div className="relative" ref={itemsDropdownRef}>
            <button
              onClick={() => setShowItemsDropdown(!showItemsDropdown)}
              className="h-[36px] px-4 border border-gray-300 rounded-lg font-['Poppins',sans-serif] text-[13px] text-gray-700 hover:border-gray-400 transition-colors flex items-center gap-2 min-w-[80px] justify-between"
            >
              {itemsPerPage}
              <svg
                className={`w-4 h-4 transition-transform ${showItemsDropdown ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showItemsDropdown && (
              <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
                {[10, 20, 50, 100].map((value) => (
                  <button
                    key={value}
                    onClick={() => {
                      setItemsPerPage(value);
                      setShowItemsDropdown(false);
                    }}
                    className={`w-full px-4 py-2 text-[13px] font-['Poppins',sans-serif] text-left hover:bg-gray-50 transition-colors ${itemsPerPage === value ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700'
                      }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListHeader;
