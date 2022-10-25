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
import { CardSearchProps } from "./types";

const CardSearch: FC<CardSearchProps> = ({ post }) => {
  const { image, title, date } = post;
  const { theme } = useThemeContext();

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
          <ThumbUpIcon />
          <ThumbDownIcon />
        </div>
        <div className={styles.iconsOptions}>
          <BookMarksIcon />
          <Ellipsis />
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
