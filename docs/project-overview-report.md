# Chương 1. TỔNG QUAN ĐỀ TÀI

## 1.1. Động lực nghiên cứu và lý do chọn đề tài

Trong bối cảnh thương mại điện tử phát triển mạnh mẽ và đặc biệt sau đại dịch COVID-19, việc xây dựng một nền tảng bán hàng trực tuyến hiện đại và hiệu quả đã trở thành yếu tố sống còn đối với các doanh nghiệp bán lẻ, bao gồm cả các siêu thị mini. Đề tài "Xây dựng Website Thương mại điện tử cho Siêu thị Mini (Mini Store)" được chọn với động lực chính là tạo ra một giải pháp toàn diện sử dụng công nghệ web hiện đại như React 19.1.1, Vite 7.1.12 và TailwindCSS 4.1.13.

Dự án Mini Store không chỉ mang lại trải nghiệm mua sắm tiện lợi cho khách hàng với giao diện responsive và thân thiện, mà còn cung cấp cho chủ cửa hàng một hệ thống quản trị admin với dashboard trực quan, biểu đồ doanh thu và công cụ quản lý sản phẩm hiệu quả. Dự án này giải quyết nhu cầu chuyển đổi số cấp thiết, giúp các siêu thị mini cạnh tranh hiệu quả hơn trong thị trường thương mại điện tử hiện đại.

## 1.2. Khảo sát hiện trạng

Hiện nay, nhiều siêu thị mini vẫn đang quản lý bán hàng theo phương pháp thủ công hoặc sử dụng các phần mềm quản lý lỗi thời, thiếu tính linh hoạt. Qua khảo sát thực tế và phân tích các giải pháp hiện có trên thị trường, các vấn đề chính được xác định như sau:

- **Giao diện người dùng lỗi thời**: Các website hiện có thường có giao diện không responsive, khó sử dụng trên thiết bị mobile và thiếu tính thẩm mỹ hiện đại.
- **Hệ thống quản trị phức tạp**: Thiếu dashboard trực quan với biểu đồ doanh thu, báo cáo thống kê và công cụ quản lý sản phẩm hiệu quả.
- **Hiệu suất kém**: Thời gian tải trang chậm, không tối ưu hóa cho trải nghiệm người dùng.
- **Chi phí triển khai cao**: Các giải pháp thương mại có chi phí license và duy trì không phù hợp với quy mô siêu thị mini.
- **Khó mở rộng**: Kiến trúc cũ khó tích hợp công nghệ mới và mở rộng chức năng.

Dự án Mini Store được thiết kế để khắc phục những nhược điểm trên bằng cách sử dụng kiến trúc component-based hiện đại, công nghệ Vite build tool và TailwindCSS utility-first framework, tạo ra một hệ thống tùy chỉnh, tối ưu hóa cho mô hình kinh doanh của siêu thị mini.

## 1.3. Đối tượng và Phạm vi nghiên cứu

- **Đối tượng nghiên cứu**: Quy trình bán hàng và quản lý của một siêu thị mini, bao gồm hoạt động của khách hàng và người quản trị trong môi trường thương mại điện tử.

- **Phạm vi nghiên cứu**:
    - **Phía Khách hàng (User-facing)**:
        - Giao diện trang chủ với Hero section, banner khuyến mãi và sản phẩm nổi bật
        - Hệ thống danh mục sản phẩm (9 categories: Fruits & Vegetables, Baby & Pregnancy, Beverages, Meats & Seafood, Biscuits & Snacks, Breads & Bakery, Breakfast & Dairy, Frozen Foods, Grocery & Staples)
        - Đăng ký, đăng nhập tài khoản với form validation
        - Hiển thị sản phẩm với thông tin chi tiết (giá, đánh giá, hình ảnh, badges)
        - Tính năng tìm kiếm và giỏ hàng
        - Responsive design cho desktop, tablet và mobile
        - (Trong tương lai) Đặt hàng và thanh toán trực tuyến
        
    - **Phía Quản trị (Admin-facing)**:
        - Dashboard tổng quan với sidebar navigation và SalesChart component
        - Header admin với search, notifications và nút "Add Product"
        - Giao diện quản lý với layout riêng biệt (LayoutAdmin)
        - Profile quản trị viên với avatar và thông tin vai trò
        - (Trong tương lai) CRUD sản phẩm, quản lý đơn hàng, quản lý danh mục và người dùng

## 1.4. Mục tiêu đề tài

### 1.4.1. Yêu cầu chức năng hệ thống

