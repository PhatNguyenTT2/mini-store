# 🛒 Mini Store - Admin Dashboard Frontend

> E-commerce Admin Dashboard built with React + Vite + Tailwind CSS

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.12-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.13-cyan.svg)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React%20Router-7.9.3-red.svg)](https://reactrouter.com/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Routing System](#routing-system)
- [Data Models](#data-models)
- [Component Architecture](#component-architecture)
- [Design System](#design-system)
- [API Integration Guide](#api-integration-guide)
- [Getting Started](#getting-started)
- [Development](#development)

---

## 🎯 Overview

**Mini Store Admin Dashboard** là giao diện quản trị toàn diện cho hệ thống e-commerce. Frontend này được xây dựng với React và đang sử dụng **mock data** để phát triển UI/UX. Hệ thống hỗ trợ không chỉ quản lý sản phẩm/đơn hàng mà còn bao gồm **quản lý kho**, **nhà cung cấp**, **đơn mua hàng**, **thanh toán**, và **báo cáo phân tích**.

### System Capabilities

#### ✅ **Implemented Features**
- **Authentication** - Login/Signup interface with JWT ready
- **Dashboard** - Sales charts, revenue statistics, order overview
- **Product Management** - Full CRUD, filtering, pagination, detail views
- **Category Management** - Hierarchical categories
- **Order Management** - Order creation, status tracking, history

#### 🟡 **Planned Features** (Backend Models Ready)
- **Customer Management (CRM)** - Customer profiles, purchase history, loyalty program
- **Inventory Management** - Real-time stock tracking, movement history, reorder alerts
- **Payment Processing** - Transaction tracking, multiple payment methods, refunds
- **Procurement (B2B)** - Purchase orders, supplier orders, approval workflow
- **Supplier Management** - Vendor database, payment terms, performance tracking
- **Business Intelligence** - Sales reports, revenue analytics, profit & loss, inventory reports

### Current Status
- ✅ **Core UI Complete**: Product, Category, Order, Authentication pages
- ✅ **Authentication UI Ready**: Login/Signup interface (at `/` and `/signup`)
- ✅ **Mock Data Ready**: Sample data sẵn sàng cho 15 products
- ✅ **Routing System**: Complete routing structure with authentication flow
- 🟡 **Backend Integration**: 4/10 modules có API (Products, Categories, Orders, Auth)
- 🔜 **Next Phase**: Customer Management, Inventory System, Payment Processing
- 📊 **Backend Models**: 10 models đã sẵn sàng, cần implement controllers

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI Framework |
| **Vite** | 7.1.12 | Build Tool & Dev Server |
| **React Router DOM** | 7.9.3 | Client-side Routing |
| **Tailwind CSS** | 4.1.13 | Styling Framework |
| **Lucide React** | 0.544.0 | Icon Library |
| **Recharts** | 3.2.1 | Data Visualization |

### Why This Stack?

- **React 19**: Latest features, improved performance
- **Vite**: Lightning-fast HMR, optimized builds
- **Tailwind CSS**: Utility-first, consistent design system
- **React Router v7**: Modern routing with data loading

---

## 📁 Project Structure

```
mini-store/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── assets/            # Images, icons, fonts
│   │   └── react.svg
│   ├── components/        # Reusable UI components
│   │   ├── Breadcrumb/
│   │   ├── FilterProduct/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Layout/
│   │   ├── LoginSignup/   # 🔐 Authentication components
│   │   ├── ProductDetail/
│   │   ├── ProductList/
│   │   ├── SalesChart/
│   │   └── Sidebar/
│   ├── data/              # 🎯 Mock data (BACKEND: Replace with API calls)
│   │   └── products.js    # Product database & helper functions
│   ├── pages/             # Page components (Route handlers)
│   │   ├── Checkout.jsx
│   │   ├── DetailProduct.jsx
│   │   ├── Home.jsx       # Dashboard (now at /dashboard)
│   │   ├── LoginSignup.jsx # 🔐 Login/Signup page (now at /)
│   │   ├── ShoppingCart.jsx
│   │   └── ViewProduct.jsx
│   ├── utils/             # Helper functions & utilities
│   │   ├── productRouting.js     # URL generation & parsing
│   │   └── detailDescriptionTemplate.js
│   ├── App.jsx            # Main App component with routes
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── scripts/               # Build & utility scripts
│   └── check-colors.js    # Color validation script
├── .gitignore
├── eslint.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

### 🎯 Key Directories for Backend Integration

#### `src/data/` - Mock Data Layer
**Current**: Contains hardcoded product data  
**Action Required**: Replace with API service layer

#### `src/utils/` - Helper Functions
**Current**: Client-side utilities  
**Action Required**: May need backend equivalents for slug generation

---

## ✨ Features

### ✅ Implemented Features

#### 1. **Authentication System** 🔐
- 🔑 Login/Signup dual-tab interface
- 🔄 URL-synced tab switching (`/` for login, `/signup` for register)
- ✅ Form validation (HTML5)
- 🎨 Emerald green theme (admin-specific)
- 📝 Admin-only registration (no user type selection)
- 🔒 Ready for JWT token integration
- 💾 Remember me functionality
- 🔗 Forgot password link

#### 2. **Dashboard (Home Page)**
- 📊 Sales chart with Recharts
- 📈 Revenue statistics
- 📦 Order overview
- 🎨 Responsive layout
- 🏠 Now accessible at `/dashboard`

#### 3. **Product Management**
- 📝 Product listing with grid view (4 columns)
- 🔍 Advanced filtering (category, price, color, condition)
- 🔢 Pagination (8 items per page)
- 🛍️ Product detail pages with dynamic routing
- 🖼️ Image gallery with thumbnails
- ⭐ Rating and reviews display

#### 4. **Product Detail System**
- 📋 Dynamic content based on product ID
- 🗂️ Tabbed interface (Description, Additional Info, Vendor, Reviews)
- 📊 Product specifications
- 🏷️ Pricing with discount calculations
- 📦 Stock information
- 🎯 Size/weight selection
- ➕➖ Quantity controls

#### 5. **Shopping Cart** *(UI Ready)*
- 🛒 Cart item management
- 💰 Price calculation
- ✅ Ready for backend integration

#### 6. **Checkout** *(UI Ready)*
- 📋 Order form
- 💳 Payment interface
- ✅ Ready for backend integration

---

### 🟡 Planned Features (Backend Models Ready)

#### 7. **Customer Management (CRM)** 📋 *(Next Phase)*
**Purpose**: Complete customer relationship management

**Features to Implement**:
- 👥 Customer profile management (CRUD)
- 📊 Customer statistics dashboard
  - Total customers count
  - Customer types (retail, wholesale, VIP)
  - Customer segmentation
- 🛍️ Purchase history per customer
  - Order list
  - Total spent
  - Average order value
  - Last purchase date
- 🎁 Loyalty program
  - Points management
  - Points earning rules
  - Points redemption
- 📈 Customer analytics
  - Top customers by revenue
  - Customer lifetime value
  - Purchase frequency
  - Customer retention rate

**UI Components Needed**:
- Customer list page with filters (type, status, search)
- Customer detail view
- Customer creation/edit form
- Purchase history timeline
- Loyalty points interface
- Customer statistics cards

---

#### 8. **Inventory Management** 📦 *(Next Phase)*
**Purpose**: Real-time stock tracking and warehouse management

**Features to Implement**:
- 📊 Inventory dashboard
  - Total stock value
  - Low stock alerts
  - Out of stock items
  - Stock movement summary
- 📦 Product inventory details
  - Quantity on hand
  - Quantity reserved (pending orders)
  - Quantity available
  - Warehouse location
- 📜 Stock movement history
  - IN movements (purchases, returns)
  - OUT movements (sales, damages)
  - Adjustments (manual corrections)
  - Reserved/Released (order processing)
- 🔔 Reorder alerts
  - Products below reorder point
  - Suggested reorder quantity
  - Reorder notification system
- ⚙️ Manual stock adjustment
  - Adjustment form
  - Reason tracking
  - User audit trail

**UI Components Needed**:
- Inventory dashboard with KPIs
- Product inventory list table
- Stock movement history viewer
- Low stock alert page
- Manual adjustment form
- Stock reconciliation interface

---

#### 9. **Payment Processing** 💰 *(Phase 4)*
**Purpose**: Complete payment transaction management

**Features to Implement**:
- 💳 Payment recording
  - Record customer payments
  - Multiple payment methods (cash, card, bank transfer, e-wallet)
  - Partial payment support
  - Link to orders
- 📜 Payment history
  - All payments list
  - Filter by date, method, status
  - Search by order number, customer
- 💵 Refund processing
  - Refund request form
  - Refund approval workflow
  - Refund history
- 📊 Payment analytics
  - Total revenue by period
  - Payment method breakdown
  - Pending payments
  - Refunded amounts

**UI Components Needed**:
- Payment recording form
- Payment history page
- Payment detail modal
- Refund processing interface
- Payment statistics cards
- Payment method selector

---

#### 🔟 **Procurement System (B2B)** 🏢 *(Phase 5)*
**Purpose**: Supplier and purchase order management

##### A. **Supplier Management**
**Features to Implement**:
- 🏢 Supplier profiles (CRUD)
  - Company information
  - Contact person
  - Bank account details
  - Tax ID
- 📊 Supplier statistics
  - Total purchase orders
  - Total purchase amount
  - Payment terms
  - Current debt
  - Credit limit
- ⭐ Supplier performance
  - Supplier rating
  - Delivery performance
  - Product quality rating
- 📦 Products supplied
  - List of products from supplier
  - Product categories

**UI Components Needed**:
- Supplier list page
- Supplier detail view
- Supplier creation/edit form
- Supplier statistics dashboard
- Product-supplier mapping interface

##### B. **Purchase Orders**
**Features to Implement**:
- 📝 PO creation workflow
  - Select supplier
  - Add products with quantities
  - Set prices
  - Calculate totals (subtotal, shipping, tax, discount)
- 📋 PO management
  - PO list with filters (status, supplier, date)
  - PO detail view
  - PO status tracking (draft → pending → approved → received)
- ✅ PO approval workflow
  - Submit for approval
  - Approve/Reject PO
  - Approval history
- 📦 Receiving process
  - Mark items as received
  - Partial receiving support
  - Update inventory automatically
- 💰 Payment tracking
  - Link payments to PO
  - Track paid/unpaid amounts
  - Payment status updates

**UI Components Needed**:
- PO creation form (multi-step)
- PO list page with filters
- PO detail view
- PO approval interface
- Receiving form
- PO-Payment linking interface

---

#### 1️⃣1️⃣ **Business Intelligence** 📊 *(Phase 6)*
**Purpose**: Comprehensive reporting and analytics

**Features to Implement**:
- 📈 Sales reports
  - Daily/weekly/monthly sales
  - Sales by category
  - Sales by product
  - Sales trends
- 💰 Revenue reports
  - Revenue by period
  - Revenue by category
  - Revenue by customer type
- 📊 Profit & Loss reports
  - Total revenue
  - Total cost (from purchase orders)
  - Gross profit
  - Profit margin
- 📦 Inventory reports
  - Current stock levels
  - Stock movements
  - Slow-moving items
  - Fast-moving items
- 👥 Customer analytics
  - New customers
  - Customer retention
  - Customer lifetime value
  - Top customers
- 🏆 Product performance
  - Best sellers
  - Worst performers
  - Product ratings
- 🏢 Supplier performance
  - Top suppliers
  - Delivery performance
  - Payment history
- 📤 Export functionality
  - PDF export
  - Excel export
  - CSV export

**UI Components Needed**:
- Reports dashboard
- Report generation form (date range, type selection)
- Interactive charts (line, bar, pie, area)
- Data tables with sorting/filtering
- Export buttons
- Report templates

---

## 🛣️ Routing System

### Route Configuration

```javascript
// src/App.jsx
<Routes>
  {/* Auth Routes */}
  <Route path="/" element={<LoginSignup />} />
  <Route path="/signup" element={<LoginSignup />} />
  
  {/* Dashboard Routes */}
  <Route path="/dashboard" element={<Home />} />
  <Route path="/products/view" element={<ViewProduct />} />
  <Route path="/products/:id/:slug" element={<DetailProduct />} />
  <Route path="/product/checkout" element={<Checkout />} />
  <Route path="/product/shopping-cart" element={<ShoppingCart />} />
</Routes>
```

### URL Structure

#### Authentication Routes

| Route | Component | Description | Example |
|-------|-----------|-------------|---------|
| `/` | `LoginSignup` | Login page | `localhost:5173/` |
| `/signup` | `LoginSignup` | Signup/Register page | `localhost:5173/signup` |

#### Dashboard Routes

| Route | Component | Description | Example |
|-------|-----------|-------------|---------|
| `/dashboard` | `Home` | Dashboard homepage | `localhost:5173/dashboard` |
| `/products/view` | `ViewProduct` | Product list page | `localhost:5173/products/view` |
| `/products/:id/:slug` | `DetailProduct` | Product detail (SEO-friendly) | `localhost:5173/products/1/seeds-of-change-organic-quinoa-brown` |
| `/product/checkout` | `Checkout` | Checkout page | `localhost:5173/product/checkout` |
| `/product/shopping-cart` | `ShoppingCart` | Shopping cart page | `localhost:5173/product/shopping-cart` |

### Dynamic Routing Implementation

**URL Pattern**: `/products/:id/:slug`

**Benefits**:
- ✅ **SEO Friendly**: Readable URLs with product names
- ✅ **Unique**: ID ensures no duplicates
- ✅ **Flexible**: Can change product name without breaking links

**Helper Functions** (`src/utils/productRouting.js`):

```javascript
// Generate product URL
generateProductUrl(id, name) 
// Example: generateProductUrl(1, "Seeds of Change Organic Quinoa, Brown")
// Returns: "/products/1/seeds-of-change-organic-quinoa-brown"

// Parse product ID from URL params
getProductIdFromParams(params)
// Example: params = { id: "1", slug: "seeds-of-change-organic-quinoa-brown" }
// Returns: 1 (number)

// Generate URL slug from name
generateSlug(name)
// Example: generateSlug("Seeds of Change Organic Quinoa, Brown")
// Returns: "seeds-of-change-organic-quinoa-brown"
```

### Authentication Flow

#### Login & Signup Routes

The admin dashboard uses a dual-route authentication system:

1. **Login Route (`/`)**: 
   - Default landing page for the application
   - Shows login form by default
   - Tab syncs with URL

2. **Signup Route (`/signup`)**: 
   - Registration page for new admin accounts
   - Shows register form
   - Tab syncs with URL

#### Tab Switching Behavior

```javascript
// LoginSignupSection.jsx
const handleTabChange = (tab) => {
  setActiveTab(tab);
  navigate(tab === 'login' ? '/' : '/signup');
};
```

**User Flow**:
```
User visits "/" 
  → Login form displayed
  → Clicks "Register" tab
  → Navigates to "/signup"
  → Register form displayed
  → Clicks "Login" tab
  → Navigates back to "/"
```

#### Post-Authentication Redirect

After successful login, users should be redirected to the dashboard:

```javascript
// TODO: After successful login
navigate('/dashboard');
```

#### Protected Routes (TODO)

Future implementation should protect dashboard routes:

```javascript
// Example: ProtectedRoute component
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Home />
  </ProtectedRoute>
} />
```

---

## 📊 Data Models

### Product Data Structure

```javascript
// src/data/products.js
{
  id: 1,                    // Unique identifier (PRIMARY KEY)
  name: "Product Name",     // Product title
  category: "Category",     // Product category
  image: "url",            // Main product image URL
  price: 28.85,            // Current price (NUMBER)
  originalPrice: 32.8,     // Original price for discount calc
  rating: 4.0,             // Average rating (0-5)
  reviews: 32,             // Number of reviews
  vendor: "Vendor Name",   // Seller/Brand name
  description: "...",      // Short description
  sku: "SKU123",          // Stock Keeping Unit
  mfg: "Jun 4.2022",      // Manufacturing date
  tags: ["Tag1", "Tag2"], // Product tags (ARRAY)
  life: "70 days",        // Shelf life
  stock: 8,               // Available quantity (INTEGER)
  type: "Organic",        // Product type/classification
  
  // Detailed description object
  detailDescription: {
    intro: [              // Array of intro paragraphs
      "Paragraph 1...",
      "Paragraph 2..."
    ],
    specifications: [     // Array of spec objects
      { 
        label: "Type Of Packing", 
        value: "Bottle" 
      },
      // ...more specs
    ],
    additionalDesc: "...",      // Additional description
    packaging: ["..."],          // Packaging info (ARRAY)
    suggestedUse: ["..."],      // Usage instructions (ARRAY)
    otherIngredients: ["..."],  // Ingredients list (ARRAY)
    warnings: ["..."]           // Warning messages (ARRAY)
  }
}
```

### Key Data Points for Backend

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | `integer` | ✅ | Primary key, auto-increment |
| `name` | `string` | ✅ | Max 255 chars |
| `category` | `string` | ✅ | FK to categories table |
| `image` | `string` | ✅ | URL or path |
| `price` | `decimal(10,2)` | ✅ | Current selling price |
| `originalPrice` | `decimal(10,2)` | ❌ | For discount display |
| `rating` | `decimal(2,1)` | ❌ | 0.0 - 5.0 |
| `reviews` | `integer` | ❌ | Count of reviews |
| `vendor` | `string` | ✅ | Brand/seller name |
| `description` | `text` | ✅ | Short description |
| `sku` | `string` | ✅ | Unique SKU |
| `mfg` | `date` | ❌ | Manufacturing date |
| `tags` | `json` | ❌ | Array of strings |
| `life` | `string` | ❌ | Shelf life text |
| `stock` | `integer` | ✅ | Inventory count |
| `type` | `string` | ❌ | Classification |
| `detailDescription` | `json` | ❌ | Complex nested object |

### Helper Functions

```javascript
// src/data/products.js

// Get product by ID
getProductById(id: number): Product | null

// Calculate discount percentage
getDiscountPercent(price: number, originalPrice: number): number
```

---

## 🧩 Component Architecture

### Component Hierarchy

```
App (Router)
├── Layout
│   ├── Sidebar
│   │   ├── LogoSection
│   │   ├── UserProfileSection
│   │   └── NavigationMenuSection
│   ├── Header
│   │   ├── SearchNotificationSection
│   │   └── ActionSection
│   └── MainContentSection
│       └── [Page Content]
└── Footer
    ├── LinksSection
    └── CopyrightSection
```

### Page Components

#### 1. **LoginSignup (Authentication)** 🔐 *(NEW)*
```jsx
{/* Standalone page - No Layout wrapper */}
<div className="min-h-screen">
  <SimpleHeader />
  <LoginSignupSection />
  <SimpleFooter />
</div>
```
**Route**: `/` (login) and `/signup` (register)  
**Features**: Tab switching, form validation, admin-specific styling

#### 2. **Home (Dashboard)**
```jsx
<Layout>
  <Breadcrumb />
  <SalesChart />
  {/* Revenue cards, statistics */}
</Layout>
```
**Route**: `/dashboard` *(Changed from `/`)*

#### 3. **ViewProduct (Product List)**
```jsx
<Layout>
  <Breadcrumb />
  <FilterProduct />  {/* Sidebar filter */}
  <ProductList />    {/* Grid with pagination */}
</Layout>
```

#### 4. **DetailProduct**
```jsx
<Layout>
  <Breadcrumb />
  <ProductInfo productId={id} />      {/* Images, price, actions */}
  <ProductDetail productId={id} />    {/* Tabbed content */}
</Layout>
```

### Shared Components

| Component | Purpose | Props | Location |
|-----------|---------|-------|----------|
| **LoginSignupSection** 🔐 | Login/Register forms | None (internal state) | `src/components/LoginSignup/` |
| **Breadcrumb** | Navigation trail | `items: Array<{label, href}>` | `src/components/Breadcrumb/` |
| **Layout** | Page wrapper | `children` | `src/components/Layout/` |
| **Sidebar** | Left navigation | None (uses localStorage) | `src/components/Sidebar/` |
| **Header** | Top bar | None | `src/components/Header/` |
| **Footer** | Bottom info | None | `src/components/Footer/` |
| **FilterProduct** | Product filters | None (internal state) | `src/components/FilterProduct/` |
| **ProductList** | Product grid | None (fetches from data) | `src/components/ProductList/` |
| **ProductInfo** | Product details | `productId: number` | `src/components/ProductDetail/ProductInfo.jsx` |
| **ProductDetail** | Tabbed content | `productId: number` | `src/components/ProductDetail/ProductDetail.jsx` |

---

## 🎨 Design System

### Color Palette

**Primary Colors** (Emerald Green Theme):
```css
--primary: #3bb77e      /* Main brand color */
--primary-light: #def9ec /* Backgrounds, hover states */
--primary-dark: #10b981  /* Active states */
```

**Accent Colors**:
```css
--sale: #f74b81         /* Sale badges, discounts */
--info: #67bcee         /* Info badges */
--warning: #fdc040      /* Warnings, ratings */
```

**Neutral Colors**:
```css
--text-dark: #253d4e    /* Headings, primary text */
--text-gray: #7e7e7e    /* Secondary text */
--text-light: #adadad   /* Disabled, tertiary text */
--border: #ececec       /* Borders, dividers */
--background: #f8f8f8   /* Page background */
```

### Typography

**Font Families**:
- **Headings**: `'Quicksand', sans-serif` (Bold weights)
- **Body**: `'Lato', sans-serif` (Regular/Medium weights)

**Font Sizes**:
- **Headings**: `40px`, `24px`, `18px`, `16px`
- **Body**: `16px`, `14px`, `12px`

### Spacing System

Uses Tailwind's spacing scale:
- **Micro**: `2px`, `4px`, `8px`
- **Small**: `12px`, `16px`, `20px`
- **Medium**: `24px`, `32px`, `40px`
- **Large**: `48px`, `64px`, `80px`

### Border Radius
- **Small**: `4px` (buttons)
- **Medium**: `15px` (cards, containers)
- **Large**: `20px`, `30px` (special elements)

---

## 🔌 API Integration Guide

### Current State: Mock Data

Frontend hiện đang sử dụng mock data trong `src/data/products.js`. Tất cả operations (read, filter, paginate) đều xử lý client-side.

### Backend Integration Steps

#### 1️⃣ **Create API Service Layer**

Tạo file mới: `src/services/productService.js`

```javascript
// src/services/productService.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Get all products with pagination and filters
export const getProducts = async (params = {}) => {
  const { page = 1, perPage = 8, category, minPrice, maxPrice, sort } = params;
  
  const response = await axios.get(`${API_BASE_URL}/products`, {
    params: {
      page,
      per_page: perPage,
      category,
      min_price: minPrice,
      max_price: maxPrice,
      sort_by: sort
    }
  });
  
  return response.data;
};

// Get single product by ID
export const getProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};

// Calculate discount percentage (can be computed backend or frontend)
export const getDiscountPercent = (price, originalPrice) => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};
```

#### 2️⃣ **Update Component to Use API**

**Before** (Mock Data):
```javascript
// src/components/ProductList/ProductList.jsx
import { ALL_PRODUCTS } from '../../data/products';

const products = ALL_PRODUCTS;
```

**After** (API Integration):
```javascript
// src/components/ProductList/ProductList.jsx
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/productService';

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts({ 
        page: currentPage, 
        perPage: perPage 
      });
      setProducts(data.products);
      // Update pagination info
      setTotalPages(data.pagination.totalPages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  fetchProducts();
}, [currentPage, perPage]);
```

#### 3️⃣ **Environment Variables**

Tạo file `.env`:

```env
# .env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_API_TIMEOUT=10000
```

Sử dụng trong code:
```javascript
const API_URL = import.meta.env.VITE_API_BASE_URL;
```

---

### 📡 API Endpoints Reference

Backend team cần implement các endpoints sau để hỗ trợ tất cả tính năng frontend.

#### ✅ **Authentication** (Implemented)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| `POST` | `/api/login` | Login admin | Public | ✅ |
| `POST` | `/api/login/register` | Register admin | Public | ✅ |
| `POST` | `/api/login/logout` | Logout | Required | ✅ |
| `GET` | `/api/login/me` | Get current user | Required | ✅ |

---

#### ✅ **Products** (Implemented)

| Method | Endpoint | Description | Query Params | Auth | Status |
|--------|----------|-------------|--------------|------|--------|
| `GET` | `/api/products` | Get product list | `page`, `limit`, `category`, `minPrice`, `maxPrice`, `search`, `sort` | Public | ✅ |
| `GET` | `/api/products/:id` | Get product detail | None | Public | ✅ |
| `POST` | `/api/products` | Create product | None (body) | Admin | ✅ |
| `PUT` | `/api/products/:id` | Update product | None (body) | Admin | ✅ |
| `DELETE` | `/api/products/:id` | Delete product | None | Admin | ✅ |

---

#### ✅ **Categories** (Implemented)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| `GET` | `/api/categories` | Get all categories | Public | ✅ |
| `GET` | `/api/categories/:id` | Get category detail | Public | ✅ |
| `POST` | `/api/categories` | Create category | Admin | ✅ |
| `PUT` | `/api/categories/:id` | Update category | Admin | ✅ |
| `DELETE` | `/api/categories/:id` | Delete category | Admin | ✅ |

---

#### ✅ **Orders** (Implemented)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| `GET` | `/api/orders` | List all orders | Admin | ✅ |
| `GET` | `/api/orders/:id` | Get order detail | Required | ✅ |
| `POST` | `/api/orders` | Create order | Public | ✅ |
| `PATCH` | `/api/orders/:id/status` | Update order status | Admin | ✅ |
| `GET` | `/api/orders/my-orders` | Get user's orders | Required | ✅ |

---

#### 🟡 **Customers** (Pending Implementation)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| `GET` | `/api/customers` | List all customers | Admin | 🟡 |
| `GET` | `/api/customers/:id` | Get customer detail | Admin | 🟡 |
| `GET` | `/api/customers/:id/orders` | Get customer orders | Admin | 🟡 |
| `GET` | `/api/customers/:id/stats` | Get customer statistics | Admin | 🟡 |
| `POST` | `/api/customers` | Create customer | Admin | 🟡 |
| `PUT` | `/api/customers/:id` | Update customer | Admin | 🟡 |
| `DELETE` | `/api/customers/:id` | Delete customer | Admin | 🟡 |
| `POST` | `/api/customers/:id/loyalty` | Add loyalty points | Admin | 🟡 |

**Query Params for List**: `page`, `limit`, `type` (retail/wholesale/vip), `search`, `sort`

---

#### 🟡 **Inventory** (Pending Implementation)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| `GET` | `/api/inventory` | List all inventory | Admin | 🟡 |
| `GET` | `/api/inventory/:productId` | Get product inventory | Admin | 🟡 |
| `GET` | `/api/inventory/low-stock` | Get low stock items | Admin | 🟡 |
| `GET` | `/api/inventory/:productId/movements` | Get movement history | Admin | 🟡 |
| `POST` | `/api/inventory/adjust` | Manual stock adjustment | Admin | 🟡 |
| `POST` | `/api/inventory/reserve` | Reserve stock | System | 🟡 |
| `POST` | `/api/inventory/release` | Release reserved stock | System | 🟡 |

**Query Params for List**: `page`, `limit`, `lowStock` (boolean), `outOfStock` (boolean), `search`

---

#### 🟡 **Payments** (Pending Implementation)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| `GET` | `/api/payments` | List all payments | Admin | 🟡 |
| `GET` | `/api/payments/:id` | Get payment detail | Admin | 🟡 |
| `GET` | `/api/payments/order/:orderId` | Get order payments | Admin | 🟡 |
| `GET` | `/api/payments/stats` | Payment statistics | Admin | 🟡 |
| `POST` | `/api/payments` | Record payment | Admin | 🟡 |
| `POST` | `/api/payments/:id/refund` | Process refund | Admin | 🟡 |

**Query Params for List**: `page`, `limit`, `type` (sales/purchase), `method`, `status`, `startDate`, `endDate`

---

#### 🟡 **Purchase Orders** (Pending Implementation)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| `GET` | `/api/purchase-orders` | List all POs | Admin | 🟡 |
| `GET` | `/api/purchase-orders/:id` | Get PO detail | Admin | 🟡 |
| `POST` | `/api/purchase-orders` | Create PO | Admin | 🟡 |
| `PUT` | `/api/purchase-orders/:id` | Update PO | Admin | 🟡 |
| `POST` | `/api/purchase-orders/:id/approve` | Approve PO | Admin | 🟡 |
| `POST` | `/api/purchase-orders/:id/receive` | Mark received | Admin | 🟡 |
| `DELETE` | `/api/purchase-orders/:id` | Cancel PO | Admin | 🟡 |

**Query Params for List**: `page`, `limit`, `status`, `supplier`, `startDate`, `endDate`

---

#### 🟡 **Suppliers** (Pending Implementation)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| `GET` | `/api/suppliers` | List all suppliers | Admin | 🟡 |
| `GET` | `/api/suppliers/:id` | Get supplier detail | Admin | 🟡 |
| `GET` | `/api/suppliers/:id/purchase-orders` | Get supplier POs | Admin | 🟡 |
| `GET` | `/api/suppliers/:id/stats` | Get supplier stats | Admin | 🟡 |
| `POST` | `/api/suppliers` | Create supplier | Admin | 🟡 |
| `PUT` | `/api/suppliers/:id` | Update supplier | Admin | 🟡 |
| `DELETE` | `/api/suppliers/:id` | Delete supplier | Admin | 🟡 |

**Query Params for List**: `page`, `limit`, `search`, `paymentTerms`, `isActive`

---

#### 🟡 **Reports** (Pending Implementation)

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| `GET` | `/api/reports` | List all reports | Admin | 🟡 |
| `GET` | `/api/reports/:id` | Get report detail | Admin | 🟡 |
| `POST` | `/api/reports/generate` | Generate report | Admin | 🟡 |
| `GET` | `/api/reports/sales` | Sales report | Admin | 🟡 |
| `GET` | `/api/reports/inventory` | Inventory report | Admin | 🟡 |
| `GET` | `/api/reports/revenue` | Revenue report | Admin | 🟡 |
| `GET` | `/api/reports/profit` | Profit & loss | Admin | 🟡 |
| `GET` | `/api/reports/customer` | Customer analytics | Admin | 🟡 |
| `GET` | `/api/reports/product` | Product performance | Admin | 🟡 |
| `GET` | `/api/reports/supplier` | Supplier performance | Admin | 🟡 |

**Query Params**: `type`, `startDate`, `endDate`, `format` (json/pdf/excel/csv)

---

### Response Format Standards

#### **Product List Response Format**

```json
{
  "success": true,
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Product Name",
        "category": "Category Name",
        "image": "https://example.com/image.jpg",
        "price": 28.85,
        "original_price": 32.80,
        "rating": 4.0,
        "reviews": 32,
        "vendor": "Vendor Name",
        "description": "Short description...",
        "sku": "SKU123",
        "mfg_date": "2022-06-04",
        "tags": ["tag1", "tag2"],
        "shelf_life": "70 days",
        "stock": 8,
        "type": "Organic"
      }
    ],
    "pagination": {
      "current_page": 1,
      "per_page": 8,
      "total": 15,
      "total_pages": 2,
      "has_next": true,
      "has_prev": false
    }
  }
}
```

#### **Product Detail Response Format**

```json
{
  "success": true,
  "data": {
    "product": {
      "id": 1,
      "name": "Product Name",
      "category": "Category Name",
      "image": "https://example.com/image.jpg",
      "price": 28.85,
      "original_price": 32.80,
      "rating": 4.0,
      "reviews": 32,
      "vendor": "Vendor Name",
      "description": "Short description...",
      "sku": "SKU123",
      "mfg_date": "2022-06-04",
      "tags": ["tag1", "tag2"],
      "shelf_life": "70 days",
      "stock": 8,
      "type": "Organic",
      "detail_description": {
        "intro": [
          "Paragraph 1...",
          "Paragraph 2..."
        ],
        "specifications": [
          {
            "label": "Type Of Packing",
            "value": "Bottle"
          }
        ],
        "additional_desc": "...",
        "packaging": ["..."],
        "suggested_use": ["..."],
        "other_ingredients": ["..."],
        "warnings": ["..."]
      },
      "images": [
        {
          "id": 1,
          "url": "https://example.com/image1.jpg",
          "is_primary": true
        }
      ]
    }
  }
}
```

#### **Categories**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/categories` | Get all categories |

