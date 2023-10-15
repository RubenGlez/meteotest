import Tab from "../Tab";
import { TabBarContainer } from "./styled";
import { TabBarProps } from "./types";

export default function TabBar({
  tabs,
  selectedTab,
  handleTabSelect,
}: TabBarProps) {
  return (
    <TabBarContainer role="tablist">
      {tabs.map((tab) => {
        const isSelected = tab.id === selectedTab;
        return (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            handleClick={handleTabSelect}
            isSelected={isSelected}
          />
        );
      })}
    </TabBarContainer>
  );
}