- **Đối với Khách hàng**:
    - `FE-01`: Hệ thống hiển thị trang chủ với Hero section, promotional banners và sản phẩm nổi bật
    - `FE-02`: Hệ thống phải cho phép người dùng đăng ký tài khoản mới với lựa chọn customer/vendor
    - `FE-03`: Hệ thống phải cho phép người dùng đăng nhập vào tài khoản đã có
    - `FE-04`: Hệ thống hiển thị 9 danh mục sản phẩm với hình ảnh và tên danh mục
    - `FE-05`: Hệ thống hiển thị sản phẩm với thông tin đầy đủ (hình ảnh, tên, giá, đánh giá, badges)
    - `FE-06`: Người dùng có thể tìm kiếm sản phẩm thông qua search bar
    - `FE-07`: Hệ thống hiển thị giỏ hàng với số lượng sản phẩm
    - `FE-08`: Giao diện responsive tương thích với desktop, tablet và mobile

- **Đối với Quản trị viên**:
    - `AD-01`: Hệ thống có giao diện admin riêng biệt với LayoutAdmin
    - `AD-02`: Dashboard tổng quan với sidebar navigation và user profile
    - `AD-03`: Trang Overview hiển thị SalesChart component với dữ liệu doanh thu
    - `AD-04`: Header admin với search, notifications và shopping cart icons
    - `AD-05`: Chức năng "Add Product" để thêm sản phẩm mới
    - `AD-06`: Menu quản lý với các module: Dashboard, Orders, Products, Customers, v.v.
    - `AD-07`: (Mở rộng) CRUD operations cho sản phẩm, đơn hàng và người dùng

### 1.4.2. Yêu cầu dữ liệu

- **Dữ liệu người dùng**: 
  - `user_id`: Mã định danh người dùng
  - `username`: Tên đăng nhập  
  - `email`: Địa chỉ email
  - `password_hash`: Mật khẩu đã mã hóa
  - `userType`: Loại người dùng ("customer" hoặc "vendor")
  - `address`, `phone_number`: Thông tin liên lạc

- **Dữ liệu sản phẩm**: 
  - `product_id`: Mã sản phẩm
  - `title`: Tên sản phẩm
  - `image`: URL hình ảnh sản phẩm  
  - `price`: Giá hiện tại
  - `oldPrice`: Giá cũ (để hiển thị giảm giá)
  - `rating`: Đánh giá sao (0-5)
  - `stock_quantity`: Số lượng tồn kho
  - `category_id`: Mã danh mục
  - `badges`: Mảng các nhãn (Organic, Sale, discount percentage)

- **Dữ liệu danh mục**: 
  - `category_id`: Mã danh mục
  - `name`: Tên danh mục (Fruits & Vegetables, Baby & Pregnancy, etc.)
  - `image`: URL hình ảnh đại diện danh mục

- **Dữ liệu đơn hàng** (dự kiến mở rộng):
  - `order_id`: Mã đơn hàng
  - `user_id`: Mã người dùng đặt hàng
  - `order_date`: Ngày đặt hàng
  - `total_amount`: Tổng giá trị đơn hàng
  - `status`: Trạng thái (pending, completed, cancelled)

- **Dữ liệu chi tiết đơn hàng**: 
  - `order_detail_id`: Mã chi tiết
  - `order_id`: Mã đơn hàng
  - `product_id`: Mã sản phẩm
  - `quantity`: Số lượng
  - `price`: Giá tại thời điểm đặt hàng

### 1.4.3. Yêu cầu giao diện, phần cứng, phần mềm