```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": 1,
        "name": "Baking material",
        "slug": "baking-material",
        "image": "https://example.com/cat-image.jpg",
        "product_count": 25
      }
    ]
  }
}
```

#### **Orders (Future)**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/orders` | Get order list |
| `GET` | `/api/orders/:id` | Get order detail |
| `POST` | `/api/orders` | Create new order |
| `PUT` | `/api/orders/:id` | Update order status |

#### **Cart (Future)**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/cart` | Get user's cart |
| `POST` | `/api/cart/add` | Add item to cart |
| `PUT` | `/api/cart/update/:item_id` | Update cart item quantity |
| `DELETE` | `/api/cart/remove/:item_id` | Remove item from cart |

---

### 🔐 Authentication *(IMPLEMENTED)* 🎉

Frontend đã implement LoginSignup UI và đang chờ backend API integration.

#### **Authentication Endpoints**

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/api/auth/login` | Admin login | `{ username, password }` |
| `POST` | `/api/auth/register` | Admin registration | `{ fullName, username, email, password }` |
| `POST` | `/api/auth/logout` | Logout user | `{ token }` |
| `POST` | `/api/auth/forgot-password` | Password reset | `{ email }` |
| `GET` | `/api/auth/me` | Get current user | Header: `Authorization: Bearer {token}` |

#### **Login API Response**

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "username": "admin",
      "email": "admin@example.com",
      "fullName": "Admin User",
      "role": "admin"
    }
  }
}
```

