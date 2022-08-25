import React, { useState, useEffect } from "react";
// @ts-ignore
import styles from "./App.module.css";
import Button, { ButtonType } from "./Components/Button";
import { SearchIcon } from "./Assets/Icons";
import classNames from "classnames";
import SignUp from "./Pages/SignUp";

const TABS_NAME = [
  {
    key: "all",
    title: "All",
  },
  {
    key: "primary",
    title: "primary",
  },
  {
    key: "secondary",
    title: "secondary",
  },
];

enum CardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

const Card = ({ post, size }: any) => {
  const { id, img, title, text } = post;

  return (
    <div
      className={classNames(styles.post, {
        [styles.largePost]: size === CardSize.Large,
        [styles.mediumPost]: size === CardSize.Medium,
        [styles.smallPost]: size === CardSize.Small,
      })}
    >
      <div>{title}</div>
      {size === CardSize.Large && <div>{text}</div>}
    </div>
  );
};

const CardsList = ({ post, size }: any) => {
  const POST_MOCK = [
    {
      id: 1,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Large",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
    {
      id: 2,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Medium",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
    {
      id: 3,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Medium",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
    {
      id: 4,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Medium",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
    {
      id: 5,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Medium",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
    {
      id: 6,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Small",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
    {
      id: 7,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Small",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
    {
      id: 8,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Small ",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
    {
      id: 9,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Small",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
    {
      id: 10,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Small",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
    {
      id: 11,
      image: "https://miro.medium.com/max/1400/0*RQF2RLZURKzlLc6z",
      text: "Test Small",
      date: "2021-12-12",
      lesson_num: 0,
      title: "Test Title",
      author: 0,
    },
  ];

  return (
    <div className={styles.listContainer}>
      <Card post={POST_MOCK[0]} size={CardSize.Medium} />
      {POST_MOCK.map((post, id) => {
        if (id > 0 && id < 5) {
          return <Card post={post} key={post.id} />;
        }
      })}
      {POST_MOCK.map((post, id) => {
        if (id > 5) {
          return <Card post={post} key={post.id} />;
        }
      })}
    </div>
  );
};

export const App = () => {
  const [isOpened, setOpened] = useState(false);

  // useEffect(() => {
  //   return () => alert(`${isOpened}`);
  // }, [isOpened]);

  return (
    <div className={styles.app}>
      {/*<Header /> - ДЗ на сегодня было!!!*/}
      <SignUp />
      {/*<Footer /> - ДЗ будет на вторник!!!*/}
    </div>
  );
};
export default App;
