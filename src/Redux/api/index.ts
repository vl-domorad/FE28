import { create } from "apisauce";
import {
  ActivationParams,
  AuthUserPayload,
  UserActionPayload,
} from "../../Utils/globalTypes";

// apisauce -> обертка над axios -> обертка над fetch

const API = create({
  baseURL: "https://studapi.teachmeskills.by",
});

const createNewUser = (userData: UserActionPayload) => {
  return API.post("/auth/users/", userData); // - тело;
};

// API: "https://studapi.teachmeskills.by", + "/auth/users/" - а довезти до BE - userData
// createNewUser(userData)
// fetch("https://studapi.teachmeskills.by/auth/users/", method: 'POST', body: userData)

const getPostsList = () => {
  return API.get("/blog/posts/?limit=10"); // - параметры;
};

const activateNewUser = (params: ActivationParams) => {
  return API.post("/auth/users/activation/", params); // - тело;
};

const getPost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};

const authUser = (params: AuthUserPayload) => {
  return API.post("/auth/jwt/create/", params);
};

const getCurrentUser = (token: string) => {
  return API.get(
    "/auth/users/me/",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export default {
  createNewUser,
  getPostsList,
  activateNewUser,
  getPost,
  authUser,
  getCurrentUser,
};
