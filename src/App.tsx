import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

// @ts-ignore
import styles from "./App.module.css";

import ThemeProvider from "./Context/ThemeContext/Provider";
import Router from "./Pages/Router";
import store from "./Redux/store";
import { changeTheme } from "./Redux/reducers/themeReducer";
import ThemeSelectors from "./Redux/selectors/themeSelectors";

const App = () => {
  const theme = useSelector(ThemeSelectors.getTheme);
  const dispatch = useDispatch();

  const onChangeTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithStore;
