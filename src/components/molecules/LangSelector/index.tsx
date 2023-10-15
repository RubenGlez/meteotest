import Typography from "../../atoms/Typography";
import {
  LangSelectorContainer,
  LangSelectorList,
  LangSelectorItem,
} from "./styled";
import { LangSelectorProps, Language } from "./types";

export default function LangSelector({
  languages,
  selectedLanguage,
  handleSelect,
}: LangSelectorProps) {
  const hasLanguages = languages.length > 0;
  const handleItemClick = (langValue: Language["value"]) => () => {
    handleSelect(langValue);
  };

  return hasLanguages ? (
    <LangSelectorContainer>
      <LangSelectorList>
        {languages.map((lang) => {
          const isSelected = lang.value === selectedLanguage;
          return (
            <LangSelectorItem
              key={lang.value}
              $isSelected={isSelected}
              onClick={handleItemClick(lang.value)}
            >
              <Typography color={isSelected ? "primary" : "secondary"} size="s">
                {lang.label}
              </Typography>
            </LangSelectorItem>
          );
        })}
      </LangSelectorList>
    </LangSelectorContainer>
  ) : (
    <></>
  );
}
