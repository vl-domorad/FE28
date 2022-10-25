import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardList from "../../Components/CardList";
import Title from "../../Components/Title";
import Tabs from "../../Components/Tabs";
import { TabsNames } from "../../Utils/globalTypes";
import {
  getPosts,
  setActiveTab,
  setCardsList,
} from "../../Redux/reducers/postsReducer";
//@ts-ignore
import styles from "./Blog.module.css";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import SinglePostModal from "./Components/SinglePostModal";
import SingleImgModal from "./Components/SingleImgModal";

const TABS_NAME = [
  {
    key: TabsNames.All,
    title: "All",
    //   disabled: true,
  },
  {
    key: TabsNames.Favorites,
    title: "My favorites",
    //   disabled: true,
  },
  {
    key: TabsNames.Popular,
    title: "Popular",
    //   disabled: true,
  },
];
const Blog = () => {
  const activeTab = useSelector(PostsSelectors.getActiveTab);
  const cardsList = useSelector(PostsSelectors.getCardsList);
  const dispatch = useDispatch();

  const onTabClick = (id: TabsNames) => {
    dispatch(setActiveTab(id));
  };

  useEffect(() => {
    // dispatch(setCardsList(POST_MOCK));
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <Title title={"Blog"} />
      <Tabs tabs={TABS_NAME} onClick={onTabClick} activeTab={activeTab} />
      <CardList cardList={cardsList} />
      <SinglePostModal />
      <SingleImgModal />
    </div>
  );
};
export default Blog;
