import { cx } from "linaria";
import Link from "next/link";
import React from "react";
import { useElementMousePosition } from "../../hooks/useElementMousePosition";
import BorderOffsetWrapper from "../atoms/BorderOffsetWrapper/BorderOffsetWrapper";
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
      <Link href={`${basePath}/${postPreview.slug.current}`}>
        <a>
          <BorderOffsetWrapper title={postPreview.title} titleLevel="h2">
            <div className="image-wrapper">
              <img src={postPreview.imageUrl} />
            </div>
          </BorderOffsetWrapper>
        </a>
      </Link>
    </div>
  );
}

export default PostPreview;
