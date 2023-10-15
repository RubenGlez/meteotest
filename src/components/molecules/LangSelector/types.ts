export interface Language {
  value: string;
  label: string;
}

export interface LangSelectorProps {
  languages: Language[];
  selectedLanguage: Language["value"];
  handleSelect: (lang: Language["value"]) => void;
}
