import React, { useEffect } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";

import SearchList from "../../Components/SearchList";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
//@ts-ignore
import styles from "./Search.module.css";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import processingAnimation from "../../lotties/processing.json";
import { PathNames } from "../Router";

type LocationState = {
  searchElement: string;
};

const Search = () => {
  const { theme } = useThemeContext();

  const location = useLocation();
  const navigate = useNavigate();

  const { searchElement } = location.state as LocationState;

  const searchedPosts = useSelector(PostsSelectors.getSearchedPosts);
  const isSearchPostsLoading = useSelector(
    PostsSelectors.getSearchedPostsLoading
  );

  useEffect(() => {
    if (searchElement.length === 0) {
      navigate(PathNames.Home);
    }
  }, [searchElement]);

  return (
    <div
      className={classNames(styles.searchPageWrapper, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <div className={styles.searchListTitle}>
        Search results "{searchElement}"
      </div>
      {!isSearchPostsLoading ? (
        <SearchList searchedPosts={searchedPosts} />
      ) : (
        <div className={styles.lottieContainer}>
          <Lottie
            className={styles.lottieContainerAnimation}
            animationData={processingAnimation}
            loop={true}
          />
        </div>
      )}
    </div>
  );
};
export default Search;
