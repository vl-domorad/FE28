import { all, call, takeLatest, put } from "redux-saga/effects";

import { getPosts, setCardsList } from "../reducers/postsReducer";
import Api from "../api";

function* getPostsWorker() {
  const { data, status, problem } = yield call(Api.getPostsList);
  if (status === 200 && data) {
    yield put(setCardsList(data.results));
  } else {
    console.log(problem);
  }
}

export default function* postsSagaWatcher() {
  yield all([takeLatest(getPosts, getPostsWorker)]);
}
