export default function E4LinkHetHanScreen() {
  return (
    <div className="fs scr" style={{ width: "390px" }}>
      <div className="hdr">
        <div className="hdr__row">
          <div className="hdr__t">
            <p className="hdr__title">Family Shield</p>
          </div>
        </div>
      </div>
      <div className="body" style={{ justifyContent: "center" }}>
        <div className="fs-state">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "190px" }}>
              <svg
                viewBox="0 0 240 160"
                width="240"
                height="160"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Mắt xích bị tách rời và ổ khóa"
                style={{ display: "block", maxWidth: "100%", height: "auto" }}
              >
                <circle cx="120" cy="88" r="62" fill="#f0f0f4" />
                <rect
                  x="52"
                  y="70"
                  width="64"
                  height="30"
                  rx="15"
                  fill="none"
                  stroke="#b8b8c2"
                  strokeWidth="9"
                  transform="rotate(-20 84 85)"
                />
                <rect
                  x="124"
                  y="70"
                  width="64"
                  height="30"
                  rx="15"
                  fill="none"
                  stroke="#b8b8c2"
                  strokeWidth="9"
                  transform="rotate(-20 156 85)"
                />
                <path
                  d="M112 58 L106 46 M120 56 L122 42 M128 60 L138 50"
                  stroke="#f85420"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <rect x="102" y="104" width="36" height="30" rx="7" fill="#eb2f96" />
                <path d="M110 104 V96 a10 10 0 0 1 20 0 V104" fill="none" stroke="#eb2f96" strokeWidth="5" />
                <circle cx="120" cy="118" r="4" fill="#ffffff" />
              </svg>
            </div>
          </div>
          <p className="fs-state__title">Bạn không còn quyền xem hồ sơ này</p>
          <p className="fs-state__text">
            Link đã hết hạn hoặc người chia sẻ đã ngừng chia sẻ. Đây là cách chúng tôi bảo vệ thông tin của họ.
          </p>
          <button className="fs-btn fs-btn--secondary fs-btn--block">
            <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            Gọi cho người đã gửi
          </button>
        </div>
        <p className="cap" style={{ textAlign: "center" }}>
          Nếu người thân vẫn cần bạn giúp, họ có thể gửi lời mời mới.
        </p>
      </div>
    </div>
  );
}
