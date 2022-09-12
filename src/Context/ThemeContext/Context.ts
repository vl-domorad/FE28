import { createContext, useContext } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark"
}

const DEFAULT_VALUE = {
  theme: Theme.Light,
  onChangeTheme: ()=>{}
};
const ThemeContext = createContext(DEFAULT_VALUE);

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
