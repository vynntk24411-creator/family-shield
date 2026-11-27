import Link from "next/link";
import { recoveryScam } from "@/lib/data";

export default function D1YeuCauMoiScreen() {
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
            <p className="hdr__title">Có yêu cầu mới</p>
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
        <div className="fs-field">
          <label htmlFor="d1">Dán tin nhắn hoặc kể cuộc gọi</label>
          <textarea
            id="d1"
            className="fs-input"
            style={{ minHeight: "120px" }}
            defaultValue={`VIỆN KIỂM SÁT – LIÊN KẾT NGÂN HÀNG HỖ TRỢ: Hồ sơ thu hồi của bà đã được duyệt. Vui lòng nộp phí xử lý ${recoveryScam.fee} để nhận lại 100% số tiền.`}
          />
        </div>
        <div className="card">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "160px" }}>
              <svg
                viewBox="0 0 240 160"
                width="240"
                height="160"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Tin nhắn có dấu chấm than và đồng xu bị gạch"
                style={{ display: "block", maxWidth: "100%", height: "auto" }}
              >
                <circle cx="120" cy="88" r="62" fill="#ffeee7" />
                <path
                  d="M66 44 H158 a12 12 0 0 1 12 12 V100 a12 12 0 0 1 -12 12 H100 L82 128 L84 112 H66 a12 12 0 0 1 -12 -12 V56 a12 12 0 0 1 12 -12 Z"
                  fill="#ffffff"
                  stroke="#b8b8c2"
                  strokeWidth="2"
                />
                <rect x="70" y="60" width="70" height="9" rx="4.5" fill="#e6e6ec" />
                <rect x="70" y="76" width="56" height="9" rx="4.5" fill="#e6e6ec" />
                <rect x="70" y="92" width="44" height="9" rx="4.5" fill="#f85420" />
                <circle cx="172" cy="48" r="20" fill="#f85420" />
                <rect x="169" y="36" width="6" height="16" rx="3" fill="#ffffff" />
                <circle cx="172" cy="58" r="3.5" fill="#ffffff" />
                <circle cx="176" cy="116" r="16" fill="#ffc94d" />
                <path d="M164 128 L188 104" stroke="#f85420" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="row">
            <span className="fs-badge tone-danger">
              <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
              Rất đáng ngờ
            </span>
            <span className="cap">Khớp 4 dấu hiệu</span>
          </div>
          <p className="h-sec" style={{ fontSize: "19px", lineHeight: "26px" }}>
            Đây giống chiêu “lừa đảo lần hai”
          </p>
          <div className="sig">
            <span className="sig__n tone-danger">1</span>
            <p className="txt">
              {"Đòi "}
              <b>nộp phí trước</b>
              {" để lấy lại tiền"}
              <br />
              <span className="cap">
                {"“nộp phí xử lý "}
                {recoveryScam.fee}”
              </span>
            </p>
          </div>
          <div className="sig">
            <span className="sig__n tone-danger">2</span>
            <p className="txt">
              {"Hứa lấy lại "}
              <b>100%</b>
              <br />
              <span className="cap">“nhận lại 100% số tiền”</span>
            </p>
          </div>
          <div className="sig">
            <span className="sig__n tone-danger">3</span>
            <p className="txt">
              {"Mạo danh "}
              <b>cơ quan tư pháp</b>
              {" qua tin nhắn"}
            </p>
          </div>
          <div className="sig">
            <span className="sig__n tone-danger">4</span>
            <p className="txt">Biết bác vừa bị lừa – kẻ gian nhắm vào nạn nhân</p>
          </div>
        </div>
        <div className="fs-banner fs-banner--danger">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
          <div>
            <p className="fs-banner__title">Đừng chuyển, đừng trả lời</p>
            <p className="fs-banner__text">
              Cơ quan chức năng không thu phí để lấy lại tiền qua tin nhắn hay mạng xã hội.
            </p>
          </div>
        </div>
        <p className="cap">Đây là các dấu hiệu cần kiểm tra, không phải kết luận. Đã thêm vào bản đồ sự cố.</p>
      </div>
      <div className="actions">
        <Link href="/c2-quan-ly-chia-se" className="fs-btn fs-btn--family fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
            <path d="M16 3.1a4 4 0 0 1 0 7.8" />
          </svg>
          Báo cho người thân
        </Link>
        <Link href="/b4-ban-do" className="fs-btn fs-btn--secondary fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z" />
            <path d="M9 4v14" />
            <path d="M15 6v14" />
          </svg>
          Về bản đồ sự cố
        </Link>
      </div>
    </div>
  );
}
