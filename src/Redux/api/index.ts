import { create } from "apisauce";
import { ActivationParams, UserActionPayload } from "../../Utils/globalTypes";

const API = create({
  baseURL: "https://studapi.teachmeskills.by",
});

const createNewUser = (userData: UserActionPayload) => {
  return API.post("/auth/users/", userData); // - тело;
};

const getPostsList = () => {
  return API.get("/blog/posts/?limit=10"); // - параметры;
};

const activateNewUser = (params: ActivationParams) => {
  return API.post("/auth/users/activation/", params); // - тело;
};

export default { createNewUser, getPostsList, activateNewUser };
