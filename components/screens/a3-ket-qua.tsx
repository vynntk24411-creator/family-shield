import Link from "next/link";
import { incident } from "@/lib/data";

export default function A3KetQuaScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/a2-phan-tich" className="hbtn" aria-label="Quay lại">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="hdr__t">
            <p className="hdr__title">Kết quả</p>
            <p className="hdr__sub">Bước 3/3</p>
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
        </div>
      </div>
      <div className="body">
        <h1 className="h-title">Bác chưa nên chuyển tiền</h1>
        <div className="card card--tag">
          <span className="fs-ribbon">
            <b>Rất đáng ngờ</b>
            <span>Giống mạo danh công an</span>
          </span>
          <div>
            <div className="kv">
              <span>Ai yêu cầu</span>
              <b>Người xưng công an</b>
            </div>
            <div className="kv">
              <span>Yêu cầu</span>
              <b>
                {"Chuyển "}
                {incident.amount}
              </b>
            </div>
            <div className="kv">
              <span>Qua</span>
              <b>Cuộc gọi, Zalo</b>
            </div>
          </div>
        </div>
        <div className="card" style={{ gap: "12px" }}>
          <p className="h-sec">3 dấu hiệu cần kiểm tra</p>
          <div className="sig">
            <span className="sig__n tone-danger">1</span>
            <p className="txt">
              <b>Công an không đòi chuyển tiền qua điện thoại</b>
            </p>
          </div>
          <div className="sig">
            <span className="sig__n tone-danger">2</span>
            <p className="txt">
              <b>Dọa vụ án, ép làm ngay</b>
            </p>
          </div>
          <div className="sig">
            <span className="sig__n tone-danger">3</span>
            <p className="txt">
              <b>Chuyển vào tài khoản lạ</b>
            </p>
          </div>
          <details className="more">
            <summary>
              <span className="lbl">Xem căn cứ</span>
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </summary>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
              <p className="cap">
                {"1 · Từ lời kể: “bảo tôi phải chuyển "}
                {incident.amountShort}”
              </p>
              <p className="cap">2 · Từ lời kể: “liên quan vụ án”</p>
              <p className="cap">3 · Thủ đoạn phổ biến nhất năm 2025 theo NCA</p>
              <p className="cap">Chưa rõ: số người gọi là của ai; có giấy triệu tập không.</p>
              <span className="fs-chip tone-info">
                <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
                  <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
                </svg>
                AI tổng hợp · không phải kết luận
              </span>
            </div>
          </details>
        </div>
      </div>
      <div className="actions">
        <Link href="/a4-cho-nguoi-than" className="fs-btn fs-btn--primary fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
            <path d="M16 3.1a4 4 0 0 1 0 7.8" />
          </svg>
          Nhờ người thân xem giúp
        </Link>
        <Link href="/a5-kiem-chung" className="fs-btn fs-btn--secondary fs-btn--block">
          Tôi tự kiểm chứng
        </Link>
      </div>
    </div>
  );
}
