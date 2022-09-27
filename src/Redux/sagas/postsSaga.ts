import { all, call, takeLatest, put } from "redux-saga/effects";

import {
  getPosts,
  getSinglePost,
  setCardsList,
  setSinglePost,
  setSinglePostLoading,
} from "../reducers/postsReducer";
import Api from "../api";
import { PayloadAction } from "@reduxjs/toolkit";

function* getPostsWorker() {
  const { data, status, problem } = yield call(Api.getPostsList);
  if (status === 200 && data) {
    yield put(setCardsList(data.results));
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

export default function* postsSagaWatcher() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
  ]);
}
