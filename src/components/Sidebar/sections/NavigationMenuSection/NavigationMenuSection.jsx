import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  ShoppingBag,
  Package2,
  User,
  ClipboardList,
  Mail,
  MessageSquare,
  CheckSquare,
  UserCircle,
  Shield,
  AlertTriangle,
  Settings,
  DollarSign,
  Users,
  User2Icon
} from 'lucide-react';

export const NavigationMenuSection = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

  const toggleDropdown = (itemName) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const menuItems = [
    {
      category: 'E-Commerce',
      items: [
        { name: 'Dashboard', icon: LayoutGrid, href: '/' },
        { name: 'Orders', icon: ShoppingBag, arrow: true },
        {
          name: 'Products',
          icon: Package2,
          arrow: true,
          submenu: [
            { name: 'View', href: '/product/view' },
            { name: 'Product Detail', href: '/products/detail' },
            { name: 'Shopping Cart', href: '/products/cart' },
            { name: 'Checkout', href: '/products/checkout' },
          ]
        },
        { name: 'Buyer', icon: User2Icon, arrow: true },
        { name: 'Customers', icon: User },
        { name: 'Invoices', icon: ClipboardList, arrow: true },
      ],
    },
    {
      category: 'Apps',
      items: [
        { name: 'Chats', icon: MessageSquare, badge: 2 },
        { name: 'Email', icon: Mail, arrow: true },
        { name: 'Todo App', icon: CheckSquare, arrow: true },
      ],
    },
    {
      category: 'Pages',
      items: [
        { name: 'Profile', icon: UserCircle, arrow: true },
        { name: 'Users', icon: Users, arrow: true },
        { name: 'Authentication', icon: Shield, arrow: true },
        { name: 'Error Pages', icon: AlertTriangle, arrow: true },
        { name: 'Settings', icon: Settings },
        { name: 'Pricing Table', icon: DollarSign, new: true },
      ],
    },
  ];

  return (
    <nav className="pb-4">
      {menuItems.map((menu, index) => (
        <div key={index}>
          <h3 className="text-xs text-gray-500 uppercase tracking-wider font-bold my-4 px-4">
            {menu.category}
          </h3>
          <ul>
            {menu.items.map((item, itemIndex) => {
              const isActive = item.href === location.pathname;
              const hasActiveSubmenu = item.submenu?.some(sub => sub.href === location.pathname);

              return (
                <li key={itemIndex}>
                  <div>
                    {item.arrow ? (
                      <div
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center justify-between py-2 px-4 rounded-full text-sm cursor-pointer ${hasActiveSubmenu
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'text-gray-700 hover:bg-emerald-50'
                          }`}
                      >
                        <div className="flex items-center">
                          <div className="p-2 rounded-full">
                            <item.icon className="w-5 h-5 text-gray-500" />
                          </div>
                          <span className="ml-3">{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className="bg-emerald-500 text-white text-xs font-bold rounded-full px-2 py-1">
                            {item.badge}
                          </span>
                        )}
                        {openDropdowns[item.name] ? (
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-500" />
                        )}
                        {item.new && (
                          <span className="bg-emerald-500 text-white text-xs font-bold rounded-md px-2 py-1">
                            New
                          </span>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center justify-between py-2 px-4 rounded-full text-sm ${isActive
                            ? 'bg-emerald-500 text-white'
                            : 'text-gray-700 hover:bg-emerald-50'
                          }`}
                      >
                        <div className="flex items-center">
                          <div className={`p-2 rounded-full ${isActive ? 'bg-emerald-100' : ''}`}>
                            <item.icon
                              className={`w-5 h-5 ${isActive ? 'text-emerald-600' : 'text-gray-500'
                                }`}
                            />
                          </div>
                          <span className="ml-3">{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className="bg-emerald-500 text-white text-xs font-bold rounded-full px-2 py-1">
                            {item.badge}
                          </span>
                        )}
                        {item.new && (
                          <span className="bg-emerald-500 text-white text-xs font-bold rounded-md px-2 py-1">
                            New
                          </span>
                        )}
                      </Link>
                    )}

                    {/* Submenu dropdown */}
                    {item.arrow && item.submenu && openDropdowns[item.name] && (
                      <ul className="ml-8 mt-1 mb-2 space-y-1">
                        {item.submenu.map((subitem, subIndex) => {
                          const isSubmenuActive = subitem.href === location.pathname;

                          return (
                            <li key={subIndex}>
                              <Link
                                to={subitem.href}
                                className={`block py-2 px-4 text-sm rounded-lg transition-colors ${isSubmenuActive
                                    ? 'text-emerald-600 bg-emerald-50 font-medium'
                                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                                  }`}
                              >
                                {subitem.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
};
