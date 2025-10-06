# 🔗 API Integration Guide - Products & Categories

## ✅ Hoàn thành

Frontend đã được tích hợp hoàn toàn với Backend API cho Products và Categories.

---

## 📦 Services Đã Tạo

### 1. **productService.js**

Location: `admin/src/services/productService.js`

**Methods:**
- `getProducts(params)` - Get all products with pagination & filters
- `getProductById(id)` - Get single product
- `createProduct(productData)` - Create new product (Admin)
- `updateProduct(id, productData)` - Update product (Admin)
- `deleteProduct(id)` - Delete product (Admin)
- `updateStock(id, stock)` - Update stock quantity (Admin)
- `getDiscountPercent(price, originalPrice)` - Helper function

**Usage:**
```javascript
import productService from '../../services/productService'

// Get products with pagination
const result = await productService.getProducts({
  page: 1,
  per_page: 8,
  category: 'categoryId', // optional
  min_price: 10, // optional
  max_price: 100, // optional
  sort_by: 'price_asc' // optional
})

// Get single product
const product = await productService.getProductById(productId)
```

### 2. **categoryService.js**

Location: `admin/src/services/categoryService.js`

**Methods:**
- `getCategories()` - Get all categories
- `getCategoryById(id)` - Get single category
- `getCategoryBySlug(slug)` - Get category by slug
- `createCategory(categoryData)` - Create new category (Admin)
- `updateCategory(id, categoryData)` - Update category (Admin)
- `deleteCategory(id)` - Delete category (Admin)

**Usage:**
```javascript
import categoryService from '../../services/categoryService'

// Get all categories
const categories = await categoryService.getCategories()

// Get category by ID
const category = await categoryService.getCategoryById(id)
```

---

## 🔄 Components Đã Cập Nhật

### 1. **ProductList Component**

Location: `admin/src/components/ProductList/ProductList.jsx`

**Changes:**
- ✅ Fetch products từ API thay vì mock data
- ✅ Loading state với spinner
- ✅ Error handling với retry button
- ✅ Pagination từ API response
- ✅ Product ID sử dụng MongoDB `_id`
- ✅ Category hiển thị từ populated data

**Features:**
- Real-time pagination
- Dynamic product count
- Loading states
- Error handling

### 2. **ProductInfo Component**

Location: `admin/src/components/ProductDetail/ProductInfo.jsx`

**Changes:**
- ✅ Fetch product detail từ API
- ✅ Loading state
- ✅ Error handling
- ✅ Dynamic product images
- ✅ Stock status (In Stock / Out of Stock)
- ✅ Conditional rendering cho optional fields

**New Features:**
- Shows "Out of Stock" nếu stock = 0
- Uses product.images array nếu available
- Formats mfgDate correctly
- Handles missing optional fields (type, tags, shelfLife)

### 3. **ProductDetail Component**

Location: `admin/src/components/ProductDetail/ProductDetail.jsx`

**Changes:**
- ✅ Fetch product detail từ API
- ✅ Loading state
- ✅ Sử dụng detailDescription từ backend
- ✅ Dynamic review count trong tabs

---

## 🎯 Data Flow

### Product List Page Flow:
```
User visits /products/view
  ↓
ProductList component loads
  ↓
useEffect → productService.getProducts()
  ↓
API Call → GET /api/products?page=1&per_page=8
  ↓
Backend returns products + pagination
  ↓
State updates → UI renders products
```

### Product Detail Page Flow:
```
User clicks on product
  ↓
Navigate to /products/:id/:slug
  ↓
DetailProduct page loads
  ↓
ProductInfo + ProductDetail fetch same product
  ↓
API Call → GET /api/products/:id
  ↓
Backend returns full product data
  ↓
Both components display product info
```

---

## 🔑 Backend API Endpoints Used

### Products:
- `GET /api/products` - List products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)
- `PATCH /api/products/:id/stock` - Update stock (Admin)

### Categories:
- `GET /api/categories` - List categories
- `GET /api/categories/:id` - Get category
- `GET /api/categories/slug/:slug` - Get by slug
- `POST /api/categories` - Create (Admin)
- `PUT /api/categories/:id` - Update (Admin)
- `DELETE /api/categories/:id` - Delete (Admin)

