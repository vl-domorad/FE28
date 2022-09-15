export default {
  getSelectedPost: (state: any) => state.postsReducer.selectedPost,
  getActiveTab: (state: any) => state.postsReducer.activeTab,
  getCardsList: (state: any) => state.postsReducer.cardsList,
  getFavoritePosts: (state: any) => state.postsReducer.favouritePostsList,
};
