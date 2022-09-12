import React from "react";
//@ts-ignore
import styles from "./Title.module.css";
import classNames from "classnames";

import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const Title = ({ title }: any) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.wrapperTitle, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
export default Title;
