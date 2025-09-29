import React from 'react';

const SidebarHeader = () => {
  const logoUrl = "https://imageproxy.wolt.com/assets/673208945521ce1fc34417a8";

  return (
    <div className="p-6 flex items-center">
      <img src={logoUrl} alt="ShopStore Logo" className="h-10 w-auto" />
      <div className="ml-2 relative">
        <span className="text-2xl font-bold text-black">ShopStore</span>
        <span className="absolute top-0 -right-6 text-xs font-bold text-purple-700">com</span>
      </div>
    </div>
  );
};

export default SidebarHeader;
