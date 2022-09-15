import React from "react";
//@ts-ignore
import styles from "./PostContent.module.css";
import classNames from "classnames";
import Post from "../../Components/Post";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const PostContent = () => {
  const POST_MOCK = 
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.  ",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
      author: 0
    };
  return (
    <>
      <Post post={POST_MOCK}/>
    </>
  );
};
export default PostContent;
