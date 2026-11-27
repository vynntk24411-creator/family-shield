import Link from "next/link";
import { incident, relatives, tasks, times, victim } from "@/lib/data";

export default function B5DieuPhoiScreen() {
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
            <p className="hdr__title">Việc cần làm</p>
            <p className="hdr__sub">Bước 4/4</p>
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
          <i className="on" />
        </div>
      </div>
      <div className="body">
        <div className="row" style={{ justifyContent: "space-between", flexWrap: "nowrap" }}>
          <h1 className="h-title">Xong 2/6 việc</h1>
          <span className="row" style={{ gap: "4px" }}>
            <span className="fs-av fs-av--me">{victim.initial}</span>
            <span className="fs-av fs-av--fam">{relatives.lan.initial}</span>
          </span>
        </div>
        <div className="fs-progress">
          <i style={{ width: "33%" }} />
        </div>
        <div className="chiprow">
          <span className="fchip fchip--on">Tất cả 6</span>
          <span className="fchip">Của tôi 3</span>
          <span className="fchip">
            {"Của "}
            {relatives.lan.name}
            {" 2"}
          </span>
        </div>
        <div className="fs-banner fs-banner--danger">
          <svg className="ic " viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
          <div>
            <p className="fs-banner__title">Đừng chuyển thêm tiền, dù ai hứa hoàn lại</p>
          </div>
        </div>
        <div className="fs-task">
          <span className="fs-task__check" />
          <div style={{ flex: "1" }}>
            <span className="fs-task__num">Việc 1 · Gấp nhất</span>
            <p className="fs-task__title">{tasks[0].title}</p>
            <div className="fs-task__meta">
              <span className="fs-av fs-av--fam" style={{ width: "32px", height: "32px" }}>
                {relatives.lan.initial}
              </span>
              {"Chị "}
              {relatives.lan.name}
              {" · "}
              <span className="fs-badge tone-warning">
                <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Đang làm
              </span>
            </div>
            <details className="more">
              <summary>
                <span className="lbl">Kịch bản gọi</span>
                <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </summary>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                <p className="cap">
                  {"“Mẹ tôi bị lừa chuyển "}
                  {incident.amount}
                  {" lúc "}
                  {times.transfer}
                  {" tới tài khoản "}
                  {incident.receiverAccount}. Tôi đề nghị khóa ngân hàng điện tử và tra soát giao dịch.”
                </p>
              </div>
            </details>
          </div>
        </div>
        <div className="fs-task fs-task--done">
          <span className="fs-task__check">
            <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <div style={{ flex: "1" }}>
            <span className="fs-task__num">Việc 2</span>
            <p className="fs-task__title">{tasks[1].title}</p>
            <div className="fs-task__meta">
              <span className="fs-av fs-av--me" style={{ width: "32px", height: "32px" }}>
                {victim.initial}
              </span>
              {"Bác "}
              {victim.name}
              {" · Xong "}
              {times.task2Done}
            </div>
          </div>
        </div>
        <div className="fs-task fs-task--done">
          <span className="fs-task__check">
            <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <div style={{ flex: "1" }}>
            <span className="fs-task__num">Việc 3</span>
            <p className="fs-task__title">{tasks[2].title}</p>
            <div className="fs-task__meta">
              <span className="fs-av fs-av--me" style={{ width: "32px", height: "32px" }}>
                {victim.initial}
              </span>
              {"Bác "}
              {victim.name}
              {" · Xong "}
              {times.task3Done}
            </div>
          </div>
        </div>
        <div className="fs-task">
          <span className="fs-task__check" />
          <div style={{ flex: "1" }}>
            <span className="fs-task__num">Việc 4</span>
            <p className="fs-task__title">{tasks[3].title}</p>
            <div className="fs-task__meta">
              <span className="fs-av fs-av--me" style={{ width: "32px", height: "32px" }}>
                {victim.initial}
              </span>
              {"Bác "}
              {victim.name}
              {" · Chưa làm"}
            </div>
          </div>
        </div>
        <details className="more">
          <summary>
            <span className="lbl">Xem thêm 2 việc</span>
            <svg className="ic sm" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </summary>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
            <div className="fs-task">
              <span className="fs-task__check" />
              <div style={{ flex: "1" }}>
                <span className="fs-task__num">Việc 5</span>
                <p className="fs-task__title">{tasks[4].title}</p>
                <div className="fs-task__meta">
                  <span className="fs-av fs-av--fam" style={{ width: "32px", height: "32px" }}>
                    {relatives.lan.initial}
                  </span>
                  {"Chị "}
                  {relatives.lan.name}
                  {" · Chưa làm"}
                </div>
              </div>
            </div>
            <div className="fs-task">
              <span className="fs-task__check" />
              <div style={{ flex: "1" }}>
                <span className="fs-task__num">Việc 6</span>
                <p className="fs-task__title">{tasks[5].title}</p>
                <div className="fs-task__meta">
                  <span className="fs-av fs-av--fam" style={{ width: "32px", height: "32px" }}>
                    ?
                  </span>
                  Chưa giao · Chưa làm
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
      <div className="actions actions--row">
        <Link href="/c1-moi-nguoi-than" className="fs-btn fs-btn--secondary fs-btn--block">
          Mời thêm
        </Link>
        <Link href="/b6-ho-so" className="fs-btn fs-btn--primary fs-btn--block">
          Xuất hồ sơ
        </Link>
      </div>
    </div>
  );
}
