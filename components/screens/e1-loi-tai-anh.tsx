import Link from "next/link";
import { times } from "@/lib/data";

export default function E1LoiTaiAnhScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/b3-bang-chung" className="hbtn" aria-label="Quay lại">
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
          <div className="thumb" style={{ border: "2px solid #d0103a", background: "#fff1f1", color: "#d0103a" }}>
            <span style={{ position: "absolute", top: "6px", right: "6px" }}>
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </span>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
            </svg>
            Ảnh mờ
          </div>
          <div className="thumb" style={{ border: "2px solid #d0103a", background: "#fff1f1", color: "#d0103a" }}>
            <span style={{ position: "absolute", top: "6px", right: "6px" }}>
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </span>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M8 13h8" />
              <path d="M8 17h5" />
            </svg>
            Video
          </div>
        </div>
        <div className="fs-banner fs-banner--danger">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
          </svg>
          <div>
            <p className="fs-banner__title">Ảnh thứ 2 bị mờ, chưa đọc được</p>
            <p className="fs-banner__text">Bác chụp lại gần hơn, đủ sáng. Hoặc gõ lại nội dung chính.</p>
          </div>
        </div>
        <div className="fs-banner fs-banner--warning">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h5" />
          </svg>
          <div>
            <p className="fs-banner__title">Tệp thứ 3 không phải ảnh</p>
            <p className="fs-banner__text">Chỉ nhận ảnh PNG hoặc JPG, tối đa 5 MB, tối đa 6 ảnh.</p>
          </div>
        </div>
        <p className="cap">
          {"Ảnh Zalo "}
          {times.zaloMessage}
          {" đã lưu. Bác không mất gì cả."}
        </p>
      </div>
      <div className="actions">
        <button className="fs-btn fs-btn--primary fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
          </svg>
          Chụp lại ảnh 2
        </button>
        <button className="fs-btn fs-btn--secondary fs-btn--block">Gõ nội dung thay ảnh</button>
        <Link href="/b4-ban-do" className="fs-btn fs-btn--ghost fs-btn--block">
          Bỏ qua, tiếp tục với 1 ảnh
        </Link>
      </div>
    </div>
  );
}
