# Family Shield – API Contract (v1.0, P0)

> Hợp đồng giao tiếp giữa **frontend** (prototype `index.html`, sau chuyển Next.js) và **backend**.
> Bám theo SRS v2.1 (mục 7 – FR, 10 – Kiến trúc & API, 11 – Quy tắc nghiệp vụ, 12 – Dữ liệu) và 21 màn hình trong prototype.
> Mọi thay đổi hợp đồng → sửa file này trước, báo cả nhóm, rồi mới code.

---

## 0. Tóm tắt nhanh cho backend

| Mục | Chốt |
|---|---|
| Stack đề xuất (SRS D8) | **FastAPI (Python) + Supabase** (Postgres + Auth + Storage + RLS). LLM gọi từ server. PDF bằng WeasyPrint. |
| Base URL | `https://<backend-host>/api` (dev: `http://localhost:8000/api`) |
| Định dạng | JSON UTF-8, `snake_case`. Upload ảnh dùng `multipart/form-data`. |
| Xác thực | `Authorization: Bearer <supabase_access_token>`. Người thân (helper) dùng **helper token** nhận được khi chấp nhận lời mời. |
| ID | UUID v4, dạng chuỗi. |
| Thời gian | ISO 8601 có múi giờ, ví dụ `2026-11-26T09:30:00+07:00`. |
| Tiền | Số nguyên **VND** (`20000000`), không dùng số thực. Frontend tự định dạng “20.000.000đ”. |
| Dữ liệu nhạy cảm | API **không bao giờ** trả số tài khoản/SĐT đầy đủ ra frontend người thân; chỉ trả `value_masked` (`••• 4821`, `09xx·812`). |
| Ưu tiên làm | Xem mục 9 – “Thứ tự làm P0”. |

### Bốn điều không được vi phạm (từ quy tắc nghiệp vụ)
1. **Không có API chuyển tiền, chặn hay duyệt giao dịch** (BR05).
2. **Không nhận / lưu OTP, mật khẩu, PIN** – nếu có trong lời kể hoặc ảnh OCR thì che ngay (BR10).
3. **Số tổng đài, quy trình chính thức chỉ lấy từ bảng `safety_sources`**, không để LLM sinh (BR11).
4. **Không có mức “an toàn”** trong kết quả phân tích (BR02). Chỉ có các mức nghi ngờ ở mục 2.

---

## 1. Quy ước chung

### 1.1 Header
```
Authorization: Bearer <token>
Content-Type: application/json
Idempotency-Key: <uuid>        # bắt buộc với POST tạo dữ liệu & gọi AI (NFR-07)
Accept-Language: vi
```

### 1.2 Phản hồi lỗi (dùng chung)
```json
{
  "error": {
    "code": "INVITE_EXPIRED",
    "message": "Link đã hết hạn hoặc người chia sẻ đã ngừng chia sẻ.",
    "details": {}
  }
}
```

| HTTP | `code` | Khi nào | Màn hình frontend |
|---|---|---|---|
| 400 | `VALIDATION_ERROR` | Thiếu/sai trường | Báo lỗi tại ô nhập |
| 401 | `UNAUTHORIZED` | Thiếu/hết hạn token | Về đăng nhập |
| 403 | `FORBIDDEN` | Không phải owner / ngoài phạm vi chia sẻ | E4 |
| 403 | `INVITE_REVOKED` | Lời mời đã thu hồi | **E4** |
| 404 | `NOT_FOUND` | Không có hoặc đã xóa hồ sơ | – |
| 409 | `CONSENT_REQUIRED` | Gọi AI/chia sẻ mà chưa có consent | Hiện hộp đồng ý |
| 410 | `INVITE_EXPIRED` | Lời mời quá hạn | **E4** |
| 413 | `FILE_TOO_LARGE` | Ảnh > 5 MB | **E1** |
| 415 | `UNSUPPORTED_MEDIA` | Không phải PNG/JPG | **E1** |
| 422 | `EVIDENCE_UNREADABLE` | Ảnh mờ, OCR không đọc được | **E1** |
| 422 | `EVIDENCE_LIMIT` | Quá 6 ảnh/hồ sơ | **E1** |
| 429 | `RATE_LIMITED` | Vượt số lần gọi AI | **E3** |
| 503 | `AI_UNAVAILABLE` | LLM lỗi, timeout, hết hạn mức | **E3** (có nút “Xem kết quả mẫu”) |

### 1.3 Nhãn nguồn gốc dữ liệu (bắt buộc trên mọi nội dung AI)
Mọi đối tượng do AI tạo có trường `origin` và mọi nhận định có `source_ids`:

| `origin` | Ý nghĩa | Frontend hiển thị |
|---|---|---|
| `user` | Người dùng khai / đã xác nhận | Bình thường |
| `ai` | AI trích xuất/tổng hợp | Chip “AI tổng hợp · chưa xác minh” |
| `document` | Từ ảnh/biên lai | “Từ ảnh 1”, “Từ biên lai” |
| `sample` | Kết quả mẫu (fallback) | Nhãn “Kết quả mẫu” (BR18) |
| `kb` | Từ danh mục nguồn chính thức | “Theo khuyến cáo của cơ quan chức năng” |

Trường đã được người dùng sửa có `user_confirmed: true` → **AI không được ghi đè** (BR04, FR-10).