- **Yêu cầu giao diện**:
    - Giao diện được xây dựng dựa trên thiết kế từ Figma với color scheme chính là Purple (#634c9f)
    - Component-based architecture với các component tái sử dụng (ProductCard, PromoBanner, Hero, etc.)
    - Responsive design với breakpoints: mobile (< 640px), tablet (768px), desktop (1024px+)
    - Grid layout: 1 column (mobile) → 3 columns (tablet) → 9 columns (desktop) cho category list
    - Typography hierarchy với font chữ Sans-serif và kích thước phù hợp
    - Icons sử dụng Lucide React library cho tính nhất quán

- **Yêu cầu phần cứng**:
    - **Server**: CPU 2+ cores, RAM 4GB+, Storage 20GB+ SSD, Network 100Mbps+
    - **Client**: Máy tính, điện thoại thông minh, tablet có trình duyệt web hiện đại và kết nối internet ổn định
    - **Browser support**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

- **Yêu cầu phần mềm**:
    - **Frontend Framework**: React 19.1.1 với JSX
    - **Build Tool**: Vite 7.1.12 sử dụng Rolldown engine
    - **Styling**: TailwindCSS 4.1.13 utility-first framework
    - **Routing**: React Router DOM 7.9.3 cho SPA navigation  
    - **UI Components**: Lucide React 0.544.0 (icons), Recharts 3.2.1 (data visualization)
    - **Development**: Node.js 18.0.0+, npm 8.0.0+, ESLint, PostCSS, Autoprefixer
    - **Code Editor**: Visual Studio Code, Git version control
    - **Database** (dự kiến): PostgreSQL hoặc MongoDB với RESTful API
    - **Backend** (dự kiến): Node.js với Express.js framework

### 1.4.4. Yêu cầu phi chức năng

- **Hiệu suất (Performance)**: 
    - First Contentful Paint < 1.5s, Largest Contentful Paint < 2.5s
    - Tối ưu hóa hình ảnh với lazy loading và CDN hosting (Figma assets)
    - Code splitting và tree shaking với Vite build tool
    - Responsive images cho các breakpoint khác nhau

- **Bảo mật (Security)**: 
    - Form validation cho đăng ký/đăng nhập
    - Input sanitization để chống XSS attacks
    - HTTPS enforcement cho production environment
    - Password hashing với bcrypt hoặc similar library
    - Secure session management và CSRF protection

- **Khả năng bảo trì (Maintainability)**: 
    - Component-based architecture theo development principles
    - ESLint rules để đảm bảo code quality
    - Consistent naming conventions và folder structure
    - Documentation trong README.md và development-principles.md
    - Git version control với meaningful commit messages

- **Tính dễ sử dụng (Usability)**: 
    - Intuitive navigation với breadcrumb và clear menu structure
    - Visual feedback cho user interactions (hover effects, button states)
    - Error handling và user-friendly error messages
    - Accessibility compliance với proper semantic HTML và ARIA labels
    - Search functionality với placeholder text và search suggestions

- **Khả năng mở rộng (Scalability)**: 
    - Modular component architecture cho phép thêm features mới
    - Reusable utility functions và custom hooks
    - API-ready architecture để integrate với backend services
    - Environment configuration cho development/staging/production
    - Plugin architecture support cho third-party integrations

# Chương 2. CƠ SỞ LÝ THUYẾT

## 2.1. Tổng quan về công nghệ Frontend hiện đại

### 2.1.1. Single Page Application (SPA)

Single Page Application là một kiểu ứng dụng web hoạt động trong một trang duy nhất và cập nhật nội dung động mà không cần tải lại trang. Mini Store được xây dựng theo mô hình SPA với những ưu điểm:

- **Trải nghiệm người dùng mượt mà**: Chuyển đổi giữa các trang không có độ trễ do không cần reload
- **Hiệu suất cao**: Tải dữ liệu cần thiết thông qua AJAX/API calls
- **Tương tác phong phú**: Hỗ trợ các animation và transition phức tạp
- **Offline capability**: Có thể cache dữ liệu để hoạt động offline

### 2.1.2. Component-Based Architecture

Kiến trúc dựa trên component là nền tảng của React và được áp dụng nhất quán trong Mini Store:

```
src/components/
├── HomePage/           # Components cho trang chủ
│   ├── Hero.jsx       # Banner chính
│   ├── ProductCard.jsx # Card sản phẩm
│   ├── CategoryList.jsx # Danh sách danh mục
│   └── PromoBanner.jsx # Banner khuyến mãi
├── Layout/            # Layout components
│   ├── Layout.jsx     # Layout chung
│   └── LayoutAdmin.jsx # Layout admin
└── Header/            # Header components
    ├── Header.jsx     # Header chính
    └── TopBar.jsx     # Top navigation
```

**Nguyên tắc thiết kế component**:
- **Reusability**: Mỗi component có thể tái sử dụng ở nhiều nơi
- **Single Responsibility**: Mỗi component chỉ đảm nhận một chức năng cụ thể
- **Props-driven**: Nhận dữ liệu thông qua props để đảm bảo tính linh hoạt
- **Composition over Inheritance**: Kết hợp các component nhỏ để tạo component lớn

## 2.2. React.js Framework

### 2.2.1. Giới thiệu React

React là một JavaScript library được phát triển bởi Facebook (Meta) để xây dựng user interface, đặc biệt phù hợp với Single Page Applications. Mini Store sử dụng React phiên bản 19.1.1 - phiên bản mới nhất với nhiều cải tiến về hiệu suất.

### 2.2.2. Tính năng chính của React

**Virtual DOM**:
React sử dụng Virtual DOM để tối ưu hóa việc cập nhật giao diện:
```jsx
// Ví dụ từ ProductCard component
export default function ProductCard({ image, title, rating, price, oldPrice, badges }) {
  return (
    <div className="group rounded-lg border border-gray-200 p-3">
      <div className="relative aspect-[1/1] w-full overflow-hidden rounded-md bg-gray-50">
        <img src={image} alt={title} className="absolute inset-0 size-full object-cover" />
      </div>
      <div className="mt-3 text-sm font-medium text-gray-900">{title}</div>
    </div>
  );
}
```

**JSX Syntax**:
JSX cho phép viết HTML-like syntax trong JavaScript, làm cho code dễ đọc và maintain hơn.

**Hooks System**:
React Hooks được sử dụng để quản lý state và lifecycle:
```jsx
import React, { useState, useEffect } from 'react';

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
```

### 2.2.3. React Router DOM

React Router DOM (v7.9.3) được sử dụng để quản lý routing trong SPA:

```jsx
// main.jsx
const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/admin', element: <AdminHomePage /> },
]);
```

**Tính năng của React Router**:
- **Declarative routing**: Định nghĩa routes một cách khai báo
- **Nested routing**: Hỗ trợ routes lồng nhau
- **Code splitting**: Lazy loading các components
- **History management**: Quản lý browser history

## 2.3. Vite Build Tool

### 2.3.1. Giới thiệu Vite

Vite là một build tool hiện đại được phát triển bởi Evan You (tác giả Vue.js). Mini Store sử dụng Vite 7.1.12 với Rolldown engine để thay thế cho Webpack truyền thống.

### 2.3.2. Ưu điểm của Vite

**Fast Development Server**:
- **Hot Module Replacement (HMR)**: Cập nhật tức thì khi thay đổi code
- **ES Modules**: Sử dụng native ES modules của browser
- **Pre-bundling**: Pre-bundle dependencies để tăng tốc độ

**Optimized Production Build**:
- **Rollup-based**: Sử dụng Rollup để bundle production
- **Tree-shaking**: Loại bỏ dead code tự động
- **Code splitting**: Tách code thành nhiều chunks

**Configuration**:
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### 2.3.3. Rolldown Engine

Rolldown là JavaScript bundler được viết bằng Rust, mang lại hiệu suất vượt trội:
- **10x faster**: Nhanh hơn Webpack đáng kể
- **Rust-powered**: Tận dụng hiệu suất của Rust
- **Rollup compatible**: Tương thích với Rollup plugins

## 2.4. TailwindCSS Framework

### 2.4.1. Utility-First CSS Framework

TailwindCSS 4.1.13 là một utility-first CSS framework, khác biệt hoàn toàn với approach truyền thống:

**Traditional CSS**:
```css
.product-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.75rem;
  background-color: white;
}
```

**TailwindCSS Approach**:
```jsx
<div className="rounded-lg border border-gray-200 p-3 bg-white">
  {/* Content */}
</div>
```

### 2.4.2. Responsive Design System

TailwindCSS cung cấp hệ thống responsive design với breakpoints:

```jsx
// CategoryList.jsx
<div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
  {categories.map((category) => (
    <CategoryItem key={category.name} {...category} />
  ))}
</div>
```

**Breakpoints**:
- `sm`: 640px (Tablet)
- `md`: 768px (Desktop nhỏ)
- `lg`: 1024px (Desktop lớn)
- `xl`: 1280px (Desktop rất lớn)

### 2.4.3. Customization và Configuration

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#634c9f', // Purple theme
      }
    },
  },
  plugins: [],
}
```

### 2.4.4. PostCSS Integration

TailwindCSS được tích hợp với PostCSS để xử lý CSS:

```javascript
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

