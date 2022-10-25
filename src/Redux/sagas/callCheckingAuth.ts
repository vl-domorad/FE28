//@ts-nocheck
import { call, put } from "redux-saga/effects";

import Api from "../api";

import { ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME } from "../../Utils";

import { logoutUser } from "../reducers/authReducer";


function* callCheckingAuth(api, ...allRestParams) {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_NAME);
  const response = yield call(api, accessToken, ...allRestParams);
  const code = response.status;
  if (code === 401) {
    const { status: accessStatus } = yield call(Api.verifyToken, accessToken);
    if (accessStatus === 401) {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN_NAME);
      const { status: refreshStatus } = yield call(
        Api.verifyToken,
        refreshToken
      );
      if (refreshStatus === 200) {
        const { status, data, problem } = yield call(
          Api.refreshToken,
          refreshToken
        );
        if (status === 200) {
          const { access } = data;
          localStorage.setItem(ACCESS_TOKEN_NAME, access);
          const newResponse = yield call(api, access, ...allRestParams);
          return newResponse;
        } else {
          //Что-то пошло сильно не так - выносим человека из приложения от греха подальше
          console.log(problem);
          yield put(logoutUser());
        }
      } else {
        // refreshToken умер
        yield put(logoutUser());
      }
    } else {
      return response;
    }
  } else {
    return response;
  }
}
export default callCheckingAuth;

// function* callCheckingAuthWithoutRefresh(api, ...allRestParams) {
//   const accessToken = localStorage.getItem(ACCESS_TOKEN_NAME); // Достали accessToken
//   const response = yield call(api, accessToken, ...allRestParams); // Сделали запрос в API, засунули туда первым параметром токен, а оставшиеся параметры у нас разворачиваются спред оператором
//
//   const code = response.status; // Достаем код запроса
//   if (code === 401) {
//     // logout()
//   } else {
//     return response
//   }
// }
