import React from 'react';
import { Layout } from '../components/Layout';
import { SalesChart } from '../components/SalesChart';

const Home = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <SalesChart />

        {/* Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Total Sales</p>
              <p className="text-2xl font-bold text-blue-600">$12,345</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Orders</p>
              <p className="text-2xl font-bold text-green-600">234</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Customers</p>
              <p className="text-2xl font-bold text-emerald-600">1,234</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Orders</h2>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">Order #{1000 + item}</p>
                  <p className="text-sm text-gray-600">Customer Name {item}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">${(Math.random() * 500).toFixed(2)}</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Products Overview</h2>
          <div className="h-48 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded">
            Product data will be displayed here
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
