import { create } from "apisauce";
import {
  ActivationParams,
  AuthUserPayload,
  PER_PAGE,
  UserActionPayload,
} from "../../Utils";

const API = create({
  baseURL: "https://studapi.teachmeskills.by",
});

const createNewUser = (userData: UserActionPayload) => {
  return API.post("/auth/users/", userData);
};

const getPostsList = (offset: number, ordering: string) => {
  return API.get("/blog/posts/", { limit: PER_PAGE, offset, ordering });
};

const activateNewUser = (params: ActivationParams) => {
  return API.post("/auth/users/activation/", params);
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

const verifyToken = (token: string) => {
  return API.post("/auth/jwt/verify/", { token });
};

const refreshToken = (refresh: string) => {
  return API.post("/auth/jwt/refresh/", { refresh });
};

const getSearchedPosts = (search: string, offset: number) => {
  return API.get("/blog/posts/", { search, limit: 10, offset });
};

const getMyPostsList = (token: string) => {
  return API.get(
    "/blog/posts/my_posts/",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const addNewPost = (token: string, data: any) => {
  return API.post("/blog/posts/", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

const saveEditedPost = (token: string, id: string, data: any) => {
  return API.put(`/blog/posts/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

const deletePost = (token: string, id: string) => {
  return API.delete(
    `/blog/posts/${id}/`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default {
  createNewUser,
  getPostsList,
  activateNewUser,
  getPost,
  authUser,
  getCurrentUser,
  verifyToken,
  refreshToken,
  getSearchedPosts,
  getMyPostsList,
  addNewPost,
  saveEditedPost,
  deletePost,
};
