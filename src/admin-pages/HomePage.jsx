import React from 'react';
import LayoutAdmin from '../components/Layout/LayoutAdmin';
import SalesChart from '../components/HomePageAdmin/SalesChart';

const AdminHomePage = () => {
  return (
    <LayoutAdmin>
      <SalesChart />
    </LayoutAdmin>
  );
};

export default AdminHomePage;
