import React, { useState, useEffect } from "react";
import { style } from "./Post.linaria";
import PostContent from "../PostContent/PostContent";

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
  const [renderDelay, setRenderDelay] = useState(true);
  useEffect(() => {
    setTimeout(() => setRenderDelay(false), 250);
  }, []);

  return (
    <div
      className={style}
      style={{ opacity: renderDelay ? 0 : 1, transition: "100ms" }}
    >
      <div className="title-wrapper">
        <h1>{post.title}</h1>
      </div>
      <PostContent content={post.body} />
    </div>
  );
}

export default Post;
