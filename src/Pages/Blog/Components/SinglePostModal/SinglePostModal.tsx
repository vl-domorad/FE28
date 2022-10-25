import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardSize } from "../../../../Components/CardList";
import CardPost from "../../../../Components/CardPost";
import ModalWindow from "../../../../Components/ModalWindow";
import { setSelectedPost, setSinglePostModalVisible } from "../../../../Redux/reducers/postsReducer";
import PostsSelectors from "../../../../Redux/selectors/postsSelectors";

const SinglePostModal = () => {
  const post = useSelector(PostsSelectors.getSelectedPost);

  const isVisible = useSelector(PostsSelectors.getIsModalVisible);

  const ispostModalVisible = useSelector(PostsSelectors.getIsModalVisible);

  const dispatch = useDispatch();

  const onClose = (event:any) => {
    event.stopPropagation();
    dispatch(setSinglePostModalVisible(!isVisible));
    dispatch(setSelectedPost(null));

  };
  return post?(
    <ModalWindow active={isVisible} closeModal={onClose} ispostModalVisible={ispostModalVisible}>
      <CardPost size={CardSize.Large} post={post} />
    </ModalWindow>
  ):null;
};

export default SinglePostModal;
