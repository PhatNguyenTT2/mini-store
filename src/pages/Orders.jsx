import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { OrderListHeader, OrderList } from '../components/OrderList';

const Orders = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Orders', href: null },
  ];

  // Sample order data
  const [orders] = useState([
    {
      id: '3210',
      customerName: 'Cortie Gemson',
      date: 'May 23, 2021',
      total: '239.00',
      status: 'Processing',
    },
    {
      id: '3211',
      customerName: 'Mathilde Tumilson',
      date: 'May 15, 2021',
      total: '650.50',
      status: 'Shipped',
    },
    {
      id: '3212',
      customerName: 'Audrye Heaford',
      date: 'Apr 24, 2021',
      total: '100.00',
      status: 'Completed',
    },
    {
      id: '3213',
      customerName: 'Brantley Mell',
      date: 'Apr 10, 2021',
      total: '19.00',
      status: 'Refunded',
    },
    {
      id: '3214',
      customerName: 'Dominique Enriques',
      date: 'March 5, 2021',
      total: '150.00',
      status: 'Cancelled',
    },
    {
      id: '3215',
      customerName: 'Cortie Gemson',
      date: 'May 23, 2021',
      total: '239.00',
      status: 'Processing',
    },
    {
      id: '3216',
      customerName: 'Mathilde Tumilson',
      date: 'May 15, 2021',
      total: '650.50',
      status: 'Shipped',
    },
    {
      id: '3217',
      customerName: 'Audrye Heaford',
      date: 'Apr 24, 2021',
      total: '100.00',
      status: 'Completed',
    },
    {
      id: '3218',
      customerName: 'Brantley Mell',
      date: 'Apr 10, 2021',
      total: '19.00',
      status: 'Refunded',
    },
    {
      id: '3219',
      customerName: 'Dominique Enriques',
      date: 'March 5, 2021',
      total: '150.00',
      status: 'Cancelled',
    },
  ]);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Order List Header */}
        <OrderListHeader />

        {/* Order List Table */}
        <OrderList orders={orders} />
      </div>
    </Layout>
  );
};

export default Orders;
