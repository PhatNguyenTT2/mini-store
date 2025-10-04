import React from 'react';

export const LogoSection = () => {
  const logoUrl = "https://c.animaapp.com/YP0auJCm/img/nest@2x.png";

  return (
    <div className="p-6 flex items-center">
      <img src={logoUrl} alt="Nest Logo" className="h-10 w-auto" />
    </div>
  );
};
