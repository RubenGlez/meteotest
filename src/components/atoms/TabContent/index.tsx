import { PropsWithChildren } from "react";
import { TabContentWrapper } from "./styled";

export default function TabContent({ children }: PropsWithChildren) {
  return <TabContentWrapper>{children}</TabContentWrapper>;
}