#### **Register API Response**

```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "user": {
      "id": 2,
      "username": "newadmin",
      "email": "newadmin@example.com",
      "fullName": "New Admin",
      "role": "admin"
    }
  }
}
```

#### **Authentication Service (TODO)**

Create `src/services/authService.js`:

```javascript
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Login
export const login = async (username, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, {
    username,
    password
  });
  
  if (response.data.success) {
    localStorage.setItem('authToken', response.data.data.token);
    localStorage.setItem('adminUser', JSON.stringify(response.data.data.user));
  }
  
  return response.data;
};

// Register
export const register = async (fullName, username, email, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, {
    fullName,
    username,
    email,
    password,
    role: 'admin'
  });
  
  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('adminUser');
};

// Get auth token
export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Get current user
export const getCurrentUser = () => {
  const user = localStorage.getItem('adminUser');
  return user ? JSON.parse(user) : null;
};

// Check if authenticated
export const isAuthenticated = () => {
  return !!getAuthToken();
};
```

#### **Integration Steps**

1. **Replace mock login in `LoginSignupSection.jsx`**:
   ```javascript
   import { login } from '../../services/authService';
   
   const handleLoginSubmit = async (e) => {
     e.preventDefault();
     try {
       const result = await login(username, password);
       if (result.success) {
         navigate('/dashboard');
       } else {
         alert(result.message);
       }
     } catch (error) {
       alert('Login failed. Please try again.');
     }
   };
   ```

