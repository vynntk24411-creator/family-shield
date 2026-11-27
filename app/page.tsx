import type { Metadata } from "next";
import MainScreen from "@/components/screens/main";
import { screens } from "@/lib/screens";

export const metadata: Metadata = {
  title: `${screens[0].title} · Family Shield`,
};

export default function HomePage() {
  return <MainScreen />;
}