---

## 2. Bảng giá trị (enum)

```text
case.mode            : suspect | incident
case.status          : draft | analyzing | analyzed | coordinating | exported | closed
risk.level           : very_suspicious | suspicious | needs_check | insufficient_info
                       (KHÔNG có "safe")  → UI: "Rất đáng ngờ" | "Đáng ngờ" | "Cần kiểm tra" | "Chưa đủ thông tin"
channel              : call | zalo | sms | facebook | bank | ewallet | app | other
entity.kind          : person | phone | account | link | app
event.time_precision : exact | approx | unknown
evidence.type        : screenshot | receipt | call_log | text_note
evidence.status      : uploaded | processing | readable | unreadable | rejected
task.status          : todo | in_progress | done | skipped
task.assignee        : owner | helper:<helper_id> | unassigned
invite.scope         : summary | full
invite.status        : pending | accepted | expired | revoked
helper_response.choice : stop | calling_you | need_more_info
consent.purpose      : ai_analysis | share_with_helper | export_document
export.template      : police_report | bank_trace | insurance_claim
triage.actions[]     : bank_transfer | ewallet_transfer | shared_otp | installed_app | clicked_link
```

---

## 3. Mô hình dữ liệu (Postgres / Supabase)

> Bật **Row Level Security** cho mọi bảng có `case_id`: owner đọc/ghi hồ sơ của mình; helper chỉ đọc khi có `invitation` còn hạn, chưa thu hồi, đúng `scope` (BR07).

```sql
users            (user_id PK, display_name, phone_masked, created_at)
consents         (consent_id PK, user_id FK, case_id FK NULL, purpose, notice_version,
                  granted_at, withdrawn_at NULL)
cases            (case_id PK, owner_id FK, mode, status, title,
                  amount_vnd BIGINT NULL, transferred_at NULL,
                  triage_answers JSONB, risk_level NULL,
                  retention_until TIMESTAMPTZ,          -- = created_at + 7 ngày (BR16)
                  created_at, updated_at, deleted_at NULL)
evidence         (evidence_id PK, case_id FK, channel, type, status,
                  storage_key, sha256, mime, size_bytes, label,   -- "Zalo 9:12"
                  ocr_text_masked NULL, reject_reason NULL, uploaded_at)
narratives       (narrative_id PK, case_id FK, text_masked, input_mode  -- text|voice
                  , created_at)
entities         (entity_id PK, case_id FK, kind, display_name, value_masked,
                  channels TEXT[], source_ids UUID[], link_reason NULL,
                  merged_into NULL, user_confirmed BOOL, origin)
events           (event_id PK, case_id FK, channel, occurred_at NULL, time_precision,
                  title, description, entity_ids UUID[], amount_vnd NULL,
                  risk_flag BOOL, source_ids UUID[], origin, user_confirmed BOOL)
gaps             (gap_id PK, case_id FK, channel, missing_item, how_to, kb_ref,
                  kind  -- missing|conflict, options JSONB NULL, resolved_at NULL)
tasks            (task_id PK, case_id FK, order_no, key, label, description,
                  priority -- urgent|normal, assignee, status, call_script NULL,
                  source_id FK NULL, note NULL, done_at NULL, updated_by)
request_checks   (check_id PK, case_id FK NULL, input_masked, level,
                  pattern_name, signals JSONB, created_at)
invitations      (invite_id PK, case_id FK, helper_name, relation, phone_masked,
                  token_hash, scope, allow_pdf BOOL, expires_at, accepted_at NULL,
                  revoked_at NULL, last_seen_at NULL)
helper_responses (response_id PK, case_id FK, invite_id FK, choice, note NULL, at)
safety_sources   (source_id PK, title, url, publisher, kind -- hotline|guide|warning,
                  value NULL -- vd số tổng đài, verified_at, verified_by)
exports          (export_id PK, case_id FK, template, format -- pdf|json,
                  storage_key, completeness JSONB, created_at)
audit_logs       (log_id PK, case_id NULL, actor, action, at)  -- KHÔNG chứa PII (FR-22)
```

---

## 4. Endpoint theo luồng màn hình

### 4.0 Trang chủ – `Main`

#### `GET /api/me/home`
Dữ liệu trang chủ: người thân đã kết nối, hồ sơ đang mở.
```json
{
  "user": { "user_id": "u_hoa", "display_name": "Bác Hoa" },
  "helpers": [
    { "helper_id": "h_lan", "display_name": "Nguyễn Thị Lan", "relation": "Con gái",
      "initial": "L", "notify_when_needed": true }
  ],
  "open_cases": [
    { "case_id": "c_123", "mode": "incident", "status": "coordinating",
      "title": "Chuyển 20.000.000đ", "updated_at": "2026-11-26T09:52:00+07:00" }
  ]
}
```

