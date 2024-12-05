export type Language = 'en' | 'ar';

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}