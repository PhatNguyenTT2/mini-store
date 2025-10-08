import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { OrderListHeader, OrderList } from '../components/OrderList';
import orderService from '../services/orderService';

const Orders = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Orders', href: null },
  ];

  // State management
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current_page: 1,
    per_page: 20,
    total: 0,
    total_pages: 0
  });

  // Filters
  const [filters, setFilters] = useState({
    page: 1,
    per_page: 20,
    status: '',
    payment_status: ''
  });

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Sort state
  const [sortField, setSortField] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');

  // Fetch orders from API
  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await orderService.getOrders(filters);

      if (response.success) {
        const formattedOrders = orderService.formatOrdersForDisplay(response.data.orders);
        setOrders(formattedOrders);
        setPagination(response.data.pagination);
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError(err.error || 'Failed to fetch orders. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch orders on component mount and when filters change
  useEffect(() => {
    fetchOrders();
  }, [filters]);

  // Handle status change
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await orderService.updateOrderStatus(orderId, newStatus);

      if (response.success) {
        // Refresh orders list
        await fetchOrders();

        // Show success message (you can add toast notification here)
        console.log('Order status updated successfully');
      }
    } catch (err) {
      console.error('Error updating order status:', err);
      alert(err.error || 'Failed to update order status');
    }
  };

  // Handle payment status change
  const handlePaymentStatusChange = async (orderId, newPaymentStatus) => {
    try {
      const response = await orderService.updatePaymentStatus(orderId, newPaymentStatus);

      if (response.success) {
        // Refresh orders list
        await fetchOrders();

        // Show success message
        console.log('Payment status updated successfully');
      }
    } catch (err) {
      console.error('Error updating payment status:', err);
      alert(err.error || 'Failed to update payment status');
    }
  };

  // Handle filter changes
  const handleItemsPerPageChange = (newPerPage) => {
    setFilters({ ...filters, per_page: newPerPage, page: 1 });
  };

  const handleSearch = (query) => {
    // Search by ID or Name
    const searchLower = query.toLowerCase().trim();

    if (!searchLower) {
      // If search is empty, fetch all orders
      fetchOrders();
      return;
    }

    // Filter orders locally (or you can implement backend search)
    const filtered = orders.filter(order => {
      const orderNumber = (order.orderNumber || '').toLowerCase();
      const customerName = (order.customerName || '').toLowerCase();
      const orderId = (order.id || '').toLowerCase();

      return orderNumber.includes(searchLower) ||
        customerName.includes(searchLower) ||
        orderId.includes(searchLower);
    });

    setOrders(filtered);
  };

  // Handle column sort
  const handleColumnSort = (field) => {
    let newSortOrder = 'asc';

    // Toggle sort order if clicking the same field
    if (sortField === field) {
      newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    }

    setSortField(field);
    setSortOrder(newSortOrder);

    // Sort orders locally
    const sorted = [...orders].sort((a, b) => {
      let aVal = a[field];
      let bVal = b[field];

      // Handle different data types
      if (field === 'total') {
        aVal = parseFloat(aVal) || 0;
        bVal = parseFloat(bVal) || 0;
      } else if (field === 'date') {
        aVal = new Date(aVal).getTime();
        bVal = new Date(bVal).getTime();
      } else {
        aVal = String(aVal || '').toLowerCase();
        bVal = String(bVal || '').toLowerCase();
      }

      if (newSortOrder === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    setOrders(sorted);
  };

  // Handle apply changes (from Actions dropdown)
  const handleApplyChanges = async () => {
    console.log('Applying all pending changes...');
    await fetchOrders();
    alert('Changes applied successfully!');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Order List Header */}
        <OrderListHeader
          itemsPerPage={filters.per_page}
          onItemsPerPageChange={handleItemsPerPageChange}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSearch={handleSearch}
          onApplyChanges={handleApplyChanges}
        />

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-medium">Error loading orders</p>
            <p className="text-sm mt-1">{error}</p>
            <button
              onClick={fetchOrders}
              className="mt-2 text-sm underline hover:no-underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Order List Table */}
        {!loading && !error && (
          <OrderList
            orders={orders}
            onStatusChange={handleStatusChange}
            onPaymentStatusChange={handlePaymentStatusChange}
            onSort={handleColumnSort}
            sortField={sortField}
            sortOrder={sortOrder}
          />
        )}

        {/* Pagination Info */}
        {!loading && !error && orders.length > 0 && (
          <div className="flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">{orders.length}</span> of{' '}
              <span className="font-medium">{pagination.total}</span> orders
            </p>
            <div className="flex gap-2">
              {pagination.has_prev && (
                <button
                  onClick={() => setFilters({ ...filters, page: pagination.current_page - 1 })}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              <span className="px-4 py-2 text-sm text-gray-600">
                Page {pagination.current_page} of {pagination.total_pages}
              </span>
              {pagination.has_next && (
                <button
                  onClick={() => setFilters({ ...filters, page: pagination.current_page + 1 })}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
