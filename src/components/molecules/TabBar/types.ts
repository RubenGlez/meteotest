export interface TabItem {
  id: string;
  title: string;
}

export interface TabBarProps {
  tabs: TabItem[];
  selectedTab: TabItem["id"];
  handleTabSelect: (tabId: TabItem["id"]) => void;
}
