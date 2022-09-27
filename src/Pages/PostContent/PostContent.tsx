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

  return !isLoading && post ? <Post post={post} /> : null; //ВМЕСТО null - анимашка, иначе - пост
};
export default PostContent;
