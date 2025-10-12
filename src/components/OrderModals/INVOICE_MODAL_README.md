# Invoice Modal Component

## Tổng quan
Component `InvoiceModal` được tách riêng từ `OrderList` để dễ dàng bảo trì, sửa lỗi và tái sử dụng.

## Các vấn đề đã sửa

### 1. **Tách biệt component**
- **Trước đây**: Invoice modal được viết inline trong `OrderList.jsx` (hơn 260 dòng code)
- **Bây giờ**: Tách thành component riêng `InvoiceModal.jsx` trong thư mục `OrderModals`
- **Lợi ích**: 
  - Dễ bảo trì và đọc code
  - Có thể tái sử dụng ở nhiều nơi
  - Tách biệt logic hiển thị invoice khỏi logic quản lý danh sách orders

### 2. **Sửa lỗi hiển thị subtotal, tax, discount**

#### Nguyên nhân lỗi:
Trong `orderService.js`, hàm `formatOrdersForDisplay` không truyền các trường:
- `subtotal`
- `discount`
- `discountPercentage`
- `discountType`
- `shippingFee`
- `tax`

Điều này khiến các giá trị này luôn bằng `0` hoặc `undefined`.

#### Giải pháp:
Đã cập nhật `formatOrdersForDisplay` để truyền đầy đủ các trường từ API:

```javascript
// Thêm các trường cần thiết cho invoice modal
subtotal: order.subtotal || 0,
discount: order.discount || 0,
discountPercentage: order.discountPercentage || 0,
discountType: order.discountType || 'none',
shippingFee: order.shippingFee || 0,
tax: order.tax || 0,
```

#### Kết quả:
- ✅ Subtotal hiển thị chính xác (tổng giá trị các items trước khi tính discount, tax, shipping)
- ✅ Tax (10%) hiển thị chính xác
- ✅ Discount hiển thị khi có giá trị > 0 (với điều kiện `discount > 0`)
- ✅ Discount type (retail, wholesale, vip) hiển thị chính xác

## Cách sử dụng

### Import component:
```javascript
import { InvoiceModal } from '../OrderModals';
```

### Sử dụng trong component:
```jsx
<InvoiceModal
  order={orderData}           // Object chứa toàn bộ thông tin order
  onClose={() => handleClose()} // Callback khi đóng modal
  onViewItems={handleViewItems} // Callback khi click "View Items"
/>
```

### Props:
- `order` (Object): Dữ liệu order cần hiển thị, bao gồm:
  - `id`, `orderNumber`, `date`
  - `customer` (name, email, phone)
  - `deliveryType`, `shippingAddress`
  - `items` (array of products)
  - `subtotal`, `discount`, `discountPercentage`, `discountType`
  - `shippingFee`, `tax`, `total`
  - `user` (creator info)
  
- `onClose` (Function): Callback khi đóng modal

- `onViewItems` (Function): Callback khi click button "View Items"

## Features

### 1. Hiển thị thông tin đầy đủ
- Order number và date
- Thông tin khách hàng (tên, phone, email)
- Loại giao hàng (delivery/pickup)
- Địa chỉ giao hàng (nếu có)

### 2. Bảng items chi tiết
- Số thứ tự, tên sản phẩm
- Số lượng, đơn giá
- Thành tiền (quantity × price)

### 3. Tính toán chính xác
- **Subtotal**: Tổng giá trị items
- **Discount**: Chỉ hiển thị khi > 0, kèm theo % và loại discount
- **Shipping**: Hiển thị "FREE" nếu = 0
- **Tax**: Hiển thị với % (mặc định 10%)
- **Total**: Tổng cuối cùng

### 4. Actions
- **Close**: Đóng modal
- **View Items**: Chuyển sang modal xem chi tiết items
- **Print Invoice**: In hóa đơn

## Cấu trúc file

```
admin/src/components/
  OrderModals/
    InvoiceModal.jsx         # Component invoice modal
    AddOrderModal.jsx        # (Existing)
    EditOrderModal.jsx       # (Existing)
    index.js                 # Export tất cả modals
  OrderList/
    OrderList.jsx            # Sử dụng InvoiceModal
```

## Testing

Kiểm tra các trường hợp:
1. ✅ Order có discount > 0 → Hiển thị dòng discount
2. ✅ Order không có discount → Không hiển thị dòng discount
3. ✅ Order có shipping fee > 0 → Hiển thị giá shipping
4. ✅ Order có shipping fee = 0 → Hiển thị "FREE"
5. ✅ Subtotal, tax, total hiển thị chính xác
6. ✅ Print invoice hoạt động tốt
7. ✅ Button "View Items" chuyển đúng sang items modal

## Notes

- Component sử dụng TailwindCSS cho styling
- Font chính: 'Poppins', sans-serif
- Z-index: 10000 để đảm bảo modal luôn ở trên cùng
- Responsive: Modal tự động scale trên các màn hình khác nhau
