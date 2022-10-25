import React, { FC } from "react";
//@ts-ignore
import styles from "./CardPost.module.css";
import { CardSize } from "../CardList";
import classNames from "classnames";
import {
  BookMarksIcon,
  Ellipsis,
  ThumbDownIcon,
  ThumbUpIcon
} from "../../Assets/Icons";
import { CardPostProps } from "./types";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { useDispatch, useSelector } from "react-redux";
import {
  setFavouritePost,
  setLikeStatus,
  setSelectedPost,
  setSelectedImgPost,
  setSingleImgModalVisible,
  setSinglePostModalVisible,

} from "../../Redux/reducers/postsReducer";
import { CardListType, LikeStatus } from "../../Utils/globalTypes";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import { useNavigate } from "react-router-dom";

const CardPost: FC<CardPostProps> = ({ post, size }) => {
  const { image, text, date, title, id, likeStatus } = post;
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const favouritePostsList: CardListType = useSelector(
    PostsSelectors.getFavoritePosts
  );

  const currentPostIndex = favouritePostsList.findIndex(post => post.id === id);
  const isFavorite = currentPostIndex !== -1;


  const onNavigateToPost = () => {
    navigate(`/posts/${id}`);
  };
  const onAddFavourite = (event: any) => {
    event.stopPropagation();
    dispatch(setFavouritePost(post));
  };

  const onStatusClick = (status: LikeStatus) => {
    dispatch(setLikeStatus({ status, id }));
  };

  const onOpenPostModal = (event: any) => {
    event.stopPropagation();
    dispatch(setSelectedPost(post));
    dispatch(setSinglePostModalVisible(true));
    

  };
  
  const onOpenImgModal=(event:any)=>{
    event.stopPropagation();
    dispatch(setSelectedImgPost(post));
    dispatch(setSingleImgModalVisible(true));

  }



  return (
    <>
      <div
        className={classNames(styles.post, {
          [styles.largePost]: size === CardSize.Large,
          [styles.mediumPost]: size === CardSize.Medium,
          [styles.smallPost]: size === CardSize.Small,
          [styles.darkContainer]: theme === Theme.Dark
        })}
        onClick={onNavigateToPost}
      >
        <div className={styles.textImgWrap}>
          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.date}>{date}</div>
              <div className={styles.title}>{title}</div>
            </div>
            {size === CardSize.Large && (
              <div className={styles.textWrapper}>{text}</div>
            )}
          </div>
          <div className={styles.imgWrapper} onClick={onOpenImgModal}>
            <img src={image} alt="img" />
          </div>
        </div>
        <div className={styles.iconsWrapper}>
          <div className={styles.iconsThumb}>
            <div
              onClick={() => onStatusClick(LikeStatus.Like)}
              className={classNames(styles.likeStatusButton, {
                [styles.like]: likeStatus === LikeStatus.Like
              })}
            >
              <ThumbUpIcon /> {likeStatus === LikeStatus.Like && 1}
            </div>
            <div
              onClick={() => onStatusClick(LikeStatus.Dislike)}
              className={classNames(styles.likeStatusButton, {
                [styles.dislike]: likeStatus === LikeStatus.Dislike
              })}
            >
              <ThumbDownIcon /> {likeStatus === LikeStatus.Dislike && 1}
            </div>
          </div>
          <div className={styles.iconsOptions}>
            <div
              onClick={onAddFavourite}
              className={classNames({ [styles.favouritePost]: isFavorite })}
            >
              <BookMarksIcon />
            </div>
            <div onClick={onOpenPostModal}>
              <Ellipsis />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardPost;

