import React, { useState, useEffect } from 'react';
import productService from '../../services/productService';
import inventoryService from '../../services/inventoryService';
import orderService from '../../services/orderService';

export const StockOutModal = ({ isOpen, onClose, onSuccess, preSelectedProduct = null }) => {
  const [formData, setFormData] = useState({
    product: preSelectedProduct || '',
    quantity: '',
    referenceType: 'manual', // 'order' or 'manual'
    order: '',
    manualReference: '',
    reason: '',
    notes: ''
  });

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedProductStock, setSelectedProductStock] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products and orders for dropdown
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productResponse = await productService.getProducts({ per_page: 100 });
        if (productResponse.success && productResponse.data) {
          setProducts(productResponse.data.products || []);
        }

        // Fetch orders (processing status - ready to ship)
        const orderResponse = await orderService.getOrders({
          per_page: 50,
          status: 'processing' // Only show orders ready to ship
        });
        if (orderResponse.success && orderResponse.data) {
          setOrders(orderResponse.data.orders || []);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  // Fetch stock info when product selected
  useEffect(() => {
    const fetchStockInfo = async () => {
      if (!formData.product) {
        setSelectedProductStock(null);
        return;
      }

      try {
        console.log('Fetching stock info for product:', formData.product);

        const data = await inventoryService.getInventoryByProduct(formData.product);
        console.log('Stock info response:', data);

        setSelectedProductStock({
          quantityOnHand: data.quantityOnHand || 0,
          quantityReserved: data.quantityReserved || 0,
          quantityAvailable: data.quantityAvailable || 0
        });
      } catch (err) {
        console.error('Error fetching stock info:', err);
        setSelectedProductStock(null);
      }
    };

    fetchStockInfo();
  }, [formData.product]);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        product: preSelectedProduct || '',
        quantity: '',
        referenceType: 'manual',
        order: '',
        manualReference: '',
        reason: '',
        notes: ''
      });
      setError(null);
      setSelectedProductStock(null);
    }
  }, [isOpen, preSelectedProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.product || !formData.quantity) {
      setError('Product and Quantity are required');
      return;
    }

    if (Number(formData.quantity) <= 0) {
      setError('Quantity must be greater than 0');
      return;
    }

    if (selectedProductStock && Number(formData.quantity) > selectedProductStock.quantityOnHand) {
      setError(`Insufficient stock. Available: ${selectedProductStock.quantityOnHand}`);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Determine referenceId based on type
      const referenceId = formData.referenceType === 'order'
        ? formData.order
        : formData.manualReference;

      const stockOutData = {
        product: formData.product,
        quantity: Number(formData.quantity),
        referenceType: formData.referenceType === 'order' ? 'order' : undefined,
        referenceId: referenceId || undefined,
        reason: formData.reason || 'Stock shipped',
        notes: formData.notes || undefined
      };

      const response = await inventoryService.stockOut(stockOutData);

      // Success
      if (onSuccess) {
        onSuccess(response);
      }
      onClose();
    } catch (err) {
      setError(err.error || err.message || 'Failed to stock out. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-[20px] font-semibold font-['Poppins',sans-serif] text-[#212529]">
            Stock Out
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-[13px] font-['Poppins',sans-serif]">
              {error}
            </div>
          )}

          {/* Product Selector */}
          <div>
            <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
              Product <span className="text-red-500">*</span>
            </label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a product</option>
              {products.map(product => (
                <option key={product.id} value={product.id}>
                  {product.sku} - {product.name}
                </option>
              ))}
            </select>
          </div>

          {/* Stock Info Display */}
          {selectedProductStock && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-[13px] font-semibold font-['Poppins',sans-serif] text-blue-800 mb-2">
                Current Stock Information
              </h3>
              <div className="grid grid-cols-3 gap-3 text-[12px] font-['Poppins',sans-serif]">
                <div>
                  <span className="text-gray-600">On Hand:</span>
                  <span className="ml-1 font-semibold text-gray-900">{selectedProductStock.quantityOnHand}</span>
                </div>
                <div>
                  <span className="text-gray-600">Reserved:</span>
                  <span className="ml-1 font-semibold text-orange-600">{selectedProductStock.quantityReserved}</span>
                </div>
                <div>
                  <span className="text-gray-600">Available:</span>
                  <span className="ml-1 font-semibold text-green-600">{selectedProductStock.quantityAvailable}</span>
                </div>
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
              Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              max={selectedProductStock?.quantityOnHand || undefined}
              required
              placeholder="Enter quantity to ship/remove"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {selectedProductStock && (
              <p className="mt-1 text-[11px] text-gray-500 font-['Poppins',sans-serif]">
                Maximum available: {selectedProductStock.quantityOnHand}
              </p>
            )}
          </div>

          {/* Reference Type Selection */}
          <div>
            <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
              Reference Type
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="referenceType"
                  value="order"
                  checked={formData.referenceType === 'order'}
                  onChange={handleChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-[13px] font-['Poppins',sans-serif] text-[#212529]">
                  Customer Order
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="referenceType"
                  value="manual"
                  checked={formData.referenceType === 'manual'}
                  onChange={handleChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-[13px] font-['Poppins',sans-serif] text-[#212529]">
                  Manual Entry
                </span>
              </label>
            </div>
          </div>

          {/* Order/Reference - Conditional based on type */}
          {formData.referenceType === 'order' ? (
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                Customer Order (Ready to Ship)
              </label>
              <select
                name="order"
                value={formData.order}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an order</option>
                {orders.map(order => (
                  <option key={order.id || order._id} value={order._id || order.id}>
                    {order.orderNumber} - {order.customer?.name || 'Unknown'} - ${order.total}
                  </option>
                ))}
              </select>
              {orders.length === 0 && (
                <p className="text-[11px] text-gray-500 font-['Poppins',sans-serif] mt-1">
                  No orders ready to ship (status: processing)
                </p>
              )}
            </div>
          ) : (
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                Reference Number
              </label>
              <input
                type="text"
                name="manualReference"
                value={formData.manualReference}
                onChange={handleChange}
                placeholder="e.g., TRANSFER-001, LOSS-2025-123"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Reason */}
          <div>
            <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
              Reason
            </label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="e.g., Order fulfillment, Transfer to another warehouse"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
              Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              placeholder="Additional notes..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-[13px] font-['Poppins',sans-serif] font-medium disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-[13px] font-['Poppins',sans-serif] font-medium disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Stock Out
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