2. **Implement Protected Routes**: See `LOGINSIGNUP_IMPLEMENTATION.md` for details

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0 (or **yarn** >= 1.22.0)

### Installation

```bash
# Clone repository
git clone https://github.com/PhatNguyenTT2/mini-store.git

# Navigate to project
cd mini-store/admin

# Install dependencies
npm install

# Start development server
npm run dev
```

### First Access

When you start the dev server, you'll see the **Login Page** at:
```
http://localhost:5173/
```

**Quick Test**:
- Login form is displayed by default at `/`
- Click "Register" tab to switch to signup form (URL changes to `/signup`)
- Fill in form fields (currently shows alerts with form data)
- After backend integration, successful login will redirect to `/dashboard`

### Available Scripts

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run check:colors  # Validate color usage
```

---

## 💻 Development

### Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes**: Edit files in `src/`
3. **Hot reload**: Changes reflect automatically
4. **Check colors**: `npm run check:colors` to validate design system
5. **Lint code**: `npm run lint` before committing

### Code Style Guidelines

#### React Components
```javascript
// Use named exports for components
export const ComponentName = () => {
  // Component logic
};

// Use default export only for pages
export default PageName;
```

#### File Naming
- **Components**: PascalCase (e.g., `ProductList.jsx`)
- **Utilities**: camelCase (e.g., `productRouting.js`)
- **Styles**: kebab-case (e.g., `button-styles.css`)

#### Import Order
```javascript
// 1. External dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 2. Internal components
import { Layout } from '../components/Layout';

