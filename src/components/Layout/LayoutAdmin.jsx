import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SidebarHeader from '../Sidebar/SidebarHeader';
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin';
import FooterAdmin from '../FooterAdmin/FooterAdmin';

// LayoutAdmin.jsx
const LayoutAdmin = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-64 bg-white">
        <SidebarHeader />
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <HeaderAdmin />
        <main className="flex-1 min-h-0 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          {children}
        </main>
        <FooterAdmin />
      </div>
    </div>
  );
};


export default LayoutAdmin;
