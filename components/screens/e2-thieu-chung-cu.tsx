import Link from "next/link";
import { incident, times } from "@/lib/data";

export default function E2ThieuChungCuScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/b4-ban-do" className="hbtn" aria-label="Quay lại">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="hdr__t">
            <p className="hdr__title">Bằng chứng còn thiếu</p>
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
              aria-label="Một ảnh đã có và một khung ảnh còn trống"
              style={{ display: "block", maxWidth: "100%", height: "auto" }}
            >
              <circle cx="120" cy="88" r="62" fill="#ffeee7" />
              <rect
                x="58"
                y="44"
                width="72"
                height="88"
                rx="10"
                fill="#ffffff"
                stroke="#b8b8c2"
                strokeWidth="2"
                transform="rotate(-8 94 88)"
              />
              <path d="M66 112 L84 92 L98 106 L108 96 L122 112 Z" fill="#9cc4f5" transform="rotate(-8 94 88)" />
              <circle cx="104" cy="66" r="7" fill="#ffc94d" transform="rotate(-8 94 88)" />
              <rect
                x="118"
                y="40"
                width="72"
                height="88"
                rx="10"
                fill="#ffffff"
                stroke="#f85420"
                strokeWidth="3"
                strokeDasharray="8 6"
              />
              <circle cx="154" cy="84" r="16" fill="#f85420" />
              <path d="M154 76 V92 M146 84 H162" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="row">
          <span className="fs-badge tone-unknown">
            <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            Chưa đủ thông tin
          </span>
        </div>
        <h1 className="h-title">Thêm 2 thứ này để hồ sơ đủ hơn</h1>
        <div className="card">
          <div className="sig">
            <span className="sig__n tone-warning">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
              </svg>
            </span>
            <div style={{ flex: "1" }}>
              <p className="txt">
                <b>Ảnh trang cá nhân Zalo “Cán bộ Hùng”</b>
              </p>
              <p className="cap">Mở Zalo → bấm vào tên người đó → chụp màn hình</p>
            </div>
          </div>
          <button className="fs-btn fs-btn--secondary fs-btn--block">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Thêm ảnh này
          </button>
        </div>
        <div className="card">
          <div className="sig">
            <span className="sig__n tone-warning">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
              </svg>
            </span>
            <div style={{ flex: "1" }}>
              <p className="txt">
                <b>Lịch sử cuộc gọi có giờ</b>
              </p>
              <p className="cap">
                {"Mở Điện thoại → Gần đây → chụp dòng số "}
                {incident.scammerPhone}
              </p>
            </div>
          </div>
          <button className="fs-btn fs-btn--secondary fs-btn--block">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Thêm ảnh này
          </button>
        </div>
        <div className="card" style={{ boxShadow: "none" }}>
          <p className="txt">
            <b>Giờ chuyển tiền chưa khớp</b>
          </p>
          <p className="txt muted">
            {"Lời kể nói “9 rưỡi”, biên lai ghi "}
            {times.transfer}. Bác chọn giờ đúng:
          </p>
          <div className="row">
            <button className="fs-btn fs-btn--secondary" style={{ flex: "1" }}>
              {times.transfer}
              {" (biên lai)"}
            </button>
            <button className="fs-btn fs-btn--secondary" style={{ flex: "1" }}>
              Chưa rõ
            </button>
          </div>
        </div>
        <p className="cap">Thiếu vẫn xuất được hồ sơ; các trường thiếu sẽ ghi “chưa rõ”.</p>
      </div>
      <div className="actions">
        <Link href="/b5-dieu-phoi" className="fs-btn fs-btn--primary fs-btn--block">
          Để sau, xem việc cần làm
        </Link>
      </div>
    </div>
  );
}
