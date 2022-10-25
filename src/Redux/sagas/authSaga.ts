import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, call, put } from "redux-saga/effects";
import {
  ActivateUserPayload,
  AuthUserPayload,
  RegistrationStatus,
  UserActionPayload,
  ACCESS_TOKEN_NAME,
  REFRESH_TOKEN_NAME
} from "../../Utils";
import {
  activateUser,
  createNewUser,
  authUser,
  setAuthStatus,
  setUser,
  getUser,
  logoutUser
} from "../reducers/authReducer";

import Api from "../api";
import callCheckingAuth from "./callCheckingAuth";

function* createNewUserWorker(action: PayloadAction<UserActionPayload>) {
  const { status, problem } = yield call(Api.createNewUser, action.payload);

  if (status === 200) {
    console.log("REGISTERED");
  } else {
    console.log("PROBLEM", problem);
  }

  //   console.log("FROM SAGA", action.payload);
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

function* logout() {
  localStorage.removeItem(ACCESS_TOKEN_NAME);
  localStorage.removeItem(REFRESH_TOKEN_NAME);
  yield put(setAuthStatus(false));
}

function* getCurrentUser() {
  const { status, problem, data } = yield callCheckingAuth(Api.getCurrentUser);

  if (status === 200) {
    yield put(setUser(data));
  } else {
    console.log("Error getting user", problem);
  }
}

export default function* authWatcher() {
  yield all([
    takeLatest(createNewUser, createNewUserWorker),
    takeLatest(activateUser, activateUserWorker),
    takeLatest(authUser, authUserWorker),
    takeLatest(logoutUser, logout), 
    takeLatest(getUser, getCurrentUser),

  ]);
}
