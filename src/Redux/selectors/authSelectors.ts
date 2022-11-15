import { RootState } from "../store";

export default {
  getCurrentUser: (state: RootState) => state.authReducer.user,
  getAuthStatus: (state: RootState) => state.authReducer.authStatus,
};
