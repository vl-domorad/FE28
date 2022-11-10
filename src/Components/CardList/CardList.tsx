import React, { FC } from "react";
import classNames from "classnames";
import styles from "./CardList.module.css";

import CardPost from "../CardPost";

import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { CardListType } from "../../Utils";

export enum CardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

type CardListProps = {
  cardList: CardListType;
  isMyPosts: boolean;
};

const CardList: FC<CardListProps> = ({ cardList, isMyPosts }) => {
  const { theme } = useThemeContext();

  return cardList && cardList.length > 0 ? (
    <div
      className={classNames(styles.listWrapper, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <div className={styles.leftSideList}>
        <div className={styles.largeCardListWrapper}>
          <CardPost
            post={cardList[0]}
            size={CardSize.Large}
            isMyPosts={isMyPosts}
          />
        </div>

        <div className={styles.mediumCardListWrapper}>
          {cardList.map((post, id) => {
            if (id >= 1 && id <= 4) {
              return (
                <CardPost
                  post={post}
                  key={post.id}
                  size={CardSize.Medium}
                  isMyPosts={isMyPosts}
                />
              );
            }
          })}
        </div>
      </div>
      <div className={styles.rightSideList}>
        {cardList.map((post, id) => {
          if (id >= 5) {
            return (
              <CardPost
                post={post}
                key={post.id}
                size={CardSize.Small}
                isMyPosts={isMyPosts}
              />
            );
          }
        })}
      </div>
    </div>
  ) : null;
};

export default CardList;
