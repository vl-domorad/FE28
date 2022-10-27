import React, { FC } from "react";
import classNames from "classnames";
import InfiniteScroll from "react-infinite-scroll-component";

import CardSearch from "../CardSearch";
import { CardListType } from "../../Utils";
//@ts-ignore
import styles from "./SearchList.module.css";

type SearchListProps = {
  searchedPosts: CardListType;
  count: number;
  onScroll: () => void;
};

const SearchList: FC<SearchListProps> = ({
  searchedPosts,
  count,
  onScroll,
}) => {
  const hasMore = searchedPosts.length < count;
  return searchedPosts && searchedPosts.length > 0 ? (
    <div className={classNames(styles.searchListWrapper)}>
      <div className={classNames(styles.searchListCardWrapper)}>
        <InfiniteScroll
          next={onScroll}
          hasMore={hasMore}
          dataLength={searchedPosts.length}
          loader={<h1>{"LOADING"}</h1>}
          scrollThreshold={0.9}
        >
          {searchedPosts.map((post) => {
            return <CardSearch post={post} key={post.id} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  ) : null; //TODO: Вместо null сделать компонент EmptyState, который показывается, если нет постов
};
export default SearchList;
