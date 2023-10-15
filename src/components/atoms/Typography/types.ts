import { TextColor } from "../../../providers/ThemeProvider/types";

export interface TypographyProps {
  children: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "time";
  size?: "s" | "m" | "l";
  color?: keyof TextColor;
  weight?: "thin" | "normal" | "bold";
  transform?: "none" | "uppercase" | "capitalize";
}
