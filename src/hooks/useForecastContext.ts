import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

export default function useForecastContext() {
  const forecastContext = useContext(ForecastContext);
  return forecastContext;
}
