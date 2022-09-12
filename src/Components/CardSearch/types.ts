export type CardSearchType = {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
  };
  
  export type CardSearchProps = {
    post: CardSearchType;
  };