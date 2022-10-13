//@ts-nocheck
import { call } from "redux-saga/effects";

import Api from "../api";
import { ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME } from "../../Utils";

function* callCheckingAuth(api, ...allRestParams) {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_NAME); // Достали accessToken
  const response = yield call(api, accessToken, ...allRestParams); // Сделали запрос в API, засунули туда первым параметром токен, а оставшиеся параметры у нас разворачиваются спред оператором

  const code = response.status; // Достаем код запроса
  if (code === 401) {
    // Если 401 - проверить жив ли access
    const { status: accessStatus } = call(Api.verifyToken, accessToken); // проверка на то, насколько он жив
    if (accessStatus === 401) {
      // Если 401 - accessToken умер

      const refreshToken = localStorage.getItem(REFRESH_TOKEN_NAME); // Достали refreshToken
      const { status: refreshStatus } = call(Api.verifyToken, refreshToken); // проверка на то, насколько он жив

      if (refreshStatus === 200) {
        // refreshToken жив
        const { status, data, problem } = call(Api.refreshToken, refreshToken); // проверка на то, насколько он жив
        if (status === 200) {
          // успешно получили новый токен
          const { access } = data;
          localStorage.setItem(ACCESS_TOKEN_NAME, access); // засунули его в localStorage
          const newResponse = yield call(api, access, ...allRestParams); // сделали еще раз запрос на сервер (ИСХОДНЫЙ)
          return newResponse; // вернули пользователю уже нормальный ответ сервера
        } else {
          console.log(problem);
          // Что-то пошло сильно не так - выносим человека из приложения от греха подальше
          // TODO: дописать logout()
        }
      } else {
        // refreshToken умер
        // TODO: дописать logout()
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

// rest - массив из всех остальных параметров функции
// callCheckingAuth(Api.getUser, username, password, data, сколько, угодно, параметров)
// rest === [username, password, data, сколько, угодно, параметров]
//
// const arr = [1, 2, 4]
// const arr2 = ...arr - это spread => arr2 = 1, 2, 4
