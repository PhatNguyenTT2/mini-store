import React from 'react';
import {
  ChevronDown,
  LayoutGrid,
  ShoppingBag,
  Users,
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
} from 'lucide-react';

export const NavigationMenuSection = () => {
  const menuItems = [
    {
      category: 'E-Commerce',
      items: [
        { name: 'Dashboard', icon: LayoutGrid, active: true },
        { name: 'Orders', icon: ShoppingBag, arrow: true },
        { name: 'Products', icon: Users, arrow: true },
        { name: 'Buyer', icon: User, arrow: true },
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
    <nav className="flex-1">
      {menuItems.map((menu, index) => (
        <div key={index}>
          <h3 className="text-xs text-gray-500 uppercase tracking-wider font-bold my-4 px-4">
            {menu.category}
          </h3>
          <ul>
            {menu.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <a
                  href="#"
                  className={`flex items-center justify-between py-2 px-4 rounded-full text-sm ${item.active
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-700 hover:bg-emerald-50'
                    }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-full ${item.active ? 'bg-emerald-100' : ''}`}
                    >
                      <item.icon
                        className={`w-5 h-5 ${item.active ? 'text-emerald-600' : 'text-gray-500'
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
                  {item.arrow && <ChevronDown className="w-4 h-4 text-gray-500" />}
                  {item.new && (
                    <span className="bg-emerald-500 text-white text-xs font-bold rounded-md px-2 py-1">
                      New
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
