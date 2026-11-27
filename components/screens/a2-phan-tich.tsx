import Link from "next/link";

export default function A2PhanTichScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/a1-ke" className="hbtn" aria-label="Quay lại">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="hdr__t">
            <p className="hdr__title">Tôi đang nghi ngờ</p>
            <p className="hdr__sub">Bước 2/3</p>
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
        </div>
      </div>
      <div className="body" style={{ justifyContent: "center" }}>
        <div className="fs-state">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "200px" }}>
              <svg
                viewBox="0 0 240 160"
                width="240"
                height="160"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Điện thoại được kính lúp kiểm tra"
                style={{ display: "block", maxWidth: "100%", height: "auto" }}
              >
                <circle cx="120" cy="84" r="64" fill="#fde8f3" />
                <g transform="translate(112 84) rotate(0)">
                  <rect x="-35.0" y="-60.0" width="70" height="120" rx="12" fill="#303030" />
                  <rect x="-30.0" y="-52.0" width="60" height="104" rx="7" fill="#ffffff" />
                </g>
                <rect x="86" y="48" width="52" height="8" rx="4" fill="#e6e6ec" />
                <rect x="86" y="64" width="36" height="8" rx="4" fill="#e6e6ec" />
                <rect x="86" y="80" width="52" height="8" rx="4" fill="#e6e6ec" />
                <rect x="86" y="96" width="36" height="8" rx="4" fill="#e6e6ec" />
                <rect x="86" y="112" width="52" height="8" rx="4" fill="#e6e6ec" />
                <rect x="86" y="64" width="36" height="8" rx="4" fill="#fbcee2" />
                <circle cx="150" cy="104" r="22" fill="#ffffff" stroke="#eb2f96" strokeWidth="7" />
                <path d="M166 120 L184 138" stroke="#eb2f96" strokeWidth="9" strokeLinecap="round" />
                <path
                  d="M141 104 l6 6 l11 -12"
                  fill="none"
                  stroke="#1a7f37"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  transform="translate(186 46) scale(0.9)"
                  d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                  fill="#eb2f96"
                />
                <path
                  transform="translate(56 56) scale(0.7)"
                  d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                  fill="#0062cc"
                />
                <path
                  transform="translate(64 130) scale(0.5)"
                  d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                  fill="#f85420"
                />
              </svg>
            </div>
          </div>
          <p className="fs-state__title">Đang đọc lời kể của bác</p>
          <p className="fs-state__text">
            Khoảng 10 giây. Trong lúc chờ, bác đừng trả lời người lạ và đừng bấm vào đường link nào.
          </p>
          <div className="fs-progress">
            <i style={{ width: "65%" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "20px", textAlign: "left" }}>
            <p className="txt">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {" Đã che số điện thoại, số tài khoản"}
            </p>
            <p className="txt">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {" Đang so với các thủ đoạn đã được cảnh báo"}
            </p>
            <p className="txt muted">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
              </svg>
              {" Soạn thẻ tóm tắt cho người thân"}
            </p>
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="fs-btn fs-btn--primary fs-btn--block" disabled>
          Đang phân tích…
        </button>
        <Link href="/a3-ket-qua" className="fs-btn fs-btn--ghost fs-btn--block">
          Xem kết quả mẫu
        </Link>
      </div>
    </div>
  );
}
