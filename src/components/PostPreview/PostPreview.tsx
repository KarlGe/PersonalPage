import { cx } from "@linaria/core";
import Link from "next/link";
import React from "react";
import BorderOffsetLink from "../atoms/BorderOffsetLink/BorderOffsetLink";
import { style } from "./PostPreview.linaria";

export type PostPreview = {
  slug: {
    current: string;
  };
  previewSize: "default" | "doubleHeight";
  imageUrl: string;
  title: string;
};

type Props = { postPreview: PostPreview; basePath: string };

function PostPreview({ postPreview, basePath }: Props) {
  return (
    <div className={cx(style, postPreview.previewSize)}>
      <Link href={`${basePath}/${postPreview.slug.current}`} passHref>
        <BorderOffsetLink title={postPreview.title} titleLevel="h2">
          <div className="image-wrapper">
            <img src={postPreview.imageUrl} />
          </div>
        </BorderOffsetLink>
      </Link>
    </div>
  );
}

export default PostPreview;
