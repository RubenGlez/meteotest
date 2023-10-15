import { useTranslation } from "react-i18next";
import Header from "../../components/organisms/Header";
import {
  MeteoTestContainer,
  MeteoTestContent,
  MeteoTestWidgetWrapper,
} from "./styled";
import ForecastProvider from "../../providers/ForecastProvider";
import { createAPIForecastRepository } from "../../core/infrastructure/ApiForecastRepository";
import i18n, {
  AVAILABLE_LANGUAGES,
  handleChangeLanguage,
} from "../../services/i18n";
import Tabs from "../../components/organisms/Tabs";
import WeatherForecast from "../../components/organisms/WeatherForecast";
import { AVAILABLE_CITIES } from "./types";

export default function MeteoTest() {
  const forecastRepository = createAPIForecastRepository();
  const { t } = useTranslation();

  const tabs = [
    {
      id: AVAILABLE_CITIES.london,
      title: t("cities.london"),
      content: <WeatherForecast city={AVAILABLE_CITIES.london} />,
    },
    {
      id: AVAILABLE_CITIES.toronto,
      title: t("cities.toronto"),
      content: <WeatherForecast city={AVAILABLE_CITIES.toronto} />,
    },
    {
      id: AVAILABLE_CITIES.singapore,
      title: t("cities.singapore"),
      content: <WeatherForecast city={AVAILABLE_CITIES.singapore} />,
    },
  ];

  const languages = [
    {
      label: t("langNames.es"),
      value: AVAILABLE_LANGUAGES.es,
    },
    {
      label: t("langNames.en"),
      value: AVAILABLE_LANGUAGES.en,
    },
  ];

  return (
    <MeteoTestContainer>
      <Header
        languages={languages}
        selectedLanguage={i18n.language}
        handleLanguageSelect={handleChangeLanguage}
      />
      <MeteoTestContent>
        <MeteoTestWidgetWrapper>
          <ForecastProvider repository={forecastRepository}>
            <Tabs tabs={tabs} />
          </ForecastProvider>
        </MeteoTestWidgetWrapper>
      </MeteoTestContent>
    </MeteoTestContainer>
  );
}
