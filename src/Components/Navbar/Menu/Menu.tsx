import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

//@ts-ignore
import styles from "./Menu.module.css";

import User from "../../User/User";
import { Theme, useThemeContext } from "../../../Context/ThemeContext/Context";
import { PathNames } from "../../../Pages/Router/Router";
import { logoutUser } from "../../../Redux/reducers/authReducer";
import AuthSelectors from "../../../Redux/selectors/authSelectors";

const Menu = () => {
  const { theme } = useThemeContext();
  const location = useLocation();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(AuthSelectors.getAuthStatus);
  const currentUser = useSelector(AuthSelectors.getCurrentUser);

  const onLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <ul
      className={classNames(styles.listMenu, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      {isAuthenticated && currentUser && (
        <li>
          <User userName={currentUser?.username || ""} />
        </li>
      )}
      <li>
        <NavLink
          to={PathNames.Home}
          className={classNames({
            [styles.activeLink]: location.pathname === PathNames.Home,
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={PathNames.PostContent}
          className={classNames({
            [styles.activeLink]: location.pathname === PathNames.PostContent,
          })}
        >
          Content
        </NavLink>
      </li>
      <li>
        <NavLink
          to={PathNames.Search}
          className={classNames({
            [styles.activeLink]: location.pathname === PathNames.Search,
          })}
        >
          Search
        </NavLink>
      </li>
      <li>Add post</li>
      {isAuthenticated && (
        <li>
          <div
            className={classNames({
              [styles.activeLink]: location.pathname === PathNames.Search,
            })}
            onClick={onLogOut}
          >
            Log out
          </div>
        </li>
      )}
    </ul>
  );
};
export default Menu;
