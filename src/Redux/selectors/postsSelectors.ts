import { get } from "lodash";

import { RootState } from "../store";
import { CardPostType } from "../../Utils";

const postsMapper = (post: CardPostType) => {
  return {
    id: get(post, "id", 0) ?? 0,
    image: get(post, "image", "") || "",
    text: get(post, "text", "") || "",
    date: get(post, "date", "") || "",
    lesson_num: get(post, "lesson_num", 0) || 0,
    author: get(post, "author", 0) || 0,
    title: get(post, "title", "") || "",
    likeStatus: get(post, "likeStatus"),
  };
};

export default {
  getSelectedPost: (state: RootState) => state.postsReducer.selectedPost,
  getSelectedImgPost: (state: RootState) => state.postsReducer.selectedImgPost,
  getIsModalVisible: (state: RootState) =>
    get(state, "postsReducer.singlePostModalVisible", false) || false,
  getIsImgVisible: (state: RootState) =>
    get(state, "postsReducer.singleImgModalVisible", false) || false,
  getActiveTab: (state: RootState) => state.postsReducer.activeTab,
  getCardsList: (state: RootState) => {
    const cardsList = get(state, "postsReducer.cardsList", []) || [];
    return cardsList.map(postsMapper);
  },
  getFavoritePosts: (state: RootState) => state.postsReducer.favouritePostsList,
  getSinglePost: (state: RootState) => state.postsReducer.singlePost,
  getSinglePostLoading: (state: RootState) => state.postsReducer.isPostLoading,
  getSearchedPostsLoading: (state: RootState) =>
    state.postsReducer.isSearchPostsLoading,
  getSearchedPosts: (state: RootState) => {
    const searchedPosts = get(state, "postsReducer.searchedPosts", []) || [];
    return searchedPosts.map(postsMapper);
  },
  getCardsCount: (state: RootState) => state.postsReducer.cardsCount,
  getSearchedPostsCount: (state: RootState) =>
    state.postsReducer.searchedPostsCount,
};

// export type PostStateType = {
//   selectedPost: CardPostType | null;
//   selectedImgPost: CardPostType | null;
//   singlePostModalVisible: boolean;
//   singleImgModalVisible: boolean;
//   activeTab: TabsNames;
//   cardsList: CardListType;
//   favouritePostsList: CardListType;
//   singlePost: CardPostType | null;
//   isPostLoading: boolean;
//   isSearchPostsLoading: boolean;
//   searchedPosts: CardListType;
//   cardsCount: number;
//   searchedPostsCount: number;
// };
