# TypeMate Web Landing Page & Legal Docs

Thư mục này chứa toàn bộ trang web giới thiệu TypeMate, được thiết kế theo phong cách Apple (SF Pro typography, Dark/Light mode tự động, chuẩn Responsive):

1. **`index.html`**: Trang chủ giới thiệu tính năng, mô phỏng tương tác thanh tìm kiếm `⌥⌘V`.
2. **`privacy.html`**: Trang **Chính sách bảo mật (Privacy Policy)** song ngữ (Việt - Anh) chuẩn yêu cầu của Apple App Store Review.
3. **`support.html`**: Trang **Trung tâm hỗ trợ (Support & FAQ)** hướng dẫn sử dụng, giải đáp phím tắt và kênh liên hệ.

---

## Cách đưa lên mạng (Miễn phí 100%)

### Cách 1: Dùng GitHub Pages (Khuyên dùng vì bạn đã có repo GitHub)
1. Đẩy folder `web/` lên repo:
   ```bash
   git add web/
   git commit -m "feat: add web landing page, privacy policy and support"
   git push origin main
   ```
2. Vào GitHub repo: `https://github.com/CuongTran69/Keymate/settings/pages`
3. Tại mục **Build and deployment** -> Chọn **Branch: main** và thư mục **`/web`** (hoặc chuyển nội dung thư mục web ra nhánh `gh-pages`).
4. GitHub sẽ cấp cho bạn một tên miền miễn phí dạng:
   - Trang chủ: `https://cuongtran69.github.io/Keymate/`
   - Privacy Policy URL: `https://cuongtran69.github.io/Keymate/privacy.html`
   - Support URL: `https://cuongtran69.github.io/Keymate/support.html`

### Cách 2: Kéo thả lên Vercel / Cloudflare Pages / Netlify
- Chỉ cần kéo thả thư mục `web/` vào [vercel.com](https://vercel.com) hoặc [netlify.com](https://netlify.com) là có ngay URL `.vercel.app` tốc độ cao trong 10 giây.

