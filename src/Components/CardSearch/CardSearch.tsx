import React, { FC, useState, useEffect } from "react";
//@ts-ignore
import styles from "./CardSearch.module.css";
import classNames from "classnames";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

import {
  ThumbDownIcon,
  ThumbUpIcon,
  Ellipsis,
  BookMarksIcon,
} from "../../Assets/Icons";
import { useDispatch } from "react-redux";
import {
  setFavouritePost,
  setLikeStatus,
} from "../../Redux/reducers/postsReducer";
import { CardPostType, LikeStatus } from "../../Utils";

export type CardSearchProps = {
  post: CardPostType;
};

const CardSearch: FC<CardSearchProps> = ({ post }) => {
  const { image, title, date, id, likeStatus } = post;
  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  const onAddFavourite = (event: any) => {
    event.stopPropagation();
    dispatch(setFavouritePost(post));
  };

  const onStatusClick = (status: LikeStatus) => {
    dispatch(setLikeStatus({ status, id }));
  };

  return (
    <div
      className={classNames(styles.cardWrapper, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <div className={classNames(styles.contentWrapper)}>
        <div className={classNames(styles.imgWrapper)}>
          <img src={image} alt="img" />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.date}>{date}</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
      <div className={classNames(styles.iconsWrapper)}>
        <div className={styles.iconsThumb}>
          <div onClick={() => onStatusClick(LikeStatus.Like)}>
            <ThumbUpIcon /> {likeStatus === LikeStatus.Like && "1"}
          </div>
          <div onClick={() => onStatusClick(LikeStatus.Dislike)}>
            <ThumbDownIcon />
            {likeStatus === LikeStatus.Dislike && "1"}
          </div>
        </div>
        <div className={styles.iconsOptions}>
          <div onClick={onAddFavourite}>
            <BookMarksIcon />
          </div>
          <Ellipsis />
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
