import { StyledText } from "./styled";
import { TypographyProps } from "./types";

export default function Typography({
  children,
  as = "span",
  size = "m",
  color = "primary",
  weight = "normal",
  transform = "none",
}: TypographyProps) {
  return (
    <StyledText
      as={as}
      $size={size}
      $color={color}
      $weight={weight}
      $transform={transform}
    >
      {children}
    </StyledText>
  );
}
