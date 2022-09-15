import { TabsNames } from "../../Utils/globalTypes";

export type TabsNameArray = {
  key: TabsNames;
  title: string;
  disabled?: boolean;
};

export type TabsProps = {
  tabs: Array<TabsNameArray>;
  onClick: (id: TabsNames) => void;
  activeTab: TabsNames;
};
