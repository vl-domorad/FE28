import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import PagesWrapper from "../PagesWrapper";
import PostContent from "../PostContent";
import Search from "../Search";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ActivateUser from "../ActivateUser";
import AuthSelectors from "../../Redux/selectors/authSelectors";

export enum PathNames {
  Home = "/",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Search = "/search",
  PostContent = "/content/:id",
  ActivateUser = "/activate/:uid/:token",
}

const Router = () => {
  const isAuthenticated = useSelector(AuthSelectors.getAuthStatus);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route
            path={PathNames.SignIn}
            element={
              !isAuthenticated ? (
                <SignIn />
              ) : (
                <Navigate to={PathNames.Home} replace />
              )
            }
          />
          <Route
            path={PathNames.SignUp}
            element={
              !isAuthenticated ? (
                <SignUp />
              ) : (
                <Navigate to={PathNames.Home} replace />
              )
            }
          />
          <Route path={PathNames.Search} element={<Search />} />
          <Route path={PathNames.PostContent} element={<PostContent />} />
          <Route path={PathNames.ActivateUser} element={<ActivateUser />} />
        </Route>
        <Route path={"*"} element={<Navigate to={PathNames.Home} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
