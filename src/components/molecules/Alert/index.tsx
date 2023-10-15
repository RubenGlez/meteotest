import Typography from "../../atoms/Typography";
import { AlertBox, AlertContainer } from "./styled";
import { AlertProps } from "./types";

export default function Alert({ text }: AlertProps) {
  return (
    <AlertContainer>
      <AlertBox role="alert">
        <Typography>{text}</Typography>
      </AlertBox>
    </AlertContainer>
  );
}
