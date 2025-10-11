import api from './api'

/**
 * Purchase Order Service
 * Handles all purchase order-related API calls
 */
const purchaseOrderService = {
  /**
   * Get all purchase orders with pagination and filters
   * @param {Object} params - Query parameters
   * @returns {Promise} Purchase order list
   */
  getPurchaseOrders: async (params = {}) => {
    try {
      const response = await api.get('/purchase-orders', { params })
      return response.data
    } catch (error) {
      console.error('Error fetching purchase orders:', error)
      throw error.response?.data || error
    }
  },

  /**
   * Get single purchase order by ID
   * @param {string} id - Purchase Order ID
   * @returns {Promise} Purchase order details
   */
  getPurchaseOrderById: async (id) => {
    try {
      const response = await api.get(`/purchase-orders/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching purchase order ${id}:`, error)
      throw error.response?.data || error
    }
  },

  /**
   * Create new purchase order
   * @param {Object} data - Purchase order data
   * @returns {Promise} Created purchase order
   */
  createPurchaseOrder: async (data) => {
    try {
      console.log('[purchaseOrderService] Sending request:', data);
      const response = await api.post('/purchase-orders', data)
      console.log('[purchaseOrderService] Response status:', response.status);
      console.log('[purchaseOrderService] Response data:', response.data);
      return response.data
    } catch (error) {
      console.error('[purchaseOrderService] Error:', error);
      console.error('[purchaseOrderService] Error response:', error.response);
      console.error('[purchaseOrderService] Error response data:', error.response?.data);
      throw error.response?.data || error
    }
  },

  /**
   * Update purchase order
   * @param {string} id - Purchase Order ID
   * @param {Object} data - Updated data
   * @returns {Promise} Updated purchase order
   */
  updatePurchaseOrder: async (id, data) => {
    try {
      const response = await api.put(`/purchase-orders/${id}`, data)
      return response.data
    } catch (error) {
      console.error(`Error updating purchase order ${id}:`, error)
      throw error.response?.data || error
    }
  },

  /**
   * Approve purchase order
   * @param {string} id - Purchase Order ID
   * @returns {Promise} Approved purchase order
   */
  approvePurchaseOrder: async (id) => {
    try {
      const response = await api.post(`/purchase-orders/${id}/approve`)
      return response.data
    } catch (error) {
      console.error(`Error approving purchase order ${id}:`, error)
      throw error.response?.data || error
    }
  },

  /**
   * Cancel purchase order
   * @param {string} id - Purchase Order ID
   * @returns {Promise} Cancelled purchase order
   */
  cancelPurchaseOrder: async (id) => {
    try {
      const response = await api.post(`/purchase-orders/${id}/cancel`)
      return response.data
    } catch (error) {
      console.error(`Error cancelling purchase order ${id}:`, error)
      throw error.response?.data || error
    }
  }
}

export default purchaseOrderService

