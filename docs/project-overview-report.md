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
