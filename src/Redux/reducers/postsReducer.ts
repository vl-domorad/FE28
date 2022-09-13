import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  selectedPost: null,
};

const postsReducer = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export default postsReducer.reducer;

export const { setSelectedPost } = postsReducer.actions;
