# ⚠️ Important: Backend ID Field

## 🔑 Backend toJSON Transform

Backend Product model có transform `_id` → `id`:

```javascript
// backend/models/product.js (line 173-180)
productSchema.set('toJSON', {
  virtuals: true,
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;  // ← _id bị xóa!
    delete returnedObject.__v;
  }
})
```

---

## ⚡ Impact

### API Response Structure:

```json
{
  "success": true,
  "data": {
    "product": {
      "id": "67e2af1298783e455763fc76",    ← Có "id"
      "_id": undefined,                      ← KHÔNG có "_id"
      "name": "Product Name",
      ...
    }
  }
}
```

---

## ✅ Frontend Fix

### Use `product.id` instead of `product._id`:

```javascript
// ❌ WRONG:
const productId = product._id;  // undefined!

// ✅ CORRECT:
const productId = product.id;   // "67e2af12..."

// 🛡️ SAFE (fallback):
const productId = product.id || product._id;
```

---

## 📝 Updated Components

### 1. ProductList.jsx
```javascript
// In map function:
const productId = product.id || product._id;

// In handleProductClick:
const productUrl = generateProductUrl(product.id, product.name);
```

### 2. DetailProduct.jsx
```javascript
// URL params already has id as string
const productId = params.id;  // MongoDB ObjectId string
```

### 3. ProductInfo.jsx & ProductDetail.jsx
```javascript
// These receive productId from parent (already correct)
useEffect(() => {
  productService.getProductById(productId);  // ✅ Works
}, [productId]);
```

---

## 🧪 Testing

### Check Console Logs:

**After API call:**
```javascript
First product: { id: "67e2af12...", name: "...", ... }
First product._id: undefined     ← Backend xóa _id
First product.id: "67e2af12..."  ← Backend thêm id
→ Backend uses "id" field (not "_id")!
```

**After click product:**
```javascript
Product clicked: { id: "67e2af12...", ... }
Product ID (id): "67e2af1298783e455763fc76"   ← ✅ Có
Product ID (_id): undefined                     ← ❌ Không có
Generated URL: /products/67e2af12.../organic-milk
```

---

## ⚠️ Common Mistakes

### Mistake 1: Using `_id`
```javascript
// ❌ WRONG:
product._id  // undefined!
```

### Mistake 2: Parsing to Integer
```javascript
// ❌ WRONG:
parseInt(product.id)  // NaN (ObjectId is string!)

// ✅ CORRECT:
product.id  // Keep as string
```

### Mistake 3: Key in map
```javascript
// ❌ WRONG:
key={product._id}  // undefined key!

// ✅ CORRECT:
key={product.id}   // unique key
```

---

## 🔍 Verification

### Check Backend Response:

```bash
# Test API directly
GET http://localhost:3001/api/products

# Response should have:
{
  "products": [
    {
      "id": "67e2af12...",      ← Field name is "id"
      "name": "...",
      // NO "_id" field
    }
  ]
}
```

---

## 📊 Summary

| Field | Backend Model | API Response | Frontend Use |
|-------|---------------|--------------|--------------|
| `_id` | ✅ MongoDB field | ❌ Deleted | ❌ Don't use |
| `id` | ❌ Not in schema | ✅ Added by transform | ✅ Use this |

---

## ✅ Solution Applied

### All components now use `product.id`:

1. ✅ ProductList.jsx
2. ✅ ProductInfo.jsx (receives from parent)
3. ✅ ProductDetail.jsx (receives from parent)
4. ✅ DetailProduct.jsx (from URL params)

### Fallback pattern used:
```javascript
const productId = product.id || product._id;
```

This ensures compatibility if backend changes in future.

---

**Status**: ✅ **Fixed!**

**Reload browser and test product detail navigation!** 🚀

---

**Last Updated**: October 6, 2025

