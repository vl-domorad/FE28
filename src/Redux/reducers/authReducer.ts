import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  UserActionPayload,
  ActivateUserPayload,
} from "../../Utils/globalTypes";

const INITIAL_STATE = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    createNewUser: (state, action: PayloadAction<UserActionPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUserPayload>) => {},
  },
});

export const { createNewUser, activateUser } = authSlice.actions;

export default authSlice.reducer;
