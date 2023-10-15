import { LangSelectorProps } from "../../molecules/LangSelector/types";

export interface HeaderProps {
  languages: LangSelectorProps["languages"];
  selectedLanguage: LangSelectorProps["selectedLanguage"];
  handleLanguageSelect: LangSelectorProps["handleSelect"];
}
