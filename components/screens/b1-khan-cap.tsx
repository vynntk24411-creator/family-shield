import Link from "next/link";
import { incident } from "@/lib/data";

export default function B1KhanCapScreen() {
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
            <p className="hdr__title">Tôi đã chuyển tiền</p>
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
        <div className="row">
          <span className="fs-badge tone-warning">
            <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {"Đã trôi "}
            {incident.elapsedForVictim}
          </span>
        </div>
        <h1 className="h-title">Bình tĩnh. Làm 4 việc này trước.</h1>
        <div className="fs-task" style={{ border: "2px solid #f85420", paddingTop: "44px", position: "relative" }}>
          <span className="fs-ribbon" style={{ position: "absolute", top: "-2px", left: "-2px" }}>
            <b>Việc 1 · Gấp nhất</b>
            <span>Làm ngay</span>
          </span>
          <span className="sig__n tone-primary">1</span>
          <div style={{ flex: "1" }}>
            <p className="fs-task__title">Gọi ngay ngân hàng bác đã dùng để chuyển tiền</p>
            <p className="cap">Đề nghị khóa tài khoản, khóa ngân hàng điện tử và tra soát giao dịch.</p>
            <Link href="/b2-hoi-nhanh" className="fs-btn fs-btn--primary fs-btn--block" style={{ marginTop: "10px" }}>
              <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
              Chọn ngân hàng để gọi
            </Link>
          </div>
        </div>
        <div className="fs-task">
          <span className="sig__n tone-unknown">2</span>
          <div>
            <p className="fs-task__title">Ngừng liên lạc với người kia</p>
            <p className="cap">Không trả lời, không chuyển thêm dù họ hứa hoàn tiền.</p>
          </div>
        </div>
        <div className="fs-task">
          <span className="sig__n tone-unknown">3</span>
          <div>
            <p className="fs-task__title">Đổi mật khẩu, kiểm tra thiết bị đăng nhập</p>
            <p className="cap">Nhất là khi đã đưa mã OTP hoặc cài ứng dụng lạ.</p>
          </div>
        </div>
        <div className="fs-task">
          <span className="sig__n tone-unknown">4</span>
          <div>
            <p className="fs-task__title">Không xóa tin nhắn, cuộc gọi</p>
            <p className="cap">Đó là bằng chứng để trình báo.</p>
          </div>
        </div>
        <p className="cap">Theo khuyến cáo của cơ quan chức năng · Hiển thị ngay, không cần AI</p>
      </div>
      <div className="actions">
        <Link href="/b2-hoi-nhanh" className="fs-btn fs-btn--secondary fs-btn--block">
          Tiếp tục lập hồ sơ
        </Link>
        <Link href="/c1-moi-nguoi-than" className="fs-btn fs-btn--family fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
            <path d="M16 3.1a4 4 0 0 1 0 7.8" />
          </svg>
          Mời người thân cùng xử lý
        </Link>
      </div>
    </div>
  );
}
