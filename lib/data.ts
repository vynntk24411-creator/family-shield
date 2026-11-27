// Sample data for the prototype. Replace these with backend API responses later.

export type Person = {
  fullName: string;
  name: string;
  initial: string;
};

export const victim: Person = {
  fullName: "Nguyễn Thị Hoa",
  name: "Hoa",
  initial: "H",
};

export const relatives = {
  lan: {
    fullName: "Nguyễn Thị Lan",
    name: "Lan",
    initial: "L",
    relation: "Con gái",
    phone: "09xx ••• 356",
  },
  tuan: {
    fullName: "Anh Tuấn",
    name: "Tuấn",
    initial: "T",
    relation: "Con trai",
  },
  mai: {
    fullName: "Chị Mai",
    name: "Mai",
    initial: "M",
  },
} satisfies Record<string, Person & Record<string, string>>;

export const incident = {
  amount: "20.000.000đ",
  amountShort: "20 triệu",
  receiverAccount: "••• 4821",
  scammerPhone: "09xx ••• 812",
  scammerPhoneShort: "09xx·812",
  date: "26/11",
  shareExpiresDate: "27/11",
  elapsedForVictim: "12 phút",
  elapsedForRelative: "25 phút",
};

export const recoveryScam = {
  fee: "2.000.000đ",
};

export const times = {
  firstCall: "8:55",
  zaloMessage: "9:12",
  sentToRelative: "9:14",
  relativeSeen: "9:15",
  shareExpires: "9:20",
  transfer: "9:30",
  task2Done: "9:41",
  task3Done: "9:45",
  tuanInviteSent: "9:50",
  lanLastSeen: "9:52",
  bankCalled: "9:58",
  feeDemand: "10:05",
  maiRevoked: "8:30",
};

export type TaskStatus = "doing" | "done" | "todo";

export type Task = {
  id: number;
  title: string;
  urgent?: boolean;
  assignee: "victim" | "lan" | null;
  status: TaskStatus;
  doneAt?: string;
  hidden?: boolean;
};

export const tasks: Task[] = [
  { id: 1, title: "Gọi ngân hàng: khóa và tra soát", urgent: true, assignee: "lan", status: "doing" },
  { id: 2, title: "Ngừng trả lời người lạ", assignee: "victim", status: "done", doneAt: times.task2Done },
  { id: 3, title: "Đổi mật khẩu ngân hàng", assignee: "victim", status: "done", doneAt: times.task3Done },
  { id: 4, title: "Chụp trang cá nhân Zalo kẻ gian", assignee: "victim", status: "todo" },
  { id: 5, title: "Chuẩn bị hồ sơ trình báo", assignee: "lan", status: "todo", hidden: true },
  { id: 6, title: "Báo tài khoản Zalo giả mạo", assignee: null, status: "todo", hidden: true },
];
