import React, { FC, useState } from "react";
// import { HamburgerMenu } from "react-hamburger-menu";
//@ts-ignore
import styles from "./Navbar.module.css";
import User from "../User/User";

import {
  MenuIcon,
  CancelIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
} from "../../Assets/Icons";
import classNames from "classnames";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const Navbar = ({
  onClick,
  input,
  isOpened,
  isDark,
  changeThemeOnClick,
}: any) => {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <nav className={styles.nav}>
      <div className={styles.burgerButton} onClick={onClick}>
        {isOpened ? <CancelIcon /> : <MenuIcon />}
      </div>
      {input}
      <div className={styles.userSearchWrapper}>
        <div
          className={classNames(styles.sunIcon)}
          onClick={onChangeTheme}
          // onClick={changeThemeOnClick}
        >
          {theme === Theme.Dark ? <SunIcon /> : <MoonIcon />}
        </div>
        <div
          className={styles.searchIcon}
          onClick={() => {
            alert("Searh");
          }}
        >
          <SearchIcon />
        </div>
        <User userName={"Artem Malkin"} />
      </div>
    </nav>
  );
};

export default Navbar;
