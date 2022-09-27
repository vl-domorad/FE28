import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CardListType,
  CardPostType,
  LikeStatus,
  TabsNames,
} from "../../Utils/globalTypes";

type PostStateType = {
  selectedPost: CardPostType | null;
  activeTab: TabsNames;
  cardsList: CardListType;
  favouritePostsList: CardListType;
  singlePost: CardPostType | null;
  isPostLoading: boolean;
};

const INITIAL_STATE: PostStateType = {
  selectedPost: null,
  activeTab: TabsNames.All,
  cardsList: [],
  favouritePostsList: [],
  singlePost: null,
  isPostLoading: false,
};

const postsReducer = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    getPosts: (state, action: PayloadAction<undefined>) => {},
    getSinglePost: (state, action: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<CardPostType>) => {
      state.singlePost = action.payload;
    },
    setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostLoading = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<CardPostType | null>) => {
      state.selectedPost = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<TabsNames>) => {
      state.activeTab = action.payload;
    },
    setCardsList: (state, action: PayloadAction<CardListType>) => {
      state.cardsList = action.payload.map((card) => {
        return {
          ...card,
          likeStatus: null,
        };
      });
    },
    setFavouritePost: (state, action: PayloadAction<CardPostType>) => {
      const { id } = action.payload;
      const postIndex = state.favouritePostsList.findIndex(
        (post) => post.id === id
      );
      if (postIndex === -1) {
        state.favouritePostsList.push(action.payload);
      } else {
        state.favouritePostsList.splice(postIndex, 1);
      }
    },
    setLikeStatus: (
      state,
      action: PayloadAction<{ status: LikeStatus; id: number }>
    ) => {
      const post = state.cardsList.find((c) => c.id === action.payload.id);
      const postIndex = state.cardsList.findIndex(
        (c) => c.id === action.payload.id
      );
      //тут мы просто доп проверяем, нашел ли у нас find в массиве общих постов нужный нам
      if (post && postIndex !== -1) {
        //Если уже стоит лайк или дизлайк - убрать его и поставить null
        if (post.likeStatus === action.payload.status) {
          state.cardsList.splice(postIndex, 1, {
            ...post,
            likeStatus: null,
          });
        } else {
          //Иначе дать ему актуальный статус
          state.cardsList.splice(postIndex, 1, {
            ...post,
            likeStatus: action.payload.status,
          });
        }
      }
    },
  },
});

export default postsReducer.reducer;

export const {
  getPosts,
  setSelectedPost,
  setActiveTab,
  setCardsList,
  setFavouritePost,
  setLikeStatus,
  getSinglePost,
  setSinglePost,
  setSinglePostLoading,
} = postsReducer.actions;
