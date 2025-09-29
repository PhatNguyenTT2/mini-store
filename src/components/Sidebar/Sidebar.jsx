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

const Sidebar = () => {
  const user = {
    name: 'Shawon Farabi',
    role: 'Sales Manager',
    avatar: 'https://s3-alpha-sig.figma.com/img/71e0/f251/f65bc89337dbd1f3738706d1b0775a8e?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AlDUcQ0ZGxNkd56ARoKYg1te26NFvniwG~iWSAwQzGX8fMHM~fi5WqVVT~wFfzBoUF0q03sfQ-6sBuzOCavRg~LdkfOxBBrFm5S70Snqp~p9tPNZmv6vYSDhqxft0C4l8k3DVIzdhxcq5FIjpaikZCgnoKw34lLKvhGyfMiV5MdBeNKSD20ptz3vDpXI-xR3nLmyj7NrxhA2QVT~U36OAdUwg3e4omX-CV5XDeSuT3vCyO-qhQw~f~gLmO8YHTu67M0LNfqOxRhNwTWHUMu37fB-V6eRLj4ff6-lExo4KW7L3-iN~plfrFIBwp8Rkp54ivDQI0CD6EtK2liEQwmZgQ__',
  };

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
    <div className="w-64 bg-white p-4 flex flex-col">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex items-center">
          <img src={user.avatar} alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-bold text-purple-700">{user.name}</p>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1">
        {menuItems.map((menu, index) => (
          <div key={index}>
            <h3 className="text-xs text-gray-500 uppercase tracking-wider font-bold my-4 px-4">{menu.category}</h3>
            <ul>
              {menu.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    href="#"
                    className={`flex items-center justify-between py-2 px-4 rounded-full text-sm ${item.active ? 'bg-purple-700 text-white' : 'text-gray-700 hover:bg-purple-100'
                      }`}
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${item.active ? 'bg-purple-200' : ''}`}>
                        <item.icon className={`w-5 h-5 ${item.active ? 'text-purple-700' : 'text-gray-500'}`} />
                      </div>
                      <span className="ml-3">{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-purple-700 text-white text-xs font-bold rounded-full px-2 py-1">{item.badge}</span>
                    )}
                    {item.arrow && <ChevronDown className="w-4 h-4 text-gray-500" />}
                    {item.new && (
                      <span className="bg-purple-700 text-white text-xs font-bold rounded-md px-2 py-1">New</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
