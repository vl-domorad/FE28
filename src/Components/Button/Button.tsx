import React, {FC} from 'react';
// @ts-ignore
import styles from "./Button.module.css";
import {ButtonClassnamesType, ButtonType, ButtonPropsType} from './types'





const BUTTON_TYPE_CLASSNAMES: ButtonClassnamesType = {
  [ButtonType.Primary]: styles.primary,
  [ButtonType.Secondary]: styles.secondary,
  [ButtonType.Error]: styles.error
};

const Button: FC<ButtonPropsType> = ({
  title,
  onClick,
  className,
  disabled,
  type
}) => {
  return (
    <button
      onClick={onClick}
      className={`${BUTTON_TYPE_CLASSNAMES[type]} ${className || ""}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};


  export default Button