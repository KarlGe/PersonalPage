import React, { useState, useEffect } from "react";
import { style } from "./Post.linaria";
import PostContent from "../PostContent/PostContent";
import ExternalLinksList from "../ExternalLinksList/ExternalLinksList";

export type Post = {
  slug: {
    current: string;
  };
  externalLinks: any[];
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
      <ExternalLinksList linksData={post.externalLinks} />
    </div>
  );
}

export default Post;
