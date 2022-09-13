import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);
  return (
    <div>
      <div>Title</div>
      <img />
      <div>Description</div>
    </div>
  );
};

export default Post;
