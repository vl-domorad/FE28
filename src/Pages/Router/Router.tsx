import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import PagesWrapper from "../PagesWrapper";
import Post from "../Post";

export enum PathNames {
  Home = "/",
  Post = "/posts/:id",
  SignIn = "/signIn",
  SignUp = "/signUp",
  NewPost = "/add",
}

const NewPost = () => {
  return <div />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.SignIn} element={<SignIn />} />
          <Route path={PathNames.SignUp} element={<SignUp />} />
          <Route path={PathNames.NewPost} element={<NewPost />} />
          <Route path={PathNames.Post} element={<Post />} />
        </Route>
        <Route path={"*"} element={<Navigate to={PathNames.Home} />} />{" "}
        {/*Этот роут отвечает за редирект*/}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
