import React, { FC, useState } from "react";
// import { HamburgerMenu } from "react-hamburger-menu";
//@ts-ignore
import styles from "./Navbar.module.css";
import User from "../User/User";
import Menu from "./Menu";

import {
  MenuIcon,
  CancelIcon,
  SearchIcon,
  SunIcon,
  MoonIcon
} from "../../Assets/Icons";
import classNames from "classnames";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const Navbar = ({
  onClick,
  input,
  isOpened,
}: any) => {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <div className={classNames(styles.navbarMenu)}>
      <nav className={styles.nav}>
        <div className={styles.burgerButton} onClick={onClick}>
          {isOpened ? <CancelIcon /> : <MenuIcon />}
        </div>
        {input}
        <div className={styles.userSearchWrapper}>
          <div
            className={classNames(styles.sunMoonIcon)}
            onClick={onChangeTheme}
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
      {isOpened && <Menu />}
    </div>
  );
};

export default Navbar;
