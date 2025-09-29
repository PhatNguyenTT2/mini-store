# Chương 1. TỔNG QUAN ĐỀ TÀI

## 1.1. Động lực nghiên cứu và lý do chọn đề tài

Trong bối cảnh thương mại điện tử phát triển mạnh mẽ, việc xây dựng một nền tảng bán hàng trực tuyến hiện đại và hiệu quả là yếu tố sống còn đối với các doanh nghiệp bán lẻ, bao gồm cả các siêu thị mini. Đề tài "Xây dựng Website Thương mại điện tử cho Siêu thị Mini" được chọn với động lực chính là tạo ra một giải pháp toàn diện, không chỉ mang lại trải nghiệm mua sắm tiện lợi cho khách hàng mà còn cung cấp cho chủ cửa hàng một công cụ quản trị mạnh mẽ, dễ sử dụng. Dự án này giải quyết nhu cầu chuyển đổi số, giúp các siêu thị mini cạnh tranh hiệu quả hơn trong thị trường hiện đại.

## 1.2. Khảo sát hiện trạng

Hiện nay, nhiều siêu thị mini vẫn đang quản lý bán hàng theo phương pháp thủ công hoặc sử dụng các phần mềm quản lý lỗi thời, thiếu tính linh hoạt. Các giải pháp hiện có trên thị trường thường gặp phải một số vấn đề:
- Giao diện người dùng (khách hàng) chưa được tối ưu, không thân thiện và khó sử dụng.
- Hệ thống quản trị (admin) phức tạp, thiếu các báo cáo trực quan về doanh thu, sản phẩm bán chạy.
- Chi phí triển khai và duy trì cao.
- Khó khăn trong việc tích hợp các công nghệ mới và mở rộng trong tương lai.

Dự án này hướng tới việc khắc phục những nhược điểm trên bằng cách xây dựng một hệ thống tùy chỉnh, tối ưu hóa cho mô hình kinh doanh của siêu thị mini.

## 1.3. Đối tượng và Phạm vi nghiên cứu

- **Đối tượng nghiên cứu**: Quy trình bán hàng và quản lý của một siêu thị mini, bao gồm hoạt động của khách hàng và người quản trị.
- **Phạm vi nghiên cứu**:
    - **Phía Khách hàng (User-facing)**:
        - Đăng ký, đăng nhập tài khoản.
        - Xem, tìm kiếm sản phẩm theo danh mục.
        - Giao diện trang chủ, trang chi tiết sản phẩm, trang giỏ hàng.
        - (Trong tương lai) Đặt hàng và thanh toán.
    - **Phía Quản trị (Admin-facing)**:
        - Trang tổng quan (Dashboard) hiển thị các số liệu thống kê trực quan về doanh thu (`SalesChart`).
        - (Trong tương lai) Quản lý sản phẩm (Thêm, sửa, xóa), quản lý đơn hàng, quản lý danh mục, và quản lý người dùng.

## 1.4. Mục tiêu đề tài

### 1.4.1. Yêu cầu chức năng hệ thống

- **Đối với Khách hàng**:
    - `FE-01`: Hệ thống phải cho phép người dùng đăng ký tài khoản mới.
    - `FE-02`: Hệ thống phải cho phép người dùng đăng nhập vào tài khoản đã có.
    - `FE-03`: Hệ thống phải hiển thị danh sách sản phẩm một cách trực quan, hấp dẫn.
    - `FE-04`: Người dùng có thể xem chi tiết thông tin sản phẩm.
- **Đối với Quản trị viên**:
    - `BE-01`: Hệ thống phải có trang đăng nhập riêng cho quản trị viên.
    - `BE-02`: Hệ thống phải cung cấp một trang tổng quan (Dashboard) với biểu đồ và số liệu về tình hình kinh doanh.
    - `BE-03`: (Mở rộng) Quản trị viên có thể thực hiện các thao tác CRUD (Tạo, Đọc, Cập nhật, Xóa) đối với sản phẩm.
    - `BE-04`: (Mở rộng) Quản trị viên có thể xem và quản lý danh sách đơn hàng.

### 1.4.2. Yêu cầu dữ liệu

- **Dữ liệu người dùng**: `user_id`, `full_name`, `email`, `password_hash`, `address`, `phone_number`.
- **Dữ liệu sản phẩm**: `product_id`, `name`, `description`, `price`, `stock_quantity`, `category_id`, `image_url`.
- **Dữ liệu danh mục**: `category_id`, `name`.
- **Dữ liệu đơn hàng**: `order_id`, `user_id`, `order_date`, `total_amount`, `status` (e.g., pending, completed, cancelled).
- **Dữ liệu chi tiết đơn hàng**: `order_detail_id`, `order_id`, `product_id`, `quantity`, `price`.

### 1.4.3. Yêu cầu giao diện, phần cứng, phần mềm

- **Yêu cầu giao diện**:
    - Giao diện được xây dựng dựa trên thiết kế từ Figma, đảm bảo tính nhất quán và trải nghiệm người dùng tốt.
    - Giao diện phải có tính đáp ứng (Responsive), tương thích trên cả máy tính và thiết bị di động.
- **Yêu cầu phần cứng**:
    - **Server**: Máy chủ web có cấu hình đủ để chạy ứng dụng Node.js (hoặc backend tương đương) và cơ sở dữ liệu.
    - **Client**: Máy tính cá nhân, điện thoại thông minh có trình duyệt web và kết nối internet.
- **Yêu cầu phần mềm**:
    - **Frontend**: React.js, Vite, Tailwind CSS.
    - **Backend**: (Dự kiến) Node.js, Express.js.
    - **Database**: (Dự kiến) PostgreSQL hoặc MongoDB.
    - **Môi trường phát triển**: Visual Studio Code, Git, Node.js.

### 1.4.4. Yêu cầu phi chức năng

- **Hiệu suất (Performance)**: Thời gian tải trang nhanh, tối ưu hóa hình ảnh và các tài nguyên tĩnh.
- **Bảo mật (Security)**: Mật khẩu người dùng phải được băm, bảo vệ chống lại các lỗ hổng web phổ biến (XSS, CSRF).
- **Khả năng bảo trì (Maintainability)**: Mã nguồn được tổ chức rõ ràng, tuân thủ kiến trúc component-based như đã nêu trong `development-principles.md`.
- **Tính dễ sử dụng (Usability)**: Giao diện trực quan, luồng thao tác của người dùng (cả khách hàng và admin) phải logic và đơn giản.
- **Khả năng mở rộng (Scalability)**: Kiến trúc hệ thống cho phép dễ dàng thêm các chức năng mới trong tương lai.
