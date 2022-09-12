import React, { useState } from "react";
// @ts-ignore
import styles from "./App.module.css";
import ThemeProvider from "./Context/ThemeContext/Provider";
import { Theme } from "./Context/ThemeContext/Context";
import Router from "./Pages/Router";

function App() {
  const [theme, setTheme] = useState(Theme.Light);
  const onChangeTheme = () => {
    const themeValue = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(themeValue);
  };
  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
