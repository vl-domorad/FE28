import React, {FC} from 'react';
// @ts-ignore
import styles from "./Button.module.css";
import {ButtonClassnamesType, ButtonType, ButtonPropsType} from './types'

const BUTTON_TYPE_CLASSNAMES: ButtonClassnamesType = {
    [ButtonType.Primary]: styles.primary,
    [ButtonType.Secondary]: styles.secondary,
    [ButtonType.Error]: styles.error,
}

const Button: FC<ButtonPropsType> = ({title, onClick, className, type}) => {
    return <div onClick={onClick} className={`${styles.button} ${BUTTON_TYPE_CLASSNAMES[type]} ${className || ''}`}>{title}</div>
}

export default Button