import Link from "next/link";
import { incident, relatives, times, victim } from "@/lib/data";

export default function C4NguoiThanDieuPhoiScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <div className="hdr__t">
            <p className="hdr__title">
              {"Hồ sơ của mẹ "}
              {victim.name}
            </p>
            <p className="hdr__sub">Mẹ chia sẻ · Đầy đủ</p>
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
        <div className="card" style={{ gap: "4px" }}>
          <p className="cap" style={{ margin: "0" }}>
            {"Mẹ đã chuyển lúc "}
            {times.transfer}
            {" · đã trôi "}
            {incident.elapsedForRelative}
          </p>
          <p className="amt">{incident.amount}</p>
        </div>
        <p className="sec">Việc của con</p>
        <div className="card card--tag card--hl">
          <span className="fs-ribbon">
            <b>Việc 1 · Gấp nhất</b>
            <span>Làm ngay</span>
          </span>
          <p className="fs-task__title">Gọi tổng đài ngân hàng của mẹ</p>
          <details className="more">
            <summary>
              <span className="lbl">Xem kịch bản gọi</span>
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </summary>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
              <div style={{ background: "#f5f5f8", borderRadius: "12px", padding: "12px" }}>
                <p className="txt">
                  {"“Mẹ tôi bị lừa chuyển "}
                  {incident.amount}
                  {" lúc "}
                  {times.transfer}
                  {" tới tài khoản "}
                  {incident.receiverAccount}. Tôi đề nghị khóa ngân hàng điện tử và tra soát.”
                </p>
              </div>
              <button className="fs-btn fs-btn--ghost" style={{ justifyContent: "flex-start", padding: "0" }}>
                <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Sao chép
              </button>
              <p className="cap">
                {"Số tổng đài lấy từ danh mục đã kiểm tra ngày "}
                {incident.date}.
              </p>
            </div>
          </details>
          <Link href="/" className="fs-btn fs-btn--primary fs-btn--block">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            Gọi tổng đài chính thức
          </Link>
        </div>
        <div className="fs-task">
          <span className="fs-task__check" />
          <div style={{ flex: "1" }}>
            <span className="fs-task__num">Việc 5</span>
            <p className="fs-task__title">Chuẩn bị hồ sơ trình báo</p>
            <div className="fs-task__meta">
              <span className="fs-av fs-av--fam">{relatives.lan.initial}</span>
              {relatives.lan.name}
              {" (con) · Chưa làm"}
            </div>
          </div>
        </div>
        <div className="fs-field">
          <label htmlFor="g1">Ghi chú sau khi gọi</label>
          <textarea
            id="g1"
            className="fs-input"
            style={{ minHeight: "72px" }}
            defaultValue={`Đã gọi ${times.bankCalled}, mã tra soát TS-2611…`}
          />
        </div>
      </div>
      <div className="actions">
        <button className="fs-btn fs-btn--primary fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Đánh dấu đã xong
        </button>
      </div>
    </div>
  );
}
