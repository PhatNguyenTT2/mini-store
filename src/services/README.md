# 🔐 Authentication Services

## Overview

Các service để kết nối với Backend API cho authentication và quản lý user.

## Files

### `api.js`
Base Axios instance với interceptors để:
- Tự động thêm token vào mọi request
- Xử lý lỗi 401 (Unauthorized) - tự động logout và redirect
- Cấu hình base URL từ environment variables

### `authService.js`
Service để xử lý authentication:
- `login(username, password)` - Đăng nhập
- `register(userData)` - Đăng ký admin mới
- `logout()` - Đăng xuất
- `getCurrentUser()` - Lấy thông tin user hiện tại
- `isAuthenticated()` - Kiểm tra đã đăng nhập chưa
- `getUser()` - Lấy thông tin user từ localStorage

## Usage

### 1. Login Example

```jsx
import authService from '../../services/authService'

const handleLogin = async (username, password) => {
  try {
    const result = await authService.login(username, password)
    
    if (result.success) {
      console.log('User:', result.user)
      console.log('Token:', result.token)
      // Navigate to dashboard
    }
  } catch (error) {
    console.error('Login failed:', error)
  }
}
```

### 2. Register Example

```jsx
const handleRegister = async (userData) => {
  try {
    const result = await authService.register({
      fullName: 'Admin User',
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123'
    })
    
    if (result.success) {
      console.log('Registration successful!')
    }
  } catch (error) {
    console.error('Registration failed:', error)
  }
}
```

### 3. Check Authentication

```jsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/authService'

const ProtectedPage = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/')
    }
  }, [navigate])
  
  return <div>Protected Content</div>
}
```

### 4. Logout

```jsx
const handleLogout = async () => {
  await authService.logout()
  navigate('/')
}
```

### 5. Get Current User

```jsx
useEffect(() => {
  const loadUser = async () => {
    try {
      const user = await authService.getCurrentUser()
      console.log('Current user:', user)
    } catch (error) {
      console.error('Failed to load user:', error)
    }
  }
  
  loadUser()
}, [])
```

## Environment Variables

Tạo file `.env` trong root folder:

```bash
VITE_API_URL=http://localhost:3001/api
```

## Error Handling

Service tự động xử lý các lỗi phổ biến:

- **401 Unauthorized**: Token invalid hoặc expired → tự động logout
- **403 Forbidden**: Account inactive
- **400 Bad Request**: Invalid input data
- **500 Server Error**: Server error

## Token Storage

Token được lưu trong `localStorage`:
- `adminToken` - JWT token
- `adminUser` - User object (JSON string)

## Backend API Endpoints

Các endpoint được sử dụng (xem `backend/controllers/login.js`):

- `POST /api/login` - Login
- `POST /api/login/register` - Register
- `POST /api/login/logout` - Logout
- `GET /api/login/me` - Get current user info

## Security Notes

1. Token được lưu trong localStorage (dễ sử dụng nhưng có thể bị XSS)
2. Token tự động được thêm vào mọi request qua interceptor
3. Token expired sẽ tự động logout user
4. Password phải ít nhất 6 ký tự (backend validation)

## Testing

Sử dụng account mặc định (tự động tạo khi backend khởi động):
- Username: `admin`
- Password: `admin123`

Hoặc đăng ký account mới qua `/signup` route.
