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
  }
}

export default purchaseOrderService

