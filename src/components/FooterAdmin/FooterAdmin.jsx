import React from 'react';

const FooterAdmin = () => {
  return (
    <footer className="bg-white shadow-inner mt-auto border-t border-gray-200">
      <div className="mx-auto flex max-w-full items-center justify-between px-6 py-3 text-sm">
        <p className="text-gray-600">
          © 2025 ShopStore -{' '}
          <a href="#" className="text-purple-600 hover:underline">
            BlackRise Themes
          </a>
        </p>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:underline">
            Licenses
          </a>
          <a href="#" className="text-gray-600 hover:underline">
            Change Log
          </a>
          <a href="#" className="text-gray-600 hover:underline">
            Get Help
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterAdmin;
