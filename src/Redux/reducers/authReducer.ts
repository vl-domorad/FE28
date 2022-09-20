import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserActionPayload } from "../../Utils/globalTypes";

const INITIAL_STATE = {};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    createNewUser: (state, action: PayloadAction<UserActionPayload>) => {},
  },
});

export const { createNewUser } = authSlice.actions;

export default authSlice.reducer;
