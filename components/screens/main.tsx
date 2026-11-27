import Link from "next/link";
import { relatives } from "@/lib/data";

export default function MainScreen() {
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
            <p className="hdr__title">Chống lừa đảo</p>
            <p className="hdr__sub">Family Shield</p>
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
        <div className="card" style={{ gap: "10px" }}>
          <div className="row" style={{ justifyContent: "space-between", flexWrap: "nowrap" }}>
            <span className="row" style={{ gap: "8px", flexWrap: "nowrap" }}>
              <span style={{ color: "#eb2f96" }}>
                <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
                  <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
                </svg>
              </span>
              <b style={{ font: "700 18px/24px var(--font-sans)" }}>
                <span style={{ color: "#c4177a" }}>Family Shield</span>
                {" 24/7"}
              </b>
            </span>
            <span className="live" style={{ whiteSpace: "nowrap" }}>
              Đang bật
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "240px" }}>
              <svg
                viewBox="0 0 240 160"
                width="240"
                height="160"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Hai người trong gia đình đứng hai bên tấm khiên"
                style={{ display: "block", maxWidth: "100%", height: "auto" }}
              >
                <circle cx="120" cy="92" r="66" fill="#fde8f3" />
                <circle cx="196" cy="40" r="14" fill="#fbcee2" />
                <circle cx="36" cy="120" r="10" fill="#eaf3fe" />
                <g transform="translate(70 84) scale(1.05)">
                  <path d="M-30 62 C-30 34 -16 26 0 26 C16 26 30 34 30 62 Z" fill="#0062cc" />
                  <circle cx="0" cy="0" r="20" fill="#f6c9a7" />
                  <path
                    d="M-21 -2 C-22 -18 -10 -24 0 -24 C10 -24 22 -18 21 -2 C16 -12 8 -14 0 -14 C-8 -14 -16 -12 -21 -2 Z"
                    fill="#d7d7df"
                  />
                  <circle cx="-7" cy="2" r="5.5" fill="none" stroke="#303030" strokeWidth="2" />
                  <circle cx="7" cy="2" r="5.5" fill="none" stroke="#303030" strokeWidth="2" />
                  <path d="M-1.5 2 H1.5" stroke="#303030" strokeWidth="2" />
                  <path d="M-6 10 Q0 14 6 10" fill="none" stroke="#303030" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g transform="translate(172 84) scale(1.05)">
                  <path d="M-30 62 C-30 34 -16 26 0 26 C16 26 30 34 30 62 Z" fill="#f85420" />
                  <circle cx="0" cy="0" r="20" fill="#f6c9a7" />
                  <path
                    d="M-21 0 C-23 -20 -8 -25 2 -24 C14 -23 23 -14 21 2 C17 -8 6 -12 -4 -10 C-12 -9 -18 -5 -21 0 Z"
                    fill="#3a3a46"
                  />
                  <circle cx="-7" cy="2" r="2.2" fill="#303030" />
                  <circle cx="7" cy="2" r="2.2" fill="#303030" />
                  <path d="M-6 10 Q0 14 6 10" fill="none" stroke="#303030" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g transform="translate(121 92) scale(1.05)">
                  <path d="M0 -34 L28 -24 V0 C28 20 14 32 0 38 C-14 32 -28 20 -28 0 V-24 Z" fill="#eb2f96" />
                  <path
                    d="M-11 1 L-3 9 L12 -7"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <path
                  d="M98 140 Q120 152 144 140"
                  fill="none"
                  stroke="#eb2f96"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="2 7"
                />
                <path
                  transform="translate(206 74) scale(0.9)"
                  d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                  fill="#eb2f96"
                />
                <path
                  transform="translate(30 46) scale(0.7)"
                  d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                  fill="#0062cc"
                />
                <path
                  transform="translate(152 24) scale(0.6)"
                  d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                  fill="#f85420"
                />
              </svg>
            </div>
          </div>
          <p className="txt muted" style={{ textAlign: "center" }}>
            Cùng gia đình xử lý khi nghi bị lừa. Không cần cài thêm ứng dụng.
          </p>
        </div>
        <p className="sec">Bạn đang gặp chuyện gì?</p>
        <div className="card card--tag card--hl" style={{ padding: "0", paddingTop: "30px" }}>
          <span className="fs-ribbon">
            <b>Gấp nhất</b>
            <span>Làm ngay trong 30 phút đầu</span>
          </span>
          <Link href="/b1-khan-cap" className="fs-tile" style={{ boxShadow: "none" }}>
            <span className="fs-tile__icon tone-primary">
              <svg className="ic lg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
            </span>
            <span>
              <span className="fs-tile__title" style={{ display: "block" }}>
                Tôi đã chuyển tiền
              </span>
              <span className="fs-tile__desc" style={{ display: "block" }}>
                Hoặc đã đưa mã OTP, cài ứng dụng lạ
              </span>
            </span>
            <span className="fs-tile__chev">
              <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </Link>
        </div>
        <Link href="/a1-ke" className="fs-tile">
          <span className="fs-tile__icon tone-family">
            <svg className="ic lg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
              <path d="M16 3.1a4 4 0 0 1 0 7.8" />
            </svg>
          </span>
          <span>
            <span className="fs-tile__title" style={{ display: "block" }}>
              Tôi đang nghi ngờ
            </span>
            <span className="fs-tile__desc" style={{ display: "block" }}>
              Có người yêu cầu chuyển tiền. Nhờ người thân xem giúp trước
            </span>
          </span>
          <span className="fs-tile__chev">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </Link>
        <Link href="/d1-yeu-cau-moi" className="fs-tile">
          <span className="fs-tile__icon tone-warning">
            <svg className="ic lg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <span>
            <span className="fs-tile__title" style={{ display: "block" }}>
              Có người hứa lấy lại tiền
            </span>
            <span className="fs-tile__desc" style={{ display: "block" }}>
              Kiểm tra tin nhắn, cuộc gọi mới trước khi làm theo
            </span>
          </span>
          <span className="fs-tile__chev">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </Link>
        <p className="sec">Người thân của bạn</p>
        <div className="card">
          <div className="row" style={{ flexWrap: "nowrap", gap: "12px" }}>
            <span className="fs-av fs-av--fam">{relatives.lan.initial}</span>
            <div style={{ flex: "1" }}>
              <p className="txt">
                <b>{relatives.lan.fullName}</b>
              </p>
              <p className="cap">Con gái · Được báo khi bạn cần</p>
            </div>
            <Link href="/c2-quan-ly-chia-se" className="link">
              Quản lý
            </Link>
          </div>
          <Link href="/c1-moi-nguoi-than" className="fs-btn fs-btn--family fs-btn--block">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Thêm người thân
          </Link>
        </div>
        <div className="bubble">
          <p className="txt">
            <b>An toàn khi dùng Family Shield</b>
          </p>
          <p className="txt muted">
            Không ai được yêu cầu bạn đọc mã OTP, mật khẩu hay mã PIN – kể cả người tự xưng công an.
          </p>
        </div>
        <p className="fs-ainote">
          <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
            <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
          </svg>
          Bạn đang dùng trợ lý AI · AI có thể sai, hãy kiểm tra lại
        </p>
        <p className="cap" style={{ textAlign: "center" }}>
          Bản thiết kế ý tưởng dự thi – không phải giao diện chính thức của MoMo.
        </p>
      </div>
    </div>
  );
}
