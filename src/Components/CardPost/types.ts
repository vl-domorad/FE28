export type  CardPostType = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};
export type CardPostProps = {
  post: CardPostType;
  size: string;
};
