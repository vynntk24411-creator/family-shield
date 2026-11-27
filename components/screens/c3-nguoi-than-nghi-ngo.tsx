import Link from "next/link";
import { incident, victim } from "@/lib/data";

export default function C3NguoiThanNghiNgoScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <div className="hdr__t">
            <p className="hdr__title">Mẹ nhờ con xem giúp</p>
          </div>
          <span className="fs-badge tone-family">
            <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Gửi 2 phút trước
          </span>
        </div>
      </div>
      <div className="body">
        <div className="fs-banner fs-banner--family">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
            <path d="M16 3.1a4 4 0 0 1 0 7.8" />
          </svg>
          <div>
            <p className="fs-banner__title">
              {"Bà "}
              {victim.name}
              {" đang được yêu cầu chuyển tiền"}
            </p>
            <p className="fs-banner__text">Mẹ chưa chuyển. Con hãy trả lời ngay.</p>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <span className="fs-badge tone-danger">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
              Rất đáng ngờ
            </span>
          </div>
          <div>
            <div className="kv">
              <span className="muted">Ai yêu cầu</span>
              <b>Người tự xưng công an</b>
            </div>
            <div className="kv">
              <span className="muted">Yêu cầu</span>
              <b>
                {"Chuyển "}
                {incident.amount}
              </b>
            </div>
            <div className="kv">
              <span className="muted">Qua</span>
              <b>Cuộc gọi, Zalo</b>
            </div>
          </div>
          <p className="txt">
            <b>3 dấu hiệu:</b>
            {" làm việc qua điện thoại, dọa vụ án, đòi chuyển tiền."}
          </p>
          <span className="fs-chip tone-info">
            <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
              <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
            </svg>
            AI tổng hợp từ lời kể của mẹ · chưa xác minh
          </span>
        </div>
        <p className="h-sec" style={{ fontSize: "19px" }}>
          Con trả lời mẹ
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link href="/a4-cho-nguoi-than" className="fs-btn fs-btn--primary fs-btn--block">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 11V6a2 2 0 0 0-4 0v5" />
              <path d="M14 10V4a2 2 0 0 0-4 0v6" />
              <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.4l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15" />
            </svg>
            Mẹ dừng lại, đừng chuyển
          </Link>
          <button className="fs-btn fs-btn--secondary fs-btn--block">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            Con gọi mẹ ngay
          </button>
          <button className="fs-btn fs-btn--secondary fs-btn--block">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            Con cần thêm thông tin
          </button>
        </div>
        <div className="fs-field">
          <label htmlFor="n1">Nhắn thêm cho mẹ (không bắt buộc)</label>
          <textarea
            id="n1"
            className="fs-input"
            style={{ minHeight: "80px" }}
            defaultValue="Mẹ đừng nghe máy số lạ nữa nhé."
          />
        </div>
        <p className="cap">Con chỉ xem được phần mẹ chia sẻ. Con không có quyền với tài khoản của mẹ.</p>
      </div>
    </div>
  );
}
