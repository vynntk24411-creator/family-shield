import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PrototypeShell } from "@/components/prototype-shell";
import { hrefOf, screens } from "@/lib/screens";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Family Shield – UI Mockups",
  description: "Prototype bấm được của Family Shield – cùng gia đình xử lý khi nghi bị lừa đảo.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eb2f96",
};

const navItems = screens.map((s) => ({ id: s.id, href: hrefOf(s), title: s.title }));

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body>
        <PrototypeShell items={navItems}>{children}</PrototypeShell>
      </body>
    </html>
  );
}
