import React, { FC } from "react";
//@ts-ignore
import styles from "./Label.module.css";
import classNames from "classnames";

import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

type LabelProps = {
  title: string;
  required?: boolean;
};
const Label: FC<LabelProps> = ({ title, required }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.label, {
        [styles.darkContainer]: theme === Theme.Dark,
        [styles.required]: required,
      })}
    >
      {title}
    </div>
  );
};

export default Label;
