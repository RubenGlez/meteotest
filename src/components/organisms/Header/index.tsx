import Typography from "../../atoms/Typography";
import LangSelector from "../../molecules/LangSelector";
import { HeaderContainer, HeaderContainerColumn } from "./styled";
import { HeaderProps } from "./types";

export default function Header({
  languages,
  selectedLanguage,
  handleLanguageSelect,
}: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContainerColumn>
        <Typography as="h1" size="l">
          MeteoTest
        </Typography>
      </HeaderContainerColumn>
      <HeaderContainerColumn>
        <LangSelector
          languages={languages}
          selectedLanguage={selectedLanguage}
          handleSelect={handleLanguageSelect}
        />
      </HeaderContainerColumn>
    </HeaderContainer>
  );
}
