import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  activateUser,
  createNewUser,
  authUser,
  setAuthStatus,
} from "../reducers/authReducer";
import {
  ActivateUserPayload,
  AuthUserPayload,
  RegistrationStatus,
  UserActionPayload,
  ACCESS_TOKEN_NAME,
  REFRESH_TOKEN_NAME,
} from "../../Utils";
import Api from "../api";

function* createNewUserWorker(action: PayloadAction<UserActionPayload>) {
  const { status, problem } = yield call(Api.createNewUser, action.payload);
  if (status === 200) {
    console.log("REGISTERED");
  } else {
    console.log("PROBLEM", problem);
  }
}

function* activateUserWorker(action: PayloadAction<ActivateUserPayload>) {
  const { params, callback } = action.payload;
  const { status, problem } = yield call(Api.activateNewUser, params);
  if (status === 204) {
    callback(RegistrationStatus.Success);
  } else {
    callback(RegistrationStatus.Failed);
    console.log("Problem activating", problem);
  }
}

function* authUserWorker(action: PayloadAction<AuthUserPayload>) {
  const { status, problem, data } = yield call(Api.authUser, action.payload);
  if (status === 200) {
    const { access, refresh } = data;
    localStorage.setItem(ACCESS_TOKEN_NAME, access);
    localStorage.setItem(REFRESH_TOKEN_NAME, refresh);
    yield put(setAuthStatus(!!access));
  } else {
    console.log("Problem authenticating user", problem);
  }
}

function* getCurrentUser() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_NAME);
  if (accessToken) {
    //TODO тут дописываем сагу
    const { status, problem, data } = yield call(
      Api.getCurrentUser,
      accessToken
    );
  }
}

export default function* authWatcher() {
  yield all([
    takeLatest(createNewUser, createNewUserWorker),
    takeLatest(activateUser, activateUserWorker),
    takeLatest(authUser, authUserWorker),
  ]);
}