#### `GET /api/safety/urgent-actions` *(công khai, không cần đăng nhập – BR01, FR-02)*
Danh sách “việc khẩn cấp” tĩnh cho **B1**, phải chạy được cả khi AI tắt (≤ 2 giây).
```json
{
  "origin": "kb",
  "items": [
    { "key": "call_bank", "order_no": 1, "priority": "urgent",
      "title": "Gọi ngay ngân hàng bác đã dùng để chuyển tiền",
      "description": "Đề nghị khóa tài khoản, khóa ngân hàng điện tử và tra soát giao dịch.",
      "source_id": "src_nhnn_01" },
    { "key": "stop_contact", "order_no": 2, "title": "Ngừng liên lạc với người kia", "...": "..." },
    { "key": "change_password", "order_no": 3, "title": "Đổi mật khẩu, kiểm tra thiết bị đăng nhập" },
    { "key": "keep_evidence", "order_no": 4, "title": "Không xóa tin nhắn, cuộc gọi" }
  ]
}
```

#### `GET /api/safety/sources?kind=hotline` *(công khai)*
Danh mục nguồn chính thức (FR-21). Dùng cho nút “Chọn ngân hàng để gọi” (B1) và “Gọi tổng đài chính thức” (C4).
```json
{ "items": [
  { "source_id": "src_bank_x", "title": "Tổng đài Ngân hàng X", "kind": "hotline",
    "value": "1900xxxx", "url": "https://...", "publisher": "Ngân hàng X",
    "verified_at": "2026-11-26", "verified_by": "team" }
]}
```
> Không có nguồn → frontend hiện “chưa xác minh”, **không** hiện số.

---

### 4.1 Đồng ý xử lý dữ liệu (dùng trước A2, B4, C1, B6)

#### `POST /api/consents`
```json
{ "purpose": "ai_analysis", "case_id": "c_123", "notice_version": "2026-11-26" }
```
→ `201 { "consent_id": "cs_1", "granted_at": "..." }`

#### `DELETE /api/consents/{consent_id}` → `204`
Rút lại đồng ý. Nếu `purpose = share_with_helper` → backend thu hồi luôn mọi lời mời của hồ sơ.

---

### 4.2 Luồng ③ “Tôi đang nghi ngờ” – A1 → A5

#### `POST /api/cases` – tạo hồ sơ (A1 bấm “Phân tích giúp tôi”, B1 bấm “Tiếp tục lập hồ sơ”)
```json
{ "mode": "suspect" }
```
→ `201`
```json
{ "case_id": "c_456", "mode": "suspect", "status": "draft",
  "retention_until": "2026-12-03T09:10:00+07:00" }
```

#### `POST /api/cases/{case_id}/narratives` – lưu lời kể (A1, B3 ô “Kể thêm”)
```json
{
  "text": "Có người gọi tự xưng công an, bảo tôi liên quan vụ án, phải chuyển 20 triệu để chứng minh tài sản.",
  "input_mode": "text",
  "quick_tags": ["impersonate_police"]
}
```
`quick_tags`: `impersonate_police | acquaintance_urgent | prize_gift` (3 chip ở A1).
→ `201 { "narrative_id": "n_1", "pii_masked": ["phone"] }`
> Backend che PII **trước khi lưu** (FR-05). Phản hồi chỉ báo loại đã che, không trả bản gốc.

#### `POST /api/cases/{case_id}/analyze` – AI phân tích (A2)
```json
{ "consent_id": "cs_1", "use_sample": false }
```
- Trả `202` kèm `job_id`, frontend poll mục dưới; hoặc trả `200` thẳng nếu xong < 10 giây.
- `use_sample: true` = nút **“Xem kết quả mẫu”** (A2, E3) → trả dữ liệu có `origin: "sample"`.

#### `GET /api/jobs/{job_id}` – tiến trình (3 dòng checklist ở A2)
```json
{
  "job_id": "j_1", "status": "running",
  "steps": [
    { "key": "mask_pii",       "label": "Đã che số điện thoại, số tài khoản", "done": true },
    { "key": "match_patterns", "label": "Đang so với các thủ đoạn đã được cảnh báo", "done": false },
    { "key": "helper_summary", "label": "Soạn thẻ tóm tắt cho người thân", "done": false }
  ],
  "result_url": null
}
```
`status`: `queued | running | succeeded | failed`. Khi `failed` → `error.code = AI_UNAVAILABLE` → **E3**.

#### `GET /api/cases/{case_id}/assessment` – kết quả (A3)
```json
{
  "level": "very_suspicious",
  "headline": "Bác chưa nên chuyển tiền",
  "pattern_name": "Giống mạo danh công an",
  "summary": {
    "requester": "Người xưng công an",
    "request": "Chuyển 20.000.000đ",
    "amount_vnd": 20000000,
    "channels": ["call", "zalo"]
  },
  "signals": [
    { "no": 1, "title": "Công an không đòi chuyển tiền qua điện thoại",
      "basis": "Từ lời kể: “bảo tôi phải chuyển 20 triệu”", "source_ids": ["n_1"] },
    { "no": 2, "title": "Dọa vụ án, ép làm ngay",
      "basis": "Từ lời kể: “liên quan vụ án”", "source_ids": ["n_1"] },
    { "no": 3, "title": "Chuyển vào tài khoản lạ",
      "basis": "Thủ đoạn phổ biến nhất năm 2025 theo NCA", "source_ids": ["src_nca_2025"] }
  ],
  "unknowns": ["Số người gọi là của ai", "Có giấy triệu tập không"],
  "origin": "ai",
  "disclaimer": "AI tổng hợp · không phải kết luận"
}
```

