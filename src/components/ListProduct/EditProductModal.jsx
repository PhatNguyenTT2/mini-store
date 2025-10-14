import React, { useState, useEffect } from 'react';
import productService from '../../services/productService';
import categoryService from '../../services/categoryService';

export const EditProductModal = ({ isOpen, onClose, onSuccess, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    category: '',
    price: '',
    vendor: '',
    stock: '',
    description: ''
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch categories and pre-fill form when modal opens
  useEffect(() => {
    if (isOpen && product) {
      fetchCategories();
      // Pre-fill form with product data
      setFormData({
        name: product.name || '',
        image: product.image || '',
        category: product.category?.id || product.category?._id || product.category || '',
        price: product.price?.toString() || '',
        vendor: product.vendor || '',
        stock: product.stock?.toString() || '',
        description: product.description || ''
      });
      setError(null);
    }
  }, [isOpen, product]);

  const fetchCategories = async () => {
    try {
      const response = await categoryService.getCategories();
      if (response.success && response.data && response.data.categories) {
        setCategories(response.data.categories);
      } else if (Array.isArray(response)) {
        setCategories(response);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError('Failed to load categories');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setError('Product name is required');
      return;
    }

    if (!formData.category) {
      setError('Category is required');
      return;
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      setError('Price must be greater than 0');
      return;
    }

    if (!formData.vendor.trim()) {
      setError('Vendor is required');
      return;
    }

    if (!formData.stock || parseInt(formData.stock) < 0) {
      setError('Stock must be 0 or greater');
      return;
    }

    if (!formData.description.trim()) {
      setError('Description is required');
      return;
    }

    if (!product?.id) {
      setError('Invalid product');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Prepare data
      const productData = {
        name: formData.name.trim(),
        category: formData.category,
        price: parseFloat(formData.price),
        vendor: formData.vendor.trim(),
        stock: parseInt(formData.stock),
        description: formData.description.trim()
      };

      // Add image
      if (formData.image.trim()) {
        productData.image = formData.image.trim();
      } else {
        // Use placeholder if no image
        productData.image = 'https://via.placeholder.com/400?text=No+Image';
      }

      const response = await productService.updateProduct(product.id, productData);

      if (onSuccess) {
        onSuccess(response);
      }
      onClose();
    } catch (err) {
      console.error('Error updating product:', err);
      setError(err.response?.data?.error || err.error || err.message || 'Failed to update product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-[20px] font-semibold font-['Poppins',sans-serif] text-[#212529]">
              Edit Product
            </h2>
            <p className="text-[12px] text-gray-500 font-['Poppins',sans-serif] mt-1">
              Product ID: {product.id}
            </p>
          </div>
          <button
            onClick={onClose}
            disabled={loading}
            className="text-gray-400 hover:text-gray-600 disabled:opacity-50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-[13px]">
              {error}
            </div>
          )}

          {/* Row 1: Name & SKU (read-only) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Product Name */}
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Enter product name"
                required
                maxLength={255}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* SKU (Read-only) */}
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                SKU
              </label>
              <input
                type="text"
                value={product?.sku || 'Auto-generated'}
                readOnly
                disabled
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-[13px] font-['Poppins',sans-serif] bg-gray-50 text-gray-600 cursor-not-allowed uppercase"
              />
              <p className="mt-1 text-[11px] text-gray-500 font-['Poppins',sans-serif]">
                SKU cannot be modified
              </p>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
              Image URL (Optional)
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => handleChange('image', e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <p className="mt-1 text-[11px] text-gray-500 font-['Poppins',sans-serif]">
              Leave empty to use placeholder image
            </p>

            {/* Image Preview */}
            {formData.image && (
              <div className="mt-3">
                <p className="text-[12px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                  Preview:
                </p>
                <div className="flex items-start gap-3">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg border border-gray-200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"%3E%3Crect width="128" height="128" fill="%23f3f4f6"/%3E%3Ctext x="64" y="64" text-anchor="middle" dy=".3em" fill="%23ef4444" font-family="sans-serif" font-size="12"%3EInvalid URL%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => handleChange('image', '')}
                    className="px-3 py-1.5 text-[12px] text-red-600 border border-red-300 rounded-lg hover:bg-red-50 font-['Poppins',sans-serif] font-medium"
                  >
                    Remove Image
                  </button>
                </div>
              </div>
            )}

            {/* Show current image if exists but form is empty */}
            {!formData.image && product.image && (
              <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-[12px] text-gray-600 font-['Poppins',sans-serif] mb-2">
                  Current image will be replaced with placeholder when you save
                </p>
                <img
                  src={product.image}
                  alt="Current"
                  className="w-32 h-32 object-cover rounded-lg border border-gray-300 opacity-50"
                />
              </div>
            )}
          </div>

          {/* Row 2: Category & Vendor */}
          <div className="grid grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat.id || cat._id} value={cat.id || cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Vendor */}
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                Vendor <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.vendor}
                onChange={(e) => handleChange('vendor', e.target.value)}
                placeholder="Enter vendor name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Row 3: Price & Stock */}
          <div className="grid grid-cols-2 gap-4">
            {/* Price */}
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => handleChange('price', e.target.value)}
                placeholder="0.00"
                required
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Stock */}
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                Stock Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => handleChange('stock', e.target.value)}
                placeholder="0"
                required
                min="0"
                step="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Enter product description"
              rows={4}
              required
              maxLength={2000}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
            <div className="flex items-center justify-between mt-1">
              <p className="text-[11px] text-gray-500 font-['Poppins',sans-serif]">
                Maximum 2000 characters
              </p>
              <p className="text-[11px] text-gray-500 font-['Poppins',sans-serif]">
                {formData.description.length}/2000
              </p>
            </div>
          </div>

          {/* Metadata Info */}
          {product.createdAt && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="text-[13px] font-semibold font-['Poppins',sans-serif] text-[#212529] mb-2">
                Metadata
              </h4>
              <div className="space-y-1 text-[12px] font-['Poppins',sans-serif] text-gray-600">
                <div className="flex justify-between">
                  <span>Slug:</span>
                  <span className="font-medium text-gray-900">{product.slug || 'Auto-generated'}</span>
                </div>
                <div className="flex justify-between">
                  <span>In Stock:</span>
                  <span className={`font-medium ${product.isInStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.isInStock ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Created:</span>
                  <span className="font-medium text-gray-900">
                    {new Date(product.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                {product.updatedAt && (
                  <div className="flex justify-between">
                    <span>Last Updated:</span>
                    <span className="font-medium text-gray-900">
                      {new Date(product.updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-[13px] font-['Poppins',sans-serif] font-medium disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-[13px] font-['Poppins',sans-serif] font-medium disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Updating...
                </>
              ) : (
                'Update Product'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
