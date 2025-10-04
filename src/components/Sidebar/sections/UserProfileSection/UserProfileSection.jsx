import React from 'react';

export const UserProfileSection = () => {
  const user = {
    name: 'Shawon Farabi',
    role: 'Sales Manager',
    avatar: 'https://s3-alpha-sig.figma.com/img/71e0/f251/f65bc89337dbd1f3738706d1b0775a8e?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AlDUcQ0ZGxNkd56ARoKYg1te26NFvniwG~iWSAwQzGX8fMHM~fi5WqVVT~wFfzBoUF0q03sfQ-6sBuzOCavRg~LdkfOxBBrFm5S70Snqp~p9tPNZmv6vYSDhqxft0C4l8k3DVIzdhxcq5FIjpaikZCgnoKw34lLKvhGyfMiV5MdBeNKSD20ptz3vDpXI-xR3nLmyj7NrxhA2QVT~U36OAdUwg3e4omX-CV5XDeSuT3vCyO-qhQw~f~gLmO8YHTu67M0LNfqOxRhNwTWHUMu37fB-V6eRLj4ff6-lExo4KW7L3-iN~plfrFIBwp8Rkp54ivDQI0CD6EtK2liEQwmZgQ__',
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex items-center">
        <img src={user.avatar} alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-bold text-emerald-600">{user.name}</p>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
      </div>
    </div>
  );
};
