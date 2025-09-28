import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center text-sm text-gray-500">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <a
            href={item.href}
            className={`hover:text-purple-600 ${item.isCurrent ? 'font-semibold text-gray-900' : ''}`}
          >
            {item.name}
          </a>
          {index < items.length - 1 && (
            <ChevronRight size={16} className="mx-2" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
