import Link from "next/link";

export default function E3AILoiScreen() {
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
            <p className="hdr__title">Bản đồ sự cố</p>
            <p className="hdr__sub">Bước 3/4</p>
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
          <i className="on" />
          <i />
        </div>
      </div>
      <div className="body">
        <div className="fs-state">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "190px" }}>
              <svg
                viewBox="0 0 240 160"
                width="240"
                height="160"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Đám mây đang tạm nghỉ"
                style={{ display: "block", maxWidth: "100%", height: "auto" }}
              >
                <circle cx="120" cy="90" r="62" fill="#eaf3fe" />
                <path
                  d="M78 112 a24 24 0 0 1 4 -47 a32 32 0 0 1 60 -8 a26 26 0 0 1 22 55 Z"
                  fill="#ffffff"
                  stroke="#9cc4f5"
                  strokeWidth="3"
                />
                <rect x="108" y="78" width="9" height="24" rx="4.5" fill="#0062cc" />
                <rect x="124" y="78" width="9" height="24" rx="4.5" fill="#0062cc" />
                <circle cx="94" cy="132" r="5" fill="#9cc4f5" />
                <circle cx="120" cy="136" r="5" fill="#9cc4f5" />
                <circle cx="146" cy="132" r="5" fill="#9cc4f5" />
                <path
                  transform="translate(184 44) scale(0.7)"
                  d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                  fill="#0062cc"
                />
              </svg>
            </div>
          </div>
          <p className="fs-state__title">Trợ lý AI đang bận</p>
          <p className="fs-state__text">Chưa ghép được bản đồ. 3 ảnh và lời kể của bác đã được lưu, không mất gì.</p>
          <button className="fs-btn fs-btn--secondary fs-btn--block">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
              <path d="M21 3v5h-5" />
            </svg>
            Thử lại
          </button>
        </div>
        <p className="h-sec">Trong lúc chờ, bác vẫn làm được:</p>
        <div className="fs-task">
          <span className="sig__n tone-primary">1</span>
          <div>
            <p className="fs-task__title">Gọi ngân hàng để khóa và tra soát</p>
            <p className="cap">Việc này không cần AI</p>
          </div>
        </div>
        <div className="fs-task">
          <span className="sig__n tone-unknown">2</span>
          <div>
            <p className="fs-task__title">Không xóa tin nhắn, cuộc gọi</p>
          </div>
        </div>
        <div className="card" style={{ boxShadow: "none", background: "#eaf3fe", borderColor: "#eaf3fe" }}>
          <p className="txt" style={{ color: "#0062cc" }}>
            <b>Đang dùng bộ dữ liệu mẫu?</b>
          </p>
          <p className="txt">
            {"Bác có thể xem "}
            <b>kết quả mẫu đã lưu</b>. Kết quả này được ghi rõ là mẫu.
          </p>
        </div>
      </div>
      <div className="actions">
        <Link href="/b1-khan-cap" className="fs-btn fs-btn--primary fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
          </svg>
          Gọi ngân hàng ngay
        </Link>
        <Link href="/b4-ban-do" className="fs-btn fs-btn--ghost fs-btn--block">
          Xem kết quả mẫu đã lưu
        </Link>
      </div>
    </div>
  );
}
