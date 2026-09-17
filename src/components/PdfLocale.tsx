"use client";

import { createContext, useContext, type ComponentProps, type ReactNode } from "react";
import { Text as PdfText } from "@react-pdf/renderer";
import { localizeTree, type Locale } from "@/lib/i18n/translate";

export const PdfLocale = createContext<Locale>("es");
export function Text({ children, ...props }: ComponentProps<typeof PdfText> & { children?: ReactNode }) {
  const locale = useContext(PdfLocale);
  return <PdfText {...props}>{localizeTree(children, locale)}</PdfText>;
}
