import React from "react";
import { style } from "./Post.linaria";

export type Post = {
  slug: {
    current: string;
  };
  imageUrl: string;
  title: string;
};

type Props = { post: Post };

function Post({ post: postPreview }: Props) {
  return (
    <div className={style}>
      <h1>{postPreview.title}</h1>
      <img src={postPreview.imageUrl} />
    </div>
  );
}

export default Post;
