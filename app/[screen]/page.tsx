import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { findScreenBySlug, screens } from "@/lib/screens";

type Props = { params: Promise<{ screen: string }> };

export function generateStaticParams() {
  return screens.filter((s) => s.slug).map((s) => ({ screen: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const screen = findScreenBySlug((await params).screen);
  return { title: screen ? `${screen.title} · Family Shield` : "Family Shield" };
}

export default async function ScreenPage({ params }: Props) {
  const screen = findScreenBySlug((await params).screen);
  if (!screen || !screen.slug) redirect("/");
  return <screen.Component />;
}
