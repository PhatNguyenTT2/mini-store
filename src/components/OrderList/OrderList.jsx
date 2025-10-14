import React, { useState, useRef, useEffect } from 'react';
import { InvoiceModal } from '../OrderModals';

export const OrderList = ({ orders = [], onStatusChange, onSort, sortField, sortOrder, onEdit }) => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Format: 'order-{orderId}', 'payment-{orderId}', 'action-{orderId}'
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [pendingChanges, setPendingChanges] = useState({}); // Track pending changes
  const [viewItemsModal, setViewItemsModal] = useState(null); // Track which order's items to view
  const [viewDetailsModal, setViewDetailsModal] = useState(null); // Track which order to view invoice details
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
    console.log('Toggle dropdown:', dropdownId);
    console.log('Current activeDropdown:', activeDropdown);

    if (activeDropdown === dropdownId) {
      setActiveDropdown(null);
    } else {
      const buttonRect = event.currentTarget.getBoundingClientRect();

      // Determine position based on dropdown type
      let leftPosition;
      if (dropdownId.startsWith('order-') || dropdownId.startsWith('payment-')) {
        // For Order Status and Payment Status: show dropdown to the right of button
        leftPosition = buttonRect.left;
      } else {
        // For Actions: show dropdown aligned to the right (as before)
        leftPosition = buttonRect.right - 160; // 160px is dropdown width
      }

      setDropdownPosition({
        top: buttonRect.bottom + 4,
        left: leftPosition
      });
      setActiveDropdown(dropdownId);
    }
  };

  // Handle order status change
  const handleOrderStatusChange = (orderId, newStatus) => {
    if (onStatusChange) {
      onStatusChange(orderId, newStatus);
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



  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Scrollable Container - overflow-x-auto allows horizontal scroll */}
      <div className="overflow-x-auto rounded-lg">
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

            {/* Items Column */}
            <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                ITEMS
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
            <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Actions
              </p>
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {orders.map((order, index) => {
              const orderDropdownId = `order-${order.id}`;

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

                  {/* Items - View Icon */}
                  <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
                    <button
                      onClick={() => setViewItemsModal(order)}
                      className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 transition-colors"
                      title="View items"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-[13px] font-normal font-['Poppins',sans-serif]">
                        {order.items?.length || 0}
                      </span>
                    </button>
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
                  <div className="w-[160px] px-3 flex items-center flex-shrink-0">
                    <button
                      onClick={(e) => toggleDropdown(orderDropdownId, e)}
                      className={`${getOrderStatusStyles(order.status)} px-2 py-1 rounded inline-flex items-center gap-1 cursor-pointer hover:opacity-90 transition-opacity`}
                    >
                      <span className="text-[9px] font-bold font-['Poppins',sans-serif] text-white leading-[10px] uppercase">
                        {order.status}
                      </span>
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4 4L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  {/* Payment Status Badge (Read-only) */}
                  <div className="w-[160px] px-3 flex items-center flex-shrink-0">
                    <span
                      className={`${getPaymentStatusStyles(order.paymentStatus)} px-2 py-1 rounded inline-flex items-center`}
                    >
                      <span className="text-[9px] font-bold font-['Poppins',sans-serif] text-white leading-[10px] uppercase">
                        {order.paymentStatus || 'pending'}
                      </span>
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
                    <button
                      onClick={(e) => toggleDropdown(`action-${order.id}`, e)}
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
          {orders.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500 text-[13px] font-['Poppins',sans-serif]">
                No orders found
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Position Dropdown Menus - Rendered outside table container */}
      {activeDropdown && (() => {
        // Find the order based on activeDropdown ID
        const order = orders.find(o =>
          activeDropdown === `order-${o.id}` ||
          activeDropdown === `payment-${o.id}` ||
          activeDropdown === `action-${o.id}`
        );

        if (!order) return null;

        // Determine dropdown type
        const isOrderStatus = activeDropdown === `order-${order.id}`;
        const isAction = activeDropdown === `action-${order.id}`;

        // Render Order Status Dropdown
        if (isOrderStatus) {
          return (
            <div
              ref={dropdownRef}
              className="fixed min-w-[140px] bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-[9999]"
              style={{
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`
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
          );
        }

        // Render Actions Dropdown
        if (isAction) {
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
                  setViewDetailsModal(order);
                  setActiveDropdown(null);
                }}
                className="w-full px-4 py-2 text-left text-[12px] font-['Poppins',sans-serif] text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 5h6M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                View Invoice
              </button>

              <button
                onClick={() => {
                  if (onEdit) {
                    onEdit(order);
                  }
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
          );
        }

        return null;
      })()}

      {/* Items Modal */}
      {viewItemsModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]"
          onClick={() => setViewItemsModal(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div>
                <h3 className="text-[16px] font-semibold font-['Poppins',sans-serif] text-[#212529]">
                  Items in Order {viewItemsModal.orderNumber}
                </h3>
                <p className="text-[12px] text-[#6c757d] mt-1">
                  Customer: {viewItemsModal.customerName}
                </p>
              </div>
              <button
                onClick={() => setViewItemsModal(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto max-h-[calc(80vh-140px)]">
              <table className="w-full">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-6 py-3 text-left text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px]">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px]">
                      SKU
                    </th>
                    <th className="px-6 py-3 text-right text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px]">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-right text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px]">
                      Unit Price
                    </th>
                    <th className="px-6 py-3 text-right text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px]">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {viewItemsModal.items && viewItemsModal.items.length > 0 ? (
                    viewItemsModal.items.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529]">
                            {item.product?.name || item.productName || 'N/A'}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#6c757d]">
                            {item.product?.sku || item.sku || 'N/A'}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529]">
                            {item.quantity || 0}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529]">
                            ${(item.price || 0).toFixed(2)}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <p className="text-[13px] font-semibold font-['Poppins',sans-serif] text-[#212529]">
                            ${((item.quantity || 0) * (item.price || 0)).toFixed(2)}
                          </p>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center">
                        <p className="text-[13px] text-[#6c757d] font-['Poppins',sans-serif]">
                          No items found
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="text-[13px] text-[#6c757d] font-['Poppins',sans-serif]">
                  Total Items: {viewItemsModal.items?.length || 0}
                </div>
                <div className="text-[16px] font-semibold font-['Poppins',sans-serif] text-[#212529]">
                  Total Amount: ${parseFloat(viewItemsModal.total || 0).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Modal */}
      <InvoiceModal
        order={viewDetailsModal}
        onClose={() => setViewDetailsModal(null)}
        onViewItems={setViewItemsModal}
      />
    </div>
  );
};
