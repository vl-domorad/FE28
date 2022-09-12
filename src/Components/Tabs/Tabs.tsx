import { allowedNodeEnvironmentFlags } from "process";
import React, { useState, FC, MouseEvent } from "react";
//@ts-ignore
import styles from "./Tabs.module.css";
import classNames from "classnames";

import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import {TabsProps} from './types'

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const targetTabs = (title: string) => {
      console.log(title);
  };
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.wrapper, styles.wrapperTabs, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <ul className={styles.tabList}>
        {tabs.map(tab => {
          return (
            <li key={tab.key}>
              <button onClick={() => targetTabs(tab.title)} disabled={tab.disabled}>
                {tab.title}
              </button>
            </li>
          );
        })}
      </ul>
      <br />
      <br />

    </div>
  );
};

export default Tabs;
