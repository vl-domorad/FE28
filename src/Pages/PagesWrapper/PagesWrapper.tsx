import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// @ts-ignore
import styles from "./PagesWrapper.module.css";
import classNames from "classnames";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";
import Blog from "../../Pages/Blog";
import {PathNames }from "../Router/Router";

import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";

const PagesWrapper = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };
  const [isOpened, setOpened] = useState(false);


  const { theme } = useThemeContext();

  const location = useLocation();


  return (
    <div
      className={classNames(styles.app, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <Navbar
        onClick={() => setOpened(!isOpened)}
        isOpened={isOpened}
        input={
          isOpened && (
            <Input
              placeholder={"Placeholder"}
              onChange={onChange}
              value={value}
            />
          )
        }
      />
     {/* <Outlet/> */}
     {location.pathname === PathNames.Home ? <Blog/>:<Outlet/>}
      <Footer />
    </div>
  );
};
export default PagesWrapper;
