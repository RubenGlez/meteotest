import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es/translation.json";
import en from "./locales/en/translation.json";

export enum AVAILABLE_LANGUAGES {
  en = "en",
  es = "es",
}

export const SUPPORTED_LANGUAGES = [
  AVAILABLE_LANGUAGES.es,
  AVAILABLE_LANGUAGES.en,
];

export const DEFAULT_LANGUAGE = AVAILABLE_LANGUAGES.en;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  supportedLngs: SUPPORTED_LANGUAGES,
  fallbackLng: DEFAULT_LANGUAGE,
  // debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export function handleChangeLanguage(lang: string) {
  i18n.changeLanguage(lang);
}

export default i18n;
