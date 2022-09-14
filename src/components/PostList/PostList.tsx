import React from "react";
import PostPreview from "../PostPreview";
import { listStyle } from "./postList.linaria";

type Props = { posts: any, basePath: string };

function PostList({ posts, basePath }: Props) {
  return (
    <div className={listStyle}>
      {posts?.map((post) => (
        <PostPreview key={post.slug.current} basePath={basePath} postPreview={post} />
      ))}
    </div>
  );
}

export default PostList;
