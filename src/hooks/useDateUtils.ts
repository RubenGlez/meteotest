import { useTranslation } from "react-i18next";
import i18n from "../services/i18n";

export default function useDateUtils() {
  const { t } = useTranslation();

  function getDayOfTheWeek(timestamp: number) {
    const date = new Date(timestamp);
    const currentDate = new Date();

    if (date.toDateString() === currentDate.toDateString()) {
      return t("today");
    } else {
      const weekDay = date.toLocaleDateString(i18n.language, {
        weekday: "long",
      });
      return weekDay;
    }
  }

  function parseTime(timestamp: number) {
    const date = new Date(timestamp);

    const parsedTime = date.toLocaleTimeString(i18n.language, {
      hour: "numeric",
      minute: "numeric",
    });
    return parsedTime;
  }

  function parseFullDate(timestamp: number) {
    const date = new Date(timestamp);

    const parsedTime = date.toLocaleTimeString(i18n.language, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return parsedTime;
  }

  return { getDayOfTheWeek, parseTime, parseFullDate };
}
