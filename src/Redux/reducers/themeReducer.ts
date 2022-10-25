import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../../Context/ThemeContext/Context";

const INITIAL_STATE = {
  theme: Theme.Light
};

const themeSlice = createSlice({
  name: "theme",
  initialState: INITIAL_STATE,
  reducers: {
    changeTheme: (state, action:PayloadAction<undefined> ) => {
      const theme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;
      state.theme = theme;
    }
  }
});

const actions =themeSlice.actions
export const {changeTheme} = actions





export default themeSlice.reducer