#### `GET /api/safety/self-check?pattern=impersonate_police` – A5 “Tự kiểm chứng”
```json
{ "items": [
  { "key": "call_local_police", "title": "Gọi công an phường/xã nơi bác ở",
    "hint": "Hỏi xem có ai đang làm việc với bác không" },
  { "key": "call_card_number", "title": "Gọi số in sau thẻ ngân hàng", "hint": "Không gọi số trong tin nhắn" },
  { "key": "family_password", "title": "Hỏi “mật khẩu gia đình”", "hint": "Nếu người gọi xưng là con cháu" },
  { "key": "wait_paper", "title": "Chờ giấy mời bằng văn bản", "hint": "Cơ quan chức năng gửi giấy, không làm việc qua mạng" }
],
  "note": "Đánh dấu xong cả 4 việc không có nghĩa là yêu cầu này an toàn." }
```
`PATCH /api/cases/{case_id}/self-check` `{ "done_keys": ["call_local_police"] }` → `200` (nút “Lưu và về trang chủ”).

#### A4 – Nhờ người thân xem giúp
Dùng `POST /api/cases/{id}/invites` (mục 4.5) với `scope: "summary"`, sau đó **poll 3–5 giây**:

`GET /api/cases/{case_id}/helper-status`
```json
{
  "invites": [
    { "invite_id": "i_1", "helper_name": "Chị Lan", "status": "accepted",
      "sent_at": "2026-11-26T09:14:00+07:00", "seen_at": "2026-11-26T09:15:00+07:00" }
  ],
  "latest_response": {
    "choice": "stop", "label": "Mẹ dừng lại",
    "note": "Con gọi mẹ ngay. Mẹ đừng chuyển, đừng nghe máy số lạ nữa nhé.",
    "at": "2026-11-26T09:15:30+07:00"
  }
}
```
FR-16: owner thấy phản hồi ≤ 5 giây. Nút “Tôi đã lỡ chuyển tiền” → `PATCH /api/cases/{id}` `{ "mode": "incident" }` rồi sang **B1**.

---

### 4.3 Luồng ①② “Tôi đã chuyển tiền” – B1 → B6

#### B1 – dùng `GET /api/safety/urgent-actions` (không cần hồ sơ).
`case.transferred_at` dùng để hiện “Đã trôi 12 phút” – frontend tự tính.

#### `POST /api/cases/{case_id}/triage` – câu hỏi nhanh (B2)
```json
{
  "actions": ["bank_transfer", "shared_otp"],
  "amount_vnd": 20000000,
  "transferred_at": "2026-11-26T09:30:00+07:00"
}
```
→ `200` trả **danh sách việc đã sắp xếp lại** bằng rule engine (SRS 10.4), không dùng LLM:
```json
{ "tasks": [ { "task_id": "t_1", "order_no": 1, "key": "call_bank", "priority": "urgent", "...": "..." } ] }
```

#### `POST /api/cases/{case_id}/evidence` – tải ảnh (B3) · `multipart/form-data`
| Trường | Kiểu | Ghi chú |
|---|---|---|
| `file` | PNG/JPG | ≤ 5 MB; ≤ 6 ảnh/hồ sơ (FR-04) |
| `channel` | enum | `zalo`, `bank`, `call`… (người dùng chọn hoặc để AI đoán) |
| `type` | enum | `screenshot | receipt | call_log` |

→ `201`
```json
{ "evidence_id": "e_1", "label": "Zalo 9:12", "status": "processing",
  "thumbnail_url": "https://...signed...?exp=600" }
```
Lỗi → `413 / 415 / 422` (**E1**). Ảnh hợp lệ trước đó **vẫn giữ nguyên** (“Bác không mất gì cả”).
`GET /api/cases/{id}/evidence` → danh sách + `status` từng ảnh (để E1 biết ảnh nào mờ).
`DELETE /api/cases/{id}/evidence/{evidence_id}` → `204` (chỉ owner – BR08).

#### `POST /api/cases/{case_id}/analyze` – dùng lại như 4.2, nhưng `mode = incident` thì pipeline đủ bước: che PII → trích xuất → liên kết thực thể → phát hiện thiếu sót.

