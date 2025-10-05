 Router System - Admin Panel

## Tổng quan

Admin Panel sử dụng **React Router v6** để quản lý navigation giống như project client (mart).

## 📁 Cấu trúc thư mục

```
admin/
├── src/
│   ├── pages/              # Các trang/màn hình
│   │   ├── Home.jsx        # Dashboard (/)
│   │   ├── ViewProduct.jsx # Product List (/product/view)
│   │   └── index.js        # Export tất cả pages
│   ├── components/         # Components tái sử dụng
│   │   ├── Layout/
│   │   ├── Breadcrumb/     # Breadcrumb navigation
│   │   └── ...
│   ├── App.jsx             # Router configuration
│   └── main.jsx            # Entry point
```

## 🎯 Routes Configuration

### App.jsx

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ViewProduct } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/view" element={<ViewProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Current Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Dashboard - Trang chủ admin |
| `/product/view` | `ViewProduct` | Product List - Danh sách sản phẩm |

## 📦 Pages Export (pages/index.js)

```jsx
export { default as Home } from "./Home";
export { default as ViewProduct } from "./ViewProduct";
```

**Lợi ích:**
- Import gọn gàng: `import { Home, ViewProduct } from "./pages"`
- Dễ maintain khi có nhiều pages
- Consistent với project client

## 🧭 Navigation Menu Integration

### NavigationMenuSection Component

Component đã được cập nhật để sử dụng React Router:

```jsx
import { Link, useLocation } from 'react-router-dom';

export const NavigationMenuSection = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      category: 'E-Commerce',
      items: [
        { name: 'Dashboard', icon: LayoutGrid, href: '/' },
        {
          name: 'Products',
          icon: Package2,
          arrow: true,
          submenu: [
            { name: 'View', href: '/product/view' },
            { name: 'Product Detail', href: '/products/detail' },
            { name: 'Shopping Cart', href: '/products/cart' },
            { name: 'Checkout', href: '/products/checkout' },
          ]
        },
      ],
    },
  ];
  
  // ... render with Link component
};
```

**Features:**
- ✅ Sử dụng `Link` thay vì `<a>` tag
- ✅ `useLocation` để detect active route
- ✅ Active styling tự động
- ✅ Submenu active state

### Active State Logic

```jsx
const isActive = item.href === location.pathname;
const hasActiveSubmenu = item.submenu?.some(sub => sub.href === location.pathname);
```

**Active Styling:**
- Parent menu: `bg-emerald-500 text-white`
- Submenu: `text-emerald-600 bg-emerald-50 font-medium`
- Parent with active submenu: `bg-emerald-50 text-emerald-600`

## 🍞 Breadcrumb Component

### Basic Usage

```jsx
import { Breadcrumb } from '../components/Breadcrumb';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Product List', href: null }, // Current page
];

<Breadcrumb items={breadcrumbItems} />
```

### Component Features

- ✅ React Router `Link` integration
- ✅ Home icon cho first item
- ✅ ChevronRight separator
- ✅ Active page không có link
- ✅ Hover effects
- ✅ Emerald color scheme

### Breadcrumb Styling

```jsx
// Active (last item)
className="text-gray-600 cursor-default pointer-events-none"

// Clickable items
className="text-emerald-600 hover:text-emerald-700 hover:underline"
```

## 🎨 Page Structure Template

### Home Page (Dashboard)

```jsx
import React from 'react';
import { Layout } from '../components/Layout';
import { SalesChart } from '../components/SalesChart';

const Home = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Page content */}
      </div>
    </Layout>
  );
};

export default Home;
```

### ViewProduct Page

```jsx
import React from 'react';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';

const ViewProduct = () => {
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Product List', href: null },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <Breadcrumb items={breadcrumbItems} />
        {/* Page content */}
      </div>
    </Layout>
  );
};

export default ViewProduct;
```

## 🚀 Adding New Routes

### Step 1: Create Page Component

```jsx
// src/pages/ProductDetail.jsx
import React from 'react';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';

const ProductDetail = () => {
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Products', href: '/product/view' },
    { label: 'Product Detail', href: null },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <Breadcrumb items={breadcrumbItems} />
        <h1>Product Detail</h1>
        {/* Content */}
      </div>
    </Layout>
  );
};

export default ProductDetail;
```

### Step 2: Export in pages/index.js

```jsx
export { default as Home } from "./Home";
export { default as ViewProduct } from "./ViewProduct";
export { default as ProductDetail } from "./ProductDetail"; // Add this
```

### Step 3: Add Route in App.jsx

```jsx
import { Home, ViewProduct, ProductDetail } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/view" element={<ViewProduct />} />
        <Route path="/product/detail" element={<ProductDetail />} /> {/* Add this */}
      </Routes>
    </Router>
  );
}
```

### Step 4: Update NavigationMenuSection (Optional)

Nếu đã có submenu, route sẽ tự động hoạt động. Nếu chưa, thêm vào submenu:

