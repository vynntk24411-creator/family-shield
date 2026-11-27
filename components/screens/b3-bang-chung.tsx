import Link from "next/link";
import { incident, times } from "@/lib/data";

export default function B3BangChungScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/b2-hoi-nhanh" className="hbtn" aria-label="Quay lại">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="hdr__t">
            <p className="hdr__title">Lập hồ sơ</p>
            <p className="hdr__sub">Bước 2/4</p>
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
          <i className="on" />
          <i />
          <i />
        </div>
      </div>
      <div className="body">
        <h1 className="h-title">Gửi ảnh chụp màn hình</h1>
        <p className="h-sub">
          Tin nhắn, biên lai chuyển khoản, số đã gọi tới. Chúng tôi tự che số tài khoản và số điện thoại.
        </p>
        <div className="row" style={{ gap: "10px" }}>
          <div className="thumb">
            <span style={{ position: "absolute", top: "6px", right: "6px" }}>
              <span className="fs-chip tone-success">
                <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
            </span>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {"Zalo "}
            {times.zaloMessage}
          </div>
          <div className="thumb">
            <span style={{ position: "absolute", top: "6px", right: "6px" }}>
              <span className="fs-chip tone-success">
                <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
            </span>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 21h18" />
              <path d="M5 21V10" />
              <path d="M19 21V10" />
              <path d="M9 21V10" />
              <path d="M15 21V10" />
              <path d="M2 10 12 3l10 7z" />
            </svg>
            Biên lai
          </div>
          <div className="thumb">
            <span style={{ position: "absolute", top: "6px", right: "6px" }}>
              <span className="fs-chip tone-success">
                <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
            </span>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            Cuộc gọi
          </div>
        </div>
        <div className="row">
          <button className="fs-btn fs-btn--secondary" style={{ flex: "1" }}>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Thêm ảnh
          </button>
          <button className="fs-btn fs-btn--secondary" style={{ flex: "1" }}>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <rect x="9" y="2" width="6" height="12" rx="3" />
              <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
              <path d="M12 18v4" />
            </svg>
            Kể bằng lời
          </button>
        </div>
        <div className="fs-field">
          <label htmlFor="s1">Kể thêm (không bắt buộc)</label>
          <textarea
            id="s1"
            className="fs-input"
            style={{ minHeight: "96px" }}
            defaultValue={`Sáng nay có người gọi xưng công an, sau đó nhắn Zalo. Tôi chuyển ${incident.amountShort} lúc 9 rưỡi.`}
          />
        </div>
        <span className="fs-chip tone-unknown">
          <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Ảnh chỉ dùng cho hồ sơ của bác, tự xóa sau 7 ngày
        </span>
      </div>
      <div className="actions">
        <Link href="/b4-ban-do" className="fs-btn fs-btn--primary fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z" />
            <path d="M9 4v14" />
            <path d="M15 6v14" />
          </svg>
          Lập bản đồ sự cố
        </Link>
      </div>
    </div>
  );
}