#### `GET /api/cases/{case_id}/map` – Bản đồ sự cố (B4)
```json
{
  "summary": { "channel_count": 3, "amount_vnd": 20000000, "risk_level": "very_suspicious" },
  "lanes": [
    { "channel": "call", "label": "Cuộc gọi" },
    { "channel": "zalo", "label": "Zalo" },
    { "channel": "bank", "label": "Ngân hàng" }
  ],
  "events": [
    { "event_id": "ev_1", "channel": "call", "occurred_at": "2026-11-26T08:55:00+07:00",
      "time_precision": "exact", "title": "Xưng công an", "entity_ids": ["en_phone"],
      "source_ids": ["e_3"], "origin": "document", "risk_flag": false },
    { "event_id": "ev_2", "channel": "zalo", "occurred_at": "2026-11-26T09:12:00+07:00",
      "title": "Gửi “lệnh tạm giữ”", "entity_ids": ["en_phone"], "source_ids": ["e_1"],
      "origin": "document", "source_label": "Từ ảnh 1" },
    { "event_id": "ev_3", "channel": "bank", "occurred_at": "2026-11-26T09:30:00+07:00",
      "title": "Chuyển 20 triệu", "amount_vnd": 20000000, "entity_ids": ["en_acc"],
      "source_ids": ["e_2"], "source_label": "Từ biên lai" },
    { "event_id": "ev_4", "channel": "zalo", "occurred_at": "2026-11-26T10:05:00+07:00",
      "title": "Đòi “phí hồ sơ”", "risk_flag": true, "source_ids": ["e_1"] }
  ],
  "entities": [
    { "entity_id": "en_phone", "kind": "phone", "value_masked": "09xx·812",
      "channels": ["call", "zalo"], "link_reason": "Cùng 1 số", "origin": "ai" },
    { "entity_id": "en_acc", "kind": "account", "value_masked": "••• 4821", "channels": ["bank"] }
  ],
  "links": [
    { "from": "ev_1", "to": "ev_2", "type": "same_entity", "label": "Cùng 1 số", "entity_id": "en_phone" },
    { "from": "ev_2", "to": "ev_3", "type": "flow" }
  ],
  "missing": [
    { "gap_id": "g_1", "channel": "call", "label": "Lịch sử cuộc gọi" },
    { "gap_id": "g_2", "channel": "zalo", "label": "Trang cá nhân Zalo" }
  ],
  "disclaimer": "AI ghép từ 3 ảnh và lời kể · chưa xác minh độc lập"
}
```
Quy tắc: **event không có `source_ids` thì không được trả về như sự thật** (FR-08, Validator). Tab “Dòng thời gian” = cùng dữ liệu, frontend sắp theo `occurred_at`; tab “Bằng chứng” = `GET /evidence`.

#### `PATCH /api/cases/{case_id}/entities/{entity_id}` – sửa / tách / gộp (FR-07, FR-10)
```json
{ "action": "split" }                                 // tách khỏi nhóm
{ "action": "merge", "target_entity_id": "en_x", "reason": "Cùng tên Cán bộ Hùng" }
{ "action": "edit", "display_name": "Cán bộ Hùng" }   // → user_confirmed = true
```
`PATCH /api/cases/{case_id}/events/{event_id}` tương tự (sửa giờ, tiêu đề).

#### `GET /api/cases/{case_id}/gaps` – bằng chứng còn thiếu (E2)
```json
{ "status": "insufficient_info",
  "items": [
    { "gap_id": "g_2", "kind": "missing", "title": "Ảnh trang cá nhân Zalo “Cán bộ Hùng”",
      "how_to": "Mở Zalo → bấm vào tên người đó → chụp màn hình", "kb_ref": "kb_evidence_zalo" },
    { "gap_id": "g_1", "kind": "missing", "title": "Lịch sử cuộc gọi có giờ",
      "how_to": "Mở Điện thoại → Gần đây → chụp dòng số 09xx ••• 812" },
    { "gap_id": "g_3", "kind": "conflict", "title": "Giờ chuyển tiền chưa khớp",
      "detail": "Lời kể nói “9 rưỡi”, biên lai ghi 9:30.",
      "options": [ { "value": "2026-11-26T09:30:00+07:00", "label": "9:30 (biên lai)" },
                   { "value": null, "label": "Chưa rõ" } ] }
  ],
  "note": "Thiếu vẫn xuất được hồ sơ; các trường thiếu sẽ ghi “chưa rõ”." }
```
`POST /api/cases/{id}/gaps/{gap_id}/resolve` `{ "value": "...", "evidence_id": "e_4" }` → `200`.

#### Bảng điều phối (B5, C4)
`GET /api/cases/{case_id}/tasks?assignee=all|me|helper:h_lan`
```json
{
  "progress": { "done": 2, "total": 6 },
  "banner": "Đừng chuyển thêm tiền, dù ai hứa hoàn lại",
  "members": [ { "id": "owner", "initial": "H", "name": "Bác Hoa" },
               { "id": "helper:h_lan", "initial": "L", "name": "Chị Lan" } ],
  "tasks": [
    { "task_id": "t_1", "order_no": 1, "priority": "urgent",
      "label": "Gọi ngân hàng: khóa và tra soát", "assignee": "helper:h_lan",
      "status": "in_progress", "source_id": "src_bank_x",
      "call_script": "Mẹ tôi bị lừa chuyển 20.000.000đ lúc 9:30 tới tài khoản ••• 4821. Tôi đề nghị khóa ngân hàng điện tử và tra soát giao dịch." },
    { "task_id": "t_2", "order_no": 2, "label": "Ngừng trả lời người lạ",
      "assignee": "owner", "status": "done", "done_at": "2026-11-26T09:41:00+07:00" }
  ]
}
```
- `POST /api/cases/{id}/tasks` – owner thêm việc.
- `PATCH /api/cases/{id}/tasks/{task_id}` `{ "assignee": "helper:h_lan" }` | `{ "status": "done", "note": "Đã gọi 9:58, mã tra soát TS-2611…" }`
- Helper **chỉ** được PATCH `status`, `note` của việc giao cho mình (BR08).
- `call_script` ghép từ template + dữ liệu hồ sơ, **số điện thoại lấy từ `safety_sources`** (FR-11).

