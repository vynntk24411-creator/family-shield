# Family Shield 🛡️

**AI Scam Response & Family Coordination** – trợ lý giúp người dùng ví điện tử và gia đình **cùng xử lý khi nghi bị lừa hoặc đã lỡ chuyển tiền**.

> Bài dự thi **MoMo Tech Contest 2026** – chủ đề *Imagine the Future Workspace* (Trợ lý AI · An ninh mạng · Chống lừa đảo).
> Đây là bản thiết kế ý tưởng dự thi, **không phải sản phẩm hay giao diện chính thức của MoMo**.

🔗 **Xem prototype:** https://family-shield-fawn.vercel.app

---

## Ý tưởng trong 30 giây

Khi bị lừa, nạn nhân (thường là người lớn tuổi) hoảng loạn, không biết làm gì trước, và người thân thì biết quá muộn. Family Shield có 3 lối vào:

| Lối vào | Người dùng làm gì | Family Shield giúp gì |
|---|---|---|
| **Tôi đang nghi ngờ** | Kể lại cuộc gọi/tin nhắn đáng ngờ | AI chỉ ra dấu hiệu lừa đảo, gửi thẻ tóm tắt để người thân xem giúp trước khi chuyển tiền |
| **Tôi đã chuyển tiền** | Trả lời 3 câu hỏi, gửi ảnh chụp màn hình | Hiện ngay việc khẩn cấp, ghép **bản đồ sự cố** đa kênh, chia việc cho cả nhà, xuất hồ sơ trình báo |
| **Có người hứa lấy lại tiền** | Dán tin nhắn mới | Cảnh báo **lừa đảo lần hai** |

Nguyên tắc: AI hỗ trợ, **con người quyết định**. Không có nút chuyển tiền, không bao giờ nói “an toàn”, mọi nội dung AI đều có nhãn và nguồn.

---

## Cấu trúc thư mục

```
family-shield/
├── index.html              ← Prototype giao diện 21 màn (bấm được) – Vercel tự đăng
├── docs/
│   ├── API_CONTRACT.md     ← Hợp đồng API giữa frontend và backend (ĐỌC TRƯỚC KHI CODE)
│   └── Family_Shield_BA_SRS_v2.docx  ← Tài liệu nghiệp vụ & yêu cầu (BA/SRS v2.1)
├── api/                    ← Backend (đang làm)
└── README.md
```

## Ai làm gì

| Phần | Người phụ trách | Thư mục |
|---|---|---|
| BA / thiết kế UI | Vy | `docs/`, `index.html` |
| Backend + AI | _(điền tên)_ | `api/` |
| Frontend (nối API) | _(điền tên)_ | sau chuyển sang Next.js |

---

## Danh sách màn hình

| Mã | Màn | Luồng |
|---|---|---|
| Main | Trang chủ Chống lừa đảo | – |
| A1–A5 | Kể tình huống → AI phân tích → Kết quả → Chờ người thân → Tự kiểm chứng | Tôi đang nghi ngờ |
| B1–B6 | Việc khẩn cấp → Hỏi nhanh → Bằng chứng → Bản đồ sự cố → Điều phối → Xuất hồ sơ | Tôi đã chuyển tiền |
| C1–C4 | Mời người thân → Quản lý chia sẻ → Người thân xem giúp → Người thân điều phối | Gia đình |
| D1 | Kiểm tra tin “lấy lại tiền” | Lừa đảo lần hai |
| E1–E4 | Lỗi tải ảnh · Thiếu chứng cứ · AI không phản hồi · Link hết hạn | Trạng thái lỗi |

Màn nào gọi API nào: xem **mục 5** trong [`docs/API_CONTRACT.md`](docs/API_CONTRACT.md).

---

## Công nghệ (đề xuất theo SRS)

| Thành phần | Công nghệ |
|---|---|
| Frontend | Next.js + Tailwind, đăng trên Vercel (hiện tại: prototype HTML tĩnh) |
| Backend | Python FastAPI |
| Auth, DB, Storage | Supabase (Postgres + Auth + Storage, Row Level Security) |
| AI | Mô hình đa phương thức qua API, gọi từ server, chỉ nhận dữ liệu đã che |
| PDF | WeasyPrint (font tiếng Việt) |
| Đồng bộ người thân | Polling 3–5 giây (hoặc Supabase Realtime) |

---

## Bắt đầu

### Xem giao diện
Mở `index.html` bằng trình duyệt, hoặc vào link Vercel ở trên. Không cần cài gì.

### Backend (gợi ý cho FastAPI)
```bash
cd api
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install fastapi uvicorn pydantic supabase python-multipart
cp .env.example .env        # điền khóa vào .env – KHÔNG commit file này
uvicorn main:app --reload --port 8000
```

`.env.example` (chỉ ghi tên biến, không ghi giá trị thật):
```
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
LLM_API_KEY=
ALLOWED_ORIGINS=https://family-shield-fawn.vercel.app,http://localhost:3000
```

---

## Quy ước làm việc

- **Không commit khóa bí mật.** Thêm `.env` vào `.gitignore`. Khóa trên môi trường thật → Vercel **Settings → Environment Variables** (hoặc Render/Railway nếu backend đặt ở đó).
- **Đổi API → sửa `docs/API_CONTRACT.md` trước**, tăng phiên bản, báo nhóm rồi mới code.
- Mỗi tính năng làm trên **nhánh riêng** (`feat/invites`, `feat/analyze`…) rồi mở Pull Request vào `main`. `main` = bản đang chạy trên Vercel.
- Commit message ngắn, rõ: `feat: thêm API mời người thân`, `fix: che số tài khoản trong lời kể`.
- **Chỉ dùng dữ liệu giả lập.** Không đưa số điện thoại, số tài khoản, ảnh thật của ai vào repo.

## Quy tắc không được vi phạm

1. Không có chức năng chuyển tiền, chặn hay duyệt giao dịch.
2. Không yêu cầu, nhận hay lưu OTP, mật khẩu, PIN – tự che nếu người dùng lỡ nhập.
3. Số tổng đài và quy trình chính thức chỉ lấy từ danh mục nguồn đã kiểm tra, không để AI tự sinh.
4. Không có mức “an toàn”; nội dung AI luôn có nhãn “AI tổng hợp · chưa xác minh”.
5. Người thân chỉ xem phần được chia sẻ, link hết hạn sau 24 giờ, thu hồi có hiệu lực ngay.
6. Dữ liệu demo tự xóa sau 7 ngày.

Chi tiết và căn cứ pháp lý: chương 11 và chương Pháp lý trong file SRS.

---

## Tài khoản demo

| Email | Vai trò |
|---|---|
| `hoa@demo.familyshield` | Chủ hồ sơ (Bác Hoa) |
| `lan@demo.familyshield` | Người thân (Chị Lan) |

_Mật khẩu demo gửi riêng trong nhóm, không ghi vào repo._

---

## Mốc thời gian

| Mốc | Ngày |
|---|---|
| Đóng băng phạm vi P0 | 27/11/2026 |
| Nộp bài | 03/12/2026 |
| Chung kết | 11/12/2026 |
