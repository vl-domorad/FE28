import { combineReducers } from "@reduxjs/toolkit";

import themeReducer from "./themeReducer";
import postsReducer from "./postsReducer";

const reducer = combineReducers({
  themeReducer,
  postsReducer,
});

export default reducer;
