import Link from "next/link";
import React from "react";
import { useElementMousePosition } from "../../hooks/useElementMousePosition";
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
  const { elementRef } = useElementMousePosition();
  return (
    <div className={style}>
      <Link href={`${basePath}/${postPreview.slug.current}`}>
        <a className="has-offset-border" ref={elementRef}>
          <div className="image-wrapper">
            <img src={postPreview.imageUrl} />
          </div>
          <h2>{postPreview.title}</h2>
        </a>
      </Link>
    </div>
  );
}

export default PostPreview;
