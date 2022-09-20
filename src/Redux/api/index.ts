import { create } from "apisauce";
import { UserActionPayload } from "../../Utils/globalTypes";

const API = create({
  baseURL: "https://studapi.teachmeskills.by",
});

const createNewUser = (userData: UserActionPayload) => {
  return API.post("/auth/users/", userData);
};

const getPostsList = () => {
  return API.get("/blog/posts/?limit=10");
};

export default { createNewUser, getPostsList };
