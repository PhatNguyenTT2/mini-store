import React from 'react';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';

const ViewProduct = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Product List', href: '/products/list' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

      </div>
    </Layout>
  );
};

export default ViewProduct;
