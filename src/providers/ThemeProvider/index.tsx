import { PropsWithChildren } from "react";
import { ThemeProvider as TProvider } from "styled-components";
import theme from "../../styles/theme";

const ThemeProvider = ({ children }: PropsWithChildren) => (
  <TProvider theme={theme}>{children}</TProvider>
);

export default ThemeProvider;
