import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  UserActionPayload,
  ActivateUserPayload,
  AuthUserPayload,
  ACCESS_TOKEN_NAME,
  User
} from "../../Utils";

type AuthStateType = {
  user: User | null;
  authStatus: boolean;
};

const INITIAL_STATE: AuthStateType = {
  user: null,
  authStatus: !!localStorage.getItem(ACCESS_TOKEN_NAME)
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    createNewUser: (state, action: PayloadAction<UserActionPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUserPayload>) => {},
    authUser: (state, action: PayloadAction<AuthUserPayload>) => {},
    logoutUser: (state, action: PayloadAction<undefined>) => {},
    setAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.authStatus = action.payload;
    },
    getUser: (state, action: PayloadAction<undefined>) => {},
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  }
});

export const { createNewUser, activateUser, authUser, setAuthStatus,setUser, getUser,logoutUser} =
  authSlice.actions;

export default authSlice.reducer;
