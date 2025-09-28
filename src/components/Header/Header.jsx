import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-4 flex items-center gap-4">
        <Brand />
        <SearchBar />
        <div className="ml-auto flex items-center gap-4 text-sm">
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Sign In</Link>
          <a className="text-gray-600 hover:text-gray-900" href="#">Account</a>
          <a className="relative text-gray-600 hover:text-gray-900" href="#" aria-label="Cart">
            <span className="i">🛒</span>
            <span className="absolute -right-2 -top-2 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">0</span>
          </a>
        </div>
      </div>
      <nav className="w-full">
        <div className="mx-auto max-w-[1200px] px-4 py-2 flex items-center gap-6 text-sm">
          <a className="text-[#634c9f] font-semibold" href="#">Home</a>
          <a className="text-gray-700 hover:text-black" href="#">Shop</a>
          <a className="text-gray-700 hover:text-black" href="#">Fruits & Vegetables</a>
          <a className="text-gray-700 hover:text-black" href="#">Beverages</a>
          <a className="text-gray-700 hover:text-black" href="#">Blog</a>
          <a className="text-gray-700 hover:text-black" href="#">Contact</a>
          <span className="ml-auto inline-flex items-center rounded bg-gradient-to-r from-red-600 to-orange-600 px-2 py-0.5 text-[10px] font-bold text-white">SALE</span>
        </div>
      </nav>
    </header>
  );
}

function Brand() {
  return (
    <a href="#" className="select-none">
      <div className="flex items-end leading-none">
        <span className="text-2xl font-extrabold text-black">ShopStore</span>
        <span className="ml-1 text-xs font-bold text-[#634c9f]">com</span>
      </div>
    </a>
  );
}

function SearchBar() {
  return (
    <div className="hidden md:flex flex-1 max-w-[700px]">
      <div className="flex w-full items-center rounded-lg bg-gray-100 px-3 py-2 ring-1 ring-transparent focus-within:ring-gray-300">
        <input
          type="text"
          placeholder="Search for products, categories or brands..."
          className="w-full bg-transparent outline-none placeholder:text-gray-500 text-sm"
        />
        <button className="ml-2 rounded-md bg-[#634c9f] px-3 py-1.5 text-sm font-semibold text-white hover:opacity-95">
          Search
        </button>
      </div>
    </div>
  );
}


