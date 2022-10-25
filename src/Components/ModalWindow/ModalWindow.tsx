import React from "react";
import { useSelector } from "react-redux";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
//@ts-ignore
import styles from "./ModalWindow.module.css";
import classNames from "classnames";
import { CancelIcon} from "../../Assets/Icons";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const ModalWindow = ({ active, closeModal, children, ispostModalVisible, isImgModalVisible }: any) => {


  const { theme } = useThemeContext(); 



  return (

      <div
        className={classNames(styles.modalPost, {
          [styles.modalActive]: active,
          [styles.darkContainer]: theme === Theme.Dark,
        })}
        
      >
        <div className={styles.cancelButton} onClick={closeModal}><CancelIcon/></div>
       
        <div className={classNames({
          [styles.modalContent]: ispostModalVisible,
          [styles.modalContentImg]: isImgModalVisible,
        })}> {children}</div>
      </div>

  );
};
export default ModalWindow;
