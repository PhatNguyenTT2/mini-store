import React from 'react';
import { Header } from '../../../Header';
import { Footer } from '../../../Footer';

export const MainContentSection = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="flex-1 min-h-0 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};
