import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PagesWrapper from "../PagesWrapper";
import PostContent from "../PostContent";
import Search from "../Search";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ActivateUser from "../ActivateUser";

export enum PathNames {
  Home = "/",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Search = "/search",
  PostContent = "/content/:id",
  ActivateUser = "/activate/:uid/:token",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.SignIn} element={<SignIn />} />
          <Route path={PathNames.SignUp} element={<SignUp />} />
          <Route path={PathNames.Search} element={<Search />} />
          <Route path={PathNames.PostContent} element={<PostContent />} />
          <Route path={PathNames.ActivateUser} element={<ActivateUser />} />
        </Route>
        <Route path={"*"} element={<Navigate to={PathNames.SignIn} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
