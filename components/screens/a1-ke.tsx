import Link from "next/link";
import { incident } from "@/lib/data";

export default function A1KeScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/" className="hbtn" aria-label="Quay lại">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="hdr__t">
            <p className="hdr__title">Tôi đang nghi ngờ</p>
            <p className="hdr__sub">Bước 1/3</p>
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
        </div>
      </div>
      <div className="body">
        <div className="fs-banner fs-banner--danger">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 11V6a2 2 0 0 0-4 0v5" />
            <path d="M14 10V4a2 2 0 0 0-4 0v6" />
            <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.4l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15" />
          </svg>
          <div>
            <p className="fs-banner__title">Khoan chuyển tiền đã</p>
            <p className="fs-banner__text">Kể cho chúng tôi trước. Chỉ mất khoảng 1 phút.</p>
          </div>
        </div>
        <div className="fs-field">
          <label htmlFor="k1">Ai đang yêu cầu bác làm gì?</label>
          <textarea
            id="k1"
            className="fs-input"
            style={{ minHeight: "132px" }}
            defaultValue={`Có người gọi tự xưng công an, bảo tôi liên quan vụ án, phải chuyển ${incident.amountShort} để chứng minh tài sản.`}
          />
          <div className="fs-field__hint">Kể tự nhiên như nói với con cháu. Không cần đúng thứ tự.</div>
        </div>
        <div className="row">
          <button className="fs-btn fs-btn--secondary" style={{ flex: "1" }}>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <rect x="9" y="2" width="6" height="12" rx="3" />
              <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
              <path d="M12 18v4" />
            </svg>
            Nói thay vì gõ
          </button>
          <button className="fs-btn fs-btn--secondary" style={{ flex: "1" }}>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
            </svg>
            Chụp tin nhắn
          </button>
        </div>
        <p className="cap" style={{ margin: "0" }}>
          Hoặc chạm nhanh:
        </p>
        <div className="row">
          <span className="fs-chip tone-unknown">Tự xưng công an</span>
          <span className="fs-chip tone-unknown">Người quen nhờ chuyển gấp</span>
          <span className="fs-chip tone-unknown">Trúng thưởng, nhận quà</span>
        </div>
      </div>
      <div className="actions">
        <Link href="/a2-phan-tich" className="fs-btn fs-btn--primary fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
            <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
          </svg>
          Phân tích giúp tôi
        </Link>
      </div>
    </div>
  );
}
