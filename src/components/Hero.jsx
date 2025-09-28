import React from 'react';

// Default background from Figma design
const DEFAULT_BG = "https://s3-alpha-sig.figma.com/img/9eae/8e82/cdf515a0ef94e9d076eccb85b50a63da?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lfgqqoDgpTyXrVxAgxl9DNe~3AcUEiLancF6cJWwj6xXToX9jhkH0SOYYG0kKJ5U0NIaqYsg1GZ35M7Ij4-8e~4N0tSY4CShhwBqOkrxHlduxAZq2d~4ArlGYMBySa0AZDUiYmpYQKnCZGHI7NCDE33IXDvPBAJvOK04T-umKUbySOEEKOtqjV6jpdKsvWjifGK1~zy5c1DhAIGXxn~nmrRTCG46-4YXvKTGOKtrTGxadfS1B074vR6ogMjY9izff7utNMvFW-2KDxIpdLkjnZoaEzR-B1ivyRK1~LxRCnIagz2bmYQkp-kFmRm4dp-Aq62h2pAFsfNZwfMdSV5UfQ__";

export default function Hero({
  background = DEFAULT_BG,
  badge = 'Weekend Discount',
  title = [
    'Get the best quality',
    'products at the lowest',
    'prices',
  ],
  subtitle = [
    'We have prepared special discounts for you on grocery',
    `products. Don't miss these opportunities...`,
  ],
  price = { current: '$27.99', old: '$56.67' },
  cta = { label: 'Shop Now', href: '#' },
}) {
  return (
    <section className="w-full">
      <div
        className="relative mx-auto max-w-[1200px] overflow-hidden rounded-md"
        style={{ minHeight: 380 }}
      >
        <img
          src={background}
          alt="Hero banner"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        <div className="relative z-10 px-6 py-10 md:px-10 md:py-14">
          <span className="inline-block rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
            {badge}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-[#39245f] leading-tight">
            {title.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <p className="mt-4 max-w-xl text-gray-700 text-sm md:text-base">
            {subtitle[0]}
            <br />
            {subtitle[1]}
          </p>
          <div className="mt-6 flex items-center gap-5">
            <a
              href={cta.href}
              className="inline-flex items-center rounded-lg bg-[#634c9f] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95"
            >
              {cta.label}
            </a>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl md:text-3xl font-bold text-red-600">{price.current}</span>
              <span className="text-sm md:text-base text-gray-500 line-through">{price.old}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


