import { ReactNode } from "react";
import { TabProps } from "../../molecules/Tab/types";

interface TabItem {
  id: TabProps["id"];
  title: TabProps["title"];
  content: ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultSelectedTab?: TabItem["id"];
}
