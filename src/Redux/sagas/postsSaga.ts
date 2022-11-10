import { all, takeLatest, call, put } from "redux-saga/effects";
import {
  getPosts,
  getSinglePost,
  searchForPosts,
  setCardsCount,
  setCardsList,
  setSearchedPosts,
  setSearchPostsLoading,
  setSinglePost,
  setSinglePostLoading,
  setSearchedPostsCount,
  getMyPostsList,
  addNewPost,
} from "../reducers/postsReducer";
import Api from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  AddNewPostPayload,
  GetPostsPayload,
  SearchPostsPayload,
} from "../../Utils";
import callCheckingAuth from "./callCheckingAuth";

function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
  const { offset, ordering } = action.payload;
  const { data, status, problem } = yield call(
    Api.getPostsList,
    offset,
    ordering
  );
  if (status === 200 && data) {
    yield put(setCardsCount(data.count));
    yield put(setCardsList(data.results));
  } else {
    console.log(problem);
  }
}

function* getMyPostsWorker() {
  const { data, status, problem } = yield callCheckingAuth(Api.getMyPostsList);
  if (status === 200 && data) {
    yield put(setCardsList(data));
  } else if (status === 400) {
    yield put(setCardsList([]));
  } else {
    console.log(problem);
  }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status, problem } = yield call(Api.getPost, action.payload);
  if (status === 200 && data) {
    yield put(setSinglePost(data));
  } else {
    console.log(problem);
  }
  yield put(setSinglePostLoading(false));
}

function* getSearchedPostsWorker(action: PayloadAction<SearchPostsPayload>) {
  const { offset, isOverwrite, search } = action.payload;

  yield put(setSearchPostsLoading(isOverwrite));
  const { data, status, problem } = yield call(
    Api.getSearchedPosts,
    search,
    offset
  );
  if (status === 200 && data) {
    yield put(setSearchedPostsCount(data.count));
    yield put(setSearchedPosts({ data: data.results, isOverwrite }));
  } else {
    console.log("Error getting search posts", problem);
  }
  yield put(setSearchPostsLoading(false));
}

function* addNewPostWorker(action: PayloadAction<AddNewPostPayload>) {
  const { formData, callback } = action.payload;
  const { status, problem } = yield callCheckingAuth(Api.addNewPost, formData);

  if (status === 201) {
    callback();
  } else {
    console.log("problem", problem);
  }
}

export default function* postsSagaWatcher() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getMyPostsList, getMyPostsWorker),
    takeLatest(searchForPosts, getSearchedPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(addNewPost, addNewPostWorker),
  ]);
}
