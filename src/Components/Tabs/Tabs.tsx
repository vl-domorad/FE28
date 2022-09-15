import { allowedNodeEnvironmentFlags } from "process";
import React, { useState, FC, MouseEvent } from "react";
//@ts-ignore
import styles from "./Tabs.module.css";
import classNames from "classnames";

import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { TabsProps } from "./types";

const Tabs: FC<TabsProps> = ({ tabs, onClick, activeTab }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.wrapper, styles.wrapperTabs, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <ul className={styles.tabList}>
        {tabs.map(({ key, disabled, title }) => {
          return (
            <li
              key={key}
              className={classNames({
                [styles.activeTab]: activeTab === key,
              })}
            >
              <button onClick={() => onClick(key)} disabled={disabled}>
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
