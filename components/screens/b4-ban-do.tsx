import Link from "next/link";
import { ReplayProvider, ReplayArea, ReplayButton } from "@/components/replay";
import { incident, times } from "@/lib/data";

export default function B4BanDoScreen() {
  return (
    <ReplayProvider>
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
          <div className="tabs">
            <span className="on">Bản đồ</span>
            <span>Dòng thời gian</span>
            <span>Bằng chứng</span>
          </div>
          <div className="row" style={{ justifyContent: "space-between", flexWrap: "nowrap" }}>
            <span className="row" style={{ gap: "6px" }}>
              <span className="fs-badge tone-unknown">
                <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z" />
                  <path d="M9 4v14" />
                  <path d="M15 6v14" />
                </svg>
                3 kênh
              </span>
              <span className="fs-badge tone-danger">
                <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
                {incident.amount}
              </span>
            </span>
            <ReplayButton className="fs-btn fs-btn--ghost" style={{ minHeight: "44px", padding: "0 4px" }}>
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
              Phát lại
            </ReplayButton>
          </div>
          <div className="card" style={{ padding: "12px 9px" }}>
            <ReplayArea>
              <div className="map">
                <div className="mlane" style={{ left: "40px" }} />
                <div className="mlane" style={{ left: "141px" }} />
                <div className="mlane" style={{ left: "242px" }} />
                <span className="mlh" style={{ left: "40px" }}>
                  <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                  Cuộc gọi
                </span>
                <span className="mlh" style={{ left: "141px" }}>
                  <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Zalo
                </span>
                <span className="mlh" style={{ left: "242px" }}>
                  <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 21h18" />
                    <path d="M5 21V10" />
                    <path d="M19 21V10" />
                    <path d="M9 21V10" />
                    <path d="M15 21V10" />
                    <path d="M2 10 12 3l10 7z" />
                  </svg>
                  Ngân hàng
                </span>
                <svg className="mlinks" viewBox="0 0 340 656" aria-hidden="true">
                  <path className="flow" style={{ animationDelay: "1.3s" }} d="M190 288 C190 318 291 308 291 338" />
                  <path className="flow" style={{ animationDelay: "2.0s" }} d="M291 420 C291 452 190 442 190 470" />
                  <path className="same" style={{ animationDelay: ".6s" }} d="M89 148 C89 175 190 165 190 196" />
                </svg>
                <span className="mtime" style={{ top: "84px", animationDelay: "0.2s" }}>
                  {times.firstCall}
                </span>
                <div
                  className="mnode "
                  style={{ left: "40px", top: "72px", width: "98px", height: "76px", animationDelay: "0.2s" }}
                >
                  Xưng công an<span className="phone">{incident.scammerPhoneShort}</span>
                </div>
                <span className="mtime" style={{ top: "208px", animationDelay: "0.9s" }}>
                  {times.zaloMessage}
                </span>
                <div
                  className="mnode "
                  style={{ left: "141px", top: "196px", width: "98px", height: "92px", animationDelay: "0.9s" }}
                >
                  Gửi “lệnh tạm giữ”<span className="phone">{incident.scammerPhoneShort}</span>
                  <small>Từ ảnh 1</small>
                </div>
                <span className="mtime" style={{ top: "350px", animationDelay: "1.6s" }}>
                  {times.transfer}
                </span>
                <div
                  className="mnode "
                  style={{ left: "242px", top: "338px", width: "98px", height: "82px", animationDelay: "1.6s" }}
                >
                  {"Chuyển "}
                  {incident.amountShort}
                  <small>
                    {"→ "}
                    {incident.receiverAccount}
                  </small>
                  <small>Từ biên lai</small>
                </div>
                <span className="mtime" style={{ top: "482px", animationDelay: "2.3s" }}>
                  {times.feeDemand}
                </span>
                <div
                  className="mnode mnode--danger"
                  style={{ left: "141px", top: "470px", width: "98px", height: "88px", animationDelay: "2.3s" }}
                >
                  Đòi “phí hồ sơ”<small style={{ color: "#d0103a" }}>Rất đáng ngờ</small>
                </div>
                <span className="samelbl" style={{ left: "104px", top: "160px", animationDelay: ".8s" }}>
                  Cùng 1 số
                </span>
                <div
                  className="mnode mnode--miss"
                  style={{ left: "40px", top: "574px", width: "98px", height: "72px", animationDelay: "3.5s" }}
                >
                  <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                  <span style={{ fontSize: "13px", lineHeight: "16px" }}>Lịch sử cuộc gọi</span>
                </div>
                <div
                  className="mnode mnode--miss"
                  style={{ left: "141px", top: "574px", width: "98px", height: "72px", animationDelay: "3.7s" }}
                >
                  <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                  <span style={{ fontSize: "13px", lineHeight: "16px" }}>Trang cá nhân Zalo</span>
                </div>
              </div>
            </ReplayArea>
          </div>
          <div className="row" style={{ gap: "12px" }}>
            <span className="cap" style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <i
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  border: "2px solid #eb2f96",
                  background: "#fde8f3",
                  display: "inline-block",
                }}
              />
              Trùng khớp
            </span>
            <span className="cap" style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <i
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  border: "2px dashed #c43a00",
                  display: "inline-block",
                }}
              />
              Còn thiếu
            </span>
            <span className="cap" style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <i
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  border: "2px solid #d0103a",
                  background: "#fff1f1",
                  display: "inline-block",
                }}
              />
              Rất đáng ngờ
            </span>
          </div>
          <p className="fs-ainote">
            <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
              <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
            </svg>
            AI ghép từ 3 ảnh và lời kể · chưa xác minh độc lập
          </p>
        </div>
        <div className="actions actions--row">
          <Link href="/e2-thieu-chung-cu" className="fs-btn fs-btn--secondary fs-btn--block">
            Thêm ảnh
          </Link>
          <Link href="/b5-dieu-phoi" className="fs-btn fs-btn--primary fs-btn--block">
            Việc cần làm
          </Link>
        </div>
      </div>
    </ReplayProvider>
  );
}
