import React from 'react';

export default function PromoBanner({ imageUrl, lines = [], badge = 'Only This Week', cta = { label: 'Shop Now', href: '#' } }) {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-md">
      <img src={imageUrl} alt="Promo" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 to-white/0" />
      <div className="relative z-10 p-5">
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">{badge}</span>
        <div className="mt-3 text-gray-900 text-xl font-bold leading-snug">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
        <a
          href={cta.href}
          className="mt-4 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold text-gray-900 hover:bg-gray-50"
        >
          {cta.label}
        </a>
      </div>
    </div>
  );
}


