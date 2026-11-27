import Link from "next/link";
import { incident, relatives, victim } from "@/lib/data";

export default function B6HoSoScreen() {
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
            <p className="hdr__title">Xuất hồ sơ</p>
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
              aria-label="Bộ hồ sơ có dấu khiên"
              style={{ display: "block", maxWidth: "100%", height: "auto" }}
            >
              <circle cx="118" cy="88" r="62" fill="#fde8f3" />
              <rect
                x="80"
                y="30"
                width="88"
                height="112"
                rx="10"
                fill="#ffffff"
                stroke="#e6e6ec"
                strokeWidth="2"
                transform="rotate(-6 124 86)"
              />
              <rect x="72" y="28" width="88" height="112" rx="10" fill="#ffffff" stroke="#b8b8c2" strokeWidth="2" />
              <rect x="72" y="28" width="88" height="24" rx="10" fill="#eb2f96" />
              <rect x="72" y="42" width="88" height="10" fill="#eb2f96" />
              <rect x="84" y="64" width="64" height="7" rx="3.5" fill="#e6e6ec" />
              <rect x="84" y="78" width="50" height="7" rx="3.5" fill="#e6e6ec" />
              <rect x="84" y="92" width="36" height="7" rx="3.5" fill="#e6e6ec" />
              <rect x="84" y="106" width="64" height="7" rx="3.5" fill="#e6e6ec" />
              <rect x="84" y="120" width="50" height="7" rx="3.5" fill="#e6e6ec" />
              <g transform="translate(166 118) scale(0.72)">
                <path d="M0 -34 L28 -24 V0 C28 20 14 32 0 38 C-14 32 -28 20 -28 0 V-24 Z" fill="#0062cc" />
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
                transform="translate(190 52) scale(0.8)"
                d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                fill="#eb2f96"
              />
              <path
                transform="translate(52 120) scale(0.6)"
                d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
                fill="#f85420"
              />
            </svg>
          </div>
        </div>
        <h1 className="h-title">Chọn mẫu hồ sơ</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button className="opt opt--on">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M8 13h8" />
              <path d="M8 17h5" />
            </svg>
            <span style={{ flex: "1" }}>Trình báo cơ quan công an</span>
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </button>
          <button className="opt">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 21h18" />
              <path d="M5 21V10" />
              <path d="M19 21V10" />
              <path d="M9 21V10" />
              <path d="M15 21V10" />
              <path d="M2 10 12 3l10 7z" />
            </svg>
            <span style={{ flex: "1" }}>Đề nghị ngân hàng tra soát</span>
          </button>
          <button className="opt">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span style={{ flex: "1" }}>Yêu cầu bồi thường bảo hiểm</span>
          </button>
        </div>
        <div className="card">
          <p className="cap" style={{ margin: "0", color: "#0062cc" }}>
            <b>Thông tin do người dùng cung cấp · AI hỗ trợ tổng hợp · Chưa xác minh độc lập</b>
          </p>
          <p className="cap" style={{ margin: "0" }}>
            Số tiền bị chuyển
          </p>
          <p className="amt">{incident.amount}</p>
          <p className="txt">
            <b>Tóm tắt vụ việc</b>
          </p>
          <p className="txt muted">
            {"Ngày "}
            {incident.date}
            {", bà "}
            {victim.fullName}
            {" nhận cuộc gọi từ số "}
            {incident.scammerPhone}
            {" xưng là cán bộ công an, sau đó nhắn qua Zalo…"}
          </p>
          <div className="kv">
            <span className="muted">Số tiền</span>
            <b>{incident.amount}</b>
          </div>
          <div className="kv">
            <span className="muted">Tài khoản nhận</span>
            <b>{incident.receiverAccount}</b>
          </div>
          <div className="kv">
            <span className="muted">Bằng chứng</span>
            <b>3 ảnh · 4 mốc</b>
          </div>
          <div className="row">
            <span className="fs-chip tone-success">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Đủ 9/10 trường
            </span>
            <span className="fs-chip tone-warning">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
              </svg>
              Thiếu: giờ cuộc gọi
            </span>
          </div>
        </div>
        <p className="cap">
          Đây không phải đơn trình báo chính thức. Bác hoặc người thân mang bản này tới cơ quan công an nơi cư trú.
        </p>
      </div>
      <div className="actions">
        <button className="fs-btn fs-btn--primary fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
            <path d="M12 15V3" />
          </svg>
          Tải hồ sơ PDF
        </button>
        <Link href="/c2-quan-ly-chia-se" className="fs-btn fs-btn--family fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="m22 2-7 20-4-9-9-4z" />
            <path d="M22 2 11 13" />
          </svg>
          {"Gửi cho chị "}
          {relatives.lan.name}
        </Link>
      </div>
    </div>
  );
}