## 2.5. UI Component Libraries

### 2.5.1. Lucide React Icons

Lucide React (v0.544.0) cung cấp hệ thống icons nhất quán:

```jsx
// HeaderAdmin.jsx
import { Search, Bell, ShoppingCart, Plus } from 'lucide-react';

<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
<Bell className="w-6 h-6 text-gray-600" />
<ShoppingCart className="w-6 h-6 text-gray-600" />
<Plus className="w-5 h-5 mr-2" />
```

**Ưu điểm của Lucide React**:
- **Tree-shakable**: Chỉ bundle icons được sử dụng
- **Consistent design**: Thiết kế thống nhất, minimalist
- **Customizable**: Dễ dàng thay đổi size, color, stroke
- **TypeScript support**: Hỗ trợ TypeScript đầy đủ

### 2.5.2. Recharts Data Visualization

Recharts (v3.2.1) được sử dụng cho SalesChart component:

```jsx
// SalesChart.jsx (dự kiến implementation)
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
];

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="sales" stroke="#634c9f" />
  </LineChart>
</ResponsiveContainer>
```

## 2.6. Development Tools và Code Quality

### 2.6.1. ESLint Configuration

ESLint được cấu hình để đảm bảo code quality và consistency:

```javascript
// eslint.config.js
export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

**ESLint Rules**:
- **React Hooks Rules**: Đảm bảo hooks được sử dụng đúng cách
- **React Refresh**: Hỗ trợ hot reload
- **No unused vars**: Cảnh báo về biến không sử dụng

### 2.6.2. Package Management với npm

Mini Store sử dụng npm để quản lý dependencies:

```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.3",
    "lucide-react": "^0.544.0",
    "recharts": "^3.2.1"
  },
  "devDependencies": {
    "vite": "npm:rolldown-vite@7.1.12",
    "tailwindcss": "^4.1.13",
    "eslint": "^9.36.0"
  }
}
```

### 2.6.3. Git Version Control

Project sử dụng Git với GitHub để quản lý source code:
- **Repository**: mini-store
- **Owner**: PhatNguyenTT2
- **Branch strategy**: main branch cho production
- **Gitignore**: Loại trừ node_modules, dist, các file build

## 2.7. Workflow và Architecture Patterns

### 2.7.1. Development Principles

Theo `development-principles.md`, project tuân thủ:

**Component-Based Workflow**:
1. **Analyze Design**: Phân tích Figma design thành các UI blocks
2. **Create Child Components**: Tạo components con trong thư mục tương ứng
3. **Assemble Page**: Kết hợp components để tạo page
4. **Add Routing**: Cập nhật router configuration

**Design Fidelity**:
- Tuân thủ nghiêm ngặt Figma designs
- Không tự ý thay đổi design
- Đảm bảo consistent user experience

### 2.7.2. Folder Structure Pattern

```
src/
├── components/          # Reusable components
│   ├── HomePage/       # Page-specific components
│   ├── Layout/         # Layout wrappers
│   ├── Header/         # Navigation components
│   └── Footer/         # Footer components
├── pages/              # Page components
├── admin-pages/        # Admin interface
├── assets/             # Static assets
└── main.jsx           # Application entry point
```

### 2.7.3. Styling Architecture

**Utility-First Approach**:
- Sử dụng TailwindCSS utilities trực tiếp trong JSX
- Tránh tạo custom CSS classes không cần thiết
- Responsive design với mobile-first approach

**Color System**:
- Primary: `#634c9f` (Purple)
- Gray scale: `gray-50` to `gray-900`
- Semantic colors: `red-600` (danger), `green-600` (success)

