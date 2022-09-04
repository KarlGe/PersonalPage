import React, { useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { style } from "./Post.linaria";
import PostContent from "../PostContent/PostContent";
import { useStore } from "../../store/store";
import { useLayoutSettings } from "../../hooks/useLayoutSettings";

export type Post = {
  slug: {
    current: string;
  };
  body: any[];
  imageUrl: string;
  title: string;
};

type Props = { post: Post };

function Post({ post }: Props) {
  useLayoutSettings(post.title, "post");
  return (
    <div className={style}>
      <PostContent content={post.body} />
    </div>
  );
}

export default Post;
