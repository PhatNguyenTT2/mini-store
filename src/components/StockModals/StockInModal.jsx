import React, { useState, useEffect } from 'react';
import productService from '../../services/productService';
import inventoryService from '../../services/inventoryService';
import purchaseOrderService from '../../services/purchaseOrderService';

export const StockInModal = ({ isOpen, onClose, onSuccess, preSelectedProduct = null }) => {
  const [formData, setFormData] = useState({
    product: preSelectedProduct || '',
    quantity: '',
    warehouseLocation: '',
    referenceType: 'manual', // 'purchase_order' or 'manual'
    purchaseOrder: '',
    manualReference: '',
    reason: '',
    notes: ''
  });

  const [products, setProducts] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products and purchase orders for dropdown
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productResponse = await productService.getProducts({ per_page: 100 });
        if (productResponse.success && productResponse.data) {
          setProducts(productResponse.data.products || []);
        }

        // Fetch approved/pending purchase orders
        const poResponse = await purchaseOrderService.getPurchaseOrders({ 
          limit: 50,
          status: 'approved' // Only show approved POs
        });
        if (poResponse.purchaseOrders) {
          setPurchaseOrders(poResponse.purchaseOrders || []);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  // Fetch current warehouse location when product selected
  useEffect(() => {
    const fetchCurrentLocation = async () => {
      if (!formData.product) {
        setCurrentLocation('');
        return;
      }

      try {
        const inventory = await inventoryService.getInventoryByProduct(formData.product);
        if (inventory.warehouseLocation) {
          setCurrentLocation(inventory.warehouseLocation);
          // Auto-fill if empty
          if (!formData.warehouseLocation) {
            setFormData(prev => ({
              ...prev,
              warehouseLocation: inventory.warehouseLocation
            }));
          }
        }
      } catch (err) {
        // Inventory might not exist yet, that's OK
        console.log('No existing inventory for product, will create new');
      }
    };

    fetchCurrentLocation();
  }, [formData.product]);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        product: preSelectedProduct || '',
        quantity: '',
        warehouseLocation: '',
        referenceType: 'manual',
        purchaseOrder: '',
        manualReference: '',
        reason: '',
        notes: ''
      });
      setCurrentLocation('');
      setError(null);
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

    setLoading(true);
    setError(null);

    try {
      // Determine referenceId based on type
      const referenceId = formData.referenceType === 'purchase_order' 
        ? formData.purchaseOrder 
        : formData.manualReference;

      const stockInData = {
        product: formData.product,
        quantity: Number(formData.quantity),
        warehouseLocation: formData.warehouseLocation || undefined,
        referenceType: formData.referenceType === 'purchase_order' ? 'purchase_order' : undefined,
        referenceId: referenceId || undefined,
        reason: formData.reason || 'Stock received',
        notes: formData.notes || undefined
      };

      const response = await inventoryService.stockIn(stockInData);

      // Success
      if (onSuccess) {
        onSuccess(response);
      }
      onClose();
    } catch (err) {
      setError(err.error || err.message || 'Failed to stock in. Please try again.');
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
            Stock In
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select a product</option>
              {products.map(product => (
                <option key={product.id} value={product.id}>
                  {product.sku} - {product.name}
                </option>
              ))}
            </select>
          </div>

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
              required
              placeholder="Enter quantity to receive"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Warehouse Location */}
          <div>
            <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
              Warehouse Location
            </label>
            <input
              type="text"
              name="warehouseLocation"
              value={formData.warehouseLocation}
              onChange={handleChange}
              placeholder="e.g., Shelf-A-1, Zone B-15"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {currentLocation && (
              <p className="text-[11px] text-gray-500 font-['Poppins',sans-serif] mt-1">
                Current location: <span className="font-semibold text-emerald-600">{currentLocation}</span>
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
                  value="manual"
                  checked={formData.referenceType === 'manual'}
                  onChange={handleChange}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-[13px] font-['Poppins',sans-serif] text-[#212529]">
                  Manual Entry
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="referenceType"
                  value="purchase_order"
                  checked={formData.referenceType === 'purchase_order'}
                  onChange={handleChange}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-[13px] font-['Poppins',sans-serif] text-[#212529]">
                  From Purchase Order
                </span>
              </label>
            </div>
          </div>

          {/* PO/Reference Number - Conditional based on type */}
          {formData.referenceType === 'purchase_order' ? (
            <div>
              <label className="block text-[13px] font-medium font-['Poppins',sans-serif] text-[#212529] mb-2">
                Purchase Order
              </label>
              <select
                name="purchaseOrder"
                value={formData.purchaseOrder}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select a purchase order</option>
                {purchaseOrders.map(po => (
                  <option key={po.id || po._id} value={po.poNumber}>
                    {po.poNumber} - {po.supplier?.companyName || 'Unknown'} ({po.status})
                  </option>
                ))}
              </select>
              {purchaseOrders.length === 0 && (
                <p className="text-[11px] text-gray-500 font-['Poppins',sans-serif] mt-1">
                  No approved purchase orders available
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
                placeholder="e.g., PO2025000123, INV-2025-001"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
              placeholder="e.g., Purchase from supplier, Return from customer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-[13px] font-['Poppins',sans-serif] font-medium disabled:opacity-50 flex items-center gap-2"
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
                    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Stock In
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

