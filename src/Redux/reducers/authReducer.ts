import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  UserActionPayload,
  ActivateUserPayload,
  AuthUserPayload,
  ACCESS_TOKEN_NAME,
} from "../../Utils";

const INITIAL_STATE = {
  user: null,
  authStatus: !!localStorage.getItem(ACCESS_TOKEN_NAME), //тут мы проверяем - если токен есть - true, иначе false
};

// ! - первое "не" приводит сначала к булиновскому типу -> конвертирует в обратное ему
// !undefined -> !false -> true
// !!undefined -> !!false -> !true -> false

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    createNewUser: (state, action: PayloadAction<UserActionPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUserPayload>) => {},
    authUser: (state, action: PayloadAction<AuthUserPayload>) => {},
    setAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.authStatus = action.payload;
    },
    // TODO сюда пихнуть getAction - user
    // TODO сюда пихнуть setAction - user
  },
});

export const { createNewUser, activateUser, authUser, setAuthStatus } =
  authSlice.actions;

export default authSlice.reducer;
