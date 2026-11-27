import Link from "next/link";
import { relatives, times } from "@/lib/data";

export default function A4ChoNguoiThanScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/a3-ket-qua" className="hbtn" aria-label="Quay lại">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="hdr__t">
            <p className="hdr__title">Nhờ người thân xem giúp</p>
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
        <div className="card" style={{ alignItems: "center", textAlign: "center", gap: "10px", padding: "16px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "200px" }}>
              <svg
                viewBox="0 0 240 160"
                width="240"
                height="160"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Hai điện thoại nhắn tin cho nhau"
                style={{ display: "block", maxWidth: "100%", height: "auto" }}
              >
                <circle cx="120" cy="88" r="64" fill="#eaf3fe" />
                <g transform="translate(72 92) rotate(-8)">
                  <rect x="-29.0" y="-50.0" width="58" height="100" rx="12" fill="#303030" />
                  <rect x="-24.0" y="-42.0" width="48" height="84" rx="7" fill="#ffffff" />
                </g>
                <g transform="translate(168 92) rotate(8)">
                  <rect x="-29.0" y="-50.0" width="58" height="100" rx="12" fill="#303030" />
                  <rect x="-24.0" y="-42.0" width="48" height="84" rx="7" fill="#ffffff" />
                </g>
                <rect x="54" y="62" width="34" height="10" rx="5" fill="#fbcee2" transform="rotate(-8 72 92)" />
                <rect x="54" y="78" width="26" height="10" rx="5" fill="#e6e6ec" transform="rotate(-8 72 92)" />
                <rect x="152" y="68" width="34" height="10" rx="5" fill="#9cc4f5" transform="rotate(8 168 92)" />
                <path
                  d="M98 34 H142 a10 10 0 0 1 10 10 V60 a10 10 0 0 1 -10 10 H126 L118 80 L116 70 H98 a10 10 0 0 1 -10 -10 V44 a10 10 0 0 1 10 -10 Z"
                  fill="#eb2f96"
                />
                <path
                  d="M120 62 C108 54 104 48 110 43 C114 40 118 42 120 46 C122 42 126 40 130 43 C136 48 132 54 120 62 Z"
                  fill="#ffffff"
                />
                <path
                  transform="translate(200 36) scale(0.8)"
                  d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                  fill="#0062cc"
                />
                <path
                  transform="translate(40 40) scale(0.6)"
                  d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                  fill="#eb2f96"
                />
              </svg>
            </div>
          </div>
          <p className="h-sec">
            {"Đã gửi cho chị "}
            {relatives.lan.name}
          </p>
          <div className="row" style={{ justifyContent: "center" }}>
            <span className="fs-badge tone-success">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {"Đã gửi "}
              {times.sentToRelative}
            </span>
            <span className="fs-badge tone-family">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {"Đã xem "}
              {times.relativeSeen}
            </span>
          </div>
        </div>
        <div className="fs-banner fs-banner--family">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
            <path d="M16 3.1a4 4 0 0 1 0 7.8" />
          </svg>
          <div>
            <p className="fs-banner__title">
              {"Chị "}
              {relatives.lan.name}
              {" trả lời: “Mẹ dừng lại”"}
            </p>
            <p className="fs-banner__text">“Con gọi mẹ ngay. Mẹ đừng chuyển, đừng nghe máy số lạ nữa nhé.”</p>
          </div>
        </div>
        <div className="card">
          <p className="txt">
            <b>Trong lúc chờ, bác nên:</b>
          </p>
          <p className="txt">1. Cúp máy, không gọi lại số vừa gọi.</p>
          <p className="txt">2. Gọi cho con theo số đã lưu trong danh bạ.</p>
          <p className="txt">3. Không đọc mã OTP cho bất kỳ ai.</p>
        </div>
        <p className="cap">
          {"Chị "}
          {relatives.lan.name}
          {
            " chỉ xem được thẻ tóm tắt, không xem ảnh và không có quyền gì với tài khoản của bác. Link hết hạn sau 24 giờ."
          }
        </p>
      </div>
      <div className="actions">
        <button className="fs-btn fs-btn--primary fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
          </svg>
          {"Gọi chị "}
          {relatives.lan.name}
        </button>
        <Link href="/b1-khan-cap" className="fs-btn fs-btn--secondary fs-btn--block">
          Tôi đã lỡ chuyển tiền
        </Link>
        <Link href="/c2-quan-ly-chia-se" className="fs-btn fs-btn--ghost fs-btn--block">
          Ngừng chia sẻ
        </Link>
      </div>
    </div>
  );
}