// 3. Utilities & helpers
import { generateProductUrl } from '../utils/productRouting';

// 4. Data & constants
import { ALL_PRODUCTS } from '../data/products';

// 5. Styles
import './ComponentName.css';
```

---

## 🗺️ Development Roadmap

### Phase 1: Core E-commerce ✅ (Completed)
- [x] Authentication UI (Login/Signup)
- [x] Dashboard with sales chart
- [x] Product listing with filters
- [x] Product detail pages
- [x] Category management UI
- [x] Order management UI
- [x] Shopping cart interface
- [x] Checkout flow
- [x] Routing system
- [x] Mock data layer

**Status**: ✅ Complete | **Duration**: 8 weeks

---

### Phase 2: Customer Management 🟡 (Next - 3-4 weeks)

#### Frontend Tasks
- [ ] **Customer List Page**
  - [ ] Customer table with pagination
  - [ ] Filters (type, status, search)
  - [ ] Sort by name, total spent, orders
  - [ ] Quick actions (view, edit, delete)

- [ ] **Customer Detail Page**
  - [ ] Customer profile information
  - [ ] Statistics cards (total spent, orders, avg order value)
  - [ ] Purchase history table
  - [ ] Loyalty points display
  - [ ] Edit customer modal

- [ ] **Customer Creation/Edit Form**
  - [ ] Form with validation
  - [ ] Customer type selection
  - [ ] Address fields
  - [ ] Contact information

- [ ] **API Integration**
  - [ ] Create `customerService.js`
  - [ ] Implement CRUD operations
  - [ ] Connect to backend endpoints

**Backend Dependencies**: Customer API endpoints (GET, POST, PUT, DELETE)

---

### Phase 3: Inventory Management 🟡 (4-5 weeks)

#### Frontend Tasks
- [ ] **Inventory Dashboard**
  - [ ] KPI cards (total stock value, low stock, out of stock)
  - [ ] Stock status charts
  - [ ] Quick alerts section

- [ ] **Inventory List Page**
  - [ ] Product inventory table
  - [ ] Stock levels (on hand, reserved, available)
  - [ ] Warehouse location
  - [ ] Reorder alerts
  - [ ] Filter by stock status

- [ ] **Stock Movement History**
  - [ ] Movement timeline
  - [ ] Filter by type (in/out/adjustment)
  - [ ] User audit trail
  - [ ] Reason display

- [ ] **Manual Adjustment Interface**
  - [ ] Adjustment form
  - [ ] Reason selection/input
  - [ ] Quantity input with validation
  - [ ] Confirmation modal

- [ ] **Low Stock Alerts**
  - [ ] Alert notifications
  - [ ] Low stock products list
  - [ ] Reorder suggestions

- [ ] **API Integration**
  - [ ] Create `inventoryService.js`
  - [ ] Real-time stock updates
  - [ ] Movement tracking

**Backend Dependencies**: Inventory API endpoints

---

### Phase 4: Payment Processing 🟡 (2-3 weeks)

#### Frontend Tasks
- [ ] **Payment History Page**
  - [ ] Payment list table
  - [ ] Filter by date, method, status
  - [ ] Search by order number
  - [ ] Quick view payment details

- [ ] **Payment Recording Form**
  - [ ] Order selection
  - [ ] Amount input
  - [ ] Payment method selector
  - [ ] Transaction ID field
  - [ ] Notes

- [ ] **Refund Processing Interface**
  - [ ] Refund request form
  - [ ] Refund reason selection
  - [ ] Partial/full refund option
  - [ ] Confirmation workflow

- [ ] **Payment Statistics**
  - [ ] Revenue by payment method
  - [ ] Pending payments
  - [ ] Refunded amounts
  - [ ] Charts and graphs

- [ ] **API Integration**
  - [ ] Create `paymentService.js`
  - [ ] Payment recording
  - [ ] Refund processing

**Backend Dependencies**: Payment API endpoints

---

### Phase 5: Procurement (B2B) 🟡 (5-6 weeks)

#### Frontend Tasks

##### A. Supplier Management (2-3 weeks)
- [ ] **Supplier List Page**
  - [ ] Supplier table
  - [ ] Filters and search
  - [ ] Quick actions

- [ ] **Supplier Detail Page**
  - [ ] Company information
  - [ ] Contact person details
  - [ ] Statistics (POs, amounts)
  - [ ] Payment terms
  - [ ] Product list

- [ ] **Supplier Form**
  - [ ] Multi-section form
  - [ ] Bank account details
  - [ ] Payment terms selector
  - [ ] Product assignment

##### B. Purchase Orders (3-4 weeks)
- [ ] **PO Creation Wizard**
  - [ ] Step 1: Supplier selection
  - [ ] Step 2: Product selection with quantities
  - [ ] Step 3: Pricing and totals
  - [ ] Step 4: Review and submit

- [ ] **PO List Page**
  - [ ] PO table with status badges
  - [ ] Filter by status, supplier, date
  - [ ] Quick actions

- [ ] **PO Detail Page**
  - [ ] PO header information
  - [ ] Items table
  - [ ] Status timeline
  - [ ] Payment tracking
  - [ ] Actions (approve, receive, cancel)

- [ ] **PO Approval Interface**
  - [ ] Approval workflow
  - [ ] Comments/notes
  - [ ] Approval history

- [ ] **Receiving Interface**
  - [ ] Item receiving form
  - [ ] Partial receiving support
  - [ ] Inventory update confirmation

- [ ] **API Integration**
  - [ ] Create `supplierService.js`
  - [ ] Create `purchaseOrderService.js`
  - [ ] Workflow management

**Backend Dependencies**: Supplier & PO API endpoints

---

### Phase 6: Business Intelligence 🟡 (4-6 weeks)

#### Frontend Tasks
- [ ] **Reports Dashboard**
  - [ ] Report type cards
  - [ ] Quick stats
  - [ ] Recent reports list

- [ ] **Report Generation Interface**
  - [ ] Report type selector
  - [ ] Date range picker
  - [ ] Filter options
  - [ ] Generate button

- [ ] **Sales Reports**
  - [ ] Line charts (daily/weekly/monthly)
  - [ ] Category breakdown (pie chart)
  - [ ] Top products table
  - [ ] Export functionality

- [ ] **Revenue Reports**
  - [ ] Revenue trends
  - [ ] Revenue by category
  - [ ] Comparison charts

- [ ] **Inventory Reports**
  - [ ] Current stock levels
  - [ ] Movement analysis
  - [ ] Fast/slow movers

- [ ] **Customer Analytics**
  - [ ] Customer growth chart
  - [ ] Top customers table
  - [ ] Customer lifetime value
  - [ ] Retention metrics

- [ ] **Export Functionality**
  - [ ] PDF generation
  - [ ] Excel export
  - [ ] CSV download
  - [ ] Print view

- [ ] **API Integration**
  - [ ] Create `reportService.js`
  - [ ] Chart data processing
  - [ ] Export handling

**Backend Dependencies**: Reports API endpoints

---

### Phase 7: Advanced Features 🔮 (Future)
- [ ] **Real-time Notifications**
  - [ ] WebSocket integration
  - [ ] Push notifications
  - [ ] Toast notifications

- [ ] **Advanced Search**
  - [ ] Global search
  - [ ] Search across all entities
  - [ ] Smart suggestions

- [ ] **Bulk Operations**
  - [ ] Bulk product import/export
  - [ ] Bulk category assignment
  - [ ] Bulk status updates

- [ ] **Multi-language Support**
  - [ ] i18n integration
  - [ ] Language switcher
  - [ ] Translations

- [ ] **Dark Mode**
  - [ ] Theme switcher
  - [ ] Dark color scheme
  - [ ] Persistent preference

- [ ] **Mobile Responsive Improvements**
  - [ ] Mobile-optimized layouts
  - [ ] Touch-friendly controls
  - [ ] Mobile navigation

---

### Overall Timeline

```
┌─────────────────────────────────────────────────────────────┐
│  Q4 2024        │  Q1 2025        │  Q2 2025        │  Q3 2025 │
├─────────────────┼─────────────────┼─────────────────┼──────────┤
│ Phase 1 ✅      │ Phase 2 🟡      │ Phase 4 🟡      │ Phase 6 🟡│
│ Core Features   │ CRM             │ Payments        │ Reports   │
│                 │ Phase 3 🟡      │ Phase 5 🟡      │ Phase 7 🔮│
│                 │ Inventory       │ Procurement     │ Advanced  │
└─────────────────────────────────────────────────────────────┘
```

**Current Focus**: Phase 2 (Customer Management) + Phase 3 (Inventory)

---

## 🎯 Backend Team TODO List

### ✅ Completed
- [x] User authentication (JWT)
- [x] Product CRUD with filters
- [x] Category management
- [x] Order processing
- [x] Database models for all 10 entities

### 🔥 High Priority (Phase 2-3)

#### Customer Management
- [ ] **Customer CRUD Controllers**
  - [ ] GET `/api/customers` - List with filters
  - [ ] GET `/api/customers/:id` - Detail view
  - [ ] GET `/api/customers/:id/orders` - Order history
  - [ ] GET `/api/customers/:id/stats` - Statistics
  - [ ] POST `/api/customers` - Create customer
  - [ ] PUT `/api/customers/:id` - Update customer
  - [ ] DELETE `/api/customers/:id` - Soft delete
  - [ ] POST `/api/customers/:id/loyalty` - Loyalty points

- [ ] **Business Logic**
  - [ ] Auto-generate customer codes (CUST2025000001)
  - [ ] Update statistics on order creation
  - [ ] Loyalty points calculation
  - [ ] Customer segmentation

#### Inventory Management
- [ ] **Inventory Controllers**
  - [ ] GET `/api/inventory` - List all
  - [ ] GET `/api/inventory/:productId` - Product inventory
  - [ ] GET `/api/inventory/low-stock` - Alert items
  - [ ] GET `/api/inventory/:productId/movements` - History
  - [ ] POST `/api/inventory/adjust` - Manual adjustment
  - [ ] POST `/api/inventory/reserve` - Reserve stock
  - [ ] POST `/api/inventory/release` - Release stock

- [ ] **Business Logic**
  - [ ] Auto-calculate available quantity
  - [ ] Movement audit trail
  - [ ] Low stock alerts
  - [ ] Integration with orders (auto-reserve)
  - [ ] Integration with POs (auto-increase)

### 📦 Medium Priority (Phase 4-5)

#### Payment Processing
- [ ] Payment CRUD controllers
- [ ] Refund workflow
- [ ] Payment-order linking
- [ ] Payment statistics

#### Procurement
- [ ] Supplier CRUD controllers
- [ ] Purchase Order CRUD
- [ ] PO approval workflow
- [ ] Receiving process
- [ ] PO-payment linking

### 📊 Low Priority (Phase 6)

#### Reports & Analytics
- [ ] Report generation engine
- [ ] Sales reports
- [ ] Inventory reports
- [ ] Revenue reports
- [ ] Customer analytics
- [ ] Export functionality (PDF, Excel, CSV)

---

## 📖 Additional Documentation

- **FIGMA_TO_CODE.md**: Design system and Figma integration guide
- **ROUTER_SYSTEM.md**: Detailed routing documentation
- **DYNAMIC_PRODUCT_DETAIL_COMPLETE.md**: Product detail implementation
- **ROUTING_COMPLETE.md**: Routing implementation guide

---

## 🤝 Contributing

### For Frontend Team
1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and test locally
3. Run linter: `npm run lint`
4. Commit with clear message
5. Push and create Pull Request

### For Backend Team
1. Review **Data Models** section for schema design
2. Implement **API Endpoints** as specified
3. Follow **Response Format** examples
4. Test with frontend mock data structure
5. Coordinate on `.env` variables

---

## 📞 Contact & Support

- **Frontend Lead**: [Your Name]
- **Repository**: [https://github.com/PhatNguyenTT2/mini-store](https://github.com/PhatNguyenTT2/mini-store)
- **Issues**: [GitHub Issues](https://github.com/PhatNguyenTT2/mini-store/issues)

---

## 📝 License

This project is private and confidential.

---

## 🎉 Acknowledgments

- Design system inspired by modern e-commerce platforms
- Built with best practices from React and Tailwind communities
- Figma designs converted to production-ready code

---

**Last Updated**: October 5, 2025  
**Frontend Version**: 0.0.0  
**Status**: ✅ UI Complete, ⏳ Awaiting Backend Integration
