import React, { FC } from "react";
import classNames from "classnames";

// @ts-ignore
import styles from "./Button.module.css";
import { ButtonClassnamesType, ButtonType, ButtonPropsType } from "./types";

const BUTTON_TYPE_CLASSNAMES: ButtonClassnamesType = {
  [ButtonType.Primary]: styles.primary,
  [ButtonType.Secondary]: styles.secondary,
  [ButtonType.Error]: styles.error,
};

const Button: FC<ButtonPropsType> = ({
  title,
  onClick,
  className,
  type,
  disabled,
}) => {
  return (
    <div
      onClick={onClick}
      // className={`${styles.button} ${BUTTON_TYPE_CLASSNAMES[type]} ${
      //   className || ""
      // } ${disabled ? styles.disabled : ""}`}
      className={classNames(
        styles.button,
        BUTTON_TYPE_CLASSNAMES[type],
        className,
        {
          [styles.disabled]: disabled,
        }
      )}
    >
      {title}
    </div>
  );
};

export default Button;
