import React from "react";
//@ts-ignore
import styles from "./Search.module.css";
import classNames from "classnames";
import SearchList from "../../Components/SearchList";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const Search = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.searchPageWrapper, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <SearchList />
    </div>
  );
};
export default Search;
