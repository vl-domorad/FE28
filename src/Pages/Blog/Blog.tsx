import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import CardList from "../../Components/CardList";
import Title from "../../Components/Title";
import Tabs from "../../Components/Tabs";
import {
  TabsNames,
  PER_PAGE,
  DEFAULT_PAGE_NUMBER,
  SortOrder,
} from "../../Utils";
import {
  getMyPostsList,
  getPosts,
  setActiveTab,
} from "../../Redux/reducers/postsReducer";
//@ts-ignore
import styles from "./Blog.module.css";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import SinglePostModal from "./Components/SinglePostModal";
import SingleImgModal from "./Components/SingleImgModal";
import classNames from "classnames";
import AuthSelectors from "../../Redux/selectors/authSelectors";

const Blog = () => {
  const activeTab = useSelector(PostsSelectors.getActiveTab);
  const cardsList = useSelector(PostsSelectors.getCardsList);
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(AuthSelectors.getAuthStatus);

  const tabs = useMemo(
    () => [
      {
        key: TabsNames.All,
        title: "All",
        disabled: false,
      },
      {
        key: TabsNames.MyPosts,
        title: "My Posts",
        disabled: !isAuthenticated,
      },
      {
        key: TabsNames.Favorites,
        title: "My favorites",
        disabled: !isAuthenticated,
      },
      {
        key: TabsNames.Popular,
        title: "Popular",
        disabled: !isAuthenticated,
      },
    ],
    [isAuthenticated]
  );

  const [page, setPage] = useState(DEFAULT_PAGE_NUMBER); // DEFAULT_PAGE_NUMBER === 1
  const [order, setOrder] = useState(SortOrder.Title);

  const cardsCount = useSelector(PostsSelectors.getCardsCount); // Сколько у нас всего постов тусуется на сервере
  const pagesCount = Math.ceil(cardsCount / PER_PAGE);
  const isMyPosts = activeTab === TabsNames.MyPosts;

  const onTabClick = (id: TabsNames) => {
    dispatch(setActiveTab(id));
  };

  useEffect(() => {
    const offset = (page - 1) * PER_PAGE;
    dispatch(
      isMyPosts ? getMyPostsList() : getPosts({ offset, ordering: order })
    );
  }, [page, isMyPosts, order]);

  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <div>
      <Title title={"Blog"} />
      <select
        value={order}
        onChange={(event: any) => setOrder(event.target.value)}
      >
        <option value={SortOrder.Title}>Title</option>
        <option value={SortOrder.Date}>Date</option>
      </select>
      <Tabs tabs={tabs} onClick={onTabClick} activeTab={activeTab} />
      <CardList cardList={cardsList} />
      {!isMyPosts && (
        <ReactPaginate
          pageCount={pagesCount}
          onPageChange={onPageChange}
          containerClassName={styles.pagesContainer}
          pageClassName={styles.pageNumber}
          breakClassName={styles.pageNumber}
          breakLinkClassName={styles.linkPage}
          activeLinkClassName={styles.linkPage}
          pageLinkClassName={styles.linkPage}
          activeClassName={styles.activePageNumber}
          nextClassName={classNames(styles.pageNumber, styles.arrowButton, {
            [styles.availableToClickButton]: page !== pagesCount,
          })}
          previousClassName={classNames(styles.pageNumber, styles.arrowButton, {
            [styles.availableToClickButton]: page !== 1,
          })}
          previousLinkClassName={styles.linkPage}
          nextLinkClassName={styles.linkPage}
        />
      )}
      <SinglePostModal />
      <SingleImgModal />
    </div>
  );
};
export default Blog;
