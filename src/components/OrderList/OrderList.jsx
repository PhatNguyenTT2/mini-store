import React, { useState, useRef, useEffect } from 'react';

export const OrderList = ({ orders = [], onStatusChange, onPaymentStatusChange }) => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null); // Format: 'order-{orderId}' hoặc 'payment-{orderId}'
  const dropdownRef = useRef(null);

  // Toggle select all orders
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedOrders(orders.map(order => order.id));
    } else {
      setSelectedOrders([]);
    }
  };

  // Toggle individual order selection
  const handleSelectOrder = (orderId) => {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders(selectedOrders.filter(id => id !== orderId));
    } else {
      setSelectedOrders([...selectedOrders, orderId]);
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
      {/* Scrollable Container - Remove overflow-hidden để dropdown có thể hiển thị ra ngoài */}
      <div className="overflow-x-auto overflow-y-visible">
        <div className="min-w-[1360px]">
          {/* Table Header */}
          <div className="flex items-center h-[34px] bg-gray-50 border-b border-gray-200">
            {/* Checkbox Column */}
            <div className="w-[80px] px-3 flex items-center justify-center flex-shrink-0">
              <input
                type="checkbox"
                checked={selectedOrders.length === orders.length && orders.length > 0}
                onChange={handleSelectAll}
                className="w-[14px] h-[14px] bg-white border border-[rgba(0,0,0,0.25)] rounded-[3px] cursor-pointer"
              />
            </div>

            {/* ID Column */}
            <div className="w-[120px] px-3 flex items-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                ID
              </p>
            </div>

            {/* Name Column */}
            <div className="flex-1 min-w-[200px] px-3 flex items-center">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Name
              </p>
            </div>

            {/* Date Column */}
            <div className="w-[180px] px-3 flex items-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Date
              </p>
            </div>

            {/* Total Column */}
            <div className="w-[140px] px-3 flex items-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Total
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
                  {/* Checkbox */}
                  <div className="w-[80px] px-3 flex items-center justify-center flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => handleSelectOrder(order.id)}
                      className="w-[14px] h-[14px] bg-white border border-[rgba(0,0,0,0.25)] rounded-[3px] cursor-pointer"
                    />
                  </div>

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
                  <div className="w-[140px] px-3 flex items-center justify-center flex-shrink-0">
                    <button
                      className="p-2 rounded hover:bg-gray-200 transition-colors"
                      onClick={() => {
                        // TODO: View order details action
                        console.log('View order:', order.id);
                      }}
                      title="View Order"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 8C1 8 3 4 8 4C13 4 15 8 15 8C15 8 13 12 8 12C3 12 1 8 1 8Z"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
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
