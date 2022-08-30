import React from "react";
import { style } from "./PostPreview.linaria";

export type PostPreview = {
  slug: {
    current: string;
  };
  imageUrl: string;
  title: string;
};

type Props = { postPreview: PostPreview; basePath: string };

function PostPreview({ postPreview, basePath }: Props) {
  return (
    <div className={style}>
      <a href={`${basePath}/${postPreview.slug.current}`}>
        <img src={postPreview.imageUrl} />
        <h2>{postPreview.title}</h2>
      </a>
    </div>
  );
}

export default PostPreview;
