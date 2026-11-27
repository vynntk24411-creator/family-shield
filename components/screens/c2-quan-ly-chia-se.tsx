import Link from "next/link";
import { incident, relatives, times } from "@/lib/data";

export default function C2QuanLyChiaSeScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/b5-dieu-phoi" className="hbtn" aria-label="Quay lại">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="hdr__t">
            <p className="hdr__title">Đang chia sẻ</p>
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
        <h1 className="h-title">Ai đang xem hồ sơ</h1>
        <div className="card">
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <span className="fs-av fs-av--fam">{relatives.lan.initial}</span>
            <div style={{ flex: "1" }}>
              <p className="txt">
                <b>
                  {"Chị "}
                  {relatives.lan.name}
                </b>
                {" · con gái"}
              </p>
              <p className="cap">
                {"Đầy đủ · hết hạn "}
                {times.shareExpires}
                {" ngày "}
                {incident.shareExpiresDate}
              </p>
            </div>
            <span className="fs-badge tone-success">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Đã nhận
            </span>
          </div>
          <div className="row">
            <span className="fs-chip tone-family">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
                <path d="M16 3.1a4 4 0 0 1 0 7.8" />
              </svg>
              Đang làm việc 1
            </span>
            <span className="fs-chip tone-unknown">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {"Xem lần cuối "}
              {times.lanLastSeen}
            </span>
          </div>
          <div className="row">
            <button className="fs-btn fs-btn--secondary" style={{ flex: "1" }}>
              Đổi thành Tóm tắt
            </button>
            <button className="fs-btn fs-btn--danger" style={{ flex: "1" }}>
              <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 17H7A5 5 0 0 1 7 7" />
                <path d="M15 7h2a5 5 0 0 1 4 8" />
                <path d="M8 12h4" />
                <path d="m2 2 20 20" />
              </svg>
              Thu hồi
            </button>
          </div>
        </div>
        <div className="card">
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <span className="fs-av fs-av--fam">{relatives.tuan.initial}</span>
            <div style={{ flex: "1" }}>
              <p className="txt">
                <b>
                  {"Anh "}
                  {relatives.tuan.name}
                </b>
                {" · con trai"}
              </p>
              <p className="cap">
                {"Tóm tắt · gửi lúc "}
                {times.tuanInviteSent}
              </p>
            </div>
            <span className="fs-badge tone-info">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Chờ mở
            </span>
          </div>
          <div className="row">
            <button className="fs-btn fs-btn--secondary" style={{ flex: "1" }}>
              <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
                <path d="m22 2-7 20-4-9-9-4z" />
                <path d="M22 2 11 13" />
              </svg>
              Gửi lại
            </button>
            <button className="fs-btn fs-btn--danger" style={{ flex: "1" }}>
              <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              Hủy lời mời
            </button>
          </div>
        </div>
        <div className="card" style={{ boxShadow: "none" }}>
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <span className="fs-av" style={{ background: "#f0f0f4", color: "#666666" }}>
              {relatives.mai.initial}
            </span>
            <div style={{ flex: "1" }}>
              <p className="txt muted">
                <b>
                  {"Chị "}
                  {relatives.mai.name}
                </b>
              </p>
              <p className="cap">
                {"Đã thu hồi lúc "}
                {times.maiRevoked}
              </p>
            </div>
            <span className="fs-badge tone-unknown">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 17H7A5 5 0 0 1 7 7" />
                <path d="M15 7h2a5 5 0 0 1 4 8" />
                <path d="M8 12h4" />
                <path d="m2 2 20 20" />
              </svg>
              Đã thu hồi
            </span>
          </div>
        </div>
        <p className="cap">Thu hồi có hiệu lực ngay: người đó mở link sẽ thấy “không còn quyền xem”.</p>
      </div>
      <div className="actions">
        <Link href="/c1-moi-nguoi-than" className="fs-btn fs-btn--family fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
          Mời thêm người
        </Link>
        <Link href="/e4-link-het-han" className="fs-btn fs-btn--danger fs-btn--block">
          Ngừng chia sẻ với tất cả
        </Link>
      </div>
    </div>
  );
}
