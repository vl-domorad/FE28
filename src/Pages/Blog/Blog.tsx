import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import CardList from "../../Components/CardList";
import Title from "../../Components/Title";
import Tabs from "../../Components/Tabs";
import { TabsNames, PER_PAGE, DEFAULT_PAGE_NUMBER } from "../../Utils";
import { getPosts, setActiveTab } from "../../Redux/reducers/postsReducer";
//@ts-ignore
import styles from "./Blog.module.css";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import SinglePostModal from "./Components/SinglePostModal";
import SingleImgModal from "./Components/SingleImgModal";
import classNames from "classnames";

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

  const [page, setPage] = useState(DEFAULT_PAGE_NUMBER); // DEFAULT_PAGE_NUMBER === 1

  const cardsCount = useSelector(PostsSelectors.getCardsCount); // Сколько у нас всего постов тусуется на сервере
  const pagesCount = Math.ceil(cardsCount / PER_PAGE);

  const onTabClick = (id: TabsNames) => {
    dispatch(setActiveTab(id));
  };

  useEffect(() => {
    const offset = (page - 1) * PER_PAGE;
    dispatch(getPosts({ offset }));
  }, [page]);

  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <div>
      <Title title={"Blog"} />
      <Tabs tabs={TABS_NAME} onClick={onTabClick} activeTab={activeTab} />
      <CardList cardList={cardsList} />
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
      <SinglePostModal />
      <SingleImgModal />
    </div>
  );
};
export default Blog;
