import { useState } from "react";
import TabContent from "../../atoms/TabContent";
import TabBar from "../../molecules/TabBar";
import { TabsContainer } from "./styled";
import { TabsProps } from "./types";

export default function Tabs({
  tabs = [],
  defaultSelectedTab = "",
}: TabsProps) {
  const firstTabId = tabs[0].id;
  const [selectedTab, setSelectedTab] = useState(
    defaultSelectedTab || firstTabId
  );
  const handleTabSelect = (tabId: string) => {
    setSelectedTab(tabId);
  };
  const selectedTabContent = tabs.find((tab) => tab.id === selectedTab)
    ?.content || <></>;

  return (
    <TabsContainer>
      <TabBar
        tabs={tabs}
        selectedTab={selectedTab}
        handleTabSelect={handleTabSelect}
      />
      <TabContent>{selectedTabContent}</TabContent>
    </TabsContainer>
  );
}
