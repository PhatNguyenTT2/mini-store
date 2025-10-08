import React, { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { Breadcrumb } from '../../components/Breadcrumb';
import ProductList from '../../components/ListProduct/ProductList';
import ProductListHeader from '../../components/ListProduct/ProductListHeader';
import productService from '../../services/productService';

const ListProduct = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Products', href: '/products/list' },
  ];

  // State management
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter & sort state
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('sku');
  const [sortOrder, setSortOrder] = useState('asc');

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await productService.getProducts();

      // Handle different response structures
      let productData = [];
      if (response.success && response.data) {
        productData = response.data.products || response.data;
      } else if (Array.isArray(response)) {
        productData = response;
      }

      setProducts(productData);
      setFilteredProducts(productData);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message || 'Failed to load products');
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.sku?.toLowerCase().includes(query) ||
          product.name?.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      // Handle special cases
      if (sortField === 'category') {
        aValue = a.category?.name || '';
        bValue = b.category?.name || '';
      }

      // Handle numeric values
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      // Handle string values
      const aStr = String(aValue || '').toLowerCase();
      const bStr = String(bValue || '').toLowerCase();

      if (sortOrder === 'asc') {
        return aStr.localeCompare(bStr);
      } else {
        return bStr.localeCompare(aStr);
      }
    });

    // Apply items per page limit
    result = result.slice(0, itemsPerPage);

    setFilteredProducts(result);
  }, [products, searchQuery, sortField, sortOrder, itemsPerPage]);

  // Handler functions
  const handleSort = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  };

  const handleEdit = (product) => {
    // TODO: Implement edit modal/form
    console.log('Edit product:', product);
    alert(`Edit functionality coming soon!\nProduct: ${product.name}`);
  };

  const handleDelete = async (product) => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      try {
        await productService.deleteProduct(product.id);
        // Refresh the list
        fetchProducts();
        alert('Product deleted successfully!');
      } catch (err) {
        console.error('Error deleting product:', err);
        alert('Failed to delete product. Please try again.');
      }
    }
  };

  const handleAdd = () => {
    // TODO: Implement add modal/form
    console.log('Add new product');
    alert('Add Product functionality coming soon!');
  };

  const handleExport = () => {
    // TODO: Implement CSV export
    console.log('Export products to CSV');
    alert('Export functionality coming soon!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <ProductListHeader
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onExport={handleExport}
          onPrint={handlePrint}
          onAdd={handleAdd}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="bg-white rounded-lg shadow-sm p-12">
            <div className="flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mb-4"></div>
              <p className="text-gray-600 font-['Poppins',sans-serif]">Loading products...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {!isLoading && error && (
          <div className="bg-white rounded-lg shadow-sm p-12">
            <div className="flex flex-col items-center justify-center text-center">
              <svg
                className="w-16 h-16 text-red-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Poppins',sans-serif]">
                Error Loading Products
              </h3>
              <p className="text-gray-600 mb-4 font-['Poppins',sans-serif]">{error}</p>
              <button
                onClick={fetchProducts}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-['Poppins',sans-serif]"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && filteredProducts.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-12">
            <div className="flex flex-col items-center justify-center text-center">
              <svg
                className="w-16 h-16 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Poppins',sans-serif]">
                No Products Found
              </h3>
              <p className="text-gray-600 mb-4 font-['Poppins',sans-serif]">
                {searchQuery
                  ? `No products match "${searchQuery}"`
                  : 'Start by adding your first product'}
              </p>
              {!searchQuery && (
                <button
                  onClick={handleAdd}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-['Poppins',sans-serif]"
                >
                  Add Product
                </button>
              )}
            </div>
          </div>
        )}

        {/* Products List */}
        {!isLoading && !error && filteredProducts.length > 0 && (
          <ProductList
            products={filteredProducts}
            onSort={handleSort}
            sortField={sortField}
            sortOrder={sortOrder}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {/* Results Summary */}
        {!isLoading && !error && filteredProducts.length > 0 && (
          <div className="text-center text-sm text-gray-600 font-['Poppins',sans-serif]">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ListProduct;
