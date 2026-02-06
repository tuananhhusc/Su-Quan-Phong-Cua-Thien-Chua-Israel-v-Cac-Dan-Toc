# Hướng Dẫn Deploy Lên GitHub Pages

Tài liệu này sẽ hướng dẫn bạn cách đưa trang web Next.js này lên GitHub Pages hoàn toàn miễn phí.

## Bước 1: Chuẩn Bị Cấu Hình Next.js

Để chạy trên GitHub Pages (là static hosting), chúng ta cần cấu hình Next.js để xuất ra file tĩnh (Static Export).

1.  **Tạo hoặc cập nhật file `next.config.mjs` (hoặc `next.config.js`)** tại thư mục gốc dự án:
    
    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      output: "export",  // Bắt buộc để xuất file tĩnh
      images: {
        unoptimized: true, // Bắt buộc nếu dùng thẻ Image của Next.js trên GitHub Pages
      },
      // Nếu bạn deploy vào thư mục con (ví dụ: username.github.io/repo-name),
      // hãy bỏ comment dòng dưới và thay 'repo-name' bằng tên repository của bạn:
      // basePath: '/ten-repository-cua-ban',
    };

    export default nextConfig;
    ```

## Bước 2: Đẩy Code Lên GitHub

1.  **Tạo một Repository mới trên GitHub.** (Lưu ý tên của repository).
2.  **Mở cửa sổ dòng lệnh (Terminal)** tại thư mục dự án và chạy các lệnh sau:

    ```bash
    # Khởi tạo git (nếu chưa có)
    git init

    # Thêm tất cả file
    git add .

    # Commit code
    git commit -m "First commit"

    # Đổi nhánh chính thành main
    git branch -M main

    # Thêm remote (thay URL bằng link repo của bạn vừa tạo)
    git remote add origin https://github.com/USERNAME/REPO-NAME.git

    # Đẩy code lên GitHub
    git push -u origin main
    ```

## Bước 3: Cấu Hình GitHub Pages

1.  Truy cập vào Repository của bạn trên GitHub.
2.  Vào mục **Settings** > **Pages** (ở menu bên trái).
3.  Tại phần **Build and deployment**:
    - **Source**: Chọn **GitHub Actions**.
4.  Tại phần **Static HTML**, nhấn nút **Configure**.
5.  GitHub sẽ tự động tạo một file workflow `nextjs.yml`. Bạn chỉ cần nhấn **Commit changes...** để xác nhận.

## Bước 4: Kiểm Tra Kết Quả

1.  Chuyển sang tab **Actions** trên GitHub để xem quá trình build đang chạy.
2.  Khi build thành công (màu xanh), quay lại **Settings** > **Pages**.
3.  Bạn sẽ thấy đường link trang web của bạn (ví dụ: `https://username.github.io/repo-name`).

---

**Lưu ý quan trọng:**
Nếu trang web bị mất CSS hoặc ảnh khi deploy:
1.  Kiểm tra lại `next.config.mjs`, đảm bảo đã cấu hình `basePath: '/ten-repo'` nếu repository không phải là `username.github.io`.
2.  Nếu thêm `basePath`, các đường dẫn ảnh trong code cũng cần thêm prefix tương ứng.
