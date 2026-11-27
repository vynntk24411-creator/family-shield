import type { ComponentType } from "react";
import MainScreen from "@/components/screens/main";
import A1KeScreen from "@/components/screens/a1-ke";
import A2PhanTichScreen from "@/components/screens/a2-phan-tich";
import A3KetQuaScreen from "@/components/screens/a3-ket-qua";
import A4ChoNguoiThanScreen from "@/components/screens/a4-cho-nguoi-than";
import A5KiemChungScreen from "@/components/screens/a5-kiem-chung";
import B1KhanCapScreen from "@/components/screens/b1-khan-cap";
import B2HoiNhanhScreen from "@/components/screens/b2-hoi-nhanh";
import B3BangChungScreen from "@/components/screens/b3-bang-chung";
import B4BanDoScreen from "@/components/screens/b4-ban-do";
import B5DieuPhoiScreen from "@/components/screens/b5-dieu-phoi";
import B6HoSoScreen from "@/components/screens/b6-ho-so";
import C1MoiNguoiThanScreen from "@/components/screens/c1-moi-nguoi-than";
import C2QuanLyChiaSeScreen from "@/components/screens/c2-quan-ly-chia-se";
import C3NguoiThanNghiNgoScreen from "@/components/screens/c3-nguoi-than-nghi-ngo";
import C4NguoiThanDieuPhoiScreen from "@/components/screens/c4-nguoi-than-dieu-phoi";
import D1YeuCauMoiScreen from "@/components/screens/d1-yeu-cau-moi";
import E1LoiTaiAnhScreen from "@/components/screens/e1-loi-tai-anh";
import E2ThieuChungCuScreen from "@/components/screens/e2-thieu-chung-cu";
import E3AILoiScreen from "@/components/screens/e3-ai-loi";
import E4LinkHetHanScreen from "@/components/screens/e4-link-het-han";

export type Screen = {
  id: string;
  slug: string;
  title: string;
  Component: ComponentType;
};

export const screens: Screen[] = [
  { id: "Main", slug: "", title: "Trang chủ Chống lừa đảo", Component: MainScreen },
  { id: "A1-Ke", slug: "a1-ke", title: "A1 · Kể tình huống", Component: A1KeScreen },
  { id: "A2-PhanTich", slug: "a2-phan-tich", title: "A2 · AI đang phân tích", Component: A2PhanTichScreen },
  { id: "A3-KetQua", slug: "a3-ket-qua", title: "A3 · Kết quả phân tích", Component: A3KetQuaScreen },
  {
    id: "A4-ChoNguoiThan",
    slug: "a4-cho-nguoi-than",
    title: "A4 · Chờ người thân phản hồi",
    Component: A4ChoNguoiThanScreen,
  },
  { id: "A5-KiemChung", slug: "a5-kiem-chung", title: "A5 · Tự kiểm chứng", Component: A5KiemChungScreen },
  { id: "B1-KhanCap", slug: "b1-khan-cap", title: "B1 · Việc cần làm ngay", Component: B1KhanCapScreen },
  { id: "B2-HoiNhanh", slug: "b2-hoi-nhanh", title: "B2 · Hỏi nhanh", Component: B2HoiNhanhScreen },
  { id: "B3-BangChung", slug: "b3-bang-chung", title: "B3 · Thu bằng chứng", Component: B3BangChungScreen },
  { id: "B4-BanDo", slug: "b4-ban-do", title: "B4 · Bản đồ sự cố", Component: B4BanDoScreen },
  { id: "B5-DieuPhoi", slug: "b5-dieu-phoi", title: "B5 · Bảng điều phối", Component: B5DieuPhoiScreen },
  { id: "B6-HoSo", slug: "b6-ho-so", title: "B6 · Xuất hồ sơ", Component: B6HoSoScreen },
  { id: "C1-MoiNguoiThan", slug: "c1-moi-nguoi-than", title: "C1 · Mời người thân", Component: C1MoiNguoiThanScreen },
  {
    id: "C2-QuanLyChiaSe",
    slug: "c2-quan-ly-chia-se",
    title: "C2 · Trạng thái lời mời và quyền chia sẻ",
    Component: C2QuanLyChiaSeScreen,
  },
  {
    id: "C3-NguoiThan-NghiNgo",
    slug: "c3-nguoi-than-nghi-ngo",
    title: "C3 · Người thân: xem giúp trước khi chuyển",
    Component: C3NguoiThanNghiNgoScreen,
  },
  {
    id: "C4-NguoiThan-DieuPhoi",
    slug: "c4-nguoi-than-dieu-phoi",
    title: "C4 · Người thân: cùng xử lý sự cố",
    Component: C4NguoiThanDieuPhoiScreen,
  },
  {
    id: "D1-YeuCauMoi",
    slug: "d1-yeu-cau-moi",
    title: "D1 · Kiểm tra tin “lấy lại tiền”",
    Component: D1YeuCauMoiScreen,
  },
  { id: "E1-LoiTaiAnh", slug: "e1-loi-tai-anh", title: "E1 · Lỗi tải ảnh", Component: E1LoiTaiAnhScreen },
  {
    id: "E2-ThieuChungCu",
    slug: "e2-thieu-chung-cu",
    title: "E2 · Thiếu chứng cứ, chưa đủ thông tin",
    Component: E2ThieuChungCuScreen,
  },
  { id: "E3-AILoi", slug: "e3-ai-loi", title: "E3 · AI không phản hồi", Component: E3AILoiScreen },
  {
    id: "E4-LinkHetHan",
    slug: "e4-link-het-han",
    title: "E4 · Link hết hạn hoặc đã thu hồi",
    Component: E4LinkHetHanScreen,
  },
];

export const hrefOf = (screen: Screen) => "/" + screen.slug;

export const findScreenBySlug = (slug: string) => screens.find((s) => s.slug === slug);