#### Xuất hồ sơ (B6)
`GET /api/cases/{case_id}/export/preview?template=police_report`
```json
{
  "template": "police_report",
  "labels": ["Thông tin do người dùng cung cấp", "AI hỗ trợ tổng hợp", "Chưa xác minh độc lập"],
  "fields": {
    "amount_vnd": 20000000,
    "receiver_account_masked": "••• 4821",
    "narrative": "Ngày 26/11, bà Nguyễn Thị Hoa nhận cuộc gọi từ số 09xx ••• 812 xưng là cán bộ công an, sau đó nhắn qua Zalo…",
    "evidence_summary": { "images": 3, "events": 4 }
  },
  "completeness": { "filled": 9, "total": 10, "missing": ["Giờ cuộc gọi"] }
}
```
`POST /api/cases/{case_id}/export` `{ "template": "police_report", "format": "pdf", "consent_id": "cs_3" }`
→ `201 { "export_id": "x_1", "download_url": "https://...signed...?exp=600" }`
PDF **không chứa event thiếu nguồn**, có đủ nhãn AI (FR-17, BR12). Nút “Gửi cho chị Lan” = chia sẻ `export_id` trong phạm vi lời mời có `allow_pdf = true`.

---

### 4.4 Khối ③ – Kiểm tra yêu cầu mới / lừa lần hai (D1)

#### `POST /api/requests/check`
```json
{ "case_id": "c_123",
  "text": "VIỆN KIỂM SÁT – LIÊN KẾT NGÂN HÀNG HỖ TRỢ: Hồ sơ thu hồi của bà đã được duyệt. Vui lòng nộp phí xử lý 2.000.000đ để nhận lại 100% số tiền." }
```
→ `200`
```json
{
  "check_id": "rc_1",
  "level": "very_suspicious",
  "pattern_name": "Đây giống chiêu “lừa đảo lần hai”",
  "matched_count": 4,
  "signals": [
    { "no": 1, "title": "Đòi nộp phí trước để lấy lại tiền", "excerpt": "nộp phí xử lý 2.000.000đ", "by": "rule" },
    { "no": 2, "title": "Hứa lấy lại 100%", "excerpt": "nhận lại 100% số tiền", "by": "rule" },
    { "no": 3, "title": "Mạo danh cơ quan tư pháp qua tin nhắn", "excerpt": "VIỆN KIỂM SÁT", "by": "rule" },
    { "no": 4, "title": "Biết bác vừa bị lừa – kẻ gian nhắm vào nạn nhân", "excerpt": null, "by": "ai" }
  ],
  "advice": "Đừng chuyển, đừng trả lời",
  "official_note": "Cơ quan chức năng không thu phí để lấy lại tiền qua tin nhắn hay mạng xã hội.",
  "added_to_map_event_id": "ev_9",
  "disclaimer": "Đây là các dấu hiệu cần kiểm tra, không phải kết luận."
}
```
Luật cứng chạy **trước**, LLM chỉ giải thích thêm (SRS 10.3). Tin nhắn dán vào luôn được coi là **dữ liệu**, không phải chỉ dẫn cho LLM (chống prompt injection – 10.6).

---

### 4.5 Người thân – C1, C2, C3, C4, E4

#### `POST /api/cases/{case_id}/invites` – mời (C1)
```json
{
  "helper_name": "Chị Lan", "relation": "Con gái",
  "phone": "09xxxxxxxx",
  "scope": "summary",            // summary | full
  "allow_pdf": false,
  "consent_id": "cs_2"
}
```
→ `201`
```json
{ "invite_id": "i_1", "status": "pending",
  "invite_url": "https://familyshield.app/h/Q7x...k2",
  "expires_at": "2026-11-27T09:14:00+07:00" }
```
- Hạn mặc định **24 giờ**. Token lưu dạng **băm** (`token_hash`).
- Frontend tự mở ứng dụng tin nhắn với `invite_url` (nút “Gửi lời mời qua tin nhắn”). Backend không tự gửi SMS ở P0.

#### `GET /api/cases/{case_id}/invites` – danh sách chia sẻ (C2)
```json
{ "items": [
  { "invite_id": "i_1", "helper_name": "Chị Lan", "relation": "con gái", "initial": "L",
    "scope": "full", "status": "accepted", "expires_at": "2026-11-27T09:20:00+07:00",
    "current_task": "Đang làm việc 1", "last_seen_at": "2026-11-26T09:52:00+07:00" },
  { "invite_id": "i_2", "helper_name": "Anh Tuấn", "scope": "summary", "status": "pending",
    "sent_at": "2026-11-26T09:50:00+07:00" },
  { "invite_id": "i_3", "helper_name": "Chị Mai", "status": "revoked",
    "revoked_at": "2026-11-26T08:30:00+07:00" }
]}
```
- `PATCH /api/cases/{id}/invites/{invite_id}` `{ "scope": "summary" }` – “Đổi thành Tóm tắt”
- `POST /api/cases/{id}/invites/{invite_id}/resend` – “Gửi lại” (tạo token mới, hủy token cũ)
- `DELETE /api/cases/{id}/invites/{invite_id}` – “Thu hồi” / “Hủy lời mời”, **hiệu lực ngay**
- `DELETE /api/cases/{id}/invites` – “Ngừng chia sẻ với tất cả”

