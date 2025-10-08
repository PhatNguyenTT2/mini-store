import React, { useState, useRef, useEffect } from 'react';

const ProductList = ({
  products,
  onSort,
  sortField,
  sortOrder,
  onEdit,
  onDelete
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null) {
        const dropdownElement = dropdownRefs.current[activeDropdown];
        if (dropdownElement && !dropdownElement.contains(event.target)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const handleSortClick = (field) => {
    const newOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    onSort(field, newOrder);
  };

  const getSortIcon = (field) => {
    if (sortField !== field) {
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5">
          <path d="M6 3L8 5H4L6 3Z" fill="#6B7280" />
          <path d="M6 9L4 7H8L6 9Z" fill="#6B7280" />
        </svg>
      );
    }

    if (sortOrder === 'asc') {
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5">
          <path d="M6 3L8 5H4L6 3Z" fill="#10B981" />
          <path d="M6 9L4 7H8L6 9Z" fill="#6B7280" />
        </svg>
      );
    } else {
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5">
          <path d="M6 3L8 5H4L6 3Z" fill="#6B7280" />
          <path d="M6 9L4 7H8L6 9Z" fill="#10B981" />
        </svg>
      );
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const truncateText = (text, maxLength = 100) => {
    if (!text) return '-';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto overflow-y-visible">
        <div className="min-w-[1400px]">
          {/* Header */}
          <div className="flex items-center h-[34px] bg-gray-50 border-b border-gray-200">
            {/* SKU (ID) */}
            <div
              className="w-[120px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('sku')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                ID (SKU)
                {getSortIcon('sku')}
              </p>
            </div>

            {/* Image */}
            <div className="w-[80px] px-3 flex items-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Image
              </p>
            </div>

            {/* Category */}
            <div
              className="w-[140px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('category')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Category
                {getSortIcon('category')}
              </p>
            </div>

            {/* Price */}
            <div
              className="w-[140px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('price')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Price
                {getSortIcon('price')}
              </p>
            </div>

            {/* Vendor */}
            <div
              className="w-[140px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('vendor')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Vendor
                {getSortIcon('vendor')}
              </p>
            </div>

            {/* Stock */}
            <div
              className="w-[100px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('stock')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Stock
                {getSortIcon('stock')}
              </p>
            </div>

            {/* Type */}
            <div
              className="w-[120px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('type')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Type
                {getSortIcon('type')}
              </p>
            </div>

            {/* Shelf Life */}
            <div
              className="w-[120px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSortClick('shelfLife')}
            >
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
                Shelf Life
                {getSortIcon('shelfLife')}
              </p>
            </div>

            {/* Actions */}
            <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
              <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
                Actions
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex items-center h-[60px] hover:bg-gray-50 transition-colors ${index !== products.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
              >
                {/* SKU */}
                <div className="w-[120px] px-3 flex items-center flex-shrink-0">
                  <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                    {product.sku || '-'}
                  </p>
                </div>

                {/* Image */}
                <div className="w-[80px] px-3 flex items-center flex-shrink-0">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[40px] h-[40px] object-cover rounded"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/40?text=No+Image';
                      }}
                    />
                  ) : (
                    <div className="w-[40px] h-[40px] bg-gray-200 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Category */}
                <div className="w-[140px] px-3 flex items-center flex-shrink-0">
                  <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                    {product.category?.name || '-'}
                  </p>
                </div>

                {/* Price */}
                <div className="w-[140px] px-3 flex flex-col justify-center flex-shrink-0">
                  {product.originalPrice && product.originalPrice > product.price ? (
                    <>
                      <p className="text-[11px] font-normal font-['Poppins',sans-serif] text-gray-400 leading-[16px] line-through">
                        {formatPrice(product.originalPrice)}
                      </p>
                      <p className="text-[13px] font-medium font-['Poppins',sans-serif] text-red-600 leading-[20px]">
                        {formatPrice(product.price)}
                      </p>
                    </>
                  ) : (
                    <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                      {formatPrice(product.price)}
                    </p>
                  )}
                </div>

                {/* Vendor */}
                <div className="w-[140px] px-3 flex items-center flex-shrink-0">
                  <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                    {truncateText(product.vendor, 20) || '-'}
                  </p>
                </div>

                {/* Stock */}
                <div className="w-[100px] px-3 flex items-center flex-shrink-0">
                  <p className={`text-[13px] font-medium font-['Poppins',sans-serif] leading-[20px] ${product.stock === 0
                      ? 'text-red-600'
                      : product.stock < 10
                        ? 'text-yellow-600'
                        : 'text-green-600'
                    }`}>
                    {product.stock}
                  </p>
                </div>

                {/* Type */}
                <div className="w-[120px] px-3 flex items-center flex-shrink-0">
                  <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                    {product.type || '-'}
                  </p>
                </div>

                {/* Shelf Life */}
                <div className="w-[120px] px-3 flex items-center flex-shrink-0">
                  <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
                    {product.shelfLife || '-'}
                  </p>
                </div>

                {/* Actions */}
                <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0 relative">
                  <button
                    ref={(el) => (dropdownRefs.current[index] = el)}
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="3" cy="8" r="1.5" fill="#6B7280" />
                      <circle cx="8" cy="8" r="1.5" fill="#6B7280" />
                      <circle cx="13" cy="8" r="1.5" fill="#6B7280" />
                    </svg>
                  </button>

                  {activeDropdown === index && (
                    <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
                      <button
                        onClick={() => {
                          onEdit(product);
                          setActiveDropdown(null);
                        }}
                        className="w-full px-4 py-2 text-left text-[13px] font-['Poppins',sans-serif] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          onDelete(product);
                          setActiveDropdown(null);
                        }}
                        className="w-full px-4 py-2 text-left text-[13px] font-['Poppins',sans-serif] text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
