import React, { FC, useState } from "react";
//@ts-ignore
import styles from "./Label.module.css";
import classNames from "classnames";

import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

type LabelProps = {
  title: string;
};
const Label: FC<LabelProps> = ({ title }) => {

  const {theme} = useThemeContext();

  return <div className={classNames(styles.label, {
    [styles.darkContainer]: theme === Theme.Dark
  })}>{title}</div>;
};
 
export default Label