#### `POST /api/invites/{token}/verify` – người thân mở link
```json
{ "otp_code": "482913" }      // mã xác thực một lần gửi tới SĐT người thân
```
→ `200 { "helper_token": "eyJ...", "case_id": "c_123", "scope": "summary", "expires_at": "..." }`
Hết hạn → `410 INVITE_EXPIRED`; đã thu hồi → `403 INVITE_REVOKED` → frontend hiện **E4**.
> Đây là mã xác thực đăng nhập của **người thân**, không liên quan OTP ngân hàng của người bị lừa.

#### `GET /api/helper/cases/{case_id}` – màn của người thân (C3 / C4)
Header `Authorization: Bearer <helper_token>`. Nội dung **lọc theo scope** (FR-13: thẻ tóm tắt ≤ 80 từ).
```json
{
  "owner": { "display_name": "Bà Hoa", "call_label": "Mẹ" },
  "mode": "suspect",
  "scope": "summary",
  "sent_at": "2026-11-26T09:14:00+07:00",
  "card": {
    "headline": "Bà Hoa đang được yêu cầu chuyển tiền",
    "status_line": "Mẹ chưa chuyển. Con hãy trả lời ngay.",
    "level": "very_suspicious",
    "requester": "Người tự xưng công an",
    "request": "Chuyển 20.000.000đ",
    "channels": ["call", "zalo"],
    "signals_short": "làm việc qua điện thoại, dọa vụ án, đòi chuyển tiền",
    "origin": "ai",
    "disclaimer": "AI tổng hợp từ lời kể của mẹ · chưa xác minh"
  },
  "my_tasks": [],
  "permissions": { "can_view_evidence": false, "can_download_pdf": false }
}
```
- `scope = full` → thêm `map` (như 4.3, không có ảnh gốc nếu chưa cho), `my_tasks`, `transferred_at`, `amount_vnd`.
- **Không bao giờ** có: số tài khoản đầy đủ, ảnh gốc khi `summary`, nút giao dịch, quyền xóa.

#### `POST /api/helper/cases/{case_id}/responses` – trả lời 1 chạm (C3)
```json
{ "choice": "stop", "note": "Mẹ đừng nghe máy số lạ nữa nhé." }
```
→ `201`. Owner nhận qua `GET /helper-status` (A4).

#### `PATCH /api/helper/cases/{case_id}/tasks/{task_id}` – C4 “Đánh dấu đã xong”
```json
{ "status": "done", "note": "Đã gọi 9:58, mã tra soát TS-2611…" }
```

---

### 4.6 Hồ sơ – đọc, sửa, xóa

| Method | Endpoint | Mục đích |
|---|---|---|
| `GET` | `/api/cases/{id}` | Thông tin hồ sơ (mode, status, amount, transferred_at, retention_until) |
| `PATCH` | `/api/cases/{id}` | Đổi `mode` (suspect → incident), cập nhật `amount_vnd`, `transferred_at` |
| `DELETE` | `/api/cases/{id}` | Xóa hồ sơ: xóa media, thu hồi mọi token; sau đó `GET` trả `404` (FR-20) |

Job nền mỗi giờ: xóa hồ sơ có `retention_until < now()` (BR16).

---

## 5. Bảng nối màn hình ↔ API

| Màn | Tên | API gọi |
|---|---|---|
| Main | Trang chủ | `GET /me/home` |
| A1 | Kể tình huống | `POST /cases` (suspect) → `POST /cases/{id}/narratives` |
| A2 | AI đang phân tích | `POST /consents` → `POST /cases/{id}/analyze` → poll `GET /jobs/{job_id}` |
| A3 | Kết quả phân tích | `GET /cases/{id}/assessment` |
| A4 | Chờ người thân | `POST /cases/{id}/invites` (summary) → poll `GET /cases/{id}/helper-status`; “Ngừng chia sẻ” → `DELETE /invites` |
| A5 | Tự kiểm chứng | `GET /safety/self-check` · `PATCH /cases/{id}/self-check` |
| B1 | Việc cần làm ngay | `GET /safety/urgent-actions` · `GET /safety/sources?kind=hotline` (không cần đăng nhập) |
| B2 | Hỏi nhanh | `POST /cases` (incident) → `POST /cases/{id}/triage` |
| B3 | Thu bằng chứng | `POST /cases/{id}/evidence` (×n) · `POST /cases/{id}/narratives` |
| B4 | Bản đồ sự cố | `POST /cases/{id}/analyze` → `GET /cases/{id}/map` · `PATCH /entities/{eid}` |
| B5 | Bảng điều phối | `GET /cases/{id}/tasks` · `PATCH /tasks/{tid}` |
| B6 | Xuất hồ sơ | `GET /export/preview` · `POST /cases/{id}/export` |
| C1 | Mời người thân | `POST /consents` → `POST /cases/{id}/invites` |
| C2 | Quản lý chia sẻ | `GET /cases/{id}/invites` · `PATCH` · `POST …/resend` · `DELETE` |
| C3 | Người thân: xem giúp | `POST /invites/{token}/verify` → `GET /helper/cases/{id}` → `POST /helper/cases/{id}/responses` |
| C4 | Người thân: điều phối | `GET /helper/cases/{id}` · `PATCH /helper/cases/{id}/tasks/{tid}` · `GET /safety/sources` |
| D1 | Kiểm tra tin “lấy lại tiền” | `POST /requests/check` |
| E1 | Lỗi tải ảnh | Lỗi `413 / 415 / 422` từ `POST /evidence` |
| E2 | Thiếu chứng cứ | `GET /cases/{id}/gaps` · `POST /gaps/{gid}/resolve` |
| E3 | AI không phản hồi | `503 AI_UNAVAILABLE` / `429` → nút “Thử lại” hoặc `analyze` với `use_sample: true` |
| E4 | Link hết hạn | `410 INVITE_EXPIRED` / `403 INVITE_REVOKED` |

