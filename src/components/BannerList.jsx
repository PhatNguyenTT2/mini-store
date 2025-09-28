import React from 'react';

export default function BannerList({
  banners = [
    // Each banner: { image, alt, badge, lines: string[], cta: {label, href}, align: 'left'|'right' }
  ],
  columns = 3,
}) {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-1';

  return (
    <section className="mt-10">
      <div className={`grid grid-cols-1 gap-4 ${gridCols}`}>
        {banners.map((b, i) => (
          <div key={i} className="relative h-56 w-full overflow-hidden rounded-lg sm:h-64">
            <img
              src={b.image}
              alt={b.alt || `Banner ${i + 1}`}
              className="absolute inset-0 size-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div
              className={`absolute inset-0 ${b.align === 'right' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
                } from-white/85 to-white/0`}
            />
            <div
              className={`relative z-10 p-5 ${b.align === 'right' ? 'flex justify-end text-right' : ''
                } h-full`}
            >
              <div className={`${b.align === 'right' ? 'self-end' : ''}`}>
                {b.badge ? (
                  <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                    {b.badge}
                  </span>
                ) : null}
                {Array.isArray(b.lines) && b.lines.length > 0 ? (
                  <div className="mt-3 text-xl font-extrabold leading-snug text-gray-900">
                    {b.lines.map((l, idx) => (
                      <div key={idx}>{l}</div>
                    ))}
                  </div>
                ) : null}
                {b.cta?.label ? (
                  <a
                    href={b.cta.href || '#'}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white hover:bg-black"
                  >
                    {b.cta.label}
                    <span aria-hidden>→</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


