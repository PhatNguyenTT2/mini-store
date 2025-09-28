import React from 'react';

export default function FeaturesRow() {
  const items = [
    {
      title: 'Payment only online',
      desc: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
      // SVGs from design replaced with simple emojis for now; can swap with actual assets
      icon: '💳',
    },
    {
      title: 'New stocks and sales',
      desc: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
      icon: '🛍️',
    },
    {
      title: 'Quality assurance',
      desc: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
      icon: '✅',
    },
    {
      title: 'Delivery from 1 hour',
      desc: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
      icon: '🚚',
    },
  ];

  return (
    <div className="mt-6 rounded-md border border-gray-200">
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-4">
        {items.map((it, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded bg-gray-100 text-xl">
              <span aria-hidden>{it.icon}</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">{it.title}</div>
              <div className="mt-1 text-xs leading-5 text-gray-500">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