---

## 📊 Data Structure

### Product Object (from Backend):
```javascript
{
  _id: "MongoDB ObjectId",
  name: "Product Name",
  sku: "SKU123",
  category: {
    _id: "categoryId",
    name: "Category Name",
    slug: "category-slug"
  },
  price: 28.85,
  originalPrice: 32.80,
  image: "https://...",
  images: ["url1", "url2"], // optional
  description: "Short description",
  detailDescription: {
    intro: ["paragraph1", "paragraph2"],
    specifications: [
      { label: "Type", value: "Organic" }
    ],
    additionalDesc: "...",
    packaging: ["..."],
    suggestedUse: ["..."],
    otherIngredients: ["..."],
    warnings: ["..."]
  },
  vendor: "Vendor Name",
  stock: 10,
  rating: 4.5,
  reviewCount: 32,
  type: "Organic", // optional
  tags: ["tag1", "tag2"], // optional
  mfgDate: "2024-01-01", // optional
  shelfLife: "70 days", // optional
  isFeatured: false,
  isActive: true,
  createdAt: "2024-01-01",
  updatedAt: "2024-01-02"
}
```

### Pagination Object:
```javascript
{
  current_page: 1,
  per_page: 8,
  total: 15,
  total_pages: 2,
  has_next: true,
  has_prev: false
}
```

---

## 🚨 Error Handling

### Loading States:
- Spinner animation với emerald color
- "Loading products..." / "Loading product..." message

### Error States:
- Red error box với retry button
- Console error logging
- User-friendly error messages

### Empty States:
- "Product not found" message
- "No products available" (nếu cần)

---

## 🎨 UI States

### ProductList:
1. **Loading**: Spinner + "Loading products..."
2. **Error**: Red box + "Error Loading Products" + Retry button
3. **Success**: Product grid với pagination
4. **Empty**: (Future) "No products found"

### ProductInfo:
1. **Loading**: Spinner + "Loading product..."
2. **Error**: "Product not found" message
3. **Success**: Full product details
4. **Out of Stock**: Red "Out of Stock" badge

---

## ✅ Testing Checklist

### Product List:
- [ ] Products load from backend
- [ ] Pagination works correctly
- [ ] Loading state shows during fetch
- [ ] Error state shows on failure
- [ ] Product images display correctly
- [ ] Category names show from API
- [ ] Clicking product navigates to detail page
- [ ] Per page selector works (8, 12, 16, 20)

### Product Detail:
- [ ] Product detail loads from backend
- [ ] Loading state shows during fetch
- [ ] All product info displays correctly
- [ ] Images work (main + thumbnails)
- [ ] Rating displays correctly
- [ ] Stock status shows correctly
- [ ] Optional fields handle missing data
- [ ] Tabs work (Description, Additional, Vendor, Reviews)

---

## 🔮 Future Enhancements

### Planned:
- [ ] Implement FilterProduct với categories từ API
- [ ] SortBy functionality với API params
- [ ] Search functionality
- [ ] Add to Cart integration
- [ ] Product CRUD operations (Admin)
- [ ] Category management (Admin)
- [ ] Image upload for products
- [ ] Reviews & Ratings system

---

## 📝 Notes

### Important Changes:
1. **Product ID**: Sử dụng `product._id` (MongoDB) thay vì `product.id`
2. **Category**: Là object với `{_id, name, slug}` thay vì string
3. **Reviews**: Dùng `reviewCount` thay vì `reviews`
4. **MFG Date**: Dùng `mfgDate` (Date object) thay vì `mfg` (string)
5. **Shelf Life**: Dùng `shelfLife` thay vì `life`

### Migration from Mock Data:
- ✅ `ALL_PRODUCTS` array → API calls
- ✅ `getProductById()` → `productService.getProductById()`
- ✅ `getDiscountPercent()` → `productService.getDiscountPercent()`
- ✅ Client-side pagination → Server-side pagination
- ✅ Static data → Dynamic API data

---

**Last Updated**: October 6, 2025  
**Status**: ✅ Products & Categories Fully Integrated

