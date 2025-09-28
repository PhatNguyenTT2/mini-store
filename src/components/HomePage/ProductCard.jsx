import React from 'react';

export default function ProductCard({
  image,
  title,
  rating = 4,
  price,
  oldPrice,
  badges = [],
}) {
  return (
    <div className="group rounded-lg border border-gray-200 p-3">
      <div className="relative aspect-[1/1] w-full overflow-hidden rounded-md bg-gray-50">
        {badges?.map((b, i) => (
          <span
            key={i}
            className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${b.variant === 'danger'
                ? 'bg-red-600 text-white'
                : b.variant === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
          >
            {b.text}
          </span>
        ))}
        <img src={image} alt={title} className="absolute inset-0 size-full object-cover" />
      </div>
      <div className="mt-3 text-sm font-medium text-gray-900 leading-snug line-clamp-2">{title}</div>
      <Stars value={rating} />
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-lg font-bold text-red-600">{price}</span>
        {oldPrice ? (
          <span className="text-sm text-gray-500 line-through">{oldPrice}</span>
        ) : null}
      </div>
      <button className="mt-3 w-full rounded-full border border-[#634c9f] px-3 py-1.5 text-sm font-medium text-[#634c9f] hover:bg-[#f7f5ff]">
        Add to cart
      </button>
    </div>
  );
}

function Stars({ value = 0 }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const arr = Array.from({ length: 5 });
  return (
    <div className="mt-1 flex items-center gap-0.5">
      {arr.map((_, i) => (
        <Star key={i} state={i < full ? 'full' : i === full && hasHalf ? 'half' : 'empty'} />)
      )}
      <span className="ml-2 text-xs text-gray-500">{value.toFixed(2)}</span>
    </div>
  );
}

function Star({ state }) {
  const cls =
    state === 'full'
      ? 'text-yellow-400'
      : state === 'half'
        ? 'text-yellow-300'
        : 'text-gray-300';
  return <span className={cls}>★</span>;
}


