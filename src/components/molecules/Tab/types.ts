export interface TabProps {
  id: string;
  title: string;
  handleClick: (tabId: string) => void;
  isSelected: boolean;
}
