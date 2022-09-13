import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../../Context/ThemeContext/Context";

const INITIAL_STATE = {
  theme: Theme.Light,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: INITIAL_STATE,
  reducers: {
    changeTheme: (state, action: PayloadAction<undefined>) => {
      const theme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;
      state.theme = theme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
// const { changeTheme } = actions
// export const changeTheme = actions.changeTheme

export default themeSlice.reducer;

// const CHANGE_THEME = "CHANGE_THEME";
//
// const changeThemeAction = (payload: any) => {
//   return {
//     type: CHANGE_THEME,
//     payload,
//   };
// };
// //action отправляется из компонента и ловится редаксом -> топает в стор -> топает в rootReducer -> понимает,
// //что action type принадлежит редьюсеру theme -> отправляет его на нужный этаж
//
// const reducer = (state = INITIAL_STATE, action: any) => {
//   switch (action.type) {
//     case CHANGE_THEME:
//      { ...state, theme: state.theme === Theme.Light ? Theme.Dark : Theme.Light };
//   }
// };
