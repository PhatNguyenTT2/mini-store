# 📐 Design System Template - Admin Dashboard

## 🎯 Mục đích
Tài liệu này định nghĩa các nguyên tắc và template mẫu để đảm bảo tính đồng bộ giữa các trang trong dự án. Sử dụng làm hướng dẫn khi tạo mới hoặc mở rộng các trang quản lý.

---

## 📋 Cấu trúc Page Standard

### 1. **Page Layout Structure**
```jsx
<Layout>
  <div className="space-y-6">
    {/* Breadcrumb */}
    <Breadcrumb items={breadcrumbItems} />

    {/* List Header */}
    <ListHeader {...headerProps} />

    {/* Loading State */}
    {isLoading && <LoadingSpinner />}

    {/* Error State */}
    {error && <ErrorMessage />}

    {/* Data List/Table */}
    {!isLoading && !error && <DataList {...listProps} />}

    {/* Results Info */}
    {!isLoading && !error && data.length > 0 && <ResultsInfo />}

    {/* Pagination (optional) */}
    {pagination && <Pagination />}

    {/* Empty State */}
    {!isLoading && !error && data.length === 0 && <EmptyState />}
  </div>
</Layout>
```

### 2. **Breadcrumb Items Format**
```jsx
const breadcrumbItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Current Page', href: null }, // null = active page
];
```

---

## 🗂️ List/Table Component Structure

### 1. **Container**
```jsx
<div className="bg-white rounded-lg shadow-sm overflow-hidden">
  <div className="overflow-x-auto overflow-y-visible">
    <div className="min-w-[1000px]"> {/* Adjust min-width based on content */}
      {/* Header */}
      {/* Body */}
    </div>
  </div>
</div>
```

### 2. **Table Header**
```jsx
<div className="flex items-center h-[34px] bg-gray-50 border-b border-gray-200">
  {/* Sortable Column */}
  <div
    className="w-[120px] px-3 flex items-center flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
    onClick={() => handleSortClick('fieldName')}
  >
    <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px] flex items-center">
      Column Name
      {getSortIcon('fieldName')}
    </p>
  </div>

  {/* Non-sortable Column */}
  <div className="w-[100px] px-3 flex items-center flex-shrink-0">
    <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
      Column Name
    </p>
  </div>

  {/* Flexible Column */}
  <div className="flex-1 min-w-[200px] px-3 flex items-center">
    <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
      Column Name
    </p>
  </div>

  {/* Actions Column */}
  <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0">
    <p className="text-[11px] font-medium font-['Poppins',sans-serif] text-[#212529] uppercase tracking-[0.5px] leading-[18px]">
      Actions
    </p>
  </div>
</div>
```

### 3. **Table Body Rows**
```jsx
<div className="flex flex-col">
  {data.map((item, index) => (
    <div
      key={item.id}
      className={`flex items-center h-[60px] hover:bg-gray-50 transition-colors ${
        index !== data.length - 1 ? 'border-b border-gray-100' : ''
      }`}
    >
      {/* Fixed Width Column */}
      <div className="w-[120px] px-3 flex items-center flex-shrink-0">
        <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px]">
          {item.value}
        </p>
      </div>

      {/* Flexible Column with Truncate */}
      <div className="flex-1 min-w-[200px] px-3 flex items-center">
        <p className="text-[13px] font-normal font-['Poppins',sans-serif] text-[#212529] leading-[20px] truncate">
          {item.name}
        </p>
      </div>

      {/* Actions Column */}
      <div className="w-[100px] px-3 flex items-center justify-center flex-shrink-0 relative">
        {/* Actions Dropdown */}
      </div>
    </div>
  ))}
</div>
```

---

## 🎨 Typography Standards

### Header Text (Column Headers)
- **Font**: Poppins
- **Size**: 11px
- **Weight**: medium (500)
- **Color**: #212529
- **Transform**: uppercase
- **Tracking**: 0.5px
- **Line Height**: 18px

