import React from "react";
//@ts-ignore
import styles from "./SingleImgModal.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../../../Redux/selectors/postsSelectors";
import {
  setSelectedImgPost,
  setSingleImgModalVisible
} from "../../../../Redux/reducers/postsReducer";
import ModalWindow from "../../../../Components/ModalWindow";

const SingleImgModal = () => {
  const post = useSelector(PostsSelectors.getSelectedImgPost);

  const isVisible = useSelector(PostsSelectors.getIsImgVisible);

  const isImgModalVisible = useSelector(PostsSelectors.getIsImgVisible);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSingleImgModalVisible(!isVisible));
    dispatch(setSelectedImgPost(null));
  };

  return post ? (
    <ModalWindow
      active={isVisible}
      closeModal={onClose}
      isImgModalVisible={isImgModalVisible}
    >
      <img src={post.image} alt="img" />
    </ModalWindow>
  ) : null;
};

export default SingleImgModal;
