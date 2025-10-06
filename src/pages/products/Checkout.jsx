import React from 'react';
import { Layout } from '../../components/Layout';
import { Breadcrumb } from '../../components/Breadcrumb';

const Checkout = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Checkout', href: null },
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

export default Checkout;
