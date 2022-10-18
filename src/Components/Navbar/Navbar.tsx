import React from "react";
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
  MoonIcon,
  UserIcon,
} from "../../Assets/Icons";
import classNames from "classnames";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { useSelector } from "react-redux";
import AuthSelectors from "../../Redux/selectors/authSelectors";
import { useNavigate } from "react-router-dom";
import { PathNames } from "../../Pages/Router/Router";

const Navbar = ({ onClick, input, isOpened }: any) => {
  const { theme, onChangeTheme } = useThemeContext();

  //TODO сделать useEffect
  const isAuthenticated = useSelector(AuthSelectors.getAuthStatus);
  const currentUser = useSelector(AuthSelectors.getCurrentUser);

  // if(isAuthenticated) {dispatch(getCurrentUser())} - это в useEffect, [isAuthenticated]

  const navigate = useNavigate();

  const onSignInClick = () => {
    navigate(PathNames.SignIn);
  };

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
          {currentUser ? (
            <User userName={currentUser?.username || ""} />
          ) : (
            <div className={styles.noUserIconContainer} onClick={onSignInClick}>
              <UserIcon />
            </div>
          )}
        </div>
      </nav>
      {isOpened && <Menu />}
    </div>
  );
};

export default Navbar;
