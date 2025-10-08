import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { CategoryList, CategoryListHeader } from '../components/CategoryList';
import categoryService from '../services/categoryService';

export const Categories = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Categories', href: '/categories' },
  ];
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters and sorting
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Apply search and sorting when data or filters change
  useEffect(() => {
    let result = [...categories];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(category =>
        category.name?.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      // Handle null/undefined values
      if (aVal == null) aVal = '';
      if (bVal == null) bVal = '';

      // Handle different data types
      if (sortField === 'productCount' || sortField === 'order') {
        aVal = Number(aVal) || 0;
        bVal = Number(bVal) || 0;
      } else if (sortField === 'name') {
        aVal = String(aVal).toLowerCase();
        bVal = String(bVal).toLowerCase();
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    // Apply items per page limit
    result = result.slice(0, itemsPerPage);

    setFilteredCategories(result);
  }, [categories, searchQuery, sortField, sortOrder, itemsPerPage]);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await categoryService.getCategories();

      // Handle response structure: { success: true, data: { categories: [...] } }
      if (response.success && response.data && response.data.categories) {
        setCategories(response.data.categories);
      } else if (Array.isArray(response)) {
        // Fallback if response is directly an array
        setCategories(response);
      } else {
        console.error('Unexpected response structure:', response);
        setCategories([]);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError(err.message || 'Failed to load categories');
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleColumnSort = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
  };

  const handleAddCategory = () => {
    // TODO: Open modal/form to add new category
    console.log('Add category clicked');
    alert('Add Category functionality will be implemented soon!');
  };

  const handleEdit = (category) => {
    // TODO: Open modal/form to edit category
    console.log('Edit category:', category);
    alert(`Edit category: ${category.name}\nThis functionality will be implemented soon!`);
  };

  const handleDelete = async (category) => {
    if (!window.confirm(`Are you sure you want to delete "${category.name}"?`)) {
      return;
    }

    try {
      await categoryService.deleteCategory(category.id);
      alert('Category deleted successfully!');
      fetchCategories(); // Refresh the list
    } catch (err) {
      console.error('Error deleting category:', err);
      alert(err.message || 'Failed to delete category');
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Category List Header */}
        <CategoryListHeader
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
          onAddCategory={handleAddCategory}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-medium">Error loading categories</p>
            <p className="text-sm mt-1">{error}</p>
            <button
              onClick={fetchCategories}
              className="mt-2 text-sm underline hover:no-underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Category List Table */}
        {!isLoading && !error && (
          <CategoryList
            categories={filteredCategories}
            onSort={handleColumnSort}
            sortField={sortField}
            sortOrder={sortOrder}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {/* Results Info */}
        {!isLoading && !error && filteredCategories.length > 0 && (
          <div className="flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">{filteredCategories.length}</span> of{' '}
              <span className="font-medium">{categories.length}</span> categories
            </p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && filteredCategories.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-sm">No categories found</p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-sm text-emerald-600 hover:underline"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Categories;