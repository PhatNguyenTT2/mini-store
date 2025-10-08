import React, { useState, useRef, useEffect } from 'react';

export const OrderList = ({ orders = [], onStatusChange, onPaymentStatusChange, onSort, sortField, sortOrder }) => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Format: 'order-{orderId}' hoặc 'payment-{orderId}'
  const [pendingChanges, setPendingChanges] = useState({}); // Track pending changes
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
  const toggleDropdown = (dropdownId) => {
    console.log('Toggle dropdown:', dropdownId);
    console.log('Current activeDropdown:', activeDropdown);
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  // Handle order status change
  const handleOrderStatusChange = (orderId, newStatus) => {
    if (onStatusChange) {
      onStatusChange(orderId, newStatus);
    }
    setActiveDropdown(null);
  };

  // Handle payment status change
  const handlePaymentStatusChange = (orderId, newPaymentStatus) => {
    if (onPaymentStatusChange) {
      onPaymentStatusChange(orderId, newPaymentStatus);
    }
    setActiveDropdown(null);
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

  // Get order status badge styling
  const getOrderStatusStyles = (status) => {
    const statusMap = {
      pending: 'bg-[#fbbf24]',      // Yellow
      processing: 'bg-[#3b82f6]',   // Blue
      shipping: 'bg-[#8b5cf6]',     // Purple
      delivered: 'bg-[#10b981]',    // Green
      cancelled: 'bg-[#ef4444]',    // Red
    };
    return statusMap[status?.toLowerCase()] || 'bg-gray-500';
  };

  // Get payment status badge styling
  const getPaymentStatusStyles = (paymentStatus) => {
    const statusMap = {
      pending: 'bg-[#fbbf24]',      // Yellow
      paid: 'bg-[#10b981]',         // Green
      failed: 'bg-[#ef4444]',       // Red
      refunded: 'bg-[#f59e0b]',     // Orange
    };
    return statusMap[paymentStatus?.toLowerCase()] || 'bg-gray-500';
  };

  // Order status options for dropdown
  const orderStatusOptions = [
    { value: 'pending', label: 'Pending', color: 'bg-[#fbbf24]' },
    { value: 'processing', label: 'Processing', color: 'bg-[#3b82f6]' },
    { value: 'shipping', label: 'Shipping', color: 'bg-[#8b5cf6]' },
    { value: 'delivered', label: 'Delivered', color: 'bg-[#10b981]' },
    { value: 'cancelled', label: 'Cancelled', color: 'bg-[#ef4444]' },
  ];

  // Payment status options for dropdown
  const paymentStatusOptions = [
    { value: 'pending', label: 'Pending', color: 'bg-[#fbbf24]' },
    { value: 'paid', label: 'Paid', color: 'bg-[#10b981]' },
    { value: 'failed', label: 'Failed', color: 'bg-[#ef4444]' },
    { value: 'refunded', label: 'Refunded', color: 'bg-[#f59e0b]' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Scrollable Container */}
      <div className="overflow-x-auto overflow-y-visible">
        <div className="min-w-[1200px]">
          {/* Table Header */}
          <div className="flex items-center h-[34px] bg-gray-50 border-b border-gray-200">
            {/* ID Column - Sortable */}
            <div
              className="w-[120px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('orderNumber')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                ID
                {getSortIcon('orderNumber')}
              </p>
            </div>

            {/* Name Column - Sortable */}
            <div
              className="flex-1 min-w-[200px] px-3 flex items-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('customerName')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Name
                {getSortIcon('customerName')}
              </p>
            </div>

            {/* Date Column - Sortable */}
            <div
              className="w-[180px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('date')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Date
                {getSortIcon('date')}
              </p>
            </div>

            {/* Total Column - Sortable */}
            <div
              className="w-[140px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('total')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Total
                {getSortIcon('total')}
              </p>
            </div>

            {/* Order Status Column */}
            <div className="w-[160px] px-3 flex items-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Order Status
              </p>
            </div>

            {/* Payment Status Column */}
            <div className="w-[160px] px-3 flex items-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Payment
              </p>
            </div>

            {/* Actions Column */}
            <div className="w-[140px] px-3 flex items-center justify-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Actions
              </p>
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {orders.map((order, index) => {
              const orderDropdownId = `order-${order.id}`;
              const paymentDropdownId = `payment-${order.id}`;

              return (
                <div
                  key={order.id}
                  className={`flex items-center h-[60px] hover:bg-gray-50 transition-colors ${index !== orders.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                >
                  {/* ID - Display orderNumber */}
                  <div className="w-[120px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-emerald-600 leading-[20px]">
                      {order.orderNumber || `#${order.id}`}
                    </p>
                  </div>

                  {/* Name */}
                  <div className="flex-1 min-w-[200px] px-3 flex items-center">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px] truncate">
                      {order.customerName}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="w-[180px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                      {order.date}
                    </p>
                  </div>

                  {/* Total */}
                  <div className="w-[140px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                      ${order.total}
                    </p>
                  </div>

                  {/* Order Status Badge with Dropdown */}
                  <div className="w-[160px] px-3 flex items-center flex-shrink-0 relative">
                    <div ref={activeDropdown === orderDropdownId ? dropdownRef : null}>
                      <button
                        onClick={() => toggleDropdown(orderDropdownId)}
                        className={`${getOrderStatusStyles(order.status)} px-2 py-1 rounded inline-flex items-center gap-1 cursor-pointer hover:opacity-90 transition-opacity`}
                      >
                        <span className="text-[9px] font-bold font-['Poppins',sans-serif] text-white leading-[10px] uppercase">
                          {order.status}
                        </span>
                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L4 4L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* Dropdown Menu cho Order Status - fixed position để không bị cắt */}
                      {activeDropdown === orderDropdownId && (
                        <div
                          className="fixed bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-[9999] min-w-[140px]"
                          style={{
                            top: `${dropdownRef.current?.getBoundingClientRect().bottom + 4}px`,
                            left: `${dropdownRef.current?.getBoundingClientRect().left}px`
                          }}
                        >
                          {orderStatusOptions.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => handleOrderStatusChange(order.id, option.value)}
                              className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-2"
                            >
                              <span className={`${option.color} w-2 h-2 rounded-full`}></span>
                              <span className="text-[12px] font-['Poppins',sans-serif] text-[#212529] capitalize">
                                {option.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Payment Status Badge with Dropdown */}
                  <div className="w-[160px] px-3 flex items-center flex-shrink-0 relative">
                    <div ref={activeDropdown === paymentDropdownId ? dropdownRef : null}>
                      <button
                        onClick={() => toggleDropdown(paymentDropdownId)}
                        className={`${getPaymentStatusStyles(order.paymentStatus)} px-2 py-1 rounded inline-flex items-center gap-1 cursor-pointer hover:opacity-90 transition-opacity`}
                      >
                        <span className="text-[9px] font-bold font-['Poppins',sans-serif] text-white leading-[10px] uppercase">
                          {order.paymentStatus || 'pending'}
                        </span>
                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L4 4L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* Dropdown Menu cho Payment Status - fixed position để không bị cắt */}
                      {activeDropdown === paymentDropdownId && (
                        <div
                          className="fixed bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-[9999] min-w-[120px]"
                          style={{
                            top: `${dropdownRef.current?.getBoundingClientRect().bottom + 4}px`,
                            left: `${dropdownRef.current?.getBoundingClientRect().left}px`
                          }}
                        >
                          {paymentStatusOptions.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => handlePaymentStatusChange(order.id, option.value)}
                              className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-2"
                            >
                              <span className={`${option.color} w-2 h-2 rounded-full`}></span>
                              <span className="text-[12px] font-['Poppins',sans-serif] text-[#212529] capitalize">
                                {option.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="w-[140px] px-3 flex items-center justify-center flex-shrink-0 relative">
                    <div ref={activeDropdown === `action-${order.id}` ? dropdownRef : null}>
                      <button
                        onClick={() => toggleDropdown(`action-${order.id}`)}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                        title="Actions"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="3" cy="8" r="1.5" fill="#6B7280" />
                          <circle cx="8" cy="8" r="1.5" fill="#6B7280" />
                          <circle cx="13" cy="8" r="1.5" fill="#6B7280" />
                        </svg>
                      </button>

                      {/* Dropdown Menu for Actions */}
                      {activeDropdown === `action-${order.id}` && (
                        <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
                          <button
                            onClick={() => {
                              console.log('View order:', order.id);
                              setActiveDropdown(null);
                            }}
                            className="w-full px-4 py-2 text-left text-[12px] font-['Poppins',sans-serif] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
                          >
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 8C1 8 3 4 8 4C13 4 15 8 15 8C15 8 13 12 8 12C3 12 1 8 1 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            View
                          </button>

                          <div className="border-t border-gray-200 my-1"></div>

                          <button
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to delete order ${order.orderNumber}?`)) {
                                console.log('Delete order:', order.id);
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
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {orders.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500 text-[13px] font-['Poppins',sans-serif]">
                No orders found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
