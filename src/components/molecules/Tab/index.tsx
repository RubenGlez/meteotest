import TabIndicator from "../../atoms/TabIndicator";
import Typography from "../../atoms/Typography";
import { TabContainer } from "./styled";
import { TabProps } from "./types";

export default function Tab({ id, title, handleClick, isSelected }: TabProps) {
  const onClick = () => {
    handleClick(id);
  };

  return (
    <TabContainer onClick={onClick} $isSelected={isSelected} role="tab">
      <Typography color={isSelected ? "active" : "primary"}>{title}</Typography>
      {isSelected && <TabIndicator />}
    </TabContainer>
  );
}