---

## 6. Vòng đời trạng thái

**Case**
```
draft ──analyze──▶ analyzing ──ok──▶ analyzed ──tạo việc/mời──▶ coordinating ──export──▶ exported
  │                   └──fail──▶ draft (giữ nguyên dữ liệu, E3)                         │
  └──────────────── DELETE hoặc quá retention_until ─────────────▶ (xóa cứng) ◀────────┘
mode: suspect ──"Tôi đã lỡ chuyển tiền"──▶ incident   (một chiều)
```

**Invitation**
```
pending ──verify OK──▶ accepted
   │                      │
   ├──quá expires_at──▶ expired (410)
   └──owner thu hồi───▶ revoked (403)  ◀── accepted cũng có thể bị thu hồi
```

**Task**: `todo → in_progress → done` (hoặc `skipped`). Chỉ owner đổi `assignee`.

---

## 7. Pipeline AI phía server (`/analyze`)

```
1. PII Masker (code)     → che STK, SĐT, CCCD, email, OTP; giữ bảng token ở server
2. Extractor (LLM)       → JSON theo schema: channels, actors, requests, transactions, events, evidence_refs, missing_fields
3. Validator (code)      → loại trường lạ, loại nhận định không có evidence_ref
4. Entity Linker (LLM+code) → chỉ gộp khi trùng ≥ 1 khóa (SĐT/STK/tên) + có link_reason
5. Gap Detector (LLM)    → chỉ chọn mục từ checklist KB
6. Helper Summarizer     → thẻ ≤ 80 từ, chỉ dùng trường trong scope
7. Rule engine (code)    → sắp xếp tasks theo SRS 10.4; số liên hệ lấy từ safety_sources
```
- Giới hạn: tối đa **5 lần gọi analyze / hồ sơ / giờ** và **20 lần check / người dùng / ngày** (gợi ý, chỉnh theo hạn mức).
- Timeout LLM 20 giây → trả `503 AI_UNAVAILABLE`.
- Không gửi dữ liệu chưa che cho LLM; không log prompt/đầu ra có PII (FR-22).

---

## 8. Dữ liệu demo (seed)

| Tài khoản | Vai trò | Ghi chú |
|---|---|---|
| `hoa@demo.familyshield` | owner | Bác Hoa – người bị lừa |
| `lan@demo.familyshield` | helper | Chị Lan – con gái |

Seed sẵn: 1 hồ sơ `incident` (20.000.000đ, 3 ảnh, 4 mốc, 6 việc như B5), 1 hồ sơ `suspect` (như A1–A3), 10–20 dòng `safety_sources`, bộ **kết quả mẫu** cho `use_sample: true`. Toàn bộ là **dữ liệu giả lập** (BR14).

---

## 9. Thứ tự làm P0 (gợi ý)

1. **Nền**: Supabase project, bảng ở mục 3, RLS, auth 2 tài khoản demo, `safety_sources` seed.
2. **Không cần AI trước**: `GET /safety/urgent-actions`, `/safety/sources`, `POST /cases`, `/triage`, `/tasks` (rule engine) → B1, B2, B5 chạy được.
3. **Bằng chứng**: `POST /evidence` + kiểm tra MIME/size/số lượng → B3, E1.
4. **Người thân**: invites + verify + helper endpoints + responses + polling → C1–C4, A4, E4.
5. **AI**: PII masker (có unit test) → `/analyze` + `/jobs` + `/assessment` + `/map` + `/gaps` + `/requests/check` → A2, A3, B4, E2, D1.
6. **Fallback**: `use_sample` + mã lỗi 503 → E3.
7. **Xuất hồ sơ** PDF (WeasyPrint, font tiếng Việt) → B6.
8. **Dọn dữ liệu**: `DELETE /cases`, job xóa sau 7 ngày, `DELETE /consents`.

### Checklist nghiệm thu nhanh
- [ ] Người lạ (không token / token khác) gọi `GET /cases/{id}` → 403/404.
- [ ] Payload gửi LLM không chứa số tài khoản/SĐT gốc.
- [ ] Thu hồi lời mời → helper gọi ngay lập tức nhận 403.
- [ ] Không có response nào chứa `"level": "safe"`.
- [ ] `/safety/urgent-actions` vẫn trả khi tắt LLM.
- [ ] PDF có nhãn AI và “chưa xác minh độc lập”.
- [ ] Sau `DELETE /cases/{id}` → `GET` trả 404, file ảnh trong storage đã bị xóa.

---

*Phiên bản 1.0 · 27/11/2026 · Nguồn: SRS v2.1 + prototype 21 màn. Đổi hợp đồng → tăng phiên bản và ghi vào mục “Lịch sử” bên dưới.*

## Lịch sử thay đổi
| Phiên bản | Ngày | Thay đổi |
|---|---|---|
| 1.0 | 27/11/2026 | Bản đầu tiên |
