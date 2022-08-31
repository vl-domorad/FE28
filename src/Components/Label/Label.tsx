import React, { FC } from "react";
// @ts-ignore
import styles from "./Label.module.css";

type LabelProps = {
  title: string;
};

const Label: FC<LabelProps> = ({ title }) => {
  return <div className={styles.label}>{title}</div>;
};

export default Label;
