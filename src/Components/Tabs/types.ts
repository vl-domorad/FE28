export type TabsNameArray = {
    key: string;
    title: string;
    disabled?:boolean;
  
  };
  
export type TabsProps = {
    tabs: Array<TabsNameArray>;
  };