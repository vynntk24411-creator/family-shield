import Link from "next/link";
import { incident } from "@/lib/data";

export default function B2HoiNhanhScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/b1-khan-cap" className="hbtn" aria-label="Quay lại">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="hdr__t">
            <p className="hdr__title">Lập hồ sơ</p>
            <p className="hdr__sub">Bước 1/4</p>
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
        <div className="steps">
          <i className="on" />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="body">
        <h1 className="h-title">Bác đã làm điều nào?</h1>
        <p className="h-sub">Chọn tất cả các ý đúng. Câu trả lời giúp sắp xếp lại việc cần làm.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button className="opt opt--on">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 21h18" />
              <path d="M5 21V10" />
              <path d="M19 21V10" />
              <path d="M9 21V10" />
              <path d="M15 21V10" />
              <path d="M2 10 12 3l10 7z" />
            </svg>
            <span style={{ flex: "1" }}>Chuyển tiền qua ứng dụng ngân hàng</span>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </button>
          <button className="opt">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 21h18" />
              <path d="M5 21V10" />
              <path d="M19 21V10" />
              <path d="M9 21V10" />
              <path d="M15 21V10" />
              <path d="M2 10 12 3l10 7z" />
            </svg>
            <span style={{ flex: "1" }}>Chuyển qua ví điện tử</span>
          </button>
          <button className="opt">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span style={{ flex: "1" }}>Đọc mã OTP cho người khác</span>
          </button>
          <button className="opt">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
            <span style={{ flex: "1" }}>Cài ứng dụng do người lạ gửi</span>
          </button>
          <button className="opt">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 17H7A5 5 0 0 1 7 7" />
              <path d="M15 7h2a5 5 0 0 1 4 8" />
              <path d="M8 12h4" />
              <path d="m2 2 20 20" />
            </svg>
            <span style={{ flex: "1" }}>Bấm vào đường link lạ</span>
          </button>
        </div>
        <div className="fs-field">
          <label htmlFor="m1">Khoảng bao nhiêu tiền?</label>
          <input id="m1" className="fs-input" style={{ minHeight: "56px" }} defaultValue={`${incident.amount}`} />
        </div>
      </div>
      <div className="actions">
        <Link href="/b3-bang-chung" className="fs-btn fs-btn--primary fs-btn--block">
          Tiếp tục
        </Link>
      </div>
    </div>
  );
}
