import api from './api'

/**
 * Order Service
 * Handles all order-related API calls
 */
const orderService = {
  /**
   * Get all orders with pagination and filters
   * @param {Object} params - Query parameters
   * @returns {Promise} Order list with pagination
   */
  getOrders: async (params = {}) => {
    try {
      const response = await api.get('/orders', { params })
      return response.data
    } catch (error) {
      console.error('Error fetching orders:', error)
      throw error.response?.data || error
    }
  },

  /**
   * Get single order by ID
   * @param {string} id - Order ID
   * @returns {Promise} Order details
   */
  getOrderById: async (id) => {
    try {
      const response = await api.get(`/orders/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching order ${id}:`, error)
      throw error.response?.data || error
    }
  },

  /**
   * Update order status
   * @param {string} id - Order ID
   * @param {string} status - New status (pending, processing, shipping, delivered, cancelled)
   * @returns {Promise} Updated order
   */
  updateOrderStatus: async (id, status) => {
    try {
      const response = await api.patch(`/orders/${id}/status`, { status })
      return response.data
    } catch (error) {
      console.error(`Error updating order ${id} status:`, error)
      throw error.response?.data || error
    }
  },

  /**
   * Update payment status
   * @param {string} id - Order ID
   * @param {string} paymentStatus - New payment status (pending, paid, failed, refunded)
   * @returns {Promise} Updated order
   */
  updatePaymentStatus: async (id, paymentStatus) => {
    try {
      const response = await api.patch(`/orders/${id}/payment`, { paymentStatus })
      return response.data
    } catch (error) {
      console.error(`Error updating order ${id} payment status:`, error)
      throw error.response?.data || error
    }
  },

  /**
   * Get current user's orders
   * @param {Object} params - Query parameters
   * @returns {Promise} User's order list
   */
  getMyOrders: async (params = {}) => {
    try {
      const response = await api.get('/orders/user/my-orders', { params })
      return response.data
    } catch (error) {
      console.error('Error fetching my orders:', error)
      throw error.response?.data || error
    }
  },

  /**
   * Helper: Format order data for display
   * Converts backend Order model to OrderList component format
   * @param {Object} order - Order from backend
   * @returns {Object} Formatted order for display
   */
  formatOrderForDisplay: (order) => {
    // Backend model có toJSON transform: _id -> id
    const orderId = order.id || order._id

    return {
      id: orderId,
      orderNumber: order.orderNumber,
      customerName: order.customer?.name || 'N/A',
      customerEmail: order.customer?.email || '',
      customerPhone: order.customer?.phone || '',
      date: new Date(order.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      total: order.total.toFixed(2),
      status: order.status,
      paymentStatus: order.paymentStatus,
      paymentMethod: order.paymentMethod,
      items: order.items || [],
      shippingAddress: order.shippingAddress,
      trackingNumber: order.trackingNumber,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt
    }
  },

  /**
   * Helper: Format multiple orders for display
   * @param {Array} orders - Array of orders from backend
   * @returns {Array} Formatted orders
   */
  formatOrdersForDisplay: (orders) => {
    return orders.map(orderService.formatOrderForDisplay)
  }
}

export default orderService
