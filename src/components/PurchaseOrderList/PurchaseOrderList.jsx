import { useState, useRef, useEffect } from 'react';

const PurchaseOrderList = ({
  purchaseOrders = [],
  onSort,
  sortField,
  sortOrder
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef(null);

  const [viewItemsModal, setViewItemsModal] = useState(null);

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
      const leftPosition = buttonRect.right - 160;

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

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  // Format currency
  const formatCurrency = (amount) => {
    if (amount === null || amount === undefined) return '$0.00';
    return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Payment status badge styles
  const getPaymentStatusStyles = (status) => {
    const map = {
      unpaid: 'bg-[#ef4444]',
      partial: 'bg-[#f59e0b]',
      paid: 'bg-[#10b981]'
    };
    return map[(status || '').toLowerCase()] || 'bg-gray-500';
  };

  // Action handlers
  const handleView = (po) => {
    console.log('View PO:', po);
    // TODO: Open view modal
  };

  const handleEdit = (po) => {
    console.log('Edit PO:', po);
    // TODO: Open edit modal
  };

  const handleReceive = (po) => {
    console.log('Receive items for PO:', po);
    // TODO: Open receive items modal
  };

  const handleCancel = (po) => {
    console.log('Cancel PO:', po);
    // TODO: Open cancel confirmation
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Scrollable Container */}
      <div className="overflow-x-auto rounded-lg">
        <div className="min-w-[1320px]">
          {/* Table Header */}
          <div className="flex items-center h-[34px] bg-gray-50 border-b border-gray-200">
            {/* ID Column - Sortable (displays poNumber) */}
            <div
              className="w-[140px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('poNumber')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                ID
                {getSortIcon('poNumber')}
              </p>
            </div>

            {/* Supplier Column - Sortable */}
            <div
              className="flex-1 min-w-[180px] px-3 flex items-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('supplier')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                SUPPLIER
                {getSortIcon('supplier')}
              </p>
            </div>

            {/* Delivery Date Column - Sortable */}
            <div
              className="w-[140px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('expectedDeliveryDate')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                DELIVERY DATE
                {getSortIcon('expectedDeliveryDate')}
              </p>
            </div>

            {/* Items Column */}
            <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                ITEMS
              </p>
            </div>

            {/* Total Column - Sortable */}
            <div
              className="w-[130px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('total')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                TOTAL
                {getSortIcon('total')}
              </p>
            </div>

            {/* Paid Amount Column */}
            <div className="w-[130px] px-3 flex items-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                PAID AMOUNT
              </p>
            </div>

            {/* Order Date Column - Sortable */}
            <div
              className="w-[130px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('orderDate')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                ORDER DATE
                {getSortIcon('orderDate')}
              </p>
            </div>

            {/* Payment Status Column */}
            <div className="w-[140px] px-3 flex items-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                STATUS
              </p>
            </div>

            {/* Created By Column */}
            <div className="w-[180px] px-3 flex items-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                CREATED BY
              </p>
            </div>

            {/* Actions Column */}
            <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                ACTIONS
              </p>
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {purchaseOrders.map((po, index) => {
              return (
                <div
                  key={po.id}
                  className={`flex items-center h-[60px] hover:bg-gray-50 transition-colors ${index !== purchaseOrders.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                >
                  {/* PO Number */}
                  <div className="w-[140px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-emerald-600 leading-[20px]">
                      {po.poNumber}
                    </p>
                  </div>

                  {/* Supplier */}
                  <div className="flex-1 min-w-[180px] px-3 flex items-center">
                    <div>
                      <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px] truncate">
                        {po.supplierName}
                      </p>
                      {po.supplierCode && (
                        <p className="text-[11px] text-[#6c757d]">{po.supplierCode}</p>
                      )}
                    </div>
                  </div>

                  {/* Delivery Date */}
                  <div className="w-[140px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                      {formatDate(po.expectedDeliveryDate)}
                    </p>
                  </div>

                  {/* Items - View Icon */}
                  <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
                    <button
                      onClick={() => setViewItemsModal(po)}
                      className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 transition-colors"
                      title="View items"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-[13px] font-normal font-['Poppins',sans-serif]">
                        {po.itemCount || 0}
                      </span>
                    </button>
                  </div>

                  {/* Total */}
                  <div className="w-[130px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                      {formatCurrency(po.total)}
                    </p>
                  </div>

                  {/* Paid Amount */}
                  <div className="w-[130px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                      {formatCurrency(po.paidAmount)}
                    </p>
                  </div>

                  {/* Order Date */}
                  <div className="w-[130px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                      {formatDate(po.orderDate)}
                    </p>
                  </div>

                  {/* Payment Status */}
                  <div className="w-[140px] px-3 flex items-center flex-shrink-0">
                    <div className={`${getPaymentStatusStyles(po.paymentStatus)} inline-flex px-2 py-1 rounded`}>
                      <span className="text-[9px] font-bold font-['Poppins',sans-serif] text-white leading-[10px] uppercase">
                        {po.paymentStatus || 'unpaid'}
                      </span>
                    </div>
                  </div>

                  {/* Created By */}
                  <div className="w-[180px] px-3 flex items-center flex-shrink-0">
                    <p className="text-[12px] font-['Poppins',sans-serif] text-[#6c757d] leading-[18px] truncate">
                      {po.createdBy || 'N/A'}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
                    <button
                      onClick={(e) => toggleDropdown(`action-${po.id}`, e)}
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
          {purchaseOrders.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500 text-[13px] font-['Poppins',sans-serif]">
                No purchase orders found
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Position Dropdown Menus */}
      {activeDropdown && (() => {
        const po = purchaseOrders.find(p =>
          activeDropdown === `action-${p.id}`
        );

        if (!po) return null;

        const isAction = activeDropdown === `action-${po.id}`;

        // Actions Dropdown
        if (isAction) {
          return (
            <div
              ref={dropdownRef}
              className="fixed w-[160px] bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-[9999]"
              style={{
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`
              }}
            >
              <button
                onClick={() => {
                  handleView(po);
                  setActiveDropdown(null);
                }}
                className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3C4.5 3 2 8 2 8s2.5 5 6 5 6-5 6-5-2.5-5-6-5z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="text-[12px] font-['Poppins',sans-serif] text-gray-700">View Details</span>
              </button>

              <button
                onClick={() => {
                  handleEdit(po);
                  setActiveDropdown(null);
                }}
                className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L14 5L5 14H2V11L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <span className="text-[12px] font-['Poppins',sans-serif] text-gray-700">Edit</span>
              </button>

              <div className="border-t border-gray-200 my-1"></div>

              <button
                onClick={() => {
                  handleCancel(po);
                  setActiveDropdown(null);
                }}
                className="w-full px-3 py-2 text-left hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 6L6 10M6 6L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-[12px] font-['Poppins',sans-serif]">Delete</span>
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
                  Items in PO {viewItemsModal.poNumber}
                </h3>
                <p className="text-[12px] text-[#6c757d] mt-1">
                  Supplier: {viewItemsModal.supplierName}
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
                            {formatCurrency(item.unitPrice || 0)}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <p className="text-[13px] font-semibold font-['Poppins',sans-serif] text-[#212529]">
                            {formatCurrency((item.quantity || 0) * (item.unitPrice || 0))}
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
                  Total Items: {viewItemsModal.itemCount || 0}
                </div>
                <div className="text-[16px] font-semibold font-['Poppins',sans-serif] text-[#212529]">
                  Total Amount: {formatCurrency(viewItemsModal.total || 0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseOrderList;
