import Link from "next/link";

export default function A5KiemChungScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <Link href="/a3-ket-qua" className="hbtn" aria-label="Quay lại">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div className="hdr__t">
            <p className="hdr__title">Tự kiểm chứng</p>
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
        <h1 className="h-title">Kiểm chứng bằng kênh của bác</h1>
        <p className="h-sub">Không dùng số, link hay ứng dụng mà người lạ đưa.</p>
        <div className="fs-task">
          <span className="fs-task__check" />
          <div>
            <p className="fs-task__title">Gọi công an phường/xã nơi bác ở</p>
            <p className="cap">Hỏi xem có ai đang làm việc với bác không</p>
          </div>
        </div>
        <div className="fs-task">
          <span className="fs-task__check" />
          <div>
            <p className="fs-task__title">Gọi số in sau thẻ ngân hàng</p>
            <p className="cap">Không gọi số trong tin nhắn</p>
          </div>
        </div>
        <div className="fs-task">
          <span className="fs-task__check" />
          <div>
            <p className="fs-task__title">Hỏi “mật khẩu gia đình”</p>
            <p className="cap">Nếu người gọi xưng là con cháu</p>
          </div>
        </div>
        <div className="fs-task">
          <span className="fs-task__check" />
          <div>
            <p className="fs-task__title">Chờ giấy mời bằng văn bản</p>
            <p className="cap">Cơ quan chức năng gửi giấy, không làm việc qua mạng</p>
          </div>
        </div>
        <p className="cap">Đánh dấu xong cả 4 việc không có nghĩa là yêu cầu này an toàn.</p>
      </div>
      <div className="actions">
        <Link href="/" className="fs-btn fs-btn--primary fs-btn--block">
          Lưu và về trang chủ
        </Link>
        <Link href="/a4-cho-nguoi-than" className="fs-btn fs-btn--family fs-btn--block">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
            <path d="M16 3.1a4 4 0 0 1 0 7.8" />
          </svg>
          Nhờ người thân xem giúp
        </Link>
      </div>
    </div>
  );
}
