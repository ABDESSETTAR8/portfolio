import { Locale } from "./i18n/translations";

export type ProjectCategory = "AI/ML" | "Simulation" | "Full-Stack";

export interface LocalizedText {
  en: string;
  fr: string;
  ar: string;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  featured: boolean;
  icon: string;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
  title: LocalizedText;
  description: LocalizedText;
}

export function localized(text: LocalizedText, locale: Locale): string {
  return text[locale] ?? text.en;
}
