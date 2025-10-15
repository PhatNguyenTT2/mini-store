import React, { useState, useRef, useEffect } from 'react';
import { AddSupplierModal } from './AddSupplierModal';

export const SupplierList = ({ suppliers = [], onSort, sortField, sortOrder, addModalOpen = false, onCloseAddModal, onAddSuccess }) => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Format: 'action-{supplierId}'
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef(null);

  // Handle sort click
  const handleSortClick = (field) => {
    if (onSort) {
      onSort(field);
    }
  };

  // Get sort icon with color
  const getSortIcon = (field) => {
    if (sortField !== field) {
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
          <path d="M6 3V9M6 3L4 5M6 3L8 5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    if (sortOrder === 'asc') {
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
          <path d="M6 9V3M6 3L4 5M6 3L8 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    } else {
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
          <path d="M6 3V9M6 9L4 7M6 9L8 7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
  };

  // Toggle dropdown
  const toggleDropdown = (dropdownId, event) => {
    if (activeDropdown === dropdownId) {
      setActiveDropdown(null);
    } else {
      const buttonRect = event.currentTarget.getBoundingClientRect();
      const leftPosition = buttonRect.right - 160; // 160px is dropdown width

      setDropdownPosition({
        top: buttonRect.bottom + 4,
        left: leftPosition
      });
      setActiveDropdown(dropdownId);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Format currency
  const formatCurrency = (amount) => {
    if (!amount && amount !== 0) return '$0';
    return `$${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  // Get debt status color
  const getDebtStatusColor = (currentDebt, creditLimit) => {
    if (!currentDebt || currentDebt === 0) return 'text-gray-600';

    const debtRatio = currentDebt / creditLimit;
    if (debtRatio >= 0.8) return 'text-red-600 font-semibold';
    if (debtRatio >= 0.5) return 'text-orange-600';
    return 'text-blue-600';
  };

  // Format address as "street, city" when nested object is provided
  const formatAddress = (supplier) => {
    const addr = supplier.address;
    if (!addr) return 'N/A';
    // If already a string from formatter
    if (typeof addr === 'string') return addr || 'N/A';
    const street = addr.street?.trim() || '';
    const city = addr.city?.trim() || '';
    const combined = [street, city].filter(Boolean).join(', ');
    return combined || 'N/A';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Scrollable Container - overflow-x-auto allows horizontal scroll */}
      <div className="overflow-x-auto rounded-lg">
        <div className="min-w-[1290px]">
          {/* Table Header */}
          <div className="flex items-center h-[34px] bg-gray-50 border-b border-gray-200">
            {/* ID Column - Sortable */}
            <div
              className="w-[140px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('supplierCode')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                ID
                {getSortIcon('supplierCode')}
              </p>
            </div>

            {/* Name Column - Sortable */}
            <div
              className="flex-1 min-w-[180px] px-3 flex items-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('companyName')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Name
                {getSortIcon('companyName')}
              </p>
            </div>

            {/* Email Column - Sortable */}
            <div
              className="flex-1 min-w-[180px] px-3 flex items-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('email')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Email
                {getSortIcon('email')}
              </p>
            </div>

            {/* Phone Column - Sortable */}
            <div
              className="w-[160px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('phone')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Phone
                {getSortIcon('phone')}
              </p>
            </div>

            {/* Address Column */}
            <div className="flex-1 min-w-[240px] px-3 flex items-center">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Address
              </p>
            </div>

            {/* Credit Limit Column - Sortable */}
            <div
              className="w-[120px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('creditLimit')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Credit Limit
                {getSortIcon('creditLimit')}
              </p>
            </div>

            {/* Current Debt Column - Sortable */}
            <div
              className="w-[120px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('currentDebt')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Current Debt
                {getSortIcon('currentDebt')}
              </p>
            </div>

            {/* Actions Column */}
            <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Actions
              </p>
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {suppliers.map((supplier, index) => {
              return (
                <div
                  key={supplier.id}
                  className={`flex items-center h-[60px] hover:bg-gray-50 transition-colors ${index !== suppliers.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                >
                  {/* ID - Display supplierCode */}
                  <div className="w-[140px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-emerald-600 leading-[20px]">
                      {supplier.supplierCode}
                    </p>
                  </div>

                  {/* Name */}
                  <div className="flex-1 min-w-[180px] px-3 flex items-center">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px] truncate">
                      {supplier.companyName}
                    </p>
                  </div>

                  {/* Email */}
                  <div className="flex-1 min-w-[180px] px-3 flex items-center">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px] truncate">
                      {supplier.email}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="w-[160px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px] truncate">
                      {supplier.phone || 'N/A'}
                    </p>
                  </div>

                  {/* Address */}
                  <div className="flex-1 min-w-[240px] px-3 flex items-center">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px] truncate">
                      {formatAddress(supplier)}
                    </p>
                  </div>

                  {/* Credit Limit */}
                  <div className="w-[120px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                      {formatCurrency(supplier.creditLimit)}
                    </p>
                  </div>

                  {/* Current Debt */}
                  <div className="w-[120px] px-3 flex items-center flex-shrink-0">
                    <p className={`text-[13px] font-normal font-['Poppins',sans-serif] leading-[20px] ${getDebtStatusColor(supplier.currentDebt, supplier.creditLimit)}`}>
                      {formatCurrency(supplier.currentDebt)}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
                    <button
                      onClick={(e) => toggleDropdown(`action-${supplier.id}`, e)}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                      title="Actions"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="8" r="1.5" fill="#6B7280" />
                        <circle cx="8" cy="8" r="1.5" fill="#6B7280" />
                        <circle cx="13" cy="8" r="1.5" fill="#6B7280" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {suppliers.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500 text-[13px] font-['Poppins',sans-serif]">
                No suppliers found
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Position Dropdown Menus - Rendered outside table container */}
      {activeDropdown && (() => {
        // Find the supplier based on activeDropdown ID
        const supplier = suppliers.find(s => activeDropdown === `action-${s.id}`);

        if (!supplier) return null;

        // Render Actions Dropdown
        return (
          <div
            ref={dropdownRef}
            className="fixed w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-[9999]"
            style={{
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`
            }}
          >
            <button
              onClick={() => {
                console.log('View supplier:', supplier.id);
                setActiveDropdown(null);
              }}
              className="w-full px-4 py-2 text-left text-[12px] font-['Poppins',sans-serif] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8C1 8 3.54545 3 8 3C12.4545 3 15 8 15 8C15 8 12.4545 13 8 13C3.54545 13 1 8 1 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View
            </button>

            <button
              onClick={() => {
                console.log('Edit supplier:', supplier.id);
                setActiveDropdown(null);
              }}
              className="w-full px-4 py-2 text-left text-[12px] font-['Poppins',sans-serif] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1592 1.49653 13.3879 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.383 14.4084 2.61178C14.5032 2.84055 14.552 3.08575 14.552 3.33337C14.552 3.58099 14.5032 3.82619 14.4084 4.05497C14.3137 4.28374 14.1748 4.49161 13.9997 4.66671L5.33301 13.3334L1.33301 14.6667L2.66634 10.6667L11.333 2.00004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Edit
            </button>

            <div className="border-t border-gray-200 my-1"></div>

            <button
              onClick={() => {
                if (window.confirm(`Are you sure you want to delete supplier ${supplier.supplierCode}?`)) {
                  console.log('Delete supplier:', supplier.id);
                }
                setActiveDropdown(null);
              }}
              className="w-full px-4 py-2 text-left text-[12px] font-['Poppins',sans-serif] text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4H3.33333H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.33301 4.00004V2.66671C5.33301 2.31309 5.47348 1.97395 5.72353 1.7239C5.97358 1.47385 6.31272 1.33337 6.66634 1.33337H9.33301C9.68663 1.33337 10.0258 1.47385 10.2758 1.7239C10.5259 1.97395 10.6663 2.31309 10.6663 2.66671V4.00004M12.6663 4.00004V13.3334C12.6663 13.687 12.5259 14.0261 12.2758 14.2762C12.0258 14.5262 11.6866 14.6667 11.333 14.6667H4.66634C4.31272 14.6667 3.97358 14.5262 3.72353 14.2762C3.47348 14.0261 3.33301 13.687 3.33301 13.3334V4.00004H12.6663Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Delete
            </button>
          </div>
        );
      })()}

      {/* Add Supplier Modal (controlled by parent) */}
      <AddSupplierModal
        isOpen={addModalOpen}
        onClose={onCloseAddModal}
        onSuccess={onAddSuccess}
      />
    </div>
  );
};
