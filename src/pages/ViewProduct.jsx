import React from 'react';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FilterProduct } from '../components/FilterProduct';
import { ProductList } from '../components/ProductList';

const ViewProduct = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Product List', href: '/products/view' },
  ];

  return (
    <Layout>
      <div className="flex gap-6 h-full -m-6 p-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6 min-w-0">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Product List with Grid */}
          <ProductList />
        </div>

        {/* Right Sidebar - Filter */}
        <div className="flex-shrink-0">
          <FilterProduct />
        </div>
      </div>
    </Layout>
  );
};

export default ViewProduct;