### Body Text (Cell Content)
- **Font**: Poppins
- **Size**: 13px
- **Weight**: normal (400)
- **Color**: #212529
- **Line Height**: 20px

### Helper Text
- **Font**: Poppins
- **Size**: 12px
- **Weight**: normal (400)
- **Color**: #6c757d

---

## 🎯 Sort Icons

### Implementation
```jsx
const getSortIcon = (field) => {
  if (sortField !== field) {
    // Default state (not active)
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
        <path d="M6 3V9M6 3L4 5M6 3L8 5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (sortOrder === 'asc') {
    // Ascending (arrow up - green)
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
        <path d="M6 9V3M6 3L4 5M6 3L8 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  } else {
    // Descending (arrow down - green)
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
        <path d="M6 3V9M6 9L4 7M6 9L8 7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
};
```

### Colors
- **Inactive**: #6B7280 (gray)
- **Active**: #10B981 (emerald/green)

---

## ⚙️ Actions Dropdown (3 Dots Menu)

### Icon (Horizontal 3 Dots)
```jsx
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="3" cy="8" r="1.5" fill="#6B7280" />
  <circle cx="8" cy="8" r="1.5" fill="#6B7280" />
  <circle cx="13" cy="8" r="1.5" fill="#6B7280" />
</svg>
```

### Dropdown Menu Structure
```jsx
<div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
  {/* Primary Action */}
  <button
    className="w-full px-4 py-2 text-left text-[12px] font-['Poppins',sans-serif] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
  >
    <svg>{/* Icon */}</svg>
    Edit
  </button>

  {/* Divider */}
  <div className="border-t border-gray-200 my-1"></div>

  {/* Danger Action */}
  <button
    className="w-full px-4 py-2 text-left text-[12px] font-['Poppins',sans-serif] text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-2"
  >
    <svg>{/* Icon */}</svg>
    Delete
  </button>
</div>
```

### Common Actions
1. **View** - Blue hover (`hover:bg-blue-50 hover:text-blue-600`)
2. **Edit** - Blue hover
3. **Delete** - Red hover (`hover:bg-red-50 hover:text-red-600`)

---

## 🎨 List Header Component

### Structure
```jsx
<div className="bg-white p-4 rounded-lg shadow-sm">
  <div className="flex items-center justify-between gap-3">
    {/* Title */}
    <div className="flex items-center">
      <h2 className="text-[13px] font-normal font-['Poppins',sans-serif] text-black leading-[20px] whitespace-nowrap">
        All Items
      </h2>
    </div>

    {/* Controls Container */}
    <div className="flex items-center gap-2 flex-1 ml-4">
      {/* Items Per Page Dropdown */}
      <div className="relative w-[80px]">
        <select className="w-full h-[36px] bg-white border border-[#ced4da] rounded-lg px-3 py-2 text-[12px] font-['Poppins',sans-serif] text-[#212529] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      {/* Search Input */}
      <div className="flex-1 max-w-[300px]">
        <div className="flex h-[36px] gap-1">
          <input
            type="text"
            placeholder="Search by..."
            className="flex-1 bg-white border border-[#ced4da] rounded-lg px-3 py-2 text-[12px] font-['Poppins',sans-serif] text-gray-900 placeholder:text-[#6c757d] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          <button className="w-[40px] bg-white border border-[#ced4da] rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0">
            {/* Search Icon */}
          </button>
        </div>
      </div>
    </div>

    {/* Actions Button with Dropdown */}
    <div className="relative ml-auto">
      <button className="h-[36px] px-4 bg-emerald-600 hover:bg-emerald-700 border border-emerald-600 rounded-lg text-white text-[12px] font-['Poppins',sans-serif] leading-[20px] flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 whitespace-nowrap">
        <span>Actions</span>
        <svg>{/* Dropdown Arrow */}</svg>
      </button>
    </div>
  </div>
</div>
```

