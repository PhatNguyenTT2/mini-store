# FilterProduct Component

Component bộ lọc sản phẩm được chuyển đổi từ Figma design, hiển thị ở bên phải màn hình (ngược với Sidebar).

## Vị trí
- `src/components/FilterProduct/FilterProduct.jsx`
- `src/components/FilterProduct/index.js`

## Cách sử dụng

```jsx
import { FilterProduct } from '../components/FilterProduct';

<div className="flex gap-6">
  <div className="flex-1">
    {/* Main content */}
  </div>
  <div className="flex-shrink-0">
    <FilterProduct />
  </div>
</div>
```

## Tính năng

### 1. Keywords Search
- Input field để tìm kiếm theo từ khóa
- Placeholder: "Phone, Headphone, Shoe ..."
- Icon search button

### 2. Categories Filter
- Checkbox list cho các danh mục:
  - All
  - Accessories
  - Phone
  - Headphone
  - Camera
- Logic: Chọn "All" sẽ bỏ chọn tất cả categories khác
- Khi chọn category khác thì "All" tự động bỏ chọn

### 3. Price Range Slider
- Slider với 2 thumbs (min/max)
- Hiển thị giá trị hiện tại trên thumb
- Range: $1 - $1,000
- Màu emerald cho active range và thumbs

### 4. Colors Filter
- 6 màu để chọn:
  - Blue (#1fa0c6)
  - Green (#10b981)
  - Pink (#c61faa)
  - Emerald (#1fc662)
  - Lime (#9dc61f)
  - Orange (#c67b1f)
- Click để toggle selection
- Selected: hiển thị ring emerald

## State Management

```jsx
const [openSections, setOpenSections] = useState({
  keywords: true,
  categories: true,
  price: true,
  colors: true,
});

const [selectedCategories, setSelectedCategories] = useState(['All']);
const [selectedColors, setSelectedColors] = useState([]);
const [priceRange, setPriceRange] = useState([300, 500]);
const [keyword, setKeyword] = useState('');
```

## Design

- Background: `bg-gray-100`
- Sections: `bg-white rounded-2xl p-6`
- Width: `w-80` (320px)
- Spacing: `gap-6` giữa các sections
- Scroll: `overflow-y-auto h-full`

## Color Scheme

⚠️ **Quan trọng**: Component này tuân thủ color scheme EMERALD của admin project.

- Primary color: `emerald-600` (thay vì purple từ Figma)
- Active states: `emerald-500`, `emerald-600`
- Focus rings: `ring-emerald-500`
- Borders: `border-emerald-600`

## Icons

Sử dụng `lucide-react`:
- `ChevronDown`, `ChevronUp`: Toggle sections
- `Search`: Search button

## Tích hợp với ViewProduct

```jsx
// src/pages/ViewProduct.jsx
<Layout>
  <div className="flex gap-6 h-full -m-6 p-6">
    <div className="flex-1 space-y-6 min-w-0">
      <Breadcrumb items={breadcrumbItems} />
      {/* Product content */}
    </div>
    <div className="flex-shrink-0">
      <FilterProduct />
    </div>
  </div>
</Layout>
```

## Responsive Notes

- Desktop: Hiển thị full bên phải (320px width)
- Tablet/Mobile: Có thể chuyển thành modal hoặc drawer (TODO)

## Collapsible Sections

Tất cả sections có thể đóng/mở:
- Click vào header của section để toggle
- State được lưu trong `openSections`
- Icon thay đổi: ChevronDown ↔ ChevronUp
