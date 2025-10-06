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

**Mini Store Admin Dashboard** là giao diện quản trị viên cho hệ thống e-commerce. Frontend này được xây dựng với React và đang sử dụng **mock data** để phát triển UI/UX. Backend team có thể dễ dàng tích hợp API thực bằng cách thay thế các functions trong `src/data/` và `src/utils/`.

### Current Status
- ✅ **UI/UX Complete**: Tất cả pages và components đã hoàn thiện
- ✅ **Authentication UI Ready**: Login/Signup interface implemented (at `/` and `/signup`)
- ✅ **Mock Data Ready**: Sample data sẵn sàng cho 15 products
- ✅ **Routing Updated**: New routing structure with authentication flow
  - `/` → Login Page
  - `/signup` → Signup Page
  - `/dashboard` → Admin Dashboard (previously at `/`)
- ⏳ **Backend Integration**: Chờ API endpoints từ backend team (especially auth endpoints)

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

### Implemented Features

#### 1. **Authentication System** 🔐 *(NEW)*
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

### 📡 Expected API Endpoints

Backend team cần implement các endpoints sau:

#### **Products**

| Method | Endpoint | Description | Query Params | Response |
|--------|----------|-------------|--------------|----------|
| `GET` | `/api/products` | Get product list | `page`, `per_page`, `category`, `min_price`, `max_price`, `sort_by` | `{ products: [], pagination: {...} }` |
| `GET` | `/api/products/:id` | Get product detail | None | `{ product: {...} }` |
| `POST` | `/api/products` | Create product | None (body) | `{ product: {...} }` |
| `PUT` | `/api/products/:id` | Update product | None (body) | `{ product: {...} }` |
| `DELETE` | `/api/products/:id` | Delete product | None | `{ success: true }` |

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

## 🎯 Backend Team TODO List

### High Priority

- [ ] **Database Schema Design**
  - Products table with all fields from data model
  - Categories table
  - Product images table (1-to-many)
  - Orders table
  - Order items table
  - Users/Customers table

- [ ] **API Endpoints Implementation**
  - [ ] `GET /api/products` - Product listing with pagination & filters
  - [ ] `GET /api/products/:id` - Product detail
  - [ ] `GET /api/categories` - Category list
  - [ ] `POST /api/products` - Create product (admin)
  - [ ] `PUT /api/products/:id` - Update product (admin)
  - [ ] `DELETE /api/products/:id` - Delete product (admin)

- [ ] **Authentication & Authorization**
  - [ ] JWT token implementation
  - [ ] Role-based access control (Admin/User)
  - [ ] Protected routes

### Medium Priority

- [ ] **Image Upload Service**
  - [ ] File upload endpoint
  - [ ] Image optimization (resize, compress)
  - [ ] CDN integration

- [ ] **Shopping Cart API**
  - [ ] Cart operations (add, update, remove)
  - [ ] Session management
  - [ ] Cart persistence

- [ ] **Order Management**
  - [ ] Order creation
  - [ ] Order status updates
  - [ ] Order history

### Low Priority

- [ ] **Reviews & Ratings**
- [ ] **Search Functionality**
- [ ] **Inventory Management**
- [ ] **Analytics Dashboard Data**

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