### Actions Dropdown Menu
```jsx
<div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
  {/* Add New Item */}
  <button className="w-full px-4 py-2 text-left text-[12px] font-['Poppins',sans-serif] text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors flex items-center gap-2">
    <svg>{/* Plus Icon */}</svg>
    Add New
  </button>

  <div className="border-t border-gray-200 my-1"></div>

  {/* Export CSV */}
  <button className="w-full px-4 py-2 text-left text-[12px] font-['Poppins',sans-serif] text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
    <svg>{/* Download Icon */}</svg>
    Export CSV
  </button>

  {/* Print */}
  <button className="w-full px-4 py-2 text-left text-[12px] font-['Poppins',sans-serif] text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
    <svg>{/* Print Icon */}</svg>
    Print
  </button>
</div>
```

---

## 🎨 Color Palette

### Primary Colors
- **Emerald 600**: #10B981 (Primary action, active sort)
- **Emerald 700**: #059669 (Hover state)
- **Emerald 50**: #ECFDF5 (Light background)

### Neutral Colors
- **Gray 900**: #111827 (Dark text)
- **Gray 700**: #374151 (Secondary text)
- **Gray 600**: #4B5563 (Tertiary text)
- **Gray 500**: #6B7280 (Disabled/inactive)
- **Gray 200**: #E5E7EB (Borders)
- **Gray 100**: #F3F4F6 (Light backgrounds)
- **Gray 50**: #F9FAFB (Subtle backgrounds)

### Semantic Colors
- **Blue 600**: #2563EB (Info, Edit action)
- **Blue 50**: #EFF6FF (Blue hover background)
- **Red 600**: #DC2626 (Danger, Delete action)
- **Red 50**: #FEF2F2 (Red hover background)
- **Yellow 400**: #FBBF24 (Warning)
- **Purple 500**: #8B5CF6 (Special status)

### Text Colors
- **Primary Text**: #212529
- **Secondary Text**: #6c757d
- **Placeholder**: #6c757d

---

## 📏 Spacing & Sizing

### Column Widths
- **Small Fixed**: `w-[80px]` - `w-[120px]`
- **Medium Fixed**: `w-[140px]` - `w-[180px]`
- **Large Fixed**: `w-[200px]` - `w-[250px]`
- **Flexible**: `flex-1 min-w-[200px]`
- **Actions**: `w-[100px]` - `w-[140px]`

### Heights
- **Header Row**: `h-[34px]`
- **Body Row**: `h-[60px]`
- **Input/Button**: `h-[36px]`

### Padding
- **Column Padding**: `px-3` (horizontal)
- **Card Padding**: `p-4`
- **Button Padding**: `px-4 py-2`

### Spacing
- **Section Gap**: `space-y-6`
- **Control Gap**: `gap-2` - `gap-3`
- **Icon Gap**: `gap-1.5`

---

## 🔄 State Management Pattern

### Standard State Variables
```jsx
// Data state
const [items, setItems] = useState([]);
const [filteredItems, setFilteredItems] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

// Filter & sort state
const [itemsPerPage, setItemsPerPage] = useState(20);
const [searchQuery, setSearchQuery] = useState('');
const [sortField, setSortField] = useState('name');
const [sortOrder, setSortOrder] = useState('asc');

// Dropdown state
const [activeDropdown, setActiveDropdown] = useState(null);
```

### Fetch Pattern
```jsx
const fetchItems = async () => {
  try {
    setIsLoading(true);
    setError(null);
    const response = await itemService.getItems();
    
    if (response.success && response.data && response.data.items) {
      setItems(response.data.items);
    } else if (Array.isArray(response)) {
      setItems(response);
    } else {
      setItems([]);
    }
  } catch (err) {
    console.error('Error fetching items:', err);
    setError(err.message || 'Failed to load items');
    setItems([]);
  } finally {
    setIsLoading(false);
  }
};
```

