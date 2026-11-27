"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

export type NavItem = { id: string; href: string; title: string };

export function PrototypeShell({ items, children }: { items: NavItem[]; children: ReactNode }) {
  const pathname = usePathname();
  const viewportRef = useRef<HTMLDivElement>(null);
  const current = items.find((item) => item.href === pathname) ?? items[0];

  useEffect(() => {
    if (viewportRef.current) viewportRef.current.scrollTop = 0;
  }, [pathname]);

  return (
    <div className="wrap">
      <nav className="side" aria-label="Danh sách màn hình">
        <h1>Family Shield</h1>
        <p>Prototype bấm được · bản thiết kế ý tưởng dự thi, không phải giao diện chính thức của MoMo.</p>
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={item.id === current.id ? "on" : undefined}
            aria-current={item.id === current.id ? "page" : undefined}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="phone-frame">
        <div className="viewport" id="vp" ref={viewportRef}>
          <section key={pathname} className="screen on" id={current.id} data-title={current.title}>
            {children}
          </section>
        </div>
      </div>
    </div>
  );
}
