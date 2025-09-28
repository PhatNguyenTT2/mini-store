import React from 'react';

export default function TopBar() {
  return (
    <div className="w-full bg-[#634c9f] text-white text-sm">
      <div className="mx-auto max-w-[1200px] px-4 py-2 flex items-center justify-between">
        <p className="truncate">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
        </p>
        <div className="hidden sm:flex items-center gap-2 text-white/90">
          <span className="opacity-70">Until the end of the sale:</span>
          <CountdownPart value="47" label="days" />
          <CountdownPart value="06" label="hours" />
          <CountdownPart value="55" label="minutes" />
          <CountdownPart value="51" label="sec." />
        </div>
      </div>
    </div>
  );
}

function CountdownPart({ value, label }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="font-bold text-base leading-none">{value}</span>
      <span className="text-xs opacity-70 leading-none">{label}</span>
    </div>
  );
}


