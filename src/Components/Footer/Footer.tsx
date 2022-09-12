import React from "react";
//@ts-ignore
import styles from "./Footer.module.css";
import classNames from "classnames";

import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";


const Footer = () => {

  const {theme} = useThemeContext();


  return <div className={classNames(styles.footerWrapper, {
    [styles.darkContainer]: theme === Theme.Dark
  })}>
      <div className={styles.footerContent}>
          <div>©2022 Blogfolio</div>
          <div>All rights reserved</div>
      </div>
  </div>;
};
export default Footer;
