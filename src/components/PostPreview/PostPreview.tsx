import Link from "next/link";
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
      <Link href={`${basePath}/${postPreview.slug.current}`}>
        <a>
          <img src={postPreview.imageUrl} />
          <h2>{postPreview.title}</h2>
        </a>
      </Link>
    </div>
  );
}

export default PostPreview;
