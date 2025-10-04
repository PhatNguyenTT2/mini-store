import React from 'react';
import { LogoSection } from './sections/LogoSection';
import { UserProfileSection } from './sections/UserProfileSection';
import { NavigationMenuSection } from './sections/NavigationMenuSection';

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-4 flex flex-col">
      <LogoSection />
      <UserProfileSection />
      <NavigationMenuSection />
    </div>
  );
};

export default Sidebar;
