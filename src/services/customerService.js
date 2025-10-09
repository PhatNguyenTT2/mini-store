import api from './api'

/**
 * Customer Service
 * Handles all customer-related API calls
 */
const customerService = {
  /**
   * Get all customers with pagination and filters
   * @param {Object} params - Query parameters (page, per_page, customer_type)
   * @returns {Promise} Customer list with pagination
   */
  getCustomers: async (params = {}) => {
    try {
      const response = await api.get('/customers', { params })
      return response.data
    } catch (error) {
      console.error('Error fetching customers:', error)
      throw error.response?.data || error
    }
  },

  /**
   * Get single customer by ID
   * @param {string} id - Customer ID
   * @returns {Promise} Customer details
   */
  getCustomerById: async (id) => {
    try {
      const response = await api.get(`/customers/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching customer ${id}:`, error)
      throw error.response?.data || error
    }
  },

  /**
   * Create new customer
   * @param {Object} customerData - Customer data
   * @returns {Promise} Created customer
   */
  createCustomer: async (customerData) => {
    try {
      const response = await api.post('/customers', customerData)
      return response.data
    } catch (error) {
      console.error('Error creating customer:', error)
      throw error.response?.data || error
    }
  },

  /**
   * Update customer
   * @param {string} id - Customer ID
   * @param {Object} updates - Updated fields
   * @returns {Promise} Updated customer
   */
  updateCustomer: async (id, updates) => {
    try {
      const response = await api.put(`/customers/${id}`, updates)
      return response.data
    } catch (error) {
      console.error(`Error updating customer ${id}:`, error)
      throw error.response?.data || error
    }
  },

  /**
   * Delete customer
   * @param {string} id - Customer ID
   * @returns {Promise} Delete confirmation
   */
  deleteCustomer: async (id) => {
    try {
      const response = await api.delete(`/customers/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error deleting customer ${id}:`, error)
      throw error.response?.data || error
    }
  },

  /**
   * Format customers data for display in the table
   * @param {Array} customers - Raw customers from API
   * @returns {Array} Formatted customers
   */
  formatCustomersForDisplay: (customers) => {
    return customers.map(customer => ({
      id: customer.id || customer._id,
      customerCode: customer.customerCode,
      fullName: customer.fullName,
      email: customer.email,
      phone: customer.phone || null,
      address: customer.address || null,
      dob: customer.dob || null,
      gender: customer.gender || null,
      customerType: customer.customerType || 'Regular',
      createdAt: customer.createdAt,
      updatedAt: customer.updatedAt
    }))
  }
}

export default customerService
