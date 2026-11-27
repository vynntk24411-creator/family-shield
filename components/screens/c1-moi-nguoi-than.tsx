import Link from "next/link";
import { relatives } from "@/lib/data";

export default function C1MoiNguoiThanScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/b5-dieu-phoi" className="hbtn" aria-label="Quay lại">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="hdr__t">
            <p className="hdr__title">Mời người thân</p>
          </div>
          <span className="capsule" aria-label="Hỗ trợ và Trang chủ">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <i />
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 9.5V21h14V9.5" />
              <path d="M10 21v-6h4v6" />
            </svg>
          </span>
        </div>
      </div>
      <div className="body">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "170px" }}>
            <svg
              viewBox="0 0 240 160"
              width="240"
              height="160"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Phong bì thư mời với hai người"
              style={{ display: "block", maxWidth: "100%", height: "auto" }}
            >
              <circle cx="120" cy="90" r="62" fill="#eaf3fe" />
              <rect x="64" y="62" width="112" height="72" rx="10" fill="#ffffff" stroke="#9cc4f5" strokeWidth="3" />
              <path d="M66 66 L120 104 L174 66" fill="none" stroke="#9cc4f5" strokeWidth="3" strokeLinejoin="round" />
              <circle cx="92" cy="40" r="16" fill="#0062cc" />
              <circle cx="92" cy="36" r="6" fill="#ffffff" />
              <path d="M82 50 a10 9 0 0 1 20 0" fill="#ffffff" />
              <circle cx="148" cy="40" r="16" fill="#eb2f96" />
              <circle cx="148" cy="36" r="6" fill="#ffffff" />
              <path d="M138 50 a10 9 0 0 1 20 0" fill="#ffffff" />
              <path
                d="M120 46 C112 40 110 36 113 33 C116 31 119 32 120 35 C121 32 124 31 127 33 C130 36 128 40 120 46 Z"
                fill="#eb2f96"
              />
              <path
                transform="translate(196 112) scale(0.7)"
                d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                fill="#eb2f96"
              />
              <path
                transform="translate(46 100) scale(0.6)"
                d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                fill="#0062cc"
              />
            </svg>
          </div>
        </div>
        <h1 className="h-title">Ai sẽ cùng bác xử lý?</h1>
        <div className="fs-field">
          <label htmlFor="p1">Số điện thoại người thân</label>
          <input
            id="p1"
            className="fs-input"
            style={{ minHeight: "56px" }}
            defaultValue={`${relatives.lan.phone} (${relatives.lan.name} – con gái)`}
          />
        </div>
        <p className="h-sec" style={{ fontSize: "19px" }}>
          Chia sẻ những gì?
        </p>
        <div className="fs-scope fs-scope--on">
          <span className="fs-scope__radio" />
          <div>
            <p className="fs-scope__title">Tóm tắt</p>
            <ul className="fs-scope__list">
              <li>Chuyện gì đã xảy ra, bao nhiêu tiền</li>
              <li>Việc cần giúp</li>
              <li>Không gửi ảnh, không hiện đủ số tài khoản</li>
            </ul>
          </div>
        </div>
        <div className="fs-scope">
          <span className="fs-scope__radio" />
          <div>
            <p className="fs-scope__title">Đầy đủ</p>
            <ul className="fs-scope__list">
              <li>Thêm bản đồ sự cố và ảnh bằng chứng</li>
              <li>Cho phép tải hồ sơ PDF</li>
            </ul>
          </div>
        </div>
        <div className="card" style={{ background: "#eaf3fe", borderColor: "#eaf3fe", boxShadow: "none" }}>
          <p className="txt">
            <b>Người thân sẽ không thể:</b>
          </p>
          <p className="txt">Chuyển tiền · Xem tài khoản của bác · Sửa hay xóa bằng chứng</p>
        </div>
        <p className="cap">Link hết hạn sau 24 giờ. Bác có thể thu hồi bất kỳ lúc nào.</p>
      </div>
      <div className="actions">
        <Link href="/c2-quan-ly-chia-se" className="fs-btn fs-btn--family fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="m22 2-7 20-4-9-9-4z" />
            <path d="M22 2 11 13" />
          </svg>
          Gửi lời mời qua tin nhắn
        </Link>
        <Link href="/b5-dieu-phoi" className="fs-btn fs-btn--ghost fs-btn--block">
          Để sau
        </Link>
      </div>
    </div>
  );
}
