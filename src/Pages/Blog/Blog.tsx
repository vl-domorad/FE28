import React from "react";

//@ts-ignore

import styles from "./Blog.module.css";
import classNames from "classnames";

import CardList from "../../Components/CardList";
import Title from "../../Components/Title";
import Tabs from "../../Components/Tabs";

const Blog = () => {
  const TABS_NAME = [
    {
      key: "all",
      title: "All"
      //   disabled: true,
    },
    {
      key: "myFavorites",
      title: "My favorites"
      //   disabled: true,
    },
    {
      key: "popular",
      title: "Popular",
    //   disabled: true,
    }
  ];
  return (
    <div>
      <Title title={"Blog"} />
      <Tabs tabs={TABS_NAME} />
      <CardList />
    </div>
  );
};
export default Blog;
