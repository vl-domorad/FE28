import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useDispatch } from "react-redux";

import Title from "../../Components/Title";
import Input from "../../Components/Input";
import styles from "./AddNewPost.module.css";
import Label from "../../Components/Label";
import Button, { ButtonType } from "../../Components/Button";
import { PathNames } from "../Router";
import { addNewPost } from "../../Redux/reducers/postsReducer";

const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [lessonNum, setLessonNum] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<ImageListType>([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isValid = useMemo(() => {
    return (
      title.length > 0 &&
      lessonNum.length > 0 &&
      description.length > 0 &&
      images.length > 0
    );
  }, [title, lessonNum, description, images]);

  const onImageChange = (imageList: ImageListType) => {
    setImages(imageList);
  };

  const onCancel = () => {
    setTitle("");
    setLessonNum("");
    setDescription("");
    setImages([]);
    navigate(PathNames.Home);
  };

  const onSave = () => {
    const formData = new FormData();
    formData.append("image", images[0].file as Blob);
    formData.append("text", description);
    formData.append("title", title);
    formData.append("lesson_num", lessonNum);

    dispatch(
      addNewPost({ formData, callback: () => navigate(PathNames.Home) })
    );
  };

  return (
    <div className={styles.container}>
      <Title title={"Add New Post"} />
      <div className={styles.formContainer}>
        <div className={styles.smallInputsContainer}>
          <div className={styles.inputContainer}>
            <Label title={"Title"} required />
            <Input
              value={title}
              onChange={setTitle}
              placeholder={"Enter title"}
            />
          </div>
          <div className={styles.inputContainer}>
            <Label title={"Image"} required />
            <ImageUploading value={images} onChange={onImageChange}>
              {({ onImageUpload, onImageUpdate, onImageRemove }) => (
                <div>
                  <Button
                    title={"Upload"}
                    type={ButtonType.Secondary}
                    onClick={onImageUpload}
                  />
                  {images.map((image, index) => (
                    <div key={index} className={styles.image}>
                      <img
                        src={image.dataURL}
                        alt=""
                        width="100"
                        height={100}
                      />
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>
                          Update
                        </button>
                        <button onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
          <div className={styles.inputContainer}>
            <Label title={"Lesson Number"} required />
            <Input
              value={lessonNum}
              onChange={setLessonNum}
              placeholder={"Enter your current lesson number"}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <Label title={"Description"} required />
          <Input
            value={description}
            onChange={setDescription}
            placeholder={"Enter description"}
            type={"textarea"}
          />
        </div>
      </div>
      <div
        className={classNames(styles.footerContainer, {
          [styles.deleteFooterContainer]: false,
        })}
      >
        {false && (
          <Button
            type={ButtonType.Error}
            title={"Delete post"}
            className={styles.button}
          />
        )}
        <div className={styles.saveContainer}>
          <Button
            type={ButtonType.Secondary}
            title={"Cancel"}
            onClick={onCancel}
          />
          <Button
            type={ButtonType.Primary}
            title={"Add post"}
            onClick={onSave}
            disabled={!isValid}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
