import React, { useEffect } from "react";
//@ts-ignore
import styles from "./PostContent.module.css";
import classNames from "classnames";
import Post from "../../Components/Post";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost } from "../../Redux/reducers/postsReducer";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import Lottie from "lottie-react";
import processingAnimation from "../../lotties/processing.json";

const PostContent = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const post = useSelector(PostsSelectors.getSinglePost);
  const isLoading = useSelector(PostsSelectors.getSinglePostLoading);

  const { id } = params;

  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
    }
  }, [id]);

  return !isLoading && post ? (
    <Post post={post} />
  ) : (
    <div className={styles.lottie__container}>
      <Lottie
        className={styles.lottie__container__animation}
        animationData={processingAnimation}
        loop={true}
      ></Lottie>
    </div>
  
  
  ); //ВМЕСТО null - анимашка, иначе - пост
};
export default PostContent;
