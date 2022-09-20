import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardList from "../../Components/CardList";
import Title from "../../Components/Title";
import Tabs from "../../Components/Tabs";
import { TabsNames } from "../../Utils/globalTypes";
import { getPosts, setActiveTab } from "../../Redux/reducers/postsReducer";
//@ts-ignore
import styles from "./Blog.module.css";
import PostsSelectors from "../../Redux/selectors/postsSelectors";

const TABS_NAME = [
  {
    key: TabsNames.All,
    title: "All",
    //   disabled: true,
  },
  {
    key: TabsNames.Favorites,
    title: "My favorites",
    //   disabled: true,
  },
  {
    key: TabsNames.Popular,
    title: "Popular",
    //   disabled: true,
  },
];
// const POST_MOCK = [
//   {
//     id: 1,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
//   {
//     id: 2,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
//   {
//     id: 3,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
//   {
//     id: 4,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
//   {
//     id: 5,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
//   {
//     id: 6,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
//   {
//     id: 7,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
//   {
//     id: 8,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
//   {
//     id: 9,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
//   {
//     id: 10,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
//   {
//     id: 11,
//     image:
//       "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
//     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//     date: "April 20, 2021",
//     lesson_num: 0,
//     title:
//       "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
//     author: 0,
//   },
// ];
const Blog = () => {
  const activeTab = useSelector(PostsSelectors.getActiveTab);
  const cardsList = useSelector(PostsSelectors.getCardsList);

  const dispatch = useDispatch();

  const onTabClick = (id: TabsNames) => {
    dispatch(setActiveTab(id));
  };

  useEffect(() => {
    // dispatch(setCardsList(POST_MOCK));
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <Title title={"Blog"} />
      <Tabs tabs={TABS_NAME} onClick={onTabClick} activeTab={activeTab} />
      <CardList cardList={cardsList} />
    </div>
  );
};
export default Blog;