## 2.8. Performance Optimization Techniques

### 2.8.1. Image Optimization

**Lazy Loading**:
```jsx
<img 
  src={image} 
  alt={title} 
  loading="lazy"
  className="absolute inset-0 size-full object-cover" 
/>
```

**Responsive Images**:
- Sử dụng aspect-ratio utilities
- Optimize images từ Figma CDN
- WebP format support

### 2.8.2. Code Splitting

**Dynamic Imports**:
```jsx
// Dự kiến implementation
const AdminPage = React.lazy(() => import('./admin-pages/HomePage'));

<Suspense fallback={<div>Loading...</div>}>
  <AdminPage />
</Suspense>
```

**Route-based Splitting**:
- Mỗi page được tách thành separate chunks
- Lazy loading các admin components
- Giảm initial bundle size

### 2.8.3. Build Optimization

**Vite Optimizations**:
- **Tree shaking**: Loại bỏ unused code
- **Minification**: Compress JavaScript và CSS
- **Asset optimization**: Optimize images và fonts
- **Caching**: Browser caching với content hashing

## Kết luận Chương 2

Chương 2 đã trình bày đầy đủ cơ sở lý thuyết và công nghệ được sử dụng trong dự án Mini Store. Việc lựa chọn React, Vite, TailwindCSS và các công cụ hỗ trợ tạo nên một tech stack hiện đại, hiệu suất cao và dễ bảo trì. 

Kiến trúc component-based kết hợp với utility-first CSS framework giúp đảm bảo code quality, reusability và scalability. Các công cụ development như ESLint, Git và workflow principles được thiết lập để hỗ trợ team development và maintain code consistency.

Tech stack này không chỉ đáp ứng yêu cầu hiện tại mà còn đảm bảo khả năng mở rộng và tích hợp các tính năng mới trong tương lai.