```jsx
{
  name: 'Products',
  icon: Package2,
  arrow: true,
  submenu: [
    { name: 'View', href: '/product/view' },
    { name: 'Product Detail', href: '/product/detail' }, // Add this
  ]
}
```

## 📋 Route Planning

### E-Commerce Routes

```jsx
// Dashboard
{ path: '/', component: Home }

// Products
{ path: '/product/view', component: ViewProduct }
{ path: '/product/detail', component: ProductDetail }
{ path: '/product/add', component: AddProduct }
{ path: '/product/edit/:id', component: EditProduct }

// Orders
{ path: '/orders', component: Orders }
{ path: '/orders/pending', component: OrdersPending }
{ path: '/orders/completed', component: OrdersCompleted }

// Customers
{ path: '/customers', component: Customers }
{ path: '/customers/:id', component: CustomerDetail }

// Invoices
{ path: '/invoices', component: Invoices }
{ path: '/invoices/:id', component: InvoiceDetail }
```

### Apps Routes

```jsx
// Chat
{ path: '/chat', component: Chat }

// Email
{ path: '/email/inbox', component: EmailInbox }
{ path: '/email/sent', component: EmailSent }

// Todo
{ path: '/todo', component: TodoList }
```

### Pages Routes

```jsx
// Profile
{ path: '/profile', component: Profile }
{ path: '/profile/edit', component: EditProfile }

// Users
{ path: '/users', component: Users }
{ path: '/users/add', component: AddUser }

// Settings
{ path: '/settings', component: Settings }
```

## 🎯 Best Practices

### ✅ DO:

1. **Consistent naming:**
   ```jsx
   // File: ViewProduct.jsx
   const ViewProduct = () => { ... }
   export default ViewProduct;
   ```

2. **Use Layout wrapper:**
   ```jsx
   return (
     <Layout>
       {/* Content */}
     </Layout>
   );
   ```

3. **Add Breadcrumb:**
   ```jsx
   <Breadcrumb items={breadcrumbItems} />
   ```

4. **Use Link component:**
   ```jsx
   import { Link } from 'react-router-dom';
   <Link to="/product/view">Products</Link>
   ```

5. **Check active state:**
   ```jsx
   const location = useLocation();
   const isActive = location.pathname === '/product/view';
   ```

### ❌ DON'T:

1. **Don't use <a> tags:**
   ```jsx
   // ❌ Bad
   <a href="/product/view">Products</a>
   
   // ✅ Good
   <Link to="/product/view">Products</Link>
   ```

2. **Don't use # in hrefs:**
   ```jsx
   // ❌ Bad
   href="#/products"
   
   // ✅ Good
   href="/products"
   ```

3. **Don't forget Layout wrapper:**
   ```jsx
   // ❌ Bad
   return <div>Content</div>
   
   // ✅ Good
   return <Layout><div>Content</div></Layout>
   ```

## 🔧 Router Features

### 1. Nested Routes (Future)

```jsx
<Route path="/products" element={<ProductsLayout />}>
  <Route index element={<ViewProduct />} />
  <Route path="detail" element={<ProductDetail />} />
  <Route path="add" element={<AddProduct />} />
</Route>
```

### 2. Protected Routes (Future)

```jsx
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

<Route path="/" element={
  <PrivateRoute>
    <Home />
  </PrivateRoute>
} />
```

### 3. Route Parameters

```jsx
// In App.jsx
<Route path="/product/:id" element={<ProductDetail />} />

// In component
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  // Fetch product with id
};
```

### 4. Navigate Programmatically

```jsx
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/product/view');
  };
};
```

## 📊 Comparison: Before vs After

### Before (Manual State)

```jsx
// App.jsx
const [currentPage, setCurrentPage] = useState('home');

return (
  <>
    {currentPage === 'home' && <HomePage />}
    {currentPage === 'view-product' && <ViewProduct />}
  </>
);

// Navigation
<a onClick={() => setCurrentPage('view-product')}>Products</a>
```

**Problems:**
- ❌ No URL changes
- ❌ No browser history
- ❌ Can't bookmark pages
- ❌ No back/forward buttons
- ❌ Hard to maintain

### After (React Router)

```jsx
// App.jsx
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/view" element={<ViewProduct />} />
  </Routes>
</Router>

// Navigation
<Link to="/product/view">Products</Link>
```

**Benefits:**
- ✅ URL changes reflect routes
- ✅ Browser history works
- ✅ Can bookmark pages
- ✅ Back/forward buttons work
- ✅ Easy to maintain and scale

## 🎓 Summary

1. **Structure:** Pages in `src/pages/`, export via `index.js`
2. **Router:** React Router v6 in `App.jsx`
3. **Navigation:** `Link` component with `useLocation` for active state
4. **Breadcrumb:** Integrated with React Router `Link`
5. **Consistent:** Same pattern as client project (mart)

## 📚 References

- [React Router v6 Documentation](https://reactrouter.com/en/main)
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [Nested Routes](https://reactrouter.com/en/main/start/concepts#nested-routes)
- [Navigation](https://reactrouter.com/en/main/hooks/use-navigate)

---

**🎉 Router system is now complete and ready to scale!**
