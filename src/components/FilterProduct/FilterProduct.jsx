import React, { useState } from 'react';
import { Filter } from 'lucide-react';

export const FilterProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([500, 1000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [isDragging, setIsDragging] = useState(null); // null | 'min' | 'max'

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

  const handleColorToggle = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleConditionToggle = (condition) => {
    setSelectedConditions(prev =>
      prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition]
    );
  };

  const handleMouseDown = (type) => {
    setIsDragging(type);
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  // Add global mouse event listeners for price slider
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const slider = document.querySelector('.price-slider-track');
      if (!slider) return;

      const rect = slider.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const value = Math.round((percentage / 100) * 1000);

      setPriceRange(prev => {
        if (isDragging === 'min') {
          return [Math.min(value, prev[1] - 50), prev[1]];
        } else {
          return [prev[0], Math.max(value, prev[0] + 50)];
        }
      });
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };
    }
  }, [isDragging]);

  const CATEGORY_IMAGES = {
    bakingMaterial: "https://www.figma.com/api/mcp/asset/99a37d83-0cb8-40cb-9da2-c9a1c9eb8662",
    milksDairies: "https://www.figma.com/api/mcp/asset/0359b432-c20d-4378-a587-d6f7e25eeda0",
    petFoodsToy: "https://www.figma.com/api/mcp/asset/78e9d36f-270d-4610-ac4f-2aeeb715d223",
    clothingBeauty: "https://www.figma.com/api/mcp/asset/54310325-abd2-4f17-9865-e5ae10f85217",
    freshFruit: "https://www.figma.com/api/mcp/asset/df9e24f5-fc45-431e-a6d1-e9ff64942cb3",
  };

  const categories = [
    { name: 'Milks & Dairies', count: 5, icon: CATEGORY_IMAGES.milksDairies },
    { name: 'Clothing & Beauty', count: 4, icon: CATEGORY_IMAGES.clothingBeauty },
    { name: 'Pet Foods & Toy', count: 2, icon: CATEGORY_IMAGES.petFoodsToy },
    { name: 'Baking material', count: 11, icon: CATEGORY_IMAGES.bakingMaterial },
    { name: 'Fresh Fruit', count: 10, icon: CATEGORY_IMAGES.freshFruit },
  ];

  const colors = [
    { name: 'Red', count: 56 },
    { name: 'Green', count: 78 },
    { name: 'Blue', count: 54 },
  ];

  const conditions = [
    { name: 'New', count: 1506 },
    { name: 'Refurbished', count: 27 },
    { name: 'Used', count: 45 },
  ];

  return (
    <div className="w-72 space-y-4 overflow-y-auto h-full">
      {/* Category Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        {/* Header */}
        <div className="border-b border-gray-200 pb-2 mb-4">
          <h3 className="text-lg font-bold text-gray-800">Category</h3>
          <div className="w-16 h-0.5 bg-emerald-400 mt-1.5"></div>
        </div>

        {/* Category List */}
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded border transition-all ${selectedCategory === category.name
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center gap-2">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xs text-gray-800">{category.name}</span>
              </div>
              <div className="bg-emerald-200 rounded-full w-5 h-5 flex items-center justify-center">
                <span className="text-[10px] text-gray-800 font-medium">{category.count}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fill by Price Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 relative overflow-hidden">
        {/* Decorative image in bottom right */}
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10 pointer-events-none">
          <div className="text-4xl">🥬</div>
        </div>

        {/* Header */}
        <div className="border-b border-gray-200 pb-2 mb-4 relative z-10">
          <h3 className="text-lg font-bold text-gray-800">Fill by price</h3>
          <div className="w-16 h-0.5 bg-emerald-400 mt-1.5"></div>
        </div>

        {/* Price Range Slider */}
        <div className="mb-4 relative z-10">
          <div className="flex justify-between mb-3 text-xs">
            <span className="text-gray-500">
              From: <span className="text-emerald-600 font-semibold">${priceRange[0]}</span>
            </span>
            <span className="text-gray-500">
              To: <span className="text-emerald-600 font-semibold">${priceRange[1]}</span>
            </span>
          </div>

          {/* Slider Track */}
          <div className="relative h-1 mb-6">
            <div
              className="price-slider-track absolute inset-0 bg-gray-300 rounded cursor-pointer"
              onMouseDown={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                const clickValue = Math.round((percentage / 100) * 1000);

                const distToMin = Math.abs(clickValue - priceRange[0]);
                const distToMax = Math.abs(clickValue - priceRange[1]);

                if (distToMin < distToMax) {
                  setPriceRange([Math.min(clickValue, priceRange[1] - 50), priceRange[1]]);
                  handleMouseDown('min');
                } else {
                  setPriceRange([priceRange[0], Math.max(clickValue, priceRange[0] + 50)]);
                  handleMouseDown('max');
                }
              }}
            >
              {/* Active range */}
              <div
                className="absolute h-1 bg-emerald-500 rounded"
                style={{
                  left: `${(priceRange[0] / 1000) * 100}%`,
                  right: `${100 - (priceRange[1] / 1000) * 100}%`
                }}
              />

              {/* Min thumb */}
              <div
                className="absolute w-4 h-4 bg-emerald-500 rounded-full -top-1.5 transform -translate-x-1/2 cursor-grab active:cursor-grabbing z-10"
                style={{ left: `${(priceRange[0] / 1000) * 100}%` }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  handleMouseDown('min');
                }}
              />

              {/* Max thumb */}
              <div
                className="absolute w-4 h-4 bg-emerald-500 rounded-full -top-1.5 transform -translate-x-1/2 cursor-grab active:cursor-grabbing z-10"
                style={{ left: `${(priceRange[1] / 1000) * 100}%` }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  handleMouseDown('max');
                }}
              />
            </div>
          </div>
        </div>

        {/* Color Checkboxes */}
        <div className="mb-4 relative z-10">
          <h4 className="text-xs font-black text-gray-500 mb-2">Color</h4>
          <div className="space-y-1.5">
            {colors.map((color) => (
              <label
                key={color.name}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color.name)}
                  onChange={() => handleColorToggle(color.name)}
                  className="w-3.5 h-3.5 rounded border-2 border-gray-400 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-xs text-gray-600">
                  {color.name} ({color.count})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Item Condition Checkboxes */}
        <div className="mb-4 relative z-10">
          <h4 className="text-xs font-black text-gray-500 mb-2">Item Condition</h4>
          <div className="space-y-1.5">
            {conditions.map((condition) => (
              <label
                key={condition.name}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedConditions.includes(condition.name)}
                  onChange={() => handleConditionToggle(condition.name)}
                  className="w-3.5 h-3.5 rounded border-2 border-gray-400 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-xs text-gray-600">
                  {condition.name} ({condition.count})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Filter Button */}
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors relative z-10">
          <Filter className="w-3 h-3" />
          <span className="text-[10px] tracking-wider">FILTER</span>
        </button>
      </div>
    </div>
  );
};
