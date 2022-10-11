export default {
  getCurrentUser: (state: any) => state.authReducer.user,
  getAuthStatus: (state: any) => state.authReducer.authStatus,
};
