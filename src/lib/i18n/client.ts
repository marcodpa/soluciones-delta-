"use client";
import { usePathname } from "next/navigation";
import { localizeTree, type Locale } from "./translate";
import type { ReactNode } from "react";
export function useLocale(): Locale {
  const pathname = usePathname();
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}
export function useLocalizedTree() {
  const locale = useLocale();
  return <T extends ReactNode>(node: T): T => localizeTree(node, locale);
}