### Sort Handler
```jsx
const handleColumnSort = (field, order) => {
  setSortField(field);
  setSortOrder(order);
};
```

---

## 📦 Component File Structure

```
ComponentName/
├── index.js                    # Export barrel
├── ComponentList.jsx           # Main list/table component
├── ComponentListHeader.jsx     # Header with search/filters
└── README.md                   # Component documentation (optional)
```

### Export Pattern (index.js)
```jsx
export { ComponentList } from './ComponentList';
export { ComponentListHeader } from './ComponentListHeader';
```

---

## 🚀 Quick Start Checklist

Khi tạo page mới, làm theo các bước sau:

### 1. **Tạo Service** (`services/itemService.js`)
- [ ] getItems()
- [ ] getItemById(id)
- [ ] createItem(data)
- [ ] updateItem(id, data)
- [ ] deleteItem(id)

### 2. **Tạo Components**
- [ ] `ItemList.jsx` - Table/List component
- [ ] `ItemListHeader.jsx` - Header với search & filters
- [ ] `index.js` - Exports

### 3. **Tạo Page** (`pages/Items.jsx`)
- [ ] Import Layout, Breadcrumb
- [ ] State management (data, loading, error, filters)
- [ ] fetchItems function
- [ ] Handler functions (sort, search, edit, delete)
- [ ] Render with conditional states

### 4. **Update Routing** (`App.jsx`)
- [ ] Import page component
- [ ] Add protected route

### 5. **Test Các Cases**
- [ ] Loading state
- [ ] Error state
- [ ] Empty state
- [ ] Data display
- [ ] Sorting
- [ ] Searching
- [ ] Actions (Edit/Delete)

---

## 📝 Naming Conventions

### Files
- **Components**: PascalCase - `OrderList.jsx`
- **Pages**: PascalCase - `Orders.jsx`
- **Services**: camelCase - `orderService.js`
- **Utils**: camelCase - `formatDate.js`

### Variables
- **State**: camelCase - `isLoading`, `sortField`
- **Handlers**: camelCase with 'handle' prefix - `handleSort`, `handleDelete`
- **Constants**: UPPER_SNAKE_CASE - `DEFAULT_PAGE_SIZE`

### CSS Classes
- **Tailwind**: Follow Tailwind conventions
- **Custom**: kebab-case (if needed)

---

## 🎯 Examples Reference

### Hoàn chỉnh và đã test:
1. **OrderList** - Template chuẩn cho danh sách orders
   - File: `admin/src/components/OrderList/`
   - Page: `admin/src/pages/Orders.jsx`

2. **CategoryList** - Template chuẩn cho danh sách categories
   - File: `admin/src/components/CategoryList/`
   - Page: `admin/src/pages/Categories.jsx`

---

## 📌 Important Notes

1. **Always use Layout component** cho các trang protected
2. **Breadcrumb is mandatory** cho navigation
3. **Sort icons phải có màu** (#6B7280 inactive, #10B981 active)
4. **Actions menu dùng 3 chấm ngang** (horizontal dots)
5. **Typography phải consistent** - 11px headers, 13px body
6. **Row height cố định** - 60px cho body rows
7. **Hover states bắt buộc** cho interactive elements
8. **Dropdown menu phải có z-index cao** để không bị che
9. **Empty/Loading/Error states phải có** cho UX tốt
10. **Responsive với horizontal scroll** khi cần thiết

---

## 🔧 Utilities & Helpers

### Truncate Text Function
```jsx
const truncateText = (text, maxLength = 100) => {
  if (!text) return '-';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
```

### Close Dropdown on Outside Click
```jsx
useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  if (activeDropdown) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [activeDropdown]);
```

---

## 📚 Further Reading

- Tailwind CSS Documentation: https://tailwindcss.com/docs
- React Best Practices: https://react.dev/learn
- Poppins Font: Google Fonts

---

**Version**: 1.0.0  
**Last Updated**: October 9, 2025  
**Maintained by**: Development Team
