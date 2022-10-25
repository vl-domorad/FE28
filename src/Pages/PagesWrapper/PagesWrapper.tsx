import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// @ts-ignore
import styles from "./PagesWrapper.module.css";
import classNames from "classnames";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Blog from "../Blog";
import {PathNames }from "../Router/Router";

import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { useSelector } from "react-redux";
import PostsSelectors from '../../Redux/selectors/postsSelectors'

const PagesWrapper = () => {

  const [isOpened, setOpened] = useState(false);


  const { theme } = useThemeContext();

  const location = useLocation();
  const isVisible = useSelector(PostsSelectors.getIsModalVisible);
  const imgModal = useSelector(PostsSelectors.getIsImgVisible);


  return (
    <div
      className={classNames(styles.app, {
        [styles.darkContainer]: theme === Theme.Dark,
        [styles.modalActive]: isVisible || imgModal,
      })}
    >
      <Navbar
        onClick={() => setOpened(!isOpened)}
        isOpened={isOpened}
      />
     {/* <Outlet/> */}
     {location.pathname === PathNames.Home ? <Blog/>:<Outlet/>}
      <Footer />
    </div>
  );
};
export default PagesWrapper;
