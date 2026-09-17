import { Children, cloneElement, isValidElement, type ReactNode, type ReactElement } from "react";
import messages from "./en.json";

export type Locale = "es" | "en";
const english: Record<string, string> = messages;
export const normalizeText = (text: string) => text.replace(/\s+/g, " ").trim();

export function translateText(text: string, locale: Locale): string {
  if (locale === "es" || !text.trim()) return text;
  const translated = english[normalizeText(text)];
  if (translated === undefined) return text;
  return `${text.match(/^\s*/)?.[0] ?? ""}${translated}${text.match(/\s*$/)?.[0] ?? ""}`;
}

export function localePath(path: string, locale: Locale): string {
  if (!path.startsWith("/") || path.startsWith("//") || /\.[a-z0-9]+(?:[?#]|$)/i.test(path)) return path;
  const pathname = path.split(/[?#]/, 1)[0];
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  // Keep query strings and fragments intact when switching the home route.
  const tail = path.slice(pathname.length);
  return (locale === "en" ? `/en${bare === "/" ? "" : bare}` : bare) + tail;
}

/** Localize authored React text before rendering, preserving events, refs and input values. */
export function localizeTree<T extends ReactNode>(node: T, locale: Locale): T {
  if (locale === "es") return node;
  if (typeof node === "string") return translateText(node, locale) as T;
  if (Array.isArray(node)) return Children.map(node, child => localizeTree(child, locale)) as unknown as T;
  if (!isValidElement(node)) return node;
  const element = node as ReactElement<Record<string, unknown>>;
  if (element.props.translate === "no" || element.type === "script" || element.type === "style") return node;
  const updates: Record<string, unknown> = {};
  for (const key of ["alt", "title", "placeholder", "aria-label", "aria-description"]) {
    if (typeof element.props[key] === "string") updates[key] = translateText(element.props[key], locale);
  }
  if (typeof element.props.href === "string" && !element.props.hrefLang) updates.href = localePath(element.props.href, locale);
  if (element.props.children !== undefined) updates.children = localizeTree(element.props.children as ReactNode, locale);
  return cloneElement(element, updates) as T;
}
