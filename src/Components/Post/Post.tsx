import React, { FC } from "react";
//@ts-ignore
import styles from "./Post.module.css";
import classNames from "classnames";
import { PostProps } from "./types";

import { ThumbDownIcon, ThumbUpIcon, BookMarksIcon } from "../../Assets/Icons";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const Post: FC<PostProps> = ({ post }) => {
  const { image, text, title } = post;

  const { theme } = useThemeContext();

  return (
    <>
      <div
        className={classNames(styles.post, {
          [styles.darkContainer]: theme === Theme.Dark
        })}
      >
        <div className={styles.head}>
          <div className={styles.homePost}>Home <span>| Post14278</span></div>
        <div className={styles.title}>{title}</div>
        </div>
        
        <div className={styles.contentWrapper}>
          <div className={styles.imgWrapper}>
            <img src={image} alt="img" />
          </div>
          <div className={styles.textIconsWrapper}></div>
          <div className={styles.textWrapper}>{text}</div>
          <div className={styles.iconsWrapper}>
          <div className={styles.iconsThumb}>
            <div>
              <ThumbUpIcon />
            </div>
            <div>
              <ThumbDownIcon />
            </div>
          </div>
          <div className={styles.iconsOption}>
           
            <BookMarksIcon />
              <div>Add to favorites</div>
          
          </div>
        </div>
        </div>


      </div>
    </>
  );
};
export default Post